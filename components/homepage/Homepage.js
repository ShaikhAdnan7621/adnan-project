"use client"
import { useEffect, useState } from "react";
import Filters from "./Filters"
import Topresult from "./Topresult"
import Hedder from "../hedder/Hedder";
import Loading from "../Loading";

const Homepage = () => {
    const size = useWindowSize();
    const [showfilters, setshowfilters] = useState(false)


    return (
        <>
            <Hedder />
            <div className=" text-black dark:text-white border-orange-400 border-2 sm:mx-7 p-1  relative rounded-xl ">
                {size.width > 800 ? "" : <div className=" flex gap-5 justify-center">
                    <button onClick={() => { showfilters == true ? setshowfilters(false) : setshowfilters(true) }} className='z-50 px-2 py-1 my-2 border border-orange-400 rounded-lg'>{showfilters == true ? <span>☑</span> : <span>☐</span>} Find Filters </button>
                    <button onClick={() => { showfilters == true ? setshowfilters(false) : setshowfilters(true) }} className='z-50 px-2 py-1 my-2 border border-orange-400 rounded-lg'>{showfilters == true ? <span>☐</span> : <span>☑</span>} Top Resultes </button>
                </div>
                }
                <div className="flex gap-2 justify-between">
                    {size.width < 800 ?
                        (showfilters ? (size.width < 800 ? <div className="mx-auto "><Filters /></div> : "") : <Topresult />) :
                        <>
                            <Topresult />
                            <Filters />
                        </>
                    }
                </div>
            </div>
        </>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default Homepage