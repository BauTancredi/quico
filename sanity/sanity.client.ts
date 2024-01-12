import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "7zviw6k0",
  dataset: "production",
  apiVersion: "2024-01-12",
  useCdn: false,
};

const client = createClient(config);

export default client;
