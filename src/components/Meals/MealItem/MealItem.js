import React from "react";
import styles from './MealItem.module.css';

const MealItem = (props) => {
    const formattedPrice = `₴${props.price.toFixed(2)}`;

    return <li className={styles.meal}>
        <div>
            <h3>{props.title}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{formattedPrice}</div>
        </div>
        <div>

        </div>

    </li>
}
export default MealItem;