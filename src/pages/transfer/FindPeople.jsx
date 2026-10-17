import PeopleCard from "../../components/transfer/PeopleCard";
import { CiSearch } from "react-icons/ci";

const FindPeople = () => {
  return (
    <section className="bg-white rounded-2xl border border-dark-gray/10 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Find People</h1>
          <p className="text-dark-gray text-sm mt-1">8 Results Found for &ldquo;Galuh&rdquo;</p>
        </div>

        <div className="p-3 border border-dark-gray/30 rounded-xl flex items-center justify-between focus-within:border-primary transition-colors bg-white">
          <input
            className="w-full outline-none text-sm bg-transparent"
            type="text"
            placeholder="Enter Number or Full Name"
          />
          <CiSearch className="text-xl text-dark-gray" />
        </div>

        <div className="divide-y divide-dark-gray/10">
          <PeopleCard color="bg-white" />
          <PeopleCard color="bg-white" />
          <PeopleCard color="bg-white" />
          <PeopleCard color="bg-white" />
        </div>
      </div>
    </section>
  );
};

export default FindPeople;
