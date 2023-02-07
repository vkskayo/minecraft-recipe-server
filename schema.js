export const typeDefs = `#graphql
  type Query {
    recipes: [String]
    getOneRecipe(id: ID!): [[Int]]
    getCrafts: [Recipe]
  },

  type Recipe {
    resultedItemId: ID!
    resultedItem: String
    inShape: [[String]]
  }

`;
