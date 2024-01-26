import { useNavigate } from "react-router-dom";
import useAuth from "../AuthProvider"
import { useEffect } from "react";
import { PersonIcon } from "@radix-ui/react-icons";

export default function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/signin')
        }
    }, [user, navigate])
    return (
        <>
            <nav className="flex justify-between p-4 py-2">
                <h1 className="text-3xl font-bold">Payments App</h1>
                <div className="flex justify-center">
                    <h2 className="text-xl font-semibold">Hello, User</h2>
                    <PersonIcon className="mt-1 ml-3" width={20} height={20} />
                </div>
            </nav>
        </>
    )
}

