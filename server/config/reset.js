import { pool } from "./database.js";
import "./dotenv.js";
import { charsData, titlesData } from "../data/chars.js";

const createTableQuery = `
    DROP TABLE IF EXISTS chars;
    DROP TABLE IF EXISTS video_game_titles;

    CREATE TABLE IF NOT EXISTS chars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        curiosity TEXT NOT NULL,
        video_game_title INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS video_game_titles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
`;

const createCharsTable = async () => {
  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 tables created successfully");
  } catch (error) {
    console.error("⚠️ error creating chars table", error);
  }
};

const seedCharsTable = async () => {
  // Create the chars table first
  await createCharsTable();

  // Insert chars data
  try {
    for (const char of charsData.sort((a, b) => a.id - b.id)) {
      const insertCharQuery = {
        text: "INSERT INTO chars (name, image, description, curiosity, video_game_title) VALUES ($1, $2, $3, $4, $5)",
      };

      const values = [
        char.name,
        char.image,
        char.description,
        char.curiosity,
        char.video_game_title,
      ];

      await pool.query(insertCharQuery, values); // Await query execution
      console.log(`CHAR: ✅ ${char.name} id: ${char.id} added successfully`);
    }

    // Insert titles data only after chars data is inserted
    for (const title of titlesData) {
      const insertTitleQuery = {
        text: "INSERT INTO video_game_titles (id, name) VALUES ($1, $2)",
      };

      const values = [title.id, title.name];

      await pool.query(insertTitleQuery, values); // Await query execution
      console.log(`GAME: ✅ ${title.name} added successfully`);
    }
  } catch (error) {
    console.error("⚠️ error seeding tables", error);
  }
};

seedCharsTable();
