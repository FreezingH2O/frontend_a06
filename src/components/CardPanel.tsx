"use client";
import Image from "next/image";
import Card from '@/components/Card';
import { useState } from "react";

export default function CardPanel() {

    const [ratings, setRatings] = useState(new Map([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
      ]));
    
      const [showing, setShowing] = useState(new Map([
        ["The Bloom Pavilion", true],
        ["Spark Space", true],
        ["The Grand Table", true]
      ]));


      const trueCount = Array.from(showing.values()).filter(value => value).length;

      const handleRatingChange = (venueName: string, newValue: number) => {
        setRatings(prevRatings => new Map(prevRatings).set(venueName, newValue));
        setShowing(prevShowing=> new Map(prevShowing).set(venueName,true));
      };

      const handleShowingChange = (venueName: string) => {
        setShowing(prevShowing=> new Map(prevShowing).set(venueName,false));
      };

  const data1 = {
    venueName: "The Bloom Pavilion", 
    imgSrc: "/img/bloom.jpg", 
    description: "A charming garden venue surrounded by lush floral landscapes, perfect for outdoor weddings and intimate celebrations. Experience the elegance of nature combined with modern amenities."
  }

  const data2 = {
    venueName: "Spark Space", 
    imgSrc: "/img/sparkspace.jpg", 
    description: "A vibrant and contemporary event space designed for corporate gatherings, workshops, and social events. Featuring state-of-the-art facilities and dynamic interiors, Spark Space ignites creativity and connection."
  }

  const data3 = {
    venueName: "The Grand Table", 
    imgSrc: "/img/grandtable.jpg", 
    description: "A sophisticated dining hall with luxurious décor, ideal for gala dinners, receptions, and private banquets. Indulge in an exquisite culinary experience in an atmosphere of grandeur and refinement."
  }
  
  return (
    <div>
    
      <div className="flex flex-row flex-wrap gap-8 m-8 mx-[5vw]">
        <Card {...data1} rating={ratings.get("The Bloom Pavilion") ?? 0} onRatingChange={handleRatingChange} />
        <Card {...data2} rating={ratings.get("Spark Space") ?? 0} onRatingChange={handleRatingChange} />
        <Card {...data3} rating={ratings.get("The Grand Table") ?? 0} onRatingChange={handleRatingChange} />
      </div>

<div className="m-10">
      <h2 className="font-bold">Venue List with Ratings : {trueCount}</h2>
      {Array.from(showing.entries()).filter(([key, value]) => value).map(([key]) => (
        <h4 key={key} 
        onClick={() => handleShowingChange(key)}
        data-testid={key}
        >{key} : {ratings.get(key)}</h4> 
      ))}

    </div>
    </div>
  );
}

