"use client";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

const MapboxAddressSearch = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      countries: "US",
      placeholder: "Search property address",
      onChange:(place)=>{
        console.log(place);
      }
    });

    map.addControl(geocoder);

    geocoder.on("result", (result) => {
      console.log(result);
    });

    geocoder.on("error", (error) => {
      console.error(error);
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className="w-full h-96 md:h-72 lg:h-96" />;
};

export default MapboxAddressSearch;
