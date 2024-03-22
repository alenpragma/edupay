import Container from "../../components/ui/Container";
import banner from "../../assets/form/form.png";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full my-[120px]">
      <Container>
        <div>
          <p className="text-[#646464] tracking-[2px] font-medium text-[28px]">
            Get In Touch
          </p>
          <h2 className="text-[48px] font-bold">
            Our Team Will Respond To You
          </h2>
        </div>
        <div className="flex justify-between items-center gap-[158px]">
          <div className="flex-1">
            <img className="w-full" src={banner} alt="" />
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-12 gap-5">
                <input
                  type="text"
                  {...register("name")}
                  placeholder="First Name"
                  className=" col-span-6 w-full border-b-2 border-slate-400 border-x-2 border-x-[#fff] border-t-2 border-t-[#fff] px-3 py-2  focus:outline-none focus:border-2 focus:border-slate-300 text-[20px] text-[#525252] mt-5"
                />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Last Name"
                  className=" col-span-6 w-full border-b-2 border-slate-400 border-x-2 border-x-[#fff] border-t-2 border-t-[#fff] px-3 py-2  focus:outline-none focus:border-2 focus:border-slate-300 text-[20px] text-[#525252] mt-5"
                />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Your Number"
                  className=" col-span-6 w-full border-b-2 border-slate-400 border-x-2 border-x-[#fff] border-t-2 border-t-[#fff] px-3 py-2  focus:outline-none focus:border-2 focus:border-slate-300 text-[20px] text-[#525252] mt-5"
                />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Company Name"
                  className=" col-span-6 w-full border-b-2 border-slate-400 border-x-2 border-x-[#fff] border-t-2 border-t-[#fff] px-3 py-2  focus:outline-none focus:border-2 focus:border-slate-300 text-[20px] text-[#525252] mt-5"
                />
                <div className="col-span-12  mt-5">
                  <label
                    htmlFor="additional"
                    className=" text-[20px] text-[#525252]"
                  >
                    Additional Massages
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="0"
                    rows="5"
                    className="border-2 border-slate-300 rounded-lg focus:outline-none text-[20px] text-[#525252] p-2 mt-2 w-full"
                  ></textarea>
                </div>
              </div>
              <button className="bg-[#1663C1] rounded-lg text-[#fff] px-[94px] py-[27px] mt-5 font-semibold text-[18px]">Submit</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Form;
