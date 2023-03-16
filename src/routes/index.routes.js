import { Router } from "express";
import authRouter from "./auth.routes.js";
import usersRouter from "./users.routes.js";
import urlsRouter from "./urls.routes.js";

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(urlsRouter);

export default router;