import { useForm, useWatch } from "react-hook-form";
import { usePinInput } from "../../hooks/UsePinInput";
import { NavLink } from "react-router";
import gambarPin from "../../assets/pin.svg";

export default function PinPage() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pin: ["", "", "", "", "", ""],
    },
  });

  const pinValues = useWatch({ control, name: "pin" });

  const { inputRefs, handleChange, handleKeyDown } = usePinInput({
    length: 6,
    setValue,
    getValues,
    name: "pin",
  });

  const onSubmit = (data) => {
    const isComplete = data.pin.every((digit) => digit !== "");
    if (!isComplete) return;

    const fullPin = data.pin.join("");
    console.log("PIN Submitted:", fullPin);
  };

  const hasPinError = Array.isArray(errors.pin) && errors.pin.some(Boolean);

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50 md:bg-white">
      <div className="py-8 px-6 flex justify-center items-center">
        <section className="w-full max-w-md flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img src="/LOGO.png" alt="logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-primary">E-Wallet</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">Set Up Your PIN 👋</h1>
            <p className="text-sm text-dark-gray mt-1">
              Create a 6-digit security PIN to authorize transactions.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-between gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const { ref: registerRef, ...restRegister } = register(`pin.${index}`, {
                  required: "Required",
                  pattern: {
                    value: /^[0-9]$/,
                    message: "Number only",
                  },
                });

                const isInputError = errors.pin?.[index];

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
              {hasPinError && (
                <p className="text-xs text-red-500 text-center">
                  {errors.pin.find((err) => err?.message)?.message || "PIN is incomplete"}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer"
            >
              Submit PIN
            </button>
          </form>

          <p className="text-center text-sm text-dark-gray">
            Forgot your PIN?{" "}
            <NavLink to="/auth/forgot" className="text-primary font-semibold hover:underline">
              Reset
            </NavLink>
          </p>
        </section>
      </div>

      <div className="hidden md:flex bg-primary items-center justify-center p-8 relative overflow-hidden rounded-l-[40px]">
        <div className="w-full max-w-lg flex justify-center items-center">
          <img
            src={gambarPin}
            alt="E-Wallet Illustration"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
