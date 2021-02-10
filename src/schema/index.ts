import { gql } from "https://deno.land/x/oak_graphql/mod.ts";
import { OrganizationType } from "./organization.ts";

export const Schema = gql`
  ${OrganizationType}
`;
