import { Link } from 'react-router-dom';
import Product from './product.json';
import ProductItem from '../ProductItem';
import './styles.css';
export default function Home(props) {
    const productElements = Product.map((prod, i) => {
        return (
            <Link to={`homeproddesc/${prod.id}`} state={{ from: "/" }}>
                <ProductItem key={i} product={prod} />
            </Link>

        )
    })
    return (
        <div>
            <div>welcome {props.user}</div>
            <div className='product-listing'>{productElements}</div>
        </div>
    )
}