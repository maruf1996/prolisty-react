import React from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import ListingCategoriesOne from "../../component/Listing/ListingCategoriesOne";

const CategoriesPage = () => {
  return (
    <>
      <Breadcumb title="Categories" />
      <ListingCategoriesOne />
    </>
  );
};

export default CategoriesPage;
