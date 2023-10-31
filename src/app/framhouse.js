// pages/app/apartments.js
export default (req, res) => {
    const data = {
      title: "For Rent",
      description: "New Apartment Nice View",
      location: "Belmont Gardens, Chicago",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      price: "$34,900/Month",
    };
    res.status(200).json(data);
  };
  