import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router";

export default function Forgot() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-primary min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <img src="/LOGO.png" alt="logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-primary">E-Wallet</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">Forgot Password 👋</h1>
          <p className="text-sm text-dark-gray mt-1">
            Enter your registered email and we will send you instructions to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Email</label>
            <div
              className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
                errors.email ? "border-red-500" : "border-dark-gray/30 focus-within:border-primary"
              }`}
            >
              <AiOutlineMail className="text-dark-gray text-lg" />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter Your Email"
                className="outline-none w-full text-sm bg-transparent"
              />
            </div>
            <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">{errors.email?.message}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer"
          >
            Send Instructions
          </button>
        </form>

        <p className="text-center text-sm text-dark-gray">
          Remember your password?{" "}
          <Link to="/auth/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
