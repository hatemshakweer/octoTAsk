import React from "react";
import GoogleMapReact from "google-map-react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const LocationPin = ({ text }) => (
  <div class="flex items-center justify-center w-72 pr-20">
    <TriangleDownIcon class="w-1/5 text-red-800 "></TriangleDownIcon>
    <p class="outline outline-offset-2 outline-4 text-xs w-2/5 md:w-3/5 md:text-base text-red-800 font-medium ml-4">
      {text}
    </p>
  </div>
);

function Map(props) {
  // console.log(props);
  return (
    <div class="">
      <h2 class="text-xl text-center font-bold uppercase p-10">
        Come Visit Us At Our Branch
      </h2>

      <div class="h-64 md:h-96 w-full bg-gray-200">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          // defaultCenter={props.location}
          defaultZoom={props.zoomLevel}
          // center={(props.location.lat, props.location.lng)}
          center={{ lat: props.location.lat, lng: props.location.lng }}
        >
          <LocationPin
            lat={props.location.lat}
            lng={props.location.lng}
            text={props.location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;
