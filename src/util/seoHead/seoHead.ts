import { DocumentHead, DocumentMeta } from "@builder.io/qwik-city";

export interface HeadProps {
  title: string;
  description: string;
  lang?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  meta?: DocumentMeta[];
}

const SeoHead = ({
  title,
  description,
  author = "Pauline Cerello",
  keywords,
  image = "/og-preview.png",
  meta = [],
}: HeadProps): DocumentHead => {
  const seoMeta: DocumentMeta[] = [
    { name: "charSet", content: "utf-8" },
    { name: "description", content: description },
    { name: "author", content: author },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://pauline.cerello.fr" },
    { name: "og:image", content: image },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: author },
    { name: "twitter:image", content: image },
    ...meta,
  ];

  if (keywords) {
    seoMeta.push({ name: "keywords", content: keywords.join(", ") });
  }

  return {
    title,
    meta: seoMeta,
  };
};

export { SeoHead };
