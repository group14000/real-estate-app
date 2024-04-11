"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

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
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-full p-8">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </div>
  );
};

export default MapboxAddressSearch;
