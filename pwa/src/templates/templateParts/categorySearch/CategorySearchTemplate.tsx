import * as React from "react";
import { categories } from "../../../data/categories";
import { LayerAccordion } from "../layerAccordion/LayerAccordionTemplate";
import { LayerAccordionFiltersTemplate } from "../layerAccordion/filters/LayerAccordionFiltersTemplate";

export const CategorySearchTemplate: React.FC = () => {
  const Accordion = LayerAccordion.accordion;
  const AccordionController = LayerAccordion.controller;

  const { open: openInteraction, setOpen: setOpenInteraction } = AccordionController();
  const { open: openProcess, setOpen: setOpenProcess } = AccordionController();
  const { open: openIntegration, setOpen: setOpenIntegration } = AccordionController();
  const { open: openServices, setOpen: setOpenServices } = AccordionController();
  const { open: openData, setOpen: setOpenData } = AccordionController();

  return (
    <>
      <LayerAccordionFiltersTemplate
        items={[
          { label: "Interactie", handleClick: setOpenInteraction, active: openInteraction },
          { label: "Proces", handleClick: setOpenProcess, active: openProcess },
          { label: "Integratie", handleClick: setOpenIntegration, active: openIntegration },
          { label: "Service", handleClick: setOpenServices, active: openServices },
          { label: "Data", handleClick: setOpenData, active: openData },
        ]}
      />

      <Accordion
        title="Interactie"
        open={openInteraction}
        setOpen={setOpenInteraction}
        color="#CFE2FF"
        categories={categories.interactie}
      />

      <Accordion
        title="Proces"
        open={openProcess}
        setOpen={setOpenProcess}
        color="#F8D7DA"
        categories={categories.proces}
      />

      <Accordion
        title="Integratie"
        open={openIntegration}
        setOpen={setOpenIntegration}
        color="#FFF3CD"
        categories={categories.integratie}
      />

      <Accordion
        title="Services"
        open={openServices}
        setOpen={setOpenServices}
        color="#D1E7DD"
        categories={categories.services}
      />

      <Accordion title="Data" open={openData} setOpen={setOpenData} color="#E2D9F3" categories={categories.data} />
    </>
  );
};
