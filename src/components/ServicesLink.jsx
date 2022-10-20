import React from "react";
import { NavLink } from "react-router-dom";

const ServicesLink = () => {
  const activeService = "border px-[15px] py-[13px] bg-[#29ABE2]";
  const normalService = "border px-[15px] py-[13px] ";

  return (
    <div>
      <div className="text-white text-sm font-medium flex items-center justify-center flex-wrap gap-[30px] py-[46px] md:px-[20px] px-[114px] bg-[#01303F]">
        <NavLink to="/solutions/web"
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Web development
        </NavLink>
        <NavLink to="/solutions/cyber"
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Cyber Security
        </NavLink>
        <NavLink to="/solutions/app"
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Web app development
        </NavLink>
        <NavLink to="/solutions/graphics"
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Graphics design
        </NavLink>
        <NavLink to="/solutions/digital"
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Digital Marketing
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Artificial Intelligence
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Project Management
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Printing
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Video Editing
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Cyber Security
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          Laptop and accessories
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeService : normalService
          }
        >
          IT Training
        </NavLink>
      </div>
    </div>
  );
};

export default ServicesLink;
