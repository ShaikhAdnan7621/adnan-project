import Link from 'next/link'
import React from 'react'
import Searchbar from './Searchbar'
import { Orbitron } from 'next/font/google'
import Image from 'next/image'


export const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
});

const Hedder = () => {
    return (<>
        <div className='nav py-3 sm:px-7 ' >
            <div className="sm:mx-3 justify-between flex sm:flex-row flex-col items-center sm:px-3  px-1 mx-1">
                <div className={' mr-auto text-black dark:text-white ' + orbitron.className}>Tech<br />Showroom</div>
                <div className='flex ml-auto'>
                    <Searchbar />
                </div>
            </div>
            <div className='flex mt-2 items-center justify-between mb-2'>
                <div className='h-14 sm:ml-3 ml-1 mr-1 sm:px-3 px-1 overflow-x-auto scrollbar-none mt-2'>
                    <ul className='flex my-auto py-2'>
                        <li>
                            <Link href="/" className='dark:bg-transparent bg-white text-black
                            dark:text-white border-2 border-orange-500  mx-1 px-4 
                            rounded-full py2' >Home</Link></li>
                        <li>
                            <Link href="/Products" className='dark:bg-transparent bg-white text-black
                            dark:text-white border-2 border-orange-500  mx-1 
                            px-4 rounded-full py2'>Product</Link></li>
                        <li>
                            <Link href="/" className='dark:bg-transparent bg-white text-black
                            dark:text-white border-2 border-orange-500  mx-1
                            px-4 rounded-full py2'>Home</Link></li>
                        <li>
                            <Link href="/" className='dark:bg-transparent bg-white
                            text-black dark:text-white border-2 border-orange-500 
                            mx-1 px-4 rounded-full py2'>Home</Link></li>
                        <li>
                            <Link href="/" className='dark:bg-transparent bg-white
                            text-black dark:text-white border-2 border-orange-500 
                            mx-1 px-4 rounded-full py2'>Home</Link></li>
                    </ul>
                </div>
                <div className='w-14 ml-1 mr-3'>
                    <div className='w-14 flex flex-col justify-center items-center'>
                        <Link href="/Profile">
                            <div className='rounded-full dark:text-white border-2 border-orange-500 relative h-10 w-10 overflow-hidden'>
                                <Image src='/image.jpg' fill={true} className='object-cover h-10 w-10' sizes='' alt="" />
                            </div>
                            <p className='dark:text-white '>Is Me</p>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />  
        </div >
    </>
    )
}
export default Hedder

