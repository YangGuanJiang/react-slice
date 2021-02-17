import React from "react";

const PictureCard = ({pic}) =>  (
    <img src={pic} alt={pic} className="pic" style={{objectFit: "cover", height: "800px", width: "500px"}}/>
)
export default PictureCard;
