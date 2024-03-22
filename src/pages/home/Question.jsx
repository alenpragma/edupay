import { useState } from "react";
import Container from "../../components/ui/Container";

const accordianData = [
  {
    question: "what is javascript?",
    answer: "javascript is a scripting language",
  },
];

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full  my-[122px]">
      <Container>
        <div className="text-center">
          <h2 className="text-[28px] text-[#646464] tracking-[8px]">
            Frequently Asked Question
          </h2>
          <h1 className="font-bold text-[48px]">
            Have Any Question? Find Answer Here
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-16">
          <div className="col-span-6 space-y-5">
            <div
              onClick={() => toggleAccordion(1)}
              className=" py-[28px] px-[40px] border border-[#767676] flex flex-col cursor-pointer rounded-[5px]"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-medium">what is javascript?</h2>
                <div className="flex items-center">
                  {activeIndex == 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#333333"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#1663C1"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {activeIndex == 1 && (
                <p className="font-light text-[16px] mt-[40px] tracking-[2px]">
                  javascript is a scripting language
                </p>
              )}
            </div>
            <div
              onClick={() => toggleAccordion(2)}
              className=" py-[28px] px-[40px] border border-[#767676] flex flex-col  cursor-pointer  rounded-[5px]"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-medium">what is javascript?</h2>
                <div className="flex items-center">
                  {activeIndex == 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#333333"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#1663C1"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {activeIndex == 2 && (
                <p className="font-light text-[16px] mt-[40px] tracking-[2px]">
                  javascript is a scripting language
                </p>
              )}
            </div>
            <div
              onClick={() => toggleAccordion(3)}
              className=" py-[28px] px-[40px] border border-[#767676] flex flex-col  cursor-pointer  rounded-[5px]"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-medium">what is javascript?</h2>
                <div className="flex items-center">
                  {activeIndex == 3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#333333"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#1663C1"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {activeIndex == 3 && (
                <p className="font-light text-[16px] mt-[40px] tracking-[2px]">
                  javascript is a scripting language
                </p>
              )}
            </div>
          </div>
          <div className="col-span-6 space-y-5">
            <div
              onClick={() => toggleAccordion(4)}
              className=" py-[28px] px-[40px] border border-[#767676] flex flex-col cursor-pointer  rounded-[5px]"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-medium">what is javascript?</h2>
                <div className="flex items-center">
                  {activeIndex == 4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#333333"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#1663C1"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {activeIndex == 4 && (
                <p className="font-light text-[16px] mt-[40px] tracking-[2px]">
                  javascript is a scripting language
                </p>
              )}
            </div>
            <div
              onClick={() => toggleAccordion(5)}
              className=" py-[28px] px-[40px] border border-[#767676] flex flex-col  cursor-pointer  rounded-[5px]"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-medium">what is javascript?</h2>
                <div className="flex items-center">
                  {activeIndex == 5 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#333333"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#1663C1"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {activeIndex == 5 && (
                <p className="font-light text-[16px] mt-[40px] tracking-[2px]">
                  javascript is a scripting language
                </p>
              )}
            </div>
            <div
              onClick={() => toggleAccordion(6)}
              className=" py-[28px] px-[40px] border border-[#767676] flex flex-col  cursor-pointer  rounded-[5px]"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-medium">what is javascript?</h2>
                <div className="flex items-center">
                  {activeIndex == 6 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#333333"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#1663C1"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {activeIndex == 6 && (
                <p className="font-light text-[16px] mt-[40px] tracking-[2px]">
                  javascript is a scripting language
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Question;
