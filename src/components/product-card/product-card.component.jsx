import {ProductCardContainer, FooterContainer, Name, Price} from './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
        alert(`${product.name} was added to the cart.`);
    };
    
    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <FooterContainer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
)};

export default ProductCard;