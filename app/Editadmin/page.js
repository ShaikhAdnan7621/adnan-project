
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { toast } from "react-hot-toast";
import Loading from "@/components/Loading";
import { Cagliostro } from "next/font/google";
import Adminedit from "@/components/Adminedit";

export default function page() {
  const [inputemail, setinputemail] = React.useState({
    email: "",
  })
  const [buttondisabled, setbuttondisabled] = React.useState(false)
  const [loding, setloding] = React.useState(false)
  const [user, setuser] = React.useState({})
  const [userfounded, setuserfounded] = React.useState(false)


  const searchuser = async () => {
    try {
      setloding(true)
      const response = await axios.post("./api/manager/admindata", inputemail)
      if (!response.data.user) {
        toast.error(`user ${response.data.message}`)
        setuserfounded(false)
      }
      if (response.data.user) {
        setuser(response.data.user)
        setuserfounded(true)
        toast.success(`user ${response.data.message}`)

      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setloding(false)
    }
  }

  return (
    <>
      <div className="flex justify-center flex-col ">

        <div className="h-20">
          <Link className="px-3 py-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" href="/Login">{'<-'}Go Back</Link >
        </div>
        <div className="flex justify-center text-center mt-4 flex-col ">
          <input
            id="email"
            type="text"
            className="p-2 border mx-auto text-black  w-72 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            value={inputemail.email}
            onChange={(e) => setinputemail({ ...inputemail, email: e.target.value, })}
            placeholder="Email"
          />
          <button
            onClick={searchuser}
            className="p-2 border mx-auto  w-72 border-gray-300 rounded-lg mb-4 
          focus:outline-none focus:border-gray-600 ">{buttondisabled ? <span>Fill Details</span> : <span>signup now</span>}</button>
        </div>
      </div>
      <div className="w-72 mx-auto  mt-10">
        
      {loding ? <Loading text={"Login"} size={"5"} /> : ""}
      {userfounded ? <Adminedit username={user.username} email={user.email} admin={user.isAdmin} /> : "Search The user"}
      </div>
    </>
  )
}
