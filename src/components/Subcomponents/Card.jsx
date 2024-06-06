import css from "../Cards.module.css"
function Card ({title, subtitle, btnText}) {
    return <div className={`card ${css.card} mx-1 my-1 col-md-3`}>
            
    <div className={`card-body d-flex ${css.cardbody}`}>
      <h5 className="card-title">{title}</h5><img
      src="src\assets\gradient.png"
      className={`${css.cardimg} card-img-top rounded`}
      alt="gradient"
    />
      <p className="card-text">
        {subtitle}
      </p>
      <a href="#" className={`btn btn-primary ${css.button}`}>
        {btnText}
      </a>
    </div>
  </div>
}
export default Card;