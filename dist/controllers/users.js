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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
//GET API Controller
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Find all users from the table
    const users = yield user_1.default.findAll();
    res.json({ users });
});
exports.getUsers = getUsers;
//GET API Controller - getUser
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Searchs for the use with the id of the params
    const user = yield user_1.default.findByPk(id);
    //If the user exists then return it, else return an error message
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            ok: false,
            msg: `There is no user with the id ${id}`
        });
    }
});
exports.getUser = getUser;
//POST API Controller
const createUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUser',
        body
    });
};
exports.createUser = createUser;
//PUT API Controller
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        id,
        body
    });
};
exports.updateUser = updateUser;
//DELETE API Controller
const deleteUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'deleteUser',
        body
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map