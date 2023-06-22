import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "m7uvgv1i",
  dataset: "production",
  title: "E-commerce website",
  apiVersion: "2023-06-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {types: schemas},
});

export default config;