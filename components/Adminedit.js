import React, { useState } from 'react'
import Loading from '@/components/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';

const Adminedit = (props) => {
    const username = props.username
    const email = props.email
    const admin1 = props.admin
    const [admin, setadmin] = useState(admin1)
    const [loading, setloading] = React.useState(false)

    const userid = props.userid
    const editadmin = async (turn) => {
        try {
            setloading(true)
            const responce = await axios.post('/api/managers/makeadmin', { userid: userid, turn: turn })
            const data = responce.data.user
            console.log(data)
            console.log("resopnce come")
            data.isAdmin ? toast.success("Admin Created Successfully") : toast.success("Admin Removed Successfully");
            setadmin(data.isAdmin)

        } catch (error) {
            console.log(error.message)
        } finally{
            setloading(false)
        }


    }
    return (
        <div className='w-72 mx-auto text-left '>
            <div className='w-72 text-black dark:text-white'> UserName:  <span>{username}</span></div>
            <div className='w-72 text-black dark:text-white mt-3 '> email:  <span>{email}</span></div>
            <hr className='w-72  border-gray-700 dark:border-gray-500 mt-3' />

            <button
                className='border text-center border-gray-500 px-3 w-72  py-1 w-46 mt-5 rounded-md'
                onClick={() => admin ? editadmin(false) : editadmin(true)}
            > {admin ? "Remove Admin" : "Create Admin"}</button>
            <div>{loading ? <Loading text={'please wait'} size={"5"} /> : ""}</div>


        </div >
    )
}

export default Adminedit