import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">
         Dashboard 
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
