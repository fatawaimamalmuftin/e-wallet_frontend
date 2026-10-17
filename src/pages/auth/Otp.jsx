import { useForm, useWatch } from "react-hook-form";
import { usePinInput } from "../../hooks/UsePinInput";
import { NavLink } from "react-router";

export default function Otp() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const pinValues = useWatch({ control, name: "otp" });

  const { inputRefs, handleChange, handleKeyDown } = usePinInput({
    length: 6,
    setValue,
    getValues,
    name: "otp",
  });

  const onSubmit = (data) => {
    const isComplete = data.otp.every((digit) => digit !== "");
    if (!isComplete) return;

    const fullOtp = data.otp.join("");
    console.log("OTP Submitted:", fullOtp);
  };

  const hasOtpError = Array.isArray(errors.otp) && errors.otp.some(Boolean);

  return (
    <section className="bg-primary min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <img src="/LOGO.png" alt="logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-primary">E-Wallet</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enter Your OTP 👋</h1>
          <p className="text-sm text-dark-gray mt-1">
            We have sent a 6-digit verification code to your email.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const { ref: registerRef, ...restRegister } = register(`otp.${index}`, {
                required: "Required",
                pattern: {
                  value: /^[0-9]$/,
                  message: "Number only",
                },
              });

              const isInputError = errors.otp?.[index];

              return (
                <input
                  key={index}
                  {...restRegister}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  value={pinValues[index] || ""}
                  ref={(e) => {
                    registerRef(e);
                    inputRefs.current[index] = e;
                  }}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`w-10 sm:w-12 h-12 text-center text-lg font-bold rounded-xl border transition-colors outline-none ${
                    isInputError
                      ? "border-red-500 text-red-500 bg-red-50"
                      : "border-dark-gray/30 focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                />
              );
            })}
          </div>

          <div className="min-h-[1.25rem]">
            {hasOtpError && (
              <p className="text-xs text-red-500 text-center">
                {errors.otp.find((err) => err?.message)?.message || "OTP is incomplete"}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer"
          >
            Confirm OTP
          </button>
        </form>

        <p className="text-center text-sm text-dark-gray">
          Didn&apos;t get code?{" "}
          <NavLink to="/auth/forgot" className="text-primary font-semibold hover:underline">
            Resend
          </NavLink>
        </p>
      </div>
    </section>
  );
}
