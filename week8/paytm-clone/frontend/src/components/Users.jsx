import { useState } from "react";
import { Input } from "./ui/input";
import useUsers from "../hooks/useUsers";
import User from "./User";
import useDebounce from "../hooks/useDebounce";

export default function Users() {
    const [query, setQuery] = useState('');
    const debouncedInput = useDebounce(query, 300);
    const users = useUsers(debouncedInput);
    return (
        <>
            <div className="mx-6 my-4 grid grid-col gap-4">
                <h2 className="font-bold text-2xl">Users</h2>
                <Input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <div>
                    {users.map((user) => {
                        return <User key={user.username} user={user} />
                    })}

                </div>
            </div>
        </>
    )
}
