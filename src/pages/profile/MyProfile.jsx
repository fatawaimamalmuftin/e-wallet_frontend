import { FiEdit } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuUserRound, LuLock, LuShieldCheck } from "react-icons/lu";
import { Link } from "react-router";

const MyProfile = () => {
  return (
    <section className="bg-white rounded-2xl border border-dark-gray/10 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-dark-gray/10">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl overflow-hidden w-20 h-20 border border-dark-gray/10 shadow-sm flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt="profile-img"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Ghaluh Wizard Anggoro</h1>
            <p className="text-sm text-dark-gray mt-0.5">ghaluhwizz@gmail.com</p>
            <span className="inline-block mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              Verified Account
            </span>
          </div>
        </div>

        <Link
          to="/profile/edit"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition shadow-sm"
        >
          <FiEdit className="text-base" />
          Edit Profile
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Personal Information
          </h2>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
              <LuUserRound className="text-lg text-dark-gray" />
              <div>
                <p className="text-xs text-dark-gray">Full Name</p>
                <p className="text-sm font-medium text-gray-800">Ghaluh Wizard Anggoro</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
              <LuPhone className="text-lg text-dark-gray" />
              <div>
                <p className="text-xs text-dark-gray">Phone Number</p>
                <p className="text-sm font-medium text-gray-800">+62 812-3982-1932</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
              <HiOutlineMail className="text-lg text-dark-gray" />
              <div>
                <p className="text-xs text-dark-gray">Email Address</p>
                <p className="text-sm font-medium text-gray-800">ghaluhwizz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Security Settings
          </h2>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LuLock className="text-lg text-dark-gray" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Password</p>
                  <p className="text-xs text-dark-gray">Last changed 2 months ago</p>
                </div>
              </div>
              <Link
                to="/change-password"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Change
              </Link>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LuShieldCheck className="text-lg text-dark-gray" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Transaction PIN</p>
                  <p className="text-xs text-dark-gray">6-digit PIN active</p>
                </div>
              </div>
              <Link
                to="/change-pin"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Change
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
