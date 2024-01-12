import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "quico",
  basePath: "/studio",
  projectId: "7zviw6k0",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
