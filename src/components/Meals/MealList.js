import React from "react";
import styles from './MealList.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Ебі Пармеджано',
        description:
            "Креветка тигрова, сніжний краб, ікра корюшки, суші-сир, сир пармезан, цибуля сушена, олія",
        price: 319,
    },
    {
        id: "m2",
        name: "Хот салмон рол",
        description: "Гарячий рол з лососем, сніжним крабом, вершковим та суші сиром, з томатом, политий соусами",
        price: 304,
    },
    {
        id: "m3",
        name: "Татакі Туна Рол",
        description: "Тунець, креветка тигрова, сир-суші, олія трюфельна, рис для суші, водорості норі, майонез",
        price: 289,
    },
    {
        id: "m4",
        name: 'Поке Вайкікі',
        description:
            "Куряче стегно, авокадо, фіолетова капуста, манго, шпинат, соус манго світ чилі, горіх кеш'ю, сушена",
        price: 199,
    },
    {
        id: "m5",
        name: 'Мері Тенг',
        description:
            " курка, манго, гриб шіїтаке, помідори, огірок, начос, капуста",
        price: 179,
    },
];

const MealList = () => {
    const mealList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            title={meal.name}
            description={meal.description}
            price={meal.price}/>)

    return <Card className={styles.meals}>
        <ul>{mealList}</ul>
    </Card>
}
export default MealList;