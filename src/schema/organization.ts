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
    mobile_number: String
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
    youtubeUrl: String
    contacts: [Contact!]
    address: Address
    children: String
    description: String
  }

  type Organization {
    total: Int!
    page: Int!
    limit: Int!
    results: [Dealership!]!  
  }

  type Query {
    organizations: Organization
  }
`;
