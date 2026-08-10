"use client"
import { useForm } from "react-hook-form";
type LoginFormData = {
  email: string;
  password: string;
};
export default function LoginForm() {
      const { register, handleSubmit } = useForm<LoginFormData>();
        const onSubmit = (data: LoginFormData) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };
  return (
    <div>
      <div className=" h-screen flex flex-col justify-center items-center">
        <h1 className="mb-4 font-bold text-5xl text-primary">Welcome Admin</h1>
        <div className="border border-secondary rounded-xl p-4 ">
          <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col justify-center item-center h-[400px] w-[400px]">
            <h5 className="text-2xl font-semibold text-primary text-center mb-4">
              Login
            </h5>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="text-primary text-md font-semibold"
              >
                Email
              </label>
              <input
              {...register("email")}
                id="email"
                type="text"
                className=" border-1 border-secondary  rounded-lg py-1 px-3 bg-white outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-primary text-md font-semibold"
              >
                Password
              </label>
              <input
              {...register("password")}
                id="password"
                type="password"
                className=" border-1 border-secondary  rounded-lg py-1 px-3  bg-white outline-none "
              />
            </div>
            <div className="mt-10 flex justify-center item-center">
              <button type="submit" className="bg-primary text-white cursor-pointer font-semibold px-8 py-2 rounded-xl">
                Login In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
