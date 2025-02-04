import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { GitHubLogo } from "../../../assets/svgs/GitHub";
import { HavenLogo } from "../../../assets/svgs/Haven";
import { CommongroundLogo } from "../../../assets/svgs/Commonground";
import { Container, SecondaryTopNav, PrimaryTopNav } from "@conduction/components";
import { FiltersContext } from "../../../context/filters";
import { ExternalLinkIcon } from "@gemeente-denhaag/icons";
import clsx from "clsx";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = React.useContext(FiltersContext);

  const primaryTopNavItems = [
    {
      label: "Home",
      handleClick: () => {
        navigate("/");
      },
    },
    {
      label: t("Software"),
      handleClick: () => {
        setFilters({ ...filters, softwareType: "standalone/desktop" });
        navigate("/components");
      },
    },
    {
      label: t("Processes"),
      handleClick: () => {
        setFilters({ ...filters, softwareType: "process" });
        navigate("/components");
      },
    },
    {
      label: t("Data models"),
      handleClick: () => {
        setFilters({ ...filters, softwareType: "schema" });
        navigate("/components");
      },
    },
    {
      label: t("API's"),
      handleClick: () => {
        setFilters({ ...filters, softwareType: "api" });
        navigate("/components");
      },
    },
    {
      label: "Documentatie",
      subItems: [
        {
          label: t("About Open Catalogi"),
          handleClick: () => navigate("/about"),
        },
        {
          label: t("Installation"),
          handleClick: () => {
            navigate("#");
          },
        },
        {
          label: t("Usage"),
          handleClick: () => {
            navigate("/documentation/usage");
          },
        },
        {
          label: t("API"),
          handleClick: () => {
            navigate("#");
          },
        },
      ],
    },
  ];

  const secondaryTopNavItems = [
    {
      label: "Common ground",
      handleClick: () => {
        window.open("https://commonground.nl");
      },
      icon: <CommongroundLogo />,
    },
    {
      label: "Haven",
      handleClick: () => {
        window.open("https://haven.commonground.nl/");
      },
      icon: <HavenLogo />,
    },
    {
      label: "NL Design",
      handleClick: () => {
        window.open("https://designsystem.gebruikercentraal.nl/");
      },
      icon: <ExternalLinkIcon />,
    },
    {
      label: "Github",
      handleClick: () => {
        window.open("https://github.com/OpenCatalogi");
      },
      icon: <GitHubLogo />,
    },
  ];

  return (
    <header className={clsx(styles.header, layoutClassName && layoutClassName)}>
      <div className={styles.top}>
        <Container layoutClassName={styles.secondaryNavContainer}>
          <SecondaryTopNav items={secondaryTopNavItems} />
        </Container>
      </div>

      <Container layoutClassName={styles.headingContainer}>
        <Heading1 className={styles.title}>{t("Open Catalogs")}</Heading1>
        <span className={styles.subTitle}>{t("Reusable components within the government")}</span>
      </Container>

      <Container>
        <PrimaryTopNav items={primaryTopNavItems} />
      </Container>
    </header>
  );
};
