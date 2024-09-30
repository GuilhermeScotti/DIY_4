import { pool } from "./database.js";
import "./dotenv.js";
import { charsData, titlesData } from "../data/chars.js";

const createTableQuery = `
    DROP TABLE IF EXISTS chars;

    CREATE TABLE IF NOT EXISTS chars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        curiosity TEXT NOT NULL,
        video_game_title INTEGER NOT NULL
    );

    DROP TABLE IF EXISTS video_game_titles;

    CREATE TABLE IF NOT EXISTS video_game_titles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
`;

const createCharsTable = async () => {
  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 gifts table created successfully");
  } catch (error) {
    console.error("⚠️ error creating chars table", error);
  }
};

const seedCharsTable = async () => {
  await createCharsTable();

  charsData.forEach((char) => {
    const insertQuery = {
      text: "INSERT INTO chars (id, name, image, description, curiosity, video_game_title) VALUES ($1, $2, $3, $4, $5, $6)",
    };

    const values = [
      char.id,
      char.name,
      char.image,
      char.description,
      char.curiosity,
      char.video_game_title,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting char", err);
        return;
      }

      console.log(`✅ ${char.name} added successfully`);
    });
  });

  titlesData.forEach((title) => {
    const insertQuery = {
      text: "INSERT INTO video_game_titles (id, name) VALUES ($1, $2)",
    };

    const values = [title.id, title.name];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting title", err);
        return;
      }

      console.log(`✅ ${title.name} added successfully`);
    });
  });
};

seedCharsTable();
