import { gql } from "https://deno.land/x/oak_graphql/mod.ts";
export const OrganizationType = gql`
  type Address {
    id: ID!
    memberId: ID
    address1: String
    district: String
    province: String
    zipCode: String
    createdAt: String
    updatedAt: String 
  }

  type Contact {
    id: ID!
    status: String
    type: String
    memberId: ID
    mobileNumber: String
    createdAt: String
    updatedAt: String 
  }

  type Dealership {
    id: ID!
    displayname: String
    avatarUrl: String
    status: String 
    role: String
    memberType: String
    parentMember: String
    contacts: [Contact!]
    address: Address
    children: String
  }

  type Organization {
    total: Int!
    page: Int!
    limit: Int!
    results: [Dealership!]!  
  }

  type Query {
    getOrganizations: Organization
  }
`;
