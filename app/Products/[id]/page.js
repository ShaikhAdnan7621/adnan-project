import Hedder from '@/components/hedder/Hedder'
import React from 'react'

export default function about({ params }) {
  
    return (
        <>
            <Hedder />
            {/* <div className='text-black dark:text-white'>Result phone {params.id}</div>   */}
            <div className='flex'>
                <div className='bg-green-500 rounded-md'>
                    <h1 className='px-3 py-1 '> {params.id} </h1>
                </div>
                <div className='bg-lime-500'>

                </div>
            </div>
        </>
    )
}

