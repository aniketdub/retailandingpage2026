import glob
import re
import json

posts = []

cluster_files = [
    'src/data/blogs/cluster-clinical-retention.ts',
    'src/data/blogs/cluster-ai-telephony.ts',
    'src/data/blogs/cluster-operations-billing.ts',
    'src/data/blogs/cluster-dermatology-procedures.ts'
]

for fpath in cluster_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find the start of the array
    array_match = re.search(r'export const \w+: BlogPost\[\] = \[\s*\{', text)
    if not array_match:
        print("Array start not found in", fpath)
        continue

    # Split on `\n  },\n  {` or closing `\n  }\n];`
    # Better: split by `slug: "`
    slug_starts = [m.start() for m in re.finditer(r'slug:\s*"', text)]
    
    for idx, start_pos in enumerate(slug_starts):
        end_pos = slug_starts[idx + 1] if idx + 1 < len(slug_starts) else len(text)
        block = text[start_pos:end_pos]

        slug_m = re.search(r'slug:\s*"([^"]+)"', block)
        title_m = re.search(r'title:\s*"([^"]+)"', block)
        desc_m = re.search(r'metaDescription:\s*"([^"]+)"', block)
        cat_m = re.search(r'category:\s*"([^"]+)"', block)
        read_m = re.search(r'readTime:\s*"([^"]+)"', block)

        keywords_m = re.search(r'keywords:\s*\[([\s\S]*?)\],', block)
        keywords = []
        if keywords_m:
            keywords = [k.strip().strip('"').strip("'") for k in keywords_m.group(1).split(',') if k.strip()]

        abstract_m = re.search(r'abstract:\s*"([\s\S]*?)",\s*tableOfContents:', block)
        abstract = abstract_m.group(1).replace('\n', ' ').strip() if abstract_m else ""

        toc_m = re.search(r'tableOfContents:\s*\[([\s\S]*?)\],', block)
        tableOfContents = []
        if toc_m:
            for item in re.finditer(r'\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)"\s*\}', toc_m.group(1)):
                tableOfContents.append({"id": item.group(1), "title": item.group(2)})

        takeaways_m = re.search(r'keyTakeaways:\s*\[([\s\S]*?)\],', block)
        keyTakeaways = []
        if takeaways_m:
            for t in re.finditer(r'"([^"]+)"', takeaways_m.group(1)):
                keyTakeaways.append(t.group(1))

        # content starts after `content: ` and goes until the last closing backtick before `},\n` or `}\n];`
        content_m = re.search(r'content:\s*`([\s\S]*?)`\s*\n\s*}(?:,|;|\n)', block)
        if not content_m:
            # If not matched, search until the end of the block
            content_m = re.search(r'content:\s*`([\s\S]*?)`(?:\s*\n\s*}(?:,|;|\n)|$)', block)
        
        raw_content = content_m.group(1) if content_m else ""
        # Restore any backticks that were escaped as \`
        clean_content = raw_content.replace(r'\`', '`').replace(r'\${', '${')

        post = {
            "slug": slug_m.group(1) if slug_m else "",
            "title": title_m.group(1) if title_m else "",
            "metaDescription": desc_m.group(1) if desc_m else "",
            "category": cat_m.group(1) if cat_m else "",
            "readTime": read_m.group(1) if read_m else "",
            "keywords": keywords,
            "abstract": abstract,
            "tableOfContents": tableOfContents,
            "keyTakeaways": keyTakeaways,
            "content": clean_content
        }
        posts.append(post)

print(f"Extracted {len(posts)} posts.")
with open('src/data/blogsData.json', 'w', encoding='utf-8') as f:
    json.dump(posts, f, indent=2, ensure_ascii=False)

print("Saved src/data/blogsData.json successfully.")
