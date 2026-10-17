import { useForm } from "react-hook-form";
import { CiStar } from "react-icons/ci";
import { HiCash } from "react-icons/hi";
import { VscVerified } from "react-icons/vsc";

const SetNominal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-white rounded-2xl border border-dark-gray/10 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Transfer Confirmation</h1>
          <p className="text-sm text-dark-gray mt-1">Review the recipient details and enter transfer amount.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-xl overflow-hidden w-16 h-16 border border-dark-gray/10">
              <img
                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900">Ghaluh 1</p>
              <p className="text-xs text-dark-gray mt-0.5">(239) 555-0108</p>
              <span className="mt-1.5 inline-flex items-center gap-1 bg-primary text-white text-[11px] font-medium py-0.5 px-2.5 rounded-full">
                <VscVerified className="text-sm" /> Verified
              </span>
            </div>
          </div>
          <button
            type="button"
            className="p-2 text-dark-gray hover:text-yellow-500 transition cursor-pointer"
          >
            <CiStar className="text-2xl" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block" htmlFor="nominal">
              Amount
            </label>
            <div
              className={`border rounded-xl px-4 py-3 flex items-center gap-3 transition-colors bg-white ${
                errors.nominal ? "border-red-500" : "border-dark-gray/30 focus-within:border-primary"
              }`}
            >
              <HiCash className="text-2xl text-dark-gray" />
              <input
                id="nominal"
                className="w-full outline-none text-base font-semibold bg-transparent"
                type="number"
                placeholder="0"
                {...register("nominal", {
                  required: "Nominal is required",
                  min: {
                    value: 10000,
                    message: "Minimum transfer is Rp 10.000",
                  },
                })}
              />
            </div>
            <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">{errors.nominal?.message}</p>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block" htmlFor="notes">
              Notes (Optional)
            </label>
            <textarea
              id="notes"
              className="p-4 w-full rounded-xl border border-dark-gray/30 focus:border-primary transition-colors text-sm outline-none resize-none"
              rows={4}
              placeholder="e.g. Dinner split, coffee payment"
              {...register("notes")}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium text-sm rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer"
          >
            Continue & Transfer
          </button>
        </form>
      </div>
    </section>
  );
};

export default SetNominal;
