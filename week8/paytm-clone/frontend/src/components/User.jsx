import { Button } from "./ui/button";
import UserIcon from "./ui/userIcon";

export default function User({ user }) {
    console.log(user);
    return (
        <div className="flex justify-between items-center my-2">
            <div className="flex justify-center items-center">
                <UserIcon />
                <h2 className="d-inline font-semibold text-xl">{`${user.firstName + " " + user.lastName}`}</h2>
            </div>
            <Button size="lg">Send Money</Button>
        </div>
    )
}
