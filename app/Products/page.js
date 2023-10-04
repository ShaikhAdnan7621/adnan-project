"use client";
import Hedder from '@/components/hedder/Hedder';
import { Connect } from '../dbconfig/dbconfig';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Productcard from '@/components/productcard';
import Loading from '@/components/Loading';

Connect()
const Products = () => {
    const [loading, setLoading] = useState(false)
    const [topproducts, settopproducts] = useState([]);
    const getproducts = async () => {
        try {
            setLoading(true)
            const response = await axios.post("./api/products/top")
            const productssata = response.data.receivedProduct
            settopproducts(productssata)
            console.log(productssata)
        } catch (error) {
            console.log('Error', error.message);
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getproducts();
        console.log(topproducts)
    }, []);

    return (
        <>
            <Hedder />
            <div className='text-black sm:px-7 dark:text-white mb-5'>
                {topproducts.length > 0 ?
                    topproducts.map((item, index) => <>
                        <Productcard phone={item.Phone} Price={item.Price} index={index} rank={item.rank} ram={item.RAM} storage={item.Storage} /></>
                    ) :
                    (loading ?
                        <Loading text={"Login"} size={"5"} /> :
                        (() => {
                            toast.error("something want wrong");
                            return <h1>Some Thing Want worng</h1>
                        }))
                }
            </div>
        </>
    )
}

export default Products
