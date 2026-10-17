import { MdHistory } from "react-icons/md";
import HistoryTable from "../components/history/HistoryTable";

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2">
          <MdHistory className="text-primary text-2xl" />
          <h1 className="text-xl font-bold text-gray-900">Transaction History</h1>
        </div>
        <div className="bg-white rounded-2xl border border-dark-gray/10 p-6 shadow-sm">
          <HistoryTable />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
