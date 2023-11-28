


import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { menuItems } from "../../constant/data";

const Breadcrumbs = () => {
  const location = useLocation();
  const locationName = location.pathname.replace("/", "");

  const [isHide, setIsHide] = useState(null);
  const [groupTitle, setGroupTitle] = useState("");

  useEffect(() => {
    const currentMenuItem = menuItems.find(
      (item) => item.link === locationName
    );

    const currentChild = menuItems.find((item) =>
      item.child?.find((child) => child.childlink === locationName)
    );

    if (currentMenuItem) {
      setIsHide(currentMenuItem.isHide);
    } else if (currentChild) {
      setIsHide(currentChild?.isHide || false);
      setGroupTitle(currentChild?.title);
    }
  }, [location, locationName]);

  return (
    <>
      {!isHide ? (
        <div className="flex bg-red-100 h-36 pl-64 pt-10">
            <p className="text-primary-500 font-bold">
             Home /
            </p>
            <p className="capitalize text-black font-black">
              {locationName}
            </p>
         
        </div>
      ) : null}
    </>
  );
};

export default Breadcrumbs;
