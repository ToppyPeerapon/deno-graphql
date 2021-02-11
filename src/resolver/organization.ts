import { fetchGetOrganizations } from "../api/organization.ts";

export const OrganizationResolves = {
  Query: {
    organizations: () => fetchGetOrganizations(),
  },
};
