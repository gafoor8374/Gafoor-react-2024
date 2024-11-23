import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    // console.log(props);
    //const {resName, cuisine} = props;
    const {resData} = props;
    const deliveryTime = resData.info.sla.deliveryTime;
    // console.log(deliveryTime);

    //distruing
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo}  =
      resData?.info;

    return(
     <div className="res-card">
        <img 
        className="res-logo"
        alt="res-logo" 
        src={ RES_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
     </div>   
    );
};

export default RestaurantCard;