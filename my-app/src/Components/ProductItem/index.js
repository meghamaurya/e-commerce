import './styles.css';
export default function ProductItem(props) {
    const { product } = props;
    return (
        <div className="product-item">
            <img alt={product.title} src={product.image} width="150px" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <b>Price: {product.price}</b>
        </div>
    )
}