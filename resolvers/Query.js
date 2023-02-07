import { recipes, items } from "../db.js";
import mcAssetss from "minecraft-assets";
import * as dotenv from "dotenv";
dotenv.config();

const mcAssets = mcAssetss(process.env.MINECRAFT_VERSION || "1.18");

export const Query = {
  recipes: () => {
    const recipesItems = recipes
      .filter((recipe) => recipe[0].inShape)
      .map((recipe) => {
        if (
          items[recipe[0].result.id] &&
          mcAssets.findItemOrBlockByName(
            items[recipe[0].result.id - 1].name
          ) !== undefined
        ) {
          return mcAssets.textureContent[items[recipe[0].result.id - 1].name]
            .texture;
        }
      });

    return recipesItems;
  },

  getOneRecipe: (parent, { id }, context) => {
    const recipeReq = recipes.find((recipe) => recipe[0].result.id == id);

    if (recipeReq[0].hasOwnProperty("inShape")) {
      return recipeReq[0].inShape;
    }
  },
  getCrafts: (parent, args, context) => {
    const inShapeArr = recipes
      .filter((recipe) => recipe[0].inShape)
      .map((recipe) => {
        return {
          inShape: recipe[0].inShape
            ? recipe[0].inShape.map((arr) => {
                return arr.map((element) => {
                  if (
                    items[element - 1] &&
                    mcAssets.textureContent[items[element - 1].name].texture
                  )
                    return mcAssets.textureContent[items[element - 1].name]
                      .texture;
                });
              })
            : undefined,
          resultedItemId: recipe[0].result.id,
          resultedItem:
            mcAssets.textureContent[items[recipe[0].result.id - 1].name]
              .texture,
        };
      });

    return inShapeArr;
  },
};
