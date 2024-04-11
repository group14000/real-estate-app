import MapboxAddressSearch from "@/app/_components/MapboxGeocoder";
import React from "react";

const AddNewListing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-10 flex flex-col gap-5 items-center justify-center">
        <h2 className="font-bold text-2xl">Add New Listing</h2>
        <div className="text-center">
          <h2 className="text-gray-500">
            Enter Address which you want to list
          </h2>
          <MapboxAddressSearch />
        </div>
      </div>
    </div>
  );
};

export default AddNewListing;
