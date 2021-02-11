import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import { Schema } from "./src/schema/index.ts";
import { resolvers } from "./src/resolver/index.ts";

const app = new Application();
app.use(oakCors());

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: Schema,
  resolvers: resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server start at http://localhost:8080");
await app.listen({ port: 8080 });
