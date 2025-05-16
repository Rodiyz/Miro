import { paths, components } from "./generated";

export type ApiPaths = paths;
export type ApiSchemas = component["schemas"]

type R = ApiSchemas['CreateBoard']