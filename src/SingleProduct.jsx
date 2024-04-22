
import PropTypes from 'prop-types';

const SingleProduct = ({product, handleCart}) => {
    return (
        <div>
            <div className="card">
                <img src={product.image} alt="" />
                <h1>{product.title.slice(0,10)}</h1>
                <p>{product.description.slice(0, 150)}</p>
                <div className="footer-container">
                    <h3>{product.price} $</h3>
                    <button onClick={() => handleCart(product)} className='add-btn'>Add to Card</button>
                </div>
          </div>
        </div>
    );
};

SingleProduct.propTypes = {
    product: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
};

export default SingleProduct;