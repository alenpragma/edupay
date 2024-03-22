import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Container from "../../components/ui/Container";

import { Mousewheel, Pagination } from "swiper/modules";

const WhatClientSays = () => {
  return (
    <div>
      <Container>
        <div>
          <p className="text-[#646464] tracking-[2px] font-medium text-[28px]">
            Client Say
          </p>
          <div className="flex justify-between my-3">
            <h2 className="text-[48px] font-bold leading-7">What The Say</h2>
            <div className="flex items-center border-l-2 border-l-[#515151] pl-5">
              <img
                className="rounded-full size-[50px]"
                src="https://i.ibb.co/tY4pRrS/user2.jpg"
                alt=""
              />
              <img
                className="rounded-full size-[50px]"
                src="https://i.ibb.co/tY4pRrS/user2.jpg"
                alt=""
              />
              <img
                className="rounded-full size-[50px]"
                src="https://i.ibb.co/tY4pRrS/user2.jpg"
                alt=""
              />
              <img
                className="rounded-full size-[50px]"
                src="https://i.ibb.co/tY4pRrS/user2.jpg"
                alt=""
              />
              <img
                className="rounded-full size-[50px]"
                src="https://i.ibb.co/tY4pRrS/user2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-10">
            <div className="flex items-center gap-3 my-[53px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <div className="w-[60%]">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry
              </p>
              <hr className="w-full h-[2px] bg-black my-[44px]" />
              <div className="flex items-center justify-start gap-6">
                <img
                  className="size-[85px] rounded-full"
                  src="https://i.ibb.co/tY4pRrS/user2.jpg"
                  alt=""
                />
                <div>
                  <h4 className="font-medium text-[16px]">Miraj Ahmed</h4>
                  <p className="">Ui Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="flex items-center gap-3 my-[53px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FABB3E"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FABB3E"
                className="size-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <div className="w-[60%]">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry
              </p>
              <hr className="w-full h-[2px] bg-black my-[44px]" />
              <div className="flex items-center justify-start gap-6">
                <img
                  className="size-[85px] rounded-full"
                  src="https://i.ibb.co/tY4pRrS/user2.jpg"
                  alt=""
                />
                <div>
                  <h4 className="font-medium text-[16px]">Miraj Ahmed</h4>
                  <p className="">Ui Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};
export default WhatClientSays;











// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import Container from "../../components/ui/Container";

// import { Mousewheel, Pagination } from "swiper/modules";

// const WhatClientSays = () => {
//   return (
//     <div>
//       <Container>
       
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           mousewheel={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide className="py-10">
         
//           </SwiperSlide>
//         </Swiper>
//       </Container>
//     </div>
//   );
// };
// export default WhatClientSays;
