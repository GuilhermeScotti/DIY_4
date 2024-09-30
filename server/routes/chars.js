import express from "express";
import CharsController from "../controllers/chars.js";

const router = express.Router();

router.get("/search", CharsController.searchChars);

router.get("/", CharsController.getChars);

router.get("/:charId", CharsController.getCharById);

router.get("/title/:video_game_title", CharsController.getCharsByTitle);

export default router;
