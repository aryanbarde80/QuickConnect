import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar,getMessages,sendMessage } from "../controllers/message.controller.js";


const router = express.Router();

router.get("/users",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage) // protectRoute ensures that unautheticated user can't access this request.

export default router;