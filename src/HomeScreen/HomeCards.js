import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

function HomeCards(props) {
  const [datalist, setDataList] = useState([]);

  useEffect(() => {
    setDataList(props.datalist);
  }, [props]);

  const navigate = useNavigate();
  const handleDetailsClick = (e) => {
    const id = e.currentTarget.getAttribute("data-value-1");
    //this is the best ay to send data in handlers without them getting called without making extra components in between or inline functions instead or binding
    // console.log("Values1", id);
    let temp = datalist.find((item, index) => {
      // if (item.title === searchValue) {
      //   return item;
      // }//todo how to write it
      return item.id == id;
    });
    // console.log(temp);
    navigate("/details", { state: { temp } });
  };

  return (
    <div>
      {datalist.map((item, key) => (
        <div
          className="max-w-2xl py-8 px-8"
          onClick={handleDetailsClick}
          data-value-1={item.id}
        >
          <Card>
            <div className="h-auto w-auto">
              <img src={item.thumbnail} alt="thumbnail" />
            </div>
            <p className="text-3xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {item.brand}
            </p>
            <p className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </p>
            <div className="flex justify-end">
              <span className="text-2xl font-bold text-gray-900 dark:text-white pr-3">
                {"$" + item.price}
              </span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default HomeCards;
