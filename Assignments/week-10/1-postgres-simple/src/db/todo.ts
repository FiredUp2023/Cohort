import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const res = await client.query(`
        INSERT INTO todos (user_id, title, description)
        VALUES ($1, $2, $3)
    `, [userId, title, description]); 
    
    return res;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const res = await client.query(`
        UPDATE todos
        SET done = true
        WHERE id = $1
    `, [todoId]); 
    
    return res;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const res = await client.query(`
        SELECT title, description, done, id 
        FROM todos
        WHERE user_id = $1
    `, [userId]); 
    
    return res;
}
