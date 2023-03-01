import { useLocation, useParams, Link } from "react-router-dom";
import products from "../Home/product.json";
export default function HomeProdDesc() {
    const location = useLocation();
    console.log("props", location);
    const params = useParams();
    const prod = products.find((p) => p.id == params.productId);
    return (
        <div key={params.id}>
            <Link to={location.state ? location.state.from : "/"}>
                <span>back</span>
            </Link>
            <h1>{prod.title}</h1>
            <img alt={prod.title} src={prod.image} width="200" />
            <p>{prod.description}</p>
            <b>Price: {prod.price}</b>
        </div>
    )
}