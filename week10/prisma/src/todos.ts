import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertTodo = async (user_id: number, title: string, description: string ) => {
    try{
        const res = await prisma.todo.create({
            data: {
                user_id,
                title,
                description
            },
        });
        console.log(res);
    } catch(error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}

const markTodoDone = async (todo_id: number) => {
    try{
        const res = await prisma.todo.update({
            data: {
                done: true
            },
            where: {
                id: todo_id
            },
        });
        console.log(res);
    } catch(error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}

const getTodos = async (user_id: number) => {
    try{
        const res = await prisma.todo.findMany({
            where: { user_id }
        });
        console.log(res);
    } catch(error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}

const getTodosAndUsers = async (user_id: number) => {
    try{
        const res = await prisma.todo.findMany({
            where: { user_id },
            select: {
                user: true,
                title: true,
                description: true
            }
        });
        console.log(res);
    } catch(error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}

//insertTodo(1, "Learn", "Learn new things mofo");

//markTodoDone(2).then(() => {
//    getTodos(1);
//})

getTodosAndUsers(1);
