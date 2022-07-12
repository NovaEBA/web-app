import * as React from "react";
import * as styles from "./ComponentsTemplate.module.css";
import * as _ from "lodash";
import { Button, FormField, FormFieldInput, FormFieldLabel, Heading2 } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { InputText, Container, SelectMultiple } from "@conduction/components";
import { ComponentResultTemplate } from "../templateParts/resultsTemplates/ComponentResultsTemplate";
import { FiltersContext } from "../../context/filters";
import { getFilteredComponents } from "../../services/getFilteredComponents";
import { faGripVertical, faLayerGroup, faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { QueryClient } from "react-query";
import { useComponent } from "../../hooks/components";
import Skeleton from "react-loading-skeleton";

export const ComponentsTemplate: React.FC = () => {
  const [filters, setFilters] = React.useContext(FiltersContext);
  const [filteredComponents, setFilteredComponents] = React.useState<any[]>([]);
  const { t } = useTranslation();

  const {
    register,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const queryClient = new QueryClient();
  const _useComponent = useComponent(queryClient);
  const getComponents = _useComponent.getAll();

  React.useEffect(() => {
    if (!getComponents.isSuccess) return;

    reset({ name: filters.name, layers: filters.layers?.map((t) => getSelectObjectFromValue(t)) });

    setFilteredComponents(getFilteredComponents(getComponents.data, filters));
  }, [filters, getComponents.isSuccess]);

  React.useEffect(() => {
    const subscription = watch(({ name, layers }) => {
      setFilters({ ...filters, name: name, layers: layers?.map((t: any) => t.value) });
    });

    return () => subscription.unsubscribe();
  });

  return (
    <Container layoutClassName={styles.container}>
      <div className={styles.header}>
        <div>
          <Heading2>Components</Heading2>
          <span>Donec id elit non mi porta gravida at eget metus.</span>
        </div>
        <div className={styles.resultsDisplaySwitchButtons}>
          <Button
            className={styles.buttonIcon}
            variant={filters.resultDisplayLayout === "table" ? "primary-action" : "secondary-action"}
            onClick={() => setFilters({ ...filters, resultDisplayLayout: "table" })}
          >
            <FontAwesomeIcon icon={faTable} />
            {t("Table")}
          </Button>
          <Button
            className={styles.buttonIcon}
            variant={filters.resultDisplayLayout === "cards" ? "primary-action" : "secondary-action"}
            onClick={() => setFilters({ ...filters, resultDisplayLayout: "cards" })}
          >
            <FontAwesomeIcon icon={faGripVertical} />
            {t("Cards")}
          </Button>
          <Button
            className={styles.buttonIcon}
            variant={filters.resultDisplayLayout === "layer" ? "primary-action" : "secondary-action"}
            onClick={() => setFilters({ ...filters, resultDisplayLayout: "layer" })}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            {t("Layers")}
          </Button>
        </div>
      </div>

      <form className={styles.form}>
        <FormField>
          <FormFieldInput>
            <FormFieldLabel>Filter op naam</FormFieldLabel>
            <InputText name="name" validation={{ required: true }} {...{ errors, register }} />
          </FormFieldInput>
        </FormField>

        <FormField>
          <FormFieldInput>
            <FormFieldLabel>Filter op laag</FormFieldLabel>
            <SelectMultiple
              defaultValue={filters.layers?.map((f) => getSelectObjectFromValue(f))}
              name="layers"
              options={layers}
              {...{ errors, control, register }}
            />
          </FormFieldInput>
        </FormField>
      </form>

      {filteredComponents.length > 0 && (
        <ComponentResultTemplate components={filteredComponents} type={filters.resultDisplayLayout} />
      )}

      {!filteredComponents.length && !getComponents.isLoading && t("No components found with active filters")}
      {getComponents.isLoading && <Skeleton height="200px" />}
    </Container>
  );
};

const getSelectObjectFromValue = (value: string | undefined): any | undefined => {
  return layers.find((t) => t.value === value);
};

const layers = [
  { label: "Interactie", value: "interactie" },
  { label: "Proces", value: "proces" },
  { label: "Integratie", value: "integratie" },
  { label: "Services", value: "services" },
  { label: "Data", value: "data" },
];
