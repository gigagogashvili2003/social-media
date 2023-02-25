"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
require("module-alias/register");
// Routes
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9000;
const DB_URL = process.env.DB_URL;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
mongoose_1.default.connect(DB_URL, () => {
    app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
});
