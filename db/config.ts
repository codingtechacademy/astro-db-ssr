import { defineDb } from "astro:db";
import { defineTable, column } from "astro:db";

const Meal = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    image: column.text(),
    imageAlt: column.text(),
    published: column.date(),
    authorId: column.number({ references: () => Author.columns.id }),
  },
});

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Meal,
    Author,
  },
});
