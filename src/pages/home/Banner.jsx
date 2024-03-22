import Container from "../../components/ui/Container";
import top from "../../assets/banner/top-dot.png";
import bottom from "../../assets/banner/bottom-dot.png";
import shopping from "../../assets/banner/shopping-bag.png";
import main from "../../assets/banner/main.png";
import bkash from "../../assets/banner/bkash.png";
import nagad from "../../assets/banner/nagad.png";
import rocket from "../../assets/banner/rocket.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="w-full lg:h-[1000px] h-full bg-[#EFF3FF] pt-[178px] pb-[152px]">
      <Container className="h-full">
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex-1">
            <h2 className="text-[64px] font-bold leading-[80px]">
              Simplify Your <br />{" "}
              <span className="text-blue-700">Payment</span>
              <br /> Management
            </h2>
            <p className="my-[39px]">
              Edu Pay offers a range of payment automation solutions for small{" "}
              <br />
              entrepreneurs in Bangladesh.
            </p>
            <div className="flex items-center gap-3">
              <button className="text-white font-semibold text-[18px] px-[67px] py-[19px] bg-blue-600 rounded-lg">
                Get Start
              </button>
              <button className="text-white font-semibold text-[18px] px-[67px] py-[19px] bg-yellow-600 rounded-lg">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative w-[800px] h-[700px]">
            <div className="absolute top-0 left-0 z-10 flex flex-col gap-4">
              <div className="flex w-[344px] text-[16px] items-center justify-between py-[5px] px-[5px] rounded-full bg-[#fff] shadow-color">
                <div className="size-[40px] bg-[#D0E5FF] rounded-full flex justify-center items-center">
                  <MdOutlineKeyboardDoubleArrowRight className="text-[#1663C1]" />
                </div>
                <p>Super fast transition</p>
                <p className="text-[#1663C1] font-bold">20% Fast</p>
              </div>
              <div className="flex w-[344px] text-[16px] items-center justify-between py-[5px] px-[5px] rounded-full bg-[#fff] shadow-color">
                <div className="size-[40px] bg-[#FFF1D4] rounded-full flex justify-center items-center">
                  <MdOutlineKeyboardDoubleArrowRight className="text-[#FABB3E]" />
                </div>
                <p>Super fast transition</p>
                <p className="text-[#FABB3E] font-bold">20% Fast</p>
              </div>
              <div className="flex w-[344px] text-[16px] items-center justify-between py-[5px] px-[5px] rounded-full bg-[#fff] shadow-color">
                <div className="size-[40px] bg-[#E3FFDB] rounded-full flex justify-center items-center">
                  <MdOutlineKeyboardDoubleArrowRight className="text-[#38C116]" />
                </div>
                <p>Super fast transition</p>
                <p className="text-[#38C116] font-bold">20% Fast</p>
              </div>
            </div>
            <div className="absolute top-44 -left-28">
              <div className="w-[350px] h-[150px] relative">
                <div className="flex items-center gap-[47px]">
                  <div className="size-[147px]">
                    <img className="w-full" src={nagad} alt="" />
                  </div>
                  <div className="size-[147px]">
                    <img className="w-full" src={bkash} alt="" />
                  </div>
                </div>
                <div className="w-full flex justify-center absolute top-3/4">
                  <div className="size-[147px]">
                    <img className="w-full" src={rocket} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[650px] h-full absolute  right-0">
              <img
                className="w-[361px] h-[295px] absolute top-0 right-0"
                src={top}
                alt=""
              />
              <img
                className="w-[610px] h-[503px] absolute left-0 right-0 top-0 bottom-0 m-auto object-cover"
                src={main}
                alt=""
              />
              <img
                className="w-[361px] h-[295px] absolute bottom-0 left-0"
                src={bottom}
                alt=""
              />
              <img
                className="w-[150px] h-[200px] absolute right-10 bottom-14"
                src={shopping}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
