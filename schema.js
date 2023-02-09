export const typeDefs = `#graphql
  type Query {
    recipes: [String]
    getOneRecipe(id: ID!): [[Int]]
    getCrafts: [Recipe]
    getFoods: [Food]!
    getSubsetFoods(name: String!): [Food]!
  },

  type Recipe {
    resultedItemId: ID!
    resultedItem: String
    inShape: [[String]]
  }

  type Food {
    id: ID!
    foodImage: String
    name: String!
    displayName: String
    foodPoints: Int!
  }

`;
