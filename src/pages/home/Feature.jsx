import Container from "../../components/ui/Container";
import backgroundImg from "../../assets/feature/circle.png";
import icon from "../../assets/feature/icon.svg";

const featureItem = [
  {
    icon: icon,
    title: "Simple Integration System",
    description:
      "Integrate with ease using our system. Connect applications and data sources, automate processes, and experience seamless workflows.",
  },
  {
    icon: icon,
    title: "Simple Integration System",
    description:
      "Integrate with ease using our system. Connect applications and data sources, automate processes, and experience seamless workflows.",
  },
  {
    icon: icon,
    title: "Simple Integration System",
    description:
      "Integrate with ease using our system. Connect applications and data sources, automate processes, and experience seamless workflows.",
  },
  {
    icon: icon,
    title: "Simple Integration System",
    description:
      "Integrate with ease using our system. Connect applications and data sources, automate processes, and experience seamless workflows.",
  },
  {
    icon: icon,
    title: "Simple Integration System",
    description:
      "Integrate with ease using our system. Connect applications and data sources, automate processes, and experience seamless workflows.",
  },
  {
    icon: icon,
    title: "Simple Integration System",
    description:
      "Integrate with ease using our system. Connect applications and data sources, automate processes, and experience seamless workflows.",
  },
];

const Feature = () => {
  return (
    <div className="w-full my-[100px]">
      <Container>
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "80%",

            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            width: "100%",
            margin: "auto",
          }}
        >
          <div>
            <h2 className="font-bold text-[48px] text-center pt-10 pb-28">
              Amazing Features <br /> Of Edu Pay
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {featureItem.map((item, i) => (
              <div
                key={i}
                className="bg-[#EFF3FF] border-2 border-[#A7A7A7] rounded-lg p-[34px] col-span-4"
              >
                <div className="size-[60px] rounded-xl bg-[#fff] flex justify-center items-center">
                  <img className="size-[40px]" src={icon} alt="" />
                </div>
                <h2 className="text-[24px] font-medium mt-[35px] mb-[24px]">
                  {item.title}
                </h2>
                <p className="text-[16px] font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
