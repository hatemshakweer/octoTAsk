import React from "react";
import Map from "./Map";
import { useState, useEffect } from "react";
import LocationCard from "./LocationCard";

const location = [
  {
    id: 1,
    name: "New Cairo Branch",
    phone: "+20 1010166958",
    address: "61 West Arabella, Fifth Settelment, New Cairo, Cairo",
    lat: 29.989861063270627,
    lng: 31.424234018721382,
  },
  {
    id: 2,
    name: "6th of October Branch",
    phone: "+20 1054166958",
    address: "71 Hamada, Sheikh Zayed, 6th of October, Cairo",
    lat: 30.048980172091646,
    lng: 30.98896488426736,
  },
  {
    id: 3,
    name: "Maadi Branch",
    phone: "+20 1054141354",
    address: "41 9th Street, Maadi, Cairo",
    lat: 29.96224524851576,
    lng: 31.25690799593555,
  },
];

function Contact() {
  const [currentLocation, setCurrentLocation] = useState(location[0]);

  const handleChangeLocation = (e) => {
    // console.log(e);
    const id = e.currentTarget.getAttribute("data-value-1");
    setCurrentLocation(location[id - 1]);
  };

  return (
    <div class="h-full bg-gray-100">
      <div class="container py-24 px-6 mx-auto ">
        <section class="mb-32 text-gray-800 text-center">
          <div class="px-6 lg:py-4 md:px-12">
            <div class="container mx-auto xl:px-32">
              <div class="grid lg:grid-cols-2 items-center">
                <LocationCard
                  handleChangeLocation={handleChangeLocation}
                  location={location}
                ></LocationCard>
                <div class="md:mb-12 lg:mb-0 px-1">
                  <div class=" shadow-lg rounded-lg">
                    <div>
                      <Map location={currentLocation} zoomLevel={17}></Map>;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
