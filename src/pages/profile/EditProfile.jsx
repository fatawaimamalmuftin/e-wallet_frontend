import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuTrash, LuUserRound } from "react-icons/lu";
import { Link } from "react-router";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: "Ghaluh Wizard Anggoro",
      phone: "081239821932",
      email: "ghaluhwizz@gmail.com",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-white rounded-2xl border border-dark-gray/10 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Edit Profile</h1>
        <p className="text-sm text-dark-gray mt-1">
          Update your personal details and contact information.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
          <div className="rounded-2xl overflow-hidden w-20 h-20 border border-dark-gray/10 flex-shrink-0 shadow-sm">
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt="profile-img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 py-2 px-4 rounded-xl bg-primary text-white text-xs font-medium hover:bg-primary/90 transition shadow-sm cursor-pointer"
            >
              <FiEdit className="text-sm" />
              Change Picture
            </button>
            <button
              type="button"
              className="flex items-center gap-2 py-2 px-4 rounded-xl border border-red-200 text-red-600 bg-white text-xs font-medium hover:bg-red-50 transition cursor-pointer"
            >
              <LuTrash className="text-sm" />
              Delete Picture
            </button>
            <p className="w-full text-xs text-dark-gray">
              Allowed JPG or PNG. Max size 512 x 512 pixels.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block" htmlFor="full_name">
              Full Name
            </label>
            <div
              className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
                errors.full_name ? "border-red-500" : "border-dark-gray/30 focus-within:border-primary"
              }`}
            >
              <LuUserRound className="text-dark-gray text-lg" />
              <input
                id="full_name"
                type="text"
                placeholder="Enter Full Name"
                className="outline-none w-full text-sm bg-transparent"
                {...register("full_name", { required: "Full name is required" })}
              />
            </div>
            <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">{errors.full_name?.message}</p>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block" htmlFor="phone">
              Phone Number
            </label>
            <div
              className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
                errors.phone ? "border-red-500" : "border-dark-gray/30 focus-within:border-primary"
              }`}
            >
              <LuPhone className="text-dark-gray text-lg" />
              <input
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
                className="outline-none w-full text-sm bg-transparent"
                {...register("phone", { required: "Phone number is required" })}
              />
            </div>
            <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">{errors.phone?.message}</p>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1.5 block" htmlFor="email">
              Email Address
            </label>
            <div
              className={`border rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors bg-white ${
                errors.email ? "border-red-500" : "border-dark-gray/30 focus-within:border-primary"
              }`}
            >
              <HiOutlineMail className="text-dark-gray text-lg" />
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                className="outline-none w-full text-sm bg-transparent"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <p className="text-xs text-red-500 mt-1 min-h-[1.25rem]">{errors.email?.message}</p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium text-sm rounded-xl hover:bg-primary/90 transition shadow-sm cursor-pointer"
          >
            Save Changes
          </button>
          <Link
            to="/profile"
            className="w-full sm:w-auto px-6 py-3 border border-dark-gray/30 text-gray-700 text-center font-medium text-sm rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
