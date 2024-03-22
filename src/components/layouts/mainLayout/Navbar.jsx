import Container from "../../ui/Container";
import logo from "../../../assets/logo/logo.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavItem = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#353535] font-bold hover:text-[#353535] "
            : "hover:text-slate-300"
        } `
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/demo"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#353535] font-bold hover:text-[#353535] "
            : "hover:text-slate-300"
        } `
      }
    >
      Demo
    </NavLink>
    <NavLink
      to="/about-us"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#353535] font-bold hover:text-[#353535] "
            : "hover:text-slate-300"
        } `
      }
    >
      About-Us
    </NavLink>
    <NavLink
      to="/pricing"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#353535] font-bold hover:text-[#353535] "
            : "hover:text-slate-300"
        } `
      }
    >
      Pricing
    </NavLink>
  </>
);
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`w-full fixed   ${isScrolled ? "bg-white z-30 shadow-md" : "border-b-2 border-[#1663C1]"}`}>
      <Container className=" right-0 left-0">
        <div className="flex justify-between items-center py-[10px]">
          <div>
            <img className="w-[86px] h-[50px]" src={logo} alt="" />
          </div>
          <nav className="flex items-center space-x-6 text-[#232323] text-[16px]">
            {NavItem}
          </nav>
          <div>
            <button className="border-4 border-[#1663C1] bg-none md:px-[59px] md:py-[17px] px-5 py-2 rounded-[10px] text-[18px] font-semibold text-[#1663C1] mx-3">
              Contact Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
