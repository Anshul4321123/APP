import {pgTable,serial,text,timestamp,integer } from "drizzle-orm/pg-core";


export const favoritesTable=pgTable("favorites",{
    id:serial("id").primaryKey(),
    userId:text("user_id").notNull(),
    recipeId:text("recipe_id").notNull(),
    image:text("image"),
    cookTime:text("cook_time"),
    servings:text("servings"),
    createdAt: timestamp("create_at").defaultNow()

})