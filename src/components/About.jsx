import css from "./About.module.css";

function About() {
  return (
    <>
      <header className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <main
            className={`about container col-md-12 col-12 d-flex flex-column flex-md-row  ${css.main}`}
          >
            <figure className={`${css.imgContanier} col-md-5 col-12`}>
              <img
                src="src\assets\shop.svg"
                alt="Woman Carrying Tote Bags"
                className={`${css.img} img-fluid rounded`}
              />
            </figure>
            <section className={`${css.aboutintro} col-md-6 col-12`}>
              <h1 className={`${css.maintitle} display-4 text-primary px-5`}>
                Welcome to <span className="badge logo">QuickCart</span>
              </h1>
              <p className="tagline lead">
                Your one-stop shop for everything you need! <br />
                Explore more than ongoing sales and offers!
              </p>
              <section className="buttons d-flex flex-wrap">
                <button className="btn btn-outline-primary d-flex align-items-center mx-1">
                  Explore
                  <span className="material-symbols-outlined">north_east</span>
                </button>
                <button className="btn btn-outline-primary d-flex align-items-center mx-1">
                  Learn More
                  <span className="material-symbols-outlined">north_east</span>
                </button>
              </section>
            </section>
          </main>
        </div>
      </header>
    </>
  );
}
export default About;
