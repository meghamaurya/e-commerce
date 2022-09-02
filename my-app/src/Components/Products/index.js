import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../functions/products';
import "./styles.css";
export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // getProducts().then(function (response) {
        //     console.log(JSON.stringify(response.data));
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <>
            <h2>Products List</h2>
            <div className='productList'>
                {products?.map((product) => {
                    return (
                        <div className='product-block'>
                            <img alt={product.title} src={product.image} width="100px" />
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
