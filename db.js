import minecraftData from "minecraft-data";
import mcAssetss from "minecraft-assets";
import * as dotenv from "dotenv";
dotenv.config();
const mcAssets = mcAssetss(process.env.MINECRAFT_VERSION || "1.18");
const mcData = minecraftData(process.env.MINECRAFT_VERSION || "1.18");

export const recipes = Object.values(mcData.recipes);
export const items = Object.values(mcData.items);
