"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Button } from "@/components/ui/button";

const MapboxAddressSearch = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Search for property",
      marker: false,
    });

    map.addControl(geocoder);

    return () => map.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg mx-auto p-8 flex flex-col items-center">
        <div
          ref={mapContainer}
          className="w-full md:w-96 h-64 md:h-96 mb-4 md:mb-8"
        />
        <div className="w-full md:w-96 flex">
          <Button className="p-2 border border-gray-300 rounded-r-md">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapboxAddressSearch;
