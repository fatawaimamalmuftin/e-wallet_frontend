import { BiExport } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { GiMoneyStack } from "react-icons/gi";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Dashboard() {
  const navigate = useNavigate();

  const data = {
    labels: ["Sat", "Sun", "Mo", "Tue", "We", "Thu", "Fri"],
    datasets: [
      {
        data: [15000, 2000, 90000, 30000, 45000, 22000, 18000],
        backgroundColor: "#ff2a57",
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => ` Rp ${context.raw.toLocaleString("id-ID")}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#9ca3af",
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 100000,
        ticks: {
          stepSize: 25000,
          color: "#9ca3af",
          font: {
            size: 10,
          },
          callback: (value) => {
            if (value === 0) return "0";
            return `${value / 1000}k`;
          },
        },
        grid: {
          color: "#f3f4f6",
        },
        border: {
          dash: [4, 4],
          display: false,
        },
      },
    },
  };

  const transactions = [
    {
      id: 1,
      name: "Robert Fox",
      type: "Transfer",
      amount: "+Rp 50.000",
      isIncome: true,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
    {
      id: 2,
      name: "Floyd Miles",
      type: "Send",
      amount: "-Rp 50.000",
      isIncome: false,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
    {
      id: 3,
      name: "Ujang Supriatna",
      type: "Send",
      amount: "-Rp 50.000",
      isIncome: false,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
    {
      id: 4,
      name: "Asep Surasep",
      type: "Transfer",
      amount: "+Rp 50.000",
      isIncome: true,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
    {
      id: 5,
      name: "Reva Alvira",
      type: "Transfer",
      amount: "+Rp 50.000",
      isIncome: true,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-dark-gray/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <GiMoneyStack className="text-2xl" />
                <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">
                  Total Balance
                </span>
              </div>
              <p className="font-bold text-2xl text-gray-900 mt-3">Rp 120.000</p>
            </div>
            <p className="text-xs text-emerald-600 font-medium mt-4">
              +2% ↗ <span className="text-dark-gray">compared to last month</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-dark-gray/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-500">
                <FaMoneyBillTrendUp className="text-2xl" />
                <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">
                  Total Income
                </span>
              </div>
              <p className="font-bold text-2xl text-gray-900 mt-3">Rp 2.120.000</p>
            </div>
            <p className="text-xs text-emerald-600 font-medium mt-4">+11.01% ↗</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-dark-gray/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-500">
                <FaMoneyBillTransfer className="text-2xl" />
                <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">
                  Total Expense
                </span>
              </div>
              <p className="font-bold text-2xl text-gray-900 mt-3">Rp 200.000</p>
            </div>
            <p className="text-xs text-rose-500 font-medium mt-4">-5.06% ↘</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-dark-gray/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-bold text-base text-gray-900">Fast Services</h2>
            <p className="text-xs text-dark-gray mt-0.5">Quickly top up or send money anytime.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/topup")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition shadow-sm cursor-pointer"
            >
              <BiExport className="text-lg" />
              <span>Top Up</span>
            </button>
            <button
              onClick={() => navigate("/transfer")}
              className="bg-white border border-dark-gray/30 hover:bg-gray-50 text-gray-800 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition cursor-pointer"
            >
              <FaRegPaperPlane className="text-sm" />
              <span>Transfer</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-dark-gray/10 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-base text-gray-900">Analytics</h2>
              <div className="flex gap-2">
                <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs py-1.5 px-3 rounded-lg outline-none cursor-pointer">
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
                <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs py-1.5 px-3 rounded-lg outline-none cursor-pointer">
                  <option value="7">Last 7 Days</option>
                  <option value="30">Last 30 Days</option>
                </select>
              </div>
            </div>
            <div className="h-64 w-full">
              <Bar data={data} options={options} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-dark-gray/10 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-base text-gray-900">Recent Transactions</h2>
              <button
                onClick={() => navigate("/history")}
                className="text-primary text-xs font-semibold hover:underline cursor-pointer"
              >
                See All
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {transactions.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-xl object-cover border border-gray-100"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-dark-gray text-xs">{item.type}</p>
                    </div>
                  </div>
                  <span
                    className={`font-semibold text-sm ${
                      item.isIncome ? "text-emerald-600" : "text-rose-500"
                    }`}
                  >
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
