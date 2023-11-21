import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import { Languages, WorkExperience } from "~/components/workExperience";
import { defaultSeoKeywords, SeoHead } from "~/util/seoHead";

export default component$(() => {
  return (
    <>
      <Container>
        <h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
          Hey, I&apos;m Pauline Cerello
        </h1>
        <h2 className="font-bold text-xl md:text-2xl mt-2">
          Développeuse Web Full-stack, France
        </h2>
        <p className="mt-8">
        En tant que développeur front-end passionné, je crée des sites Web et des applications Web pour
          faire d'Internet un meilleur endroit. J'aime aussi le développement back-end.
        </p>
        <p className="my-4">
          J'ai 26 ans et je suis étudiante en développement web depuis 2 ans. Les technologies avec lesquelles je travaille sont TypeScript, JS, SCSS, HTML et CSS avec les frameworks React.js, Next.js, Node, Express et Qwik.
        </p>
        <p>
          Quand je n'écris pas de code, j'aime passer du temps à regarder des séries et des films avec un Coca Cherry...
        </p>
        <WorkExperience />
        <Languages />
      </Container>
    </>
  );
});

export const head: DocumentHead = SeoHead({
  title: "A propos de Pauline Cerello, développeuse Web de Bordeaux, France",
  description:
    "En tant que développeur front-end passionné, je crée des sites Web et des applications Web pour faire d'Internet un meilleur endroit. J'aime aussi le développement back-end.",
  keywords: defaultSeoKeywords,
});
