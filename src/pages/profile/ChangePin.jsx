import { useForm, useWatch } from "react-hook-form";
import { usePinInput } from "../../hooks/UsePinInput";

const ChangePin = () => {
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
    console.log("PIN Updated:", fullPin);
  };

  const hasPinError = Array.isArray(errors.pin) && errors.pin.some(Boolean);

  return (
    <section className="bg-white rounded-2xl border border-dark-gray/10 p-6 sm:p-8 shadow-sm max-w-lg">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Change PIN</h1>
        <p className="text-sm text-dark-gray mt-1">
          Enter a new 6-digit security PIN for authorizing transactions.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium text-sm rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer"
        >
          Save PIN
        </button>
      </form>
    </section>
  );
};

export default ChangePin;
