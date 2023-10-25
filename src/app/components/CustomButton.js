"use clent"

const CustomButton = ({ title, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {title}
   send Message </button>
  );
};

export default CustomButton;

