import { pool } from "../config/database.js";

const getChars = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM chars ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: error.message });
  }
};

const getCharById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT name, image, description, curiosity
      FROM chars
      WHERE id=$1
    `;

    const charId = req.params.charId;

    const results = await pool.query(selectQuery, [charId]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getCharsByTitle = async (req, res) => {
  try {
    const selectQuery = `
      SELECT *
      FROM chars
      WHERE video_game_title=$1
    `;

    const titleId = req.params.video_game_title;

    const results = await pool.query(selectQuery, [titleId]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const searchChars = async (req, res) => {
  const { column, value } = req.query; // e.g., column=name&value=Mario
  const allowedColumns = ["name", "description", "curiosity", "id"];

  if (!allowedColumns.includes(column)) {
    return res.status(400).send("Invalid column name");
  }

  try {
    let query;
    let params;

    if (column === "id") {
      query = "SELECT * FROM chars WHERE id = $1";
      params = [parseInt(value, 10)];
    } else {
      query = `SELECT * FROM chars WHERE ${column} ILIKE $1 LIMIT 5`;
      params = [`%${value}%`];
    }

    const results = await pool.query(query, params);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export default {
  getChars,
  searchChars,
  getCharById,
  getCharsByTitle,
};
