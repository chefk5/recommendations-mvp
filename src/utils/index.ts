export function mapBlogEntries(items: any[]) {
  return items.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    image: entry.fields.image
      ? "https:" + entry.fields.image.fields.file.url
      : "",
  }));
}