import css from "../Cards.module.css"
function Card ({title, subtitle, btnText}) {
    return <div className={`card ${css.card} mx-1 my-1 container col-md-3`}>
            
    <div className={`card-body d-flex ${css.cardbody}`}>
      <h5 className="card-title  my-2">{title}</h5><div
      src="src\assets\gradient.png"
      className={`${css.cardimg} card-img-top rounded my-2 cardimg`}
    ></div>
      <p className="card-text  my-2">
        {subtitle}
      </p>
      <a href="#" className={`btn btn-primary  my-2 ${css.button}`}>
        {btnText}
      </a>
    </div>
  </div>
}
export default Card;