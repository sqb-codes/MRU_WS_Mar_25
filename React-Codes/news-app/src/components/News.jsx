import { useEffect } from "react";
import { useState } from "react";
import "./Styles.css";

export const News = () => {
    const API_KEY = '695e07af402f4b119f0703e9b19f4683';
    const COUNTRY = 'us';
    const CATEGORY = 'sports'
    const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${API_KEY}`;
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then((response) => {
            if(!response.ok) throw new Error("Failed to get News Data");
            return response.json();
        })
        .then((data) => {
            setNewsData(data.articles);
        })
        .catch((error) => {
            console.log("Error :",error);
        })
    }, []);

    return (
        <div>
            <ul>
                {
                    newsData.map((item) => (
                        <li>
                            <img src={item.urlToImage}/>
                            <h3>{item.title}</h3>
                            <p>
                                {item.description}
                            </p>
                        </li>       
                    ))
                }
            </ul>
        </div>
    )

}