import React from "react";

function ListingCard({ listingData }) {
  return (
    <div className="ListingCard">
      <h2>{listingData.listingName}</h2>
      <h3>By {listingData.listingAuthor}</h3>
    </div>
  );
}

export default ListingCard;
