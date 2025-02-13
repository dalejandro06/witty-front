"use client";
import { useFormik } from "formik";
import { Button, Select, SelectItem } from "@heroui/react";

import TitleInfo from "@/components/TitleInfo";
import { useDepartments } from "@/hooks/useDepartments";
import { useCategories } from "@/hooks/useCategories";

function SearchServices() {
  const {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  } = useDepartments();

  const { categories, loadingCategories, getSubCategoriesByCategoryId } =
    useCategories();

  const formik = useFormik({
    initialValues: {
      department: "",
      city: "",
      category: "",
    },
    onSubmit() {},
  });

  return (
    <div className="relative h-full flex flex-col gap-5">
      <TitleInfo
        infoText="Para mostrarte servicios personalizados, primero necesitamos saber tu ubicación."
        title="¿Dónde te encuentras?"
      />
      <form className="grid gap-5" onSubmit={formik.handleSubmit}>
        <Select
          isRequired
          errorMessage={formik.errors.department}
          id="state"
          isInvalid={!!formik.errors.department}
          isLoading={loadingDepartments}
          label="Departamento"
          name="state"
          placeholder="Selecciona"
          value={formik.values.department}
          variant="faded"
          onChange={(e) => {
            formik.setFieldValue("department", e.target.value);
            getCityByDepartment(e.target.value);
          }}
        >
          {departments.map((item) => (
            <SelectItem key={item.id}>{item.name}</SelectItem>
          ))}
        </Select>

        <Select
          isRequired
          errorMessage={formik.errors.city}
          id="city"
          isInvalid={!!formik.errors.city}
          isLoading={loadingCity}
          label="Ciudad"
          name="city"
          placeholder="Selecciona"
          value={formik.values.city}
          variant="faded"
          onChange={(e) => formik.setFieldValue("city", e.target.value)}
        >
          {cities.map((city) => (
            <SelectItem key={city.id}>{city.name}</SelectItem>
          ))}
        </Select>

        <TitleInfo
          infoText="Indícanos que tipo de servicios estas buscando."
          title="¿Qué estas buscando?"
        />
        <Select
          isRequired
          id="category"
          isLoading={loadingCategories}
          label="Categoría"
          name="category"
          placeholder="Selecciona"
          value={formik.values.category}
          variant="flat"
          onChange={(e) => {
            formik.setFieldValue("category", e.target.value);
            getSubCategoriesByCategoryId(Number(e.target.value));
          }}
        >
          {categories.map((item) => (
            <SelectItem key={item.id}>{item.title}</SelectItem>
          ))}
        </Select>
        <Button
          fullWidth
          className="absolute bottom-5 bg-secondary-500  text-black py-7"
          color="secondary"
          type="submit"
        >
          Buscar servicio
        </Button>
      </form>
    </div>
  );
}

export default SearchServices;
