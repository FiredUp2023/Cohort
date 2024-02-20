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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertTodo = (user_id, title, description) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.todo.create({
            data: {
                user_id,
                title,
                description
            },
        });
        console.log(res);
    }
    catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
});
const markTodoDone = (todo_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.todo.update({
            data: {
                done: true
            },
            where: {
                id: todo_id
            },
        });
        console.log(res);
    }
    catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
});
const getTodos = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.todo.findMany({
            where: { user_id }
        });
        console.log(res);
    }
    catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
});
const getTodosAndUsers = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.todo.findMany({
            where: { user_id },
            select: {
                user: true,
                title: true,
                description: true
            }
        });
        console.log(res);
    }
    catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
});
//insertTodo(1, "Learn", "Learn new things mofo");
//markTodoDone(2).then(() => {
//    getTodos(1);
//})
getTodosAndUsers(1);
