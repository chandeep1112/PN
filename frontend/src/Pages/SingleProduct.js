import React from 'react'
import {useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const[product,setProducts]=useState([]);
const params= useParams();
const navigate = useNavigate();


useEffect(() => {
    fetch(`/api/products/${params._id}`)
    .then(res => res.json())
    .then(product => {
        setProducts(product);
    })
}, [params._id]);


    return (
        <div className=" container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={()=>navigate("/")}>BACK</button>
            <div className="flex">
                <img src={product.image } alt="pizza"/>

                <div className="ml-16">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div >{product.size }</div>
                    </div>
                </div>
        </div>
    )
}

export default SingleProduct;
