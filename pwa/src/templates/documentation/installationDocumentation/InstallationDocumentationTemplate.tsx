import * as React from "react";
import * as styles from "./InstallationDocumentationTemplate.module.css";
import { Container } from "@conduction/components";
import { Heading1, Heading2, Heading3, LeadParagraph, Link, Paragraph } from "@gemeente-denhaag/components-react";
import { ExternalLinkIcon } from "@gemeente-denhaag/icons";
import { CodeBlock } from "../../../components/codeBlock/CodeBlock";

export const InstallationDocumentationTemplate: React.FC = () => {
  return (
    <Container layoutClassName={styles.container}>
      <section className={styles.section}>
        <Heading1>Componenten installeren met de skeleton application</Heading1>
        <LeadParagraph>
          De skeleton application is een makkelijke manier om de componenten te installeren en te gebruiken. De skeleton
          application is namelijk ontworpen voor snelle applicatietesten en prototypeontwikkeling op het NL Design
          System.
        </LeadParagraph>
      </section>
      <section className={styles.section}>
        <Heading2>Aan de slag </Heading2>
        <Paragraph>
          Om een eigen project op te zetten heb je een GitHub-account nodig en daar mee ingelogd zijn. Klik op de groene
          "Use this template" knop op de <br />
          <span onClick={() => open("https://github.com/ConductionNL/skeleton-app")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              GitHub-pagina
            </Link>
          </span>
          . Vertel GitHub waar je je prototype wilt hebben draaien en klik op "Create a repository from template".
          <br />
          <br />
        </Paragraph>
        <Heading2>Lokaal je omgeving laten draaien</Heading2>
        <Paragraph>
          Om lokaal te ontwikkelen, moet je de nieuwe repository klonen naar je eigen lokale machine. Open een terminal,
          navigeer naar de folder die de repository bevat, en maak een keuze tussen Node.js/npm of Docker om de app te
          laten draaien.
        </Paragraph>
        <Heading3>Node.js / NPM</Heading3>
        <Paragraph>
          Je hebt een Git client nodig(optioneel), en je moet Node.js en NPM geïnstalleerd hebben. Dit gaat poort:8000
          gebruiken, dus zorg er voor dit poort niet al in gebruik is.
          <CodeBlock
            codeBlock={
              <div>
                $ cd /pwa <br />
                $ npm install <br />
                $ npm run develop <br />
              </div>
            }
          />
        </Paragraph>
        <Heading3>Docker</Heading3>
        <Paragraph>
          Je moet Docker geïnstalleerd hebben. Docker laat de gateway van Conduction op poort:80 draaien en ook de app
          zelf op poort:8000, dus zorg er voor dat deze poorten niet in gebruik zijn.
          <CodeBlock codeBlock={"$ docker-compose pull"} />
          De eerste keer dat je Docker containers of wanneer je grote veranderingen hebt gemaakt aan de werking van de
          applicatie, voert je het volgende commando uit:
          <CodeBlock codeBlock={"$ docker-compose up --build"} />
          Als je dit niet doet dan draai je de containers zonder de applicatie container te herbouwen.
          <CodeBlock codeBlock={"$ docker-compose up"} />
          Na het succesvol instellen van de ontwikkelomgeving, navigeer naar{" "}
          <span onClick={() => open("http://localhost:81/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              http://localhost:81/
            </Link>
          </span>{" "}
          om de app in de browser te bekijken.
          <br /> <br />
          Om de werking van de common-gateway die samen met de applicatie gaat draaien, te veranderen verwijzen we
          vriendelijk naar de technische documentatie van de{" "}
          <span onClick={() => open("https://docs.conductor-gateway.app/en/latest/installation/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              common-gateway
            </Link>
          </span>
          .
        </Paragraph>
        <Heading2>Installeren op Kubernetes omgevingen</Heading2>
        <Paragraph>
          Om de applicatie te installeren op je eigen cloud omgeving ondersteunen we installaties in{" "}
          <span onClick={() => open("https://kubernetes.io/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              Kubernetes
            </Link>
          </span>{" "}
          met het gebruik van de bijgeleverde{" "}
          <span onClick={() => open("https://helm.sh/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              Helm
            </Link>
          </span>{" "}
          grafiek. Kubernetes is een Container Orkestratie dat een standaard is geworden voor Nederlandse gemeenten
          onder de{" "}
          <span onClick={() => open("https://haven.commonground.nl/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              Haven
            </Link>
          </span>{" "}
          standaard, en waar Helm de standaard installatie methode voor componenten is.
          <br />
          <br />
          De Helm grafiek kan geïnstalleerd worden met de hulp van Kubernetes beheertools zoals{" "}
          <span onClick={() => open("https://dashkube.com/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              Dashkube
            </Link>
          </span>{" "}
          of{" "}
          <span onClick={() => open("https://rancher.com/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              Rancher
            </Link>
          </span>
          .
          <br />
          <br />
          De Helm grafiek kan ook geïnstalleerd worden door Helm te draaien van je lokale machine (zie de instructies
          over hoe je Helm installeert op <br />
          <span onClick={() => open("https://helm.sh/docs/intro/install/#through-package-managers/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              helm.sh
            </Link>
          </span>
          , hiervoor is het vereist om{" "}
          <span onClick={() => open("https://kubernetes.io/docs/tasks/tools/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              kubectl
            </Link>
          </span>{" "}
          te hebben geïnstalleerd).
          <br />
          <br />
          <CodeBlock
            codeBlock={
              <div>
                $ helm repo add opencatalogi https://raw.githubusercontent.com/opencatalogi/web-app/development/helm/
                <br />
                $ helm install my-opencatalogi opencatalogi/opencatalogi <br />
              </div>
            }
          />
          Voor overige configuratie verwijzen we vriendelijk naar de documentatie van de helm grafiek die vind je{" "}
          <span
            onClick={() =>
              open(
                "https://github.com/OpenCatalogi/web-app/blob/e3fdf396cd5fb39266fd77a2af404cb59a881cb7/helm/README.md/",
              )
            }
          >
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              hier
            </Link>
          </span>
          .
        </Paragraph>
        <Heading2>Technische Documentatie</Heading2>
        <Paragraph>
          De volledige technische documentatie is te vinden op{" "}
          <span onClick={() => open("https://skeleton-app.readthedocs.io/en/latest/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              Read the Docs
            </Link>
          </span>{" "}
          en is gebaseerd op{" "}
          <span onClick={() => open("https://www.mkdocs.org/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              MKDocs
            </Link>
          </span>
          .
          <br /> <br />
          Als je de technische documentatie lokaal wilt draaien, kan je dit doen door middel van de MKDocs server en het
          "serve" commando. <CodeBlock codeBlock={"$ mkdocs serve"} /> Ga naar de lokale repository en voer het commando
          uit om de documentatie beschikbaar te stellen op poort:8000. <br />
          Zorg er voor dat je eerst{" "}
          <span onClick={() => open("https://www.mkdocs.org/user-guide/installation/")}>
            <Link icon={<ExternalLinkIcon />} iconAlign="start">
              MKDocs installeert
            </Link>
          </span>
          .
        </Paragraph>
      </section>
    </Container>
  );
};
