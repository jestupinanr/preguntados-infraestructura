"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = __importDefault(require("../controllers/gameController"));
class PersonRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gameController_1.default.getAllQuestions);
        this.router.get('/ranking', gameController_1.default.getRanking);
        this.router.post('/', gameController_1.default.saveScore);
    }
}
const gameRouter = new PersonRouter();
exports.default = gameRouter.router;
