import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Loader from "./shimmer";
const Body = () => {
    const restList = [];
    const [resturantList, setResturantList] = useState(restList);
    useEffect(()=>{
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch("https://www.eatsure.com/v1/api/get_restaurants");
        const json = await data.json();
        const resData = json.data;
        //Optional Chaining
        setResturantList(json?.data?.data);
    };

    // Conditional Rendering (Ternary Operator)
    return resturantList.length === 0 ? <Loader/> : (
        <div className="body">
            <div className="filter">
                <input type="text" placeholder="search here"></input>
                <button className="search-btn">Search</button>                
                <button className="filter-btn" onClick={() => {
                    setResturantList(resturantList.filter((res) => res.brand_id > 23));                    
                }}> Top rated resturants</button>
            </div>
            <div className="resturant-container">
                {
                    resturantList.map((resturant) => (
                        <ResturantCard key={resturant.brand_id} resData={resturant} />
                    ))
                }
            </div>
        </div>
    );
}

export default Body;