import { DocumentHead } from "@builder.io/qwik-city";
import { SeoHead } from "./seoHead";

export const defaultSeoKeywords = [
  "Développeuse Web",
  "Pauline Cerello",
  "Front-End",
  "Full-Stack",
  "React",
  "TypeScript",
  "JavaScript",
  "NextJs",
  "CSS",
  "Tailwind",
];

export const defaultHead: DocumentHead = SeoHead({
  title: "Pauline Cerello - Développeuse Web",
  description:
    "A Front-End Software Engineer with a focus on TypeScript and React",
  keywords: defaultSeoKeywords,
});
