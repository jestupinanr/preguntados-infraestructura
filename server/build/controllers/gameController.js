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
            const questions = yield database_1.default.query('SELECT * from question ORDER BY RAND() LIMIT 10');
            res.json(questions);
        });
    }
    saveScore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into SCORE set id_user=?, score=? ', [req.body.id_person, req.body.scoreEnd]);
            res.json({ text: 'score saved' });
        });
    }
    getRanking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ranking = yield database_1.default.query('SELECT ' +
                'SCORE.score, ' +
                'USER.nombre, ' +
                'USER.nickName, ' +
                'USER.correo, ' +
                'USER.carrera, ' +
                'USER.id_imagen ' +
                'FROM SCORE ' +
                'JOIN USER ' +
                'ON SCORE.id_user= USER.id ' +
                'ORDER BY SCORE.score DESC ' +
                'LIMIT 10');
            res.json(ranking);
        });
    }
}
exports.gameController = new GameController();
exports.default = exports.gameController;
