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
        this.router.post('/:id', gameController_1.default.saveScore);
        this.router.delete('/:id', gameController_1.default.delete);
        this.router.put('/:id', gameController_1.default.update);
    }
}
const gameRouter = new PersonRouter();
exports.default = gameRouter.router;
