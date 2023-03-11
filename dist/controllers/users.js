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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //Makes a query to check if an user with the email from the params exist
        const emailExists = yield user_1.default.findOne({
            where: { email: body.email }
        });
        //If exists we return an error
        if (emailExists) {
            return res.status(400).json({
                msg: `An user already exists with the email ${body.email}`
            });
        }
        //Else we create the user in the database
        const user = yield user_1.default.create(body);
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'The user could not be created'
        });
    }
});
exports.createUser = createUser;
//PUT API Controller
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        //Search for the user with the id sent in the params
        const user = yield user_1.default.findByPk(id);
        //IF the user does not exist we return an error
        if (!user) {
            return res.status(404).json({
                msg: `It does not exist an user with the id ${id}`
            });
        }
        //Else we make the update with the fields that corresponds to the id
        yield user_1.default.update(body, { where: { id: id } });
        //We search again for the updated user
        const updatedUser = yield user_1.default.findByPk(id);
        //We return the updated user
        res.json(updatedUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'The operation could not be made. Please contact the admin!'
        });
    }
});
exports.updateUser = updateUser;
//DELETE API Controller
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Logic delete
    //Search for the user with the id sent in the params
    const user = yield user_1.default.findByPk(id);
    //IF the user does not exist we return an error
    if (!user) {
        return res.status(404).json({
            msg: `It does not exist an user with the id ${id}`
        });
    }
    //Complete deletion
    // await user.destroy();
    //This just changes the field status from 1 to 0
    yield user.update({ status: false });
    res.json(user);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map