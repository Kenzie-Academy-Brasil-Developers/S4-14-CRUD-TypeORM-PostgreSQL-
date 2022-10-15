import "reflect-metadata"
import "dotenv/config";
import express from "express"
import userRoutes from "./Routes/user.routes";
import loginRoutes from "./Routes/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);

export default app;