import React from "react";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Card from "./components/Card";
import data from "./data";

export default function App ()
{
    const cards = data.map(item => 
        {
            return (
                <Card
                /* Instead of these we use the the following code after comments
                   img = {item.coverImg}
                   rating = {item.stats.rating}
                   reviewCount = {item.stats.reviewCount}
                   location = {item.location}
                   title = {item.title}
                   price = {item.price}
                   openSpots = {item.openSpots}
                   */
                   key = {item.id} //this line removes the error in console to put a key
                   // item = {item} and instead of this we should use SPREAD method
                   {...item}
                />
            )
        })
    return (
        
        <div>
            <Navbar />
            <Grid />
            <section className="cards-list">
                {cards}
            </section>
            
        </div>
        
    )
}