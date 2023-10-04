import React from 'react'

const Searchbar = () => {
    
    return (
        <>
            <div className="univarsalsearch overflow-hidden px-2 border-orange-400 border-2  rounded-full flex focus:ring focus:border-blue-500 dark:placeholderbg-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input className=" text-black dark:text-white bg-transparent focus:outline-none focus:border-none w-40 py-1 px-2 border-solid " type="search" name="search" placeholder="Search" />
                <span className=' border my-1 mx-1 sm:block hidden border-gray-400 '></span>

                <select id="countries" className="text-black dark:text-white dark:bg-black bg-white bg-transparent  focus:outline-none focus:border-none sm:block hidden">
                    <option defaultValue>All selected</option>
                    <option value="US">Phone</option>
                    <option value="CA">Tablet</option>
                    <option value="FR">Laptop</option>
                    <option value="DE">Compute</option>
                </select>

                <span className=' border my-1 mx-1 border-gray-400 '></span>
                <button className='focus:outline-none focus:border-none pl-1 pr-2'>
                    <svg className="text-lime-400 h-5 w-auto my-auto fill-current" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" space="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div >
        </>
    )
}

export default Searchbar
