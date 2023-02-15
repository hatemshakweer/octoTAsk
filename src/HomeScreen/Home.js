import React from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../ScreenSizeHandling/WindoSize";
import HomeTable from "./HomeTable";
import HomeCards from "./HomeCards";

// const [data,setData] = useState([]);

function Home() {
  //window size
  const { height, width } = useWindowDimensions();
  //for getting data from api
  const [data, setData] = useState({ data: [] });
  //  const [dataList, setDataList] = useState({ dataList: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [datalist, setDataList] = useState([]);

  const getInitialData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("https://dummyjson.com/products/", {
        headers: {
          Accept: "application/json",
        },
      });
      // console.log("data is: ", JSON.stringify(data, null, 4));
      // JSON.stringify(data, null, 4)

      setData(data.products);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      let temp = data.map((item, index) => ({
        ...item,
        Hatem: "Hatem",
      }));
      setDataList(temp);
    }
  }, [data]);

  useEffect(() => {
    getInitialData();
  }, []);

  //for handling search in table
  //this function can be replaced by an annonymous function directly on change in elements as you did in contacts page
  const [searchValue, setsearchValue] = React.useState("");
  const handleChange = (event) => setsearchValue(event.target.value);
  const handleClick = () => {
    console.log(searchValue);
    if (searchValue !== "") {
      if (data.length > 0) {
        let temp = data.filter((item, index) => {
          // if (item.title === searchValue) {
          //   return item;
          // }
          return item.title == searchValue;
        });
        setDataList(temp);
      }
    } else {
      setDataList(data);
    }
  };

  return (
    <div class="h-full bg-gray-100">
      <div class="flex items-center justify-center">
        <div class="flex py-6 w-2/3 justify-between">
          <div class="w-4/5 px-2">
            <Input
              value={searchValue}
              onChange={handleChange}
              placeholder="search products"
            />
          </div>
          <div class="w1/5 flex items-center justify-center">
            <button
              className=" rounded-lg bg-blue-700 h-full w-full text-center text-xs md:text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              <p class="px-4">Fetch Data</p>
            </button>
          </div>
        </div>
      </div>
      {data.length > 0 ? (
        width > 768 ? (
          <div class="flex justify-center">
            <HomeTable datalist={datalist}></HomeTable>
          </div>
        ) : (
          <div class="flex flex-col items-center justify-center w-full">
            <HomeCards datalist={datalist}></HomeCards>
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
