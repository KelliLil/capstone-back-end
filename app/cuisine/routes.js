import { Router } from "express";
import cuisineController from "./controller.js";

const router = Router();

router.get("/", (_, res) => {
  cuisineController
    .index()
    .then((cuisines) => {
      res.json(cuisines);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default router;
