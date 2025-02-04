import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { SearchComponentTemplate } from "../templateParts/searchComponent/SearchComponentTemplate";
import { Divider, Heading1, Heading2, Heading3, LeadParagraph } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { Container, ImageAndDetailsCard } from "@conduction/components";
import { FeedbackTemplate } from "../templateParts/feedback/FeedbackTemplate";
import { MiniDashboardTemplate } from "../templateParts/miniDashboard/MiniDashboardTemplate";
import overOpenCatalogiImage from "./../../assets/svgs/SpotAPI.svg";
import aanDeSlagMetOpenCatalogiImage from "./../../assets/svgs/SpotForum.svg";
import clsx from "clsx";
import { CategorySearchTemplate } from "../templateParts/categorySearch/CategorySearchTemplate";

export const LandingTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container layoutClassName={styles.container}>
      <section className={clsx(styles.headingAndSearchForm, styles.section)}>
        <div className={styles.heading}>
          <Heading1>{t("A central place for reuse of information technology within the government")}</Heading1>
          <LeadParagraph> {t("Here you will find components for all Common Ground layers")}</LeadParagraph>
        </div>

        <SearchComponentTemplate layoutClassName={styles.searchFormContainer} />
      </section>

      <Divider />

      <section className={styles.section}>
        <div className={styles.subHeading}>
          <Heading2>Zoeken per categorie</Heading2>

          <LeadParagraph>
            Hier kunnen de components gezocht worden op categorie.
          </LeadParagraph>
        </div>

        <CategorySearchTemplate />
      </section>

      <section className={styles.section}>
        <Heading3>Open Catalogi in getallen</Heading3>

        <MiniDashboardTemplate />
      </section>

      <section className={styles.section}>
        <Heading3>(Direct naar) veelbezochte pagina's</Heading3>

        <div className={styles.cards}>
          <ImageAndDetailsCard
            title="Over Open Catalogi"
            image={<img src={overOpenCatalogiImage} />}
            introduction="Open Catalogi is een weergave van Componenten verdeeld over de 5 lagen zoals gedefinieerd door VNG in het Gegevenslandschap."
            link={{ label: "Ga naar Over Open Catalogi", href: "/about" }}
          />

          <ImageAndDetailsCard
            title="Aan de slag met Open Catalogi"
            image={<img src={aanDeSlagMetOpenCatalogiImage} />}
            introduction="Wilt u uw component op Open Catalogi aanbieden zodat andere uw component kunnen (her)gebruiken of bij dragen aan de doorontwikkeling van uw component?"
            link={{ label: "Aan de slag met Open Catalogi", href: "documentation/usage" }}
          />
        </div>
      </section>

      <Divider />

      <FeedbackTemplate layoutClassName={styles.feedback} />
    </Container>
  );
};
