import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import { defaultHead } from "~/util/seoHead";

export default component$(() => {
  return (
    <Container>
      <h1 className="headline text-xl md:text-3xl lg:text-5xl mt-8">
        Coordonnées
      </h1>
      <h2 className="text-xl mt-4">Adresse</h2>
      <p className="mt-2">
        Pauline Cerello
        <br />
        19 Rue Pierre Noailles
        <br />
        33400 Talence
      </p>
      <h2 className="text-xl mt-4">Contact</h2>
      <p className="mt-2">
        Téléphone: +33 6 13 66 88 82
        <br />
        E-Mail:{" "}
        <a
          href="mailto:pauline.cerello@gmail.com"
          target="_blank"
          className="hover:headline active:headline"
          draggable="false"
        >
          pauline.cerello@gmail.com
        </a>
      </p>
    </Container>
  );
});

export const head: DocumentHead = defaultHead;
