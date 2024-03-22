import logo from "../../../assets/logo/logo.svg";
import Container from "../../ui/Container";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaFacebookF  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#2D2D2D] pb-[50px] pt-[120px] text-white">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-2 space-y-8">
            <img className="w-[86px] h-[50px]" src={logo} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex items-center gap-3">
              <div className="size-[30px] border rounded-full flex justify-center items-center border-[#EDC702] cursor-pointer">
                <FaLinkedinIn className="size-[16px] text-[#EDC702]" />
              </div>
              <div className="size-[30px] border rounded-full flex justify-center items-center border-[#EDC702] cursor-pointer">
                <FaInstagram className="size-[16px] text-[#EDC702]" />
              </div>
              <div className="size-[30px] border rounded-full flex justify-center items-center border-[#EDC702] cursor-pointer">
                <FaFacebookF  className="size-[16px] text-[#EDC702]" />
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2 flex flex-col justify-start">
            <h2 className="text-[#FABB3E] text-[16px] mb-5">Menu</h2>
            <div className="flex flex-col space-y-3">
              <span>Work</span>
              <span>About</span>
              <span>Service</span>
              <span>contact</span>
              <span>About</span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-start">
            <h2 className="text-[#FABB3E] text-[16px] mb-5">Page</h2>
            <div className="flex flex-col space-y-3 ">
              <span>404 Error Page</span>
              <span>Password</span>
              <span>Style Grid</span>
              <span>Lichance</span>
              <span>About</span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-start">
            <h2 className="text-[#FABB3E] text-[16px] mb-5">Service</h2>
            <div className="flex flex-col space-y-3">
              <span>Strategy</span>
              <span>Creative Content</span>
              <span>Web Development</span>
              <span>Design Service</span>
              <span>About</span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-start">
            <h2 className="text-[#FABB3E] text-[16px] mb-5">Menu</h2>
            <div className="flex flex-col space-y-3">
              <span>Work</span>
              <span>About</span>
              <span>Service</span>
              <span>contact</span>
              <span>About</span>
            </div>
          </div>
        </div>
        <div className="border-y-2 border-[#fff] py-[48px] mt-[137px] grid grid-cols-12">
          <div className="col-span-4">
            <h2 className="mb-3">Edulife Agency</h2>
            <p>Khagrachari Sadar, Shantibag</p>
          </div>
          <div className="col-span-4">
            <p className="mb-3">Mail: Solution.example.com</p>
            <p>PH: 38490850823190 </p>
          </div>
          <div className="col-span-4 relative">
            <input
              type="text"
              placeholder="Your Email id"
              className=" px-[17px]  py-[16px] text-[16px] w-full  text-black  border-none focus:outline focus:outline-slate-400"
            />
            <button className="px-[22px] py-[16px] text-[#000] text-[16px] bg-[#FABB3E] absolute right-0  font-medium ">
              Subscribe
            </button>
          </div>
        </div>
        <p className="mt-[50px] text-center">
          All Right Reserbed Edulige Edulife Agency 2024
        </p>
      </Container>
    </div>
  );
};

export default Footer;
