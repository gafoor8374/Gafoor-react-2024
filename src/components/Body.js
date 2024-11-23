import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData"; 

const Body = () =>{
 const [resturantList, setResturantList] = useState(resList);

//  const HandleonClick = () =>{
//     const filterlist = resturantList.filter((res)=>{
//         return res.info. avgRating>4.5;
//      });
//      setResturantList(filterlist);
//  }
    return (
      <div className="body">
        <div className="button">
         <button className="filter-btn"
         onClick={() =>{
                 const filterlist = resturantList.filter((res)=>{
                   return res.info. avgRating>4.5;
               });
                setResturantList(filterlist);
         }}>Filter Restaurant</button>
        </div>
        <div className="res-container">
          {resturantList.map((restaruant) => (
            <RestaurantCard key={restaruant.info.id}resData={restaruant} />
          ))}
        </div>
      </div>
    );
};

export default Body;