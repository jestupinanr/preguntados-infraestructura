"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'the api principal is in /api/person' });
    }
}
exports.indexController = new IndexController();
