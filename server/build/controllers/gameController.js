"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameController = void 0;
const database_1 = __importDefault(require("../database"));
class GameController {
    getAllQuestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const questions = yield database_1.default.query('SELECT * from question');
            res.json(questions);
        });
    }
    saveScore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("emtre");
            //await pool.query('INSERT INTO USER set ?', [req.body]);
            res.json({ text: 'updating a game' + req.params });
            console.log(req.params);
        });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game' });
    }
    update(req, res) {
        res.json({ text: 'updating a game' + req.params.id });
    }
}
exports.gameController = new GameController();
exports.default = exports.gameController;
