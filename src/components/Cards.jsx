import css from "./Cards.module.css"; // Import styles from Cards.module.css
import Card from "./Subcomponents/Card";
function Cards() {
  return (
    <>
      <section
        className={`${css.container} container d-flex justiffy-content-center align-items-center`}
      >
        <div
          className={`${css.cardcont} container justify-self-center row d-flex justify-content-center py-5`}
        >
            <h2 className={`${css.displaymain} display-1 text-center py-3 fw-normal`}>Shop the Best Deals! </h2>
          <Card
            title={"Discover Trendy Apparel!"}
            subtitle={
              "Enjoy a Massive 50% Discount on Our Exquisite and Exclusive Selection of Clothes. Limited Time Offer!"
            }
            btnText={"Start Shopping!"}
          />

          <Card
            title={"Upgrade Your Wardrobe!"}
            subtitle={
              "Shop the latest arrivals and get an extra 20% off on your first purchase. Use code NEW20 at checkout!"
            }
            btnText={"Shop New Arrivals!"}
          />

          <Card
            title={"Summer Clearance Sale!"}
            subtitle={
              "Don't miss out on our summer clearance! Save up to 70% on select items. While supplies last!"
            }
            btnText={"Shop Clearance!"}
          />
        </div>
      </section>
      <figure className="sphere container">
        <img className={`${css.imgsphere} img img-fluid`} src="./src/assets/sphere.svg" alt="decoration" />
      </figure>
    </>
  );
}
export default Cards;
