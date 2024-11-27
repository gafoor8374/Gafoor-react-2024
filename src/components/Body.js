import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData"; after using live API we  cannot use mockdata.

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]); //useing this variable for filter restaurant we cannot modify actual restaurant list

  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData(); // calling a function
  }, []);

  // using fetch method call a API by js engine usig async and await
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //Using optional changing "?."
    setResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //copy of list of restaurant
  };

  //It is Conditional rendering
  //  if(resturantList.length === 0){
  //     return  <Shimmer /> //<h1>Loading......</h1> //using make fake shimmer ui
  //  }

  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="serach">
          <input
            type="text"
            className="serach-box"
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filtter to the restraurant update the UI we update the restaurant list after filter again then it should be not working for all restarunt list then we should be take for another state variable for filter list
              // console.log(serachText);
              const filterRestaurant = resturantList.filter((res) =>
                res.info.name.toLowerCase().includes(serachText.toLowerCase())
              );
              // console.log(filterRestaurant);
              setFilterRestaurants(filterRestaurant);
            }}
          >
            Serach
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = resturantList.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setResturantList(filterlist);
          }}
        >
          Filter Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((restaruant) => (
          <RestaurantCard key={restaruant.info.id} resData={restaruant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
