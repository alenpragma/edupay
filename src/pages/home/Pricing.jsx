import { useState } from "react";
import Container from "../../components/ui/Container";
import tick from "../../assets/pricing/tick.svg";

const packageName = [
  {
    name: "Basic",
    price: 99,
    available: {
      pament: "1 payment Panel",
      website: "1 website",
      transactions: "Unlimited Transactions",
      update: "Free update",
      support: "Free Support",
    },
  },
  {
    name: "Standard",
    price: 199,
    available: {
      pament: "1 payment Panel",
      website: "1 website",
      transactions: "Unlimited Transactions",
      update: "Free update",
      support: "Free Support",
    },
  },
  {
    name: "Premium",
    price: 299,
    available: {
      pament: "1 payment Panel",
      website: "1 website",
      transactions: "Unlimited Transactions",
      update: "Free update",
      support: "Free Support",
      ami: "remon tripura",
    },
  },
];

const Pricing = () => {
  const [toggle, setToggle] = useState("1");
  const [hover, setHover] = useState(false);
  console.log(hover);

  return (
    <div className="w-full my-[120px] bg-[#EFF3FF] pt-[120px] pb-[167px]">
      <Container>
        <div className=" flex flex-col gap-6 justify-center items-center">
          <h2 className="font-bold text-[48px]">Our Pricing</h2>
          <p className="font-light text-4">
            Integrate with ease using our system. Connect applications and data
            sources,{" "}
          </p>
          <div className="p-2 bg-[#fff] w-fit rounded-full flex items-center gap-2 border-2 border-[#BCBCBC]">
            <button
              onClick={() => setToggle("1")}
              className={`px-[41px] py-[19px] rounded-full font-semibold text-[18px] ${
                toggle == 1
                  ? "bg-[#1663C1] text-[#fff]"
                  : "bg-none text-[#1663C1]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setToggle("2")}
              className={`px-[41px] py-[19px] rounded-full font-semibold text-[18px] ${
                toggle == 2
                  ? "bg-[#1663C1] text-[#fff]"
                  : "bg-none text-[#1663C1]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-[181px]">
          {packageName.map((item, i) => (
            <div key={i} className=" col-span-4 h-fit">
              <div
                className={`bg-[#FABB3E] rounded-lg py-[15px] text-center mb-[20px] ${
                  i == 1 ? "block" : "hidden"
                }`}
              >
                <h2 className="font-medium text-[20px] ">Popular Plan</h2>
              </div>
              <div
                className={`bg-[#fff]  rounded-xl pt-[50px] px-[62px] pb-[67px] flex flex-col items-center space-y-10 relative ${
                  i == 1
                    ? "border border-[#1663C1]"
                    : "border-2 border-t-[#A09F9F] border-r-[#fff] border-l-[#fff] border-b-[#fff] duration-[0.9s]"
                }`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(true)}
              >
                <div className="text-center">
                  <h2 className="font-medium text-[32px] mb-8">{item?.name}</h2>
                  <h3 className="font-light text-4">
                    $<span className="font-bold text-[32px]">{item.price}</span>
                    /Mo
                  </h3>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <span className="flex items-center text-[16px] gap-5">
                    <img className="size-[20px]" src={tick} alt="" />{" "}
                    {item.name}
                  </span>
                  <span className="flex items-center text-[16px] gap-5">
                    <img className="size-[20px]" src={tick} alt="" />
                    {item?.available?.website}
                  </span>
                  <span className="flex items-center text-[16px] gap-5">
                    <img className="size-[20px]" src={tick} alt="" />
                    {item?.available?.transactions}
                  </span>
                  <span className="flex items-center text-[16px] gap-5">
                    <img className="size-[20px]" src={tick} alt="" />
                    {item?.available?.update}
                  </span>
                  <span className="flex items-center text-[16px] gap-5">
                    <img className="size-[20px]" src={tick} alt="" />
                    {item?.available?.support}
                  </span>
                </div>
                <button
                  className={`border-2 border-[#1663C1] bg-none md:px-[59px] md:py-[17px] px-5 py-2 rounded-[10px] text-[18px] font-semibold text-[#1663C1] mx-3  duration-200 hover:bg-[#1663C1] hover:text-[#fff]`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
