import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const res = await client.query(`
        INSERT INTO users (username, password, name)
        VALUES ($1, $2, $3)
    `, [username, password, name]);

    return res;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const res = await client.query(`
        SELECT username, password, name FROM users
        WHERE id = $1
    `, [userId]);

    return res;
}
