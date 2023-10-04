
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/components/Loading";

const Login = () => {
    const router = useRouter();
    const [user, setuser] = React.useState({
        email: "",
        password: "",
    })
    const [buttondisabled, setbuttondisabled] = React.useState(false)
    const [loding, setloding] = React.useState(false)

    const onLogin = async () => {
        try {
            setloding(true)
            const response = await axios.post("./api/users/login", user)
            console.log("login secessfully ");
            toast.success("login secessfully")
            router.push("/")
        } catch (error) {
            console.log("err", error.message);
            toast.error(error.message)
        } finally {
            setloding(false)
        }
    }


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setbuttondisabled(false);
        } else {
            setbuttondisabled(true);
        }
    }, [user]);
    return (
        <>
            <div className="flex flex-col items-center  justify-center min-h-screen py-2 dark:text-white ">
                <h1 className="text-4xl ">{loding ? <Loading text={"Login "} size={"5"}  /> : "Login"}</h1>
                <hr className="border-t border-gray-600 h-7" />
                <label htmlFor="email" className="text-left">Email</label>
                <input
                    id="email"
                    type="text"
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none text-black  focus:border-gray-600"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value, })}
                    placeholder="Email"
                />
                <label htmlFor="password" className="text-left">Password</label>
                <input
                    id="password"
                    type="password"
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none text-black focus:border-gray-600"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value, })}
                    placeholder="Password"
                />
                <button
                    onClick={onLogin}
                    className="p-2 border border-gray-300 rounded-lg mb-4 
                    focus:outline-none focus:border-gray-600">{buttondisabled ? <span>Fill Details</span> : <span>Login now</span>}</button>
                <Link href="/Signup">tap to SignUp</Link >
            </div>
        </>
    )
}

export default Login