import React from "react";
import styles from './PromoText.module.css'
const PromoText = () => {
    return <section className={styles['promo-text']}>
        <h2>Ресторан Суші "Япона Кухня"</h2>
        <p>Япона Кухня - це онлайн суші-ресторан, в якому улюблені суші та сашимі,
            роли та інші страви національної японської кухні робить команда
            професійні кухарі.</p>
        <p>Швидка робота та якісна продукція, а також справжнісінькі
            компоненти надають гарного смаку стравам, дарують насолоду від трапези.</p>
    </section>
}
export default PromoText;