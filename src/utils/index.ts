export function mapBlogEntries(items: any[]) {
  return items.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    image: entry.fields.image
      ? "https:" + entry.fields.image.fields.file.url
      : "",
  }));
}

export function mapBlogDetail(items: any[]) {
  return items.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    description: entry.fields.description || "",
    image: entry.fields.image
      ? "https:" + entry.fields.image.fields.file.url
      : "",
  }));
}

export function mapProductDetail(items: any[]) {
  return items.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    tagline: entry.fields.tagline || "",
    description: entry.fields.description || "",
    price: entry.fields.price || "",
    image: entry.fields.image
      ? "https:" + entry.fields.image.fields.file.url
      : "",
    externalLink: entry.fields.external || "",
  }));
}
