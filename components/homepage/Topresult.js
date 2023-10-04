import React from 'react'
import Image from 'next/image'

const Topresult = () => {
    return (
        <div className="grow flex-col gap-y-2   ">
            <div className='flex h-56  gap-2 p-1'>
                <div className='lg:w-1/2 w-1/2 relative dark:shadow-[inset_0_0_6px_6px_#ffffff45] shadow-[inset_0_0_6px_6px_#00000045]'>
                    <Image src='/image.jpg' fill={true} className='-z-10 object-cover' alt="" />
                    <div className='absolute bottom-3 left-3' >
                        <h1 className='font-extrabold text-lg text-black '>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem ipsum dolor sit amet.</p></div>
                </div>
                <div className='lg:w-1/2 w-1/2 relative dark:shadow-[inset_0_0_6px_6px_#ffffff45] shadow-[inset_0_0_6px_6px_#00000045]'>
                    <Image src='/image.jpg' fill={true} className='-z-10 object-cover' alt="" />
                </div>
            </div>
            <div className='flex h-56 gap-2 p-1 '>
                <div className='lg::w-1/3 w-1/2 relative dark:shadow-[inset_0_0_6px_6px_#ffffff45] shadow-[inset_0_0_6px_6px_#00000045]'>
                    <Image src='/image.jpg' fill={true} className='-z-10 object-cover' alt="" />
                </div>
                <div className='lg:w-1/3 w-1/2 relative dark:shadow-[inset_0_0_6px_6px_#ffffff45] shadow-[inset_0_0_6px_6px_#00000045]'>
                    <Image src='/image.jpg' fill={true} className='-z-10 object-cover' alt="" />
                </div>
                <div className='lg:w-1/3 w-2/3 relative lg:block hidden dark:shadow-[inset_0_0_6px_6px_#ffffff45] shadow-[inset_0_0_6px_6px_#00000045]'>
                    <Image src='/image.jpg' fill={true} className='-z-10 object-cover' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Topresult