import React from "react";

type Props = {

}

const SignupPage: React.FC<Props> = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col max-w-[500px] gap-4">
                SignupPage
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="password" />
                <button>SIGNUP</button>
            </div>
        </div>
    )
}

export default SignupPage
