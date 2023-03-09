"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
//GET API Controller
const getUsers = (req, res) => {
    res.json({
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
//GET API Controller - getUser
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
};
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