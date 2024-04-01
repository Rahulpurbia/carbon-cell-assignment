import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, OrganizationIcon, AssetsIcon, MenuIcon } from "../../assets";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Organization",
    href: "/organization",
    icon: OrganizationIcon,
  },
  {
    name: "Assets",
    href: "/assets",
    icon: AssetsIcon,
  },
];

const NavigationBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  const isActive = (href) => {
    return href === location.pathname;
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div>
      <header className="mobile-header">
        <img src={MenuIcon} width={"30px"} onClick={toggleNavbar} />
      </header>
      <nav className={`navbar ${open ? "navbar-open" : ""}`}>
        <div className="logo">Logo</div>
        <div className="nav-link-wrapper">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`nav-link ${
                isActive(item.href) ? "nav-link-active" : ""
              }`}
            >
              <img src={item.icon} width={"20px"} height={"20px"} />
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
