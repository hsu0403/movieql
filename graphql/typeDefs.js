import { buildSchema } from "graphql";

const typeDefs = buildSchema(`
type Query {
    movies(limit: Int, rating: Float): [Movie]!
}

type Movie {
    id: Int!
    title: String!
    rating: Float!
    Summary: String!
    language: String!
    medium_cover_image: String!
}
`);

export default typeDefs;
