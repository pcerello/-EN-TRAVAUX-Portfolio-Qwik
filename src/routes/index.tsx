import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import {
  DockerLogo,
  NextLogo,
  QwikLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
  VsCodeLogo,
} from "~/components/icons";
import { LinkWrapper } from "~/components/linkWrapper";
import { QwikTyped } from "~/components/qwikTyped";
import { defaultHead } from "~/util/seoHead";

export default component$(() => {
  const talkAbout = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Qwik",
    "SQL",
    "VS Code",
    "GitHub",
    "GitLab",
    "Figma",
    "Canva",
    "Coca Cherry",
    "",
    "et plus...",
  ];

  return (
    <>
      <section id="home" className="h-full">
        <Container>
          <h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
            Salut, je suis Pauline Cerello 👋
          </h1>
          <p className="my-8 text-lg">
          En tant qu'étudiante passionnée par le développement front-end, je crée des sites Web et des applications Web lors de projet universitaire, de stage ou à titre personnel. Je maitrise aussi le développement back-end. J'aime particulièrement {" "}
            <QwikTyped
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={talkAbout}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              shuffle
            />
            .
          </p>
        </Container>
        <section id="tools" className="my-40">
          <Container>
            <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
              Mes outils préférés
            </h2>

            <div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
              <LinkWrapper name="Next.js" url="https://nextjs.org/">
                <NextLogo className="w-32" ariaLabel="Next.js" />
              </LinkWrapper>
              <LinkWrapper name="Ract" url="https://reactjs.org/">
                <ReactLogo className="w-12" ariaLabel="React" />
              </LinkWrapper>
              <LinkWrapper
                name="Visual Studio Code"
                url="https://code.visualstudio.com/"
              >
                <VsCodeLogo className="w-12" ariaLabel="Visual Studio Code" />
              </LinkWrapper>
              <LinkWrapper name="Docker" url="https://www.docker.com/">
                <DockerLogo className="w-16" ariaLabel="Docker" />
              </LinkWrapper>
              <LinkWrapper
                name="TypeScript"
                url="https://www.typescriptlang.org/"
              >
                <TypescriptLogo className="w-16" ariaLabel="TypeScript" />
              </LinkWrapper>
              <LinkWrapper name="Qwik" url="https://qwik.builder.io/">
                <QwikLogo className="w-32" ariaLabel="Qwik" />
              </LinkWrapper>
              <LinkWrapper name="TailwindCSS" url="https://tailwindcss.com/">
                <TailwindLogo className="w-16" ariaLabel="TailwindCSS" />
              </LinkWrapper>
            </div>
          </Container>
        </section>
      </section>
    </>
  );
});

export const head: DocumentHead = defaultHead;
