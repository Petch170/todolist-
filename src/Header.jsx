// import React from "react";
import { TbPencilPlus } from "react-icons/tb";
import PropTypes from 'prop-types';

const Header = ({handlePopup}) => {
  return (
    <div className="header flex justify-between items-center border-black border-b-2 py-2 m-2 ">
      <p className=" text-4xl font-mono mx-3 text-center ml-3">My Tasks</p>
      <div
        className=" rounded-md  p-3 bg-cyan-700"
        onClick={() => handlePopup("open")}
      >
        {" "}
        {/* setpopup เป็นtrue เมื่อกดicon ให้ตรงเงื่อนไข */}
        <p>
          <TbPencilPlus size={20} />
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
   handlePopup: PropTypes.func.isRequired,
}

export default Header;
