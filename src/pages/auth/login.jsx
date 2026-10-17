import { useState } from "react";
import logoGogle from "../../assets/google.svg";
import logoFacebook from "../../assets/facebookLogo.svg";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import gamberLogin from "../../assets/tanganLogin.svg";
import { Link, NavLink } from "react-router";
import { useForm } from "react-hook-form";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50 md:bg-white">
      <div className="py-8 px-6 flex justify-center items-center">
        <section className="w-full max-w-md flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img src="/LOGO.png" alt="logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-primary">E-Wallet</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hello, Welcome Back 👋</h1>
            <p className="text-sm text-dark-gray mt-1">
              Fill out the form correctly or sign in with another option.
            </p>
          </div>

          <div className="flex flex-row lg:flex-col gap-3 w-full">
            <button
              type="button"
              className="cursor-pointer border border-dark-gray/30 rounded-xl h-12 flex-1 lg:w-full flex justify-center items-center gap-2 hover:bg-gray-50 transition"
            >
              <img src={logoGogle} alt="google" className="h-5 w-5 object-contain" />
              <span className="hidden lg:inline text-sm font-medium text-gray-700">
                Sign In With Google
              </span>
            </button>

            <button
              type="button"
              className="cursor-pointer border border-dark-gray/30 rounded-xl h-12 flex-1 lg:w-full flex justify-center items-center gap-2 hover:bg-gray-50 transition"
            >
              <img src={logoFacebook} alt="facebook" className="h-6 w-6 object-contain" />
              <span className="hidden lg:inline text-sm font-medium text-gray-700">
                Sign In With Facebook
              </span>
            </button>
          </div>

          <div className="flex w-full items-center gap-4 text-dark-gray/40">
            <div className="flex-1 border-t border-dark-gray/20" />
            <span className="text-xs uppercase font-medium">or</span>
            <div className="flex-1 border-t border-dark-gray/20" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Email</label>
              <div
                className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
                  errors.email ? "border-red-500" : "border-dark-gray/30 focus-within:border-primary"
                }`}
              >
                <MdOutlineEmail className="text-dark-gray text-lg" />
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="outline-none w-full text-sm bg-transparent"
                />
              </div>
              <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">{errors.email?.message}</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-gray-700">Password</label>
                <NavLink to="/auth/forgot" className="text-xs text-primary font-medium hover:underline">
                  Forgot Password?
                </NavLink>
              </div>
              <div
                className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
                  errors.password ? "border-red-500" : "border-dark-gray/30 focus-within:border-primary"
                }`}
              >
                <IoMdKey className="text-dark-gray text-lg" />
                <input
                  {...register("password", { required: "Password is required" })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="outline-none w-full text-sm bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-dark-gray hover:text-gray-700 focus:outline-none cursor-pointer"
                >
                  {showPassword ? <LuEye size={18} /> : <LuEyeOff size={18} />}
                </button>
              </div>
              <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">{errors.password?.message}</p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-dark-gray">
            Don&apos;t have an account?{" "}
            <Link to="/auth/register" className="text-primary font-semibold hover:underline">
              Register
            </Link>
          </p>
        </section>
      </div>

      <div className="hidden md:flex bg-primary items-center justify-center p-8 relative overflow-hidden rounded-l-[40px]">
        <div className="w-full max-w-lg flex justify-center items-center">
          <img
            src={gamberLogin}
            alt="E-Wallet Illustration"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
