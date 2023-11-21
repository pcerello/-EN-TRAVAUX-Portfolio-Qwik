import { component$ } from "@builder.io/qwik";
import {
  GitHubLogo,
  LinkedinLogo,
  QwikSmallLogo,
  TailwindLogo,
  VercelSmallLogo,
} from "../icons";
import { SocialIcon } from "./socialIcon";

export const Footer = component$(() => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-3 justify-between mt-4 md:mt-20 px-4 md:px-20 py-4 md:py-8">
      <span>
        <span className="whitespace-nowrap">
          &copy; {new Date().getFullYear()} Pauline Cerello
        </span>
        <strong className="hidden md:inline"> · </strong>
        <a
          href="/impressum"
          className="block md:inline hover:headline active:headline"
          draggable="false"
        >
          Coordonnées
        </a>
      </span>
      <div className="items-center uppercase text-xs font-bold tracking-widest hidden md:inline-flex justify-center">
        Fait avec
        <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
          <span title="Qwik">
            <QwikSmallLogo className="h-5" ariaLabel="Qwik" />
          </span>
          <span title="TailwindCSS">
            <TailwindLogo className="h-5" ariaLabel="TailwindCSS" />
          </span>
        </div>
      </div>
      <ul className="flex gap-6 justify-end">
        <SocialIcon name="GitHub" url="https://github.com/pcerello/">
          <GitHubLogo ariaLabel="GitHub" />
        </SocialIcon>
        <SocialIcon
          name="LinkedIn"
          url="www.linkedin.com/in/pauline-cerello-412383113"
        >
          <LinkedinLogo ariaLabel="LinkedIn" />
        </SocialIcon>
      </ul>
    </footer>
  );
});
