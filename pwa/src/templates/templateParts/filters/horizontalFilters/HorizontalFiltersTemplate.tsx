import * as React from "react";
import * as styles from "./HorizontalFiltersTemplate.module.css";
import { useForm } from "react-hook-form";
import { FiltersContext } from "../../../../context/filters";
import FormField, { FormFieldInput, FormFieldLabel } from "@gemeente-denhaag/form-field";
import { InputText, SelectMultiple } from "@conduction/components";
import _ from "lodash";
import { layers } from "../../../../data/filters";
import { getSelectedItemsFromFilters } from "../../../../services/getSelectedItemsFromFilters";

export const HorizontalFiltersTemplate: React.FC = () => {
  const [filters, setFilters] = React.useContext(FiltersContext);

  const {
    register,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    reset({
      name: filters.search,
      layerType: getSelectedItemsFromFilters(layers, filters["nl.commonground.layerType"]),
    });
  }, [filters]);

  React.useEffect(() => {
    const subscription = watch(({ name, layerType }) => {
      setFilters({
        ...filters,
        currentPage: 1,
        search: name,
        "nl.commonground.layerType": layerType?.map((l: any) => l.value),
      });
    });

    return () => subscription.unsubscribe();
  });

  return (
    <form className={styles.form}>
      <FormField>
        <FormFieldInput>
          <FormFieldLabel>Zoek op naam</FormFieldLabel>
          <InputText name="name" validation={{ required: true }} {...{ errors, register }} />
        </FormFieldInput>
      </FormField>

      <FormField>
        <FormFieldInput>
          <FormFieldLabel>Zoek op laag</FormFieldLabel>
          <SelectMultiple name="layerType" options={layers} {...{ errors, control, register }} />
        </FormFieldInput>
      </FormField>
    </form>
  );
};
