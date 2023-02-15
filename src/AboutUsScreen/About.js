import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { Card } from "flowbite-react";

function About() {
  const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  const [day, setDay] = useState(moment().format("dddd"));
  const [sinceOpening, setSinceOpening] = useState(
    moment("20221030", "YYYYMMDD").fromNow()
  );

  // useEffect(() => {
  //   setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
  // }, []);

  useEffect(() => {
    setInterval(() => {
      setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    setSinceOpening(moment("20150217", "YYYYMMDD").fromNow());
  }, []);

  return (
    <div class="h-screen bg-gray-100">
      {/* <div class="grid grid-cols-1 gap-4 content-center align-middle">
        <p class="text-3xl">
          Hi we are the best Ecommerce platform ever been la t2oly Amazon walla
          batee5
        </p>
        <p class="text-3xl">you can contact us and please order from us</p>
        <p class="text-3xl">
          Here is a live clock to make you realise that you are too late to
          order
        </p>

        <p class="text-6xl">{day + " " + date}</p>
      </div> */}
      <div class="flex justify-center">
        <div class="grid lg:grid-cols-2 max-w-5xl">
          <div class="flex items-center justify-center w-full">
            <div className="max-w-2xl py-8 px-8 h-full">
              <Card>
                <div class="flex-col justify-center items-center">
                  <p class="text-6xl text-center py-1">Welcome</p>
                  <p class="text-3xl text-center">
                    We are one of the best Ecommerce companies in Egypt we first
                    started trading {sinceOpening}
                  </p>
                </div>
                {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"></div> */}
              </Card>
            </div>
          </div>
          <div class="flex items-center justify-center w-full">
            <div className="max-w-2xl py-8 px-8 h-full">
              <Card>
                <div class="flex-col justify-center items-center">
                  <p class="text-5xl text-center">{day}</p>
                  <p class="text-5xl text-center">
                    {date.substring(0, date.indexOf(","))}
                  </p>
                  <p class="text-5xl text-center">
                    {date.substring(date.indexOf(",") + 1)}
                  </p>
                </div>
                {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"></div> */}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
