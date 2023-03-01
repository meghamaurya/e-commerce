import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./styles.css";
export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const response = await axios.get("https://dummyjson.com/products");
            const data = await response.data;
            setProducts(data.products);
            console.log(data.products, "data");
        }
        fetchdata();
    }, [])
    return (
        <>
            <h2>Products List</h2>
            <div className='productList'>
                {products.map((product) => {
                    return (
                        <div className='product-block'>
                            <img alt={product.title} src={product.images[0]} width="100px" />
                            <p key={product.id}>
                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
