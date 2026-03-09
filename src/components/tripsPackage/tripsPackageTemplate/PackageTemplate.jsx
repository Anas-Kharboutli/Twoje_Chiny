

const PackageTemplate = ({imgURL, tripDuration, placeName, 
                       placeDescription, tripPrice, tripLink}) => {
  return (
     <>
    <div className="card" style={{width: "18rem"}}>
  <img src={imgURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{placeName}</h5>
    <p className="card-text">{placeDescription}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{tripDuration}</li>
    <li className="list-group-item">{tripPrice}</li>
  </ul>
  <div className="card-body">
    <a href="#" class="btn btn-primary">{tripLink}</a>
  </div>
</div>
</>
  )
}

export default PackageTemplate
