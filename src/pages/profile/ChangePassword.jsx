import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { TbSquareKey } from "react-icons/tb";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState({
    existing_password: false,
    new_password: false,
    confirm_password: false,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const newPasswordValue = watch("new_password");

  return (
    <section className="bg-white rounded-2xl border border-dark-gray/10 p-6 sm:p-8 shadow-sm max-w-xl">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Change Password</h1>
        <p className="text-sm text-dark-gray mt-1">
          You must enter your current password before choosing a new one.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            className="text-xs font-semibold text-gray-700 mb-1.5 block"
            htmlFor="existing_password"
          >
            Existing Password
          </label>
          <div
            className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
              errors.existing_password
                ? "border-red-500"
                : "border-dark-gray/30 focus-within:border-primary"
            }`}
          >
            <TbSquareKey className="text-dark-gray text-lg" />
            <input
              id="existing_password"
              type={showPassword.existing_password ? "text" : "password"}
              placeholder="Enter current password"
              className="outline-none w-full text-sm bg-transparent"
              {...register("existing_password", {
                required: "Current password is required",
              })}
            />
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  existing_password: !prev.existing_password,
                }))
              }
              className="text-dark-gray hover:text-gray-700 focus:outline-none cursor-pointer"
            >
              {showPassword.existing_password ? <LuEye size={18} /> : <LuEyeOff size={18} />}
            </button>
          </div>
          <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">
            {errors.existing_password?.message}
          </p>
        </div>

        <div>
          <label
            className="text-xs font-semibold text-gray-700 mb-1.5 block"
            htmlFor="new_password"
          >
            New Password
          </label>
          <div
            className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
              errors.new_password
                ? "border-red-500"
                : "border-dark-gray/30 focus-within:border-primary"
            }`}
          >
            <TbSquareKey className="text-dark-gray text-lg" />
            <input
              id="new_password"
              type={showPassword.new_password ? "text" : "password"}
              placeholder="Enter new password"
              className="outline-none w-full text-sm bg-transparent"
              {...register("new_password", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  new_password: !prev.new_password,
                }))
              }
              className="text-dark-gray hover:text-gray-700 focus:outline-none cursor-pointer"
            >
              {showPassword.new_password ? <LuEye size={18} /> : <LuEyeOff size={18} />}
            </button>
          </div>
          <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">
            {errors.new_password?.message}
          </p>
        </div>

        <div>
          <label
            className="text-xs font-semibold text-gray-700 mb-1.5 block"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <div
            className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
              errors.confirm_password
                ? "border-red-500"
                : "border-dark-gray/30 focus-within:border-primary"
            }`}
          >
            <TbSquareKey className="text-dark-gray text-lg" />
            <input
              id="confirm_password"
              type={showPassword.confirm_password ? "text" : "password"}
              placeholder="Re-type new password"
              className="outline-none w-full text-sm bg-transparent"
              {...register("confirm_password", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === newPasswordValue || "Passwords do not match",
              })}
            />
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirm_password: !prev.confirm_password,
                }))
              }
              className="text-dark-gray hover:text-gray-700 focus:outline-none cursor-pointer"
            >
              {showPassword.confirm_password ? <LuEye size={18} /> : <LuEyeOff size={18} />}
            </button>
          </div>
          <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">
            {errors.confirm_password?.message}
          </p>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium text-sm rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer mt-2"
        >
          Update Password
        </button>
      </form>
    </section>
  );
};

export default ChangePassword;
