import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL, gql } from "https://deno.land/x/oak_graphql/mod.ts";

const app = new Application();

const data = [
  {
    "id": 1,
    "name": "Toppy Peerapon",
  },
  {
    "id": 2,
    "name": "Testing deno js",
  },
];

const types = gql`
  type Profile {
    id: ID!
    name: String
  }

  type Query {
    getProfiles: [Profile!]!
  }
`;

const resolvers = {
  Query: {
    getProfiles: () => {
      return data;
    },
  },
};

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server start at http://localhost:8080");
await app.listen({ port: 8080 });
