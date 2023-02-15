import { Container } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Rating, Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Details() {
  const { state } = useLocation();
  const { temp } = state;
  const [collectedData, SetCollectedData] = useState("");

  useEffect(() => {
    let finalPrice = (
      temp.price *
      ((100 - temp.discountPercentage) / 100)
    ).toFixed(2);
    let temp2 = { ...temp, finalPrice: finalPrice };
    SetCollectedData(temp2);
  }, []);

  const navigate = useNavigate();
  const handleAddCartClick = (e) => {
    // e.preventDefault;
    navigate("/cart", { state: collectedData });
  };

  return (
    <div class="flex items-center justify-center w-full">
      <div className="max-w-2xl py-8 px-8">
        {collectedData !== "" ? (
          <Card>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel
                indicators={false}
                leftControl={<></>}
                rightControl={<></>}
                slideInterval={1000}
              >
                {collectedData.images.map((item, key) => (
                  <img src={item} alt={"image " + key} />
                ))}
              </Carousel>
            </div>
            <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {collectedData.category}
            </p>
            <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {collectedData.brand + " " + temp.title}
            </p>
            <p className="text-xl font-normal tracking-tight text-gray-900 dark:text-white">
              {collectedData.description}
            </p>
            <Rating>
              <Rating.Star />
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {collectedData.rating}
              </p>
            </Rating>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {"$" + collectedData.price}
              </span>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <span className="text-xl font-bold text-red-700 dark:text-red-700">
                {"%" + collectedData.discountPercentage + " off"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {"$" + collectedData.finalPrice}
              </span>
              <a
                onClick={handleAddCartClick}
                data-value-1={collectedData.id}
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </Card>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Details;
