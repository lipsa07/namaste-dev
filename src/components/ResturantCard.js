
const ResturantCard = (data)=>{
    return (
        <div className="resturant-card">
            <img src={data.resData.banner_image_es}></img>
            <h3>{data.resData.brand_name}</h3>
            <h6>{data.resData.description}</h6>
            <h5>Category: {data.resData.slug}</h5>
        </div>
    )
}

export default ResturantCard;
