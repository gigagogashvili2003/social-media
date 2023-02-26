import { getCurrentUserInfo } from "@/controllers/user";
import { Router } from "express";

const router = Router();

router.post("/user-info", getCurrentUserInfo);

export default router;
