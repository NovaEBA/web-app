import * as React from "react";
import * as styles from "./AdminHomeTemplate.module.css";
import { Container } from "@conduction/components";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { AdminTemplate } from "../../templateParts/adminTemplate/AdminTemplate";
import { t } from "i18next";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@gemeente-denhaag/table";

export const AdminHomeTemplate: React.FC = () => {
  return (
    <AdminTemplate>
      <Container layoutClassName={styles.container}>
        <section className={styles.section}>
          <Heading1>Home</Heading1>
        </section>
        <section className={styles.section}>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>{t("Name")}</TableHeader>
                <TableHeader>{t("Layer")}</TableHeader>
                <TableHeader>{t("Status")}</TableHeader>
                <TableHeader>{t("Type")}</TableHeader>
                <TableHeader>{t("Organization")}</TableHeader>
                <TableHeader>{t("Installations")}</TableHeader>
                <TableHeader />
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </Container>
    </AdminTemplate>
  );
};
