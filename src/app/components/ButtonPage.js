import React from "react";
import CustomButton from "../../components/CustomButton"; // Adjust the import path accordingly

const ButtonPage = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked!");
  };

  return (
    <div>
   
      <CustomButton title="Click Me" onClick={handleButtonClick} />
    </div>
  );
};

export default ButtonPage;





