import React, {useContext} from "react";
import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./Cartitem";

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `₴${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {

    }

    const addCartItemHandler = (item) => {

    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onAdd={addCartItemHandler.bind(null, item)}
                        onRemove={removeCartItemHandler.bind(null, item.id)}/>
                ))}
        </ul>
    );
    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Сума</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button-alt']} onClick={props.onHideCart}>Закрити</button>
            {hasItems && <button className={styles.button}>Замовити</button>}
        </div>
    </Modal>
}
export default Cart;