import "../styles/Projects.css"
const Pcard = (props) => {
  return (
    <div className="my-5">
    <div className="offset-card d-flex align-items-center gap-4 p-4 p-card-main">
      <img
        src={props.item.img}
        alt="Offset Africa"
        className="img-fluid rounded p-card-img"
      />

      <div className='div_p_card'>
        <h2 className="fw-bold text-white">{props.item.title}</h2>
        <p className="text-white-50">
          {props.item.description}
        </p>
        <div className="d-flex flex-wrap">
            {
                props.item.tech_stacks.map((item)=> <span className="tag">{item}</span>)
            }
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pcard
