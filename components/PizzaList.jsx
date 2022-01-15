import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container} id="pizzalist">
      <h1 className={styles.title}>Perfect has 7 letters. So does Pizzzza.</h1>
      <p className={styles.desc}>
        Here at <b>Mars</b>, we aim to serve great pizza from our family to
        yours. So whether it is dining in one of our locations, or in the
        comfort of your home, we got the pizzas for you!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
