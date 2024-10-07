import express from "express";
import CharsController from "../controllers/chars.js";

const router = express.Router();

router.get("/search", CharsController.searchChars);

router.get("/", CharsController.getChars);

router.get("/:charId", CharsController.getCharById);

router.get("/title/:video_game_title", CharsController.getCharsByTitle);

router.post("/", CharsController.createChar);

router.delete("/:id", CharsController.deleteChar);

router.patch("/:id", CharsController.updateChar);

export default router;
