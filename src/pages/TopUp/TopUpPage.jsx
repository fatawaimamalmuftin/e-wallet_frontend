import { useState } from 'react';
import bri from '../../assets/bri.svg';
import dana from '../../assets/dana.svg';
import bca from '../../assets/bca.svg';
import gopay from '../../assets/gopay.svg';
import ovo from '../../assets/ovo.svg';

const PAYMENT_METHODS = [
  {
    id: 'bri',
    name: 'Bank Rakyat Indonesia',
    logo: bri,
  },
  {
    id: 'dana',
    name: 'Dana',
    logo: dana,
  },
  {
    id: 'bca',
    name: 'Bank Central Asia',
    logo: bca,
  },
  {
    id: 'gopay',
    name: 'Gopay',
    logo: gopay,
  },
  {
    id: 'ovo',
    name: 'Ovo',
    logo: ovo,
  },
];

export default function TopUpPage() {
  const [selectedMethod, setSelectedMethod] = useState('bri');
  const [amount, setAmount] = useState('40000');

  const numAm = parseFloat(amount) || 0;
  const deliveryFee = 0;
  const taxFee = numAm ? 4000 : 0;
  const subTotal = numAm + deliveryFee + taxFee;

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    })
      .format(val)
      .replace('Rp', 'Rp. ');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedMethod, numAm, subTotal });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Top Up Balance</h1>
          <p className="text-sm text-dark-gray mt-1">
            Choose your payment method and enter the amount you want to top up.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border border-dark-gray/10 p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Account Information
              </h2>
              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 border border-gray-100">
                <img
                  src="https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg"
                  alt="Sigma Cat Wizard"
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">Sigma Cat Wizard</h3>
                  <p className="text-sm text-dark-gray mt-0.5">(239) 555-0108</p>
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-600 px-2.5 py-0.5 text-xs font-semibold">
                    Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-dark-gray/10 p-6 shadow-sm space-y-3">
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Top Up Amount
              </h2>
              <p className="text-xs text-dark-gray">
                Enter the amount you would like to deposit into your account.
              </p>
              <div className="border border-dark-gray/30 rounded-xl px-4 py-3 flex items-center gap-3 focus-within:border-primary transition-colors bg-white">
                <span className="font-bold text-dark-gray">Rp</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  className="w-full text-base font-semibold outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-dark-gray/10 p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Select Payment Method
              </h2>
              <div className="space-y-3">
                {PAYMENT_METHODS.map((method) => {
                  const isSelected = selectedMethod === method.id;
                  return (
                    <label
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`flex cursor-pointer items-center justify-between rounded-xl p-4 transition-all border ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            isSelected ? "border-primary bg-primary" : "border-gray-300 bg-white"
                          }`}
                        >
                          {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                        </div>

                        <div className="flex h-8 w-12 items-center justify-center">
                          <img
                            src={method.logo}
                            alt={method.name}
                            className="max-h-6 max-w-full object-contain"
                          />
                        </div>

                        <span className="text-sm font-medium text-gray-800">{method.name}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="block lg:hidden">
              <PaymentSummary
                numAm={numAm}
                deliveryFee={deliveryFee}
                taxFee={taxFee}
                subTotal={subTotal}
                formatRupiah={formatRupiah}
              />
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block xl:col-span-4 sticky top-6">
            <PaymentSummary
              numAm={numAm}
              deliveryFee={deliveryFee}
              taxFee={taxFee}
              subTotal={subTotal}
              formatRupiah={formatRupiah}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function PaymentSummary({ numAm, deliveryFee, taxFee, subTotal, formatRupiah }) {
  return (
    <div className="bg-white rounded-2xl border border-dark-gray/10 p-6 shadow-sm space-y-5">
      <h2 className="text-base font-bold text-gray-900">Payment Summary</h2>

      <div className="space-y-3 border-b border-gray-100 pb-4 text-sm font-medium">
        <div className="flex justify-between text-dark-gray">
          <span>Amount</span>
          <span className="font-semibold text-gray-900">{formatRupiah(numAm)}</span>
        </div>
        <div className="flex justify-between text-dark-gray">
          <span>Delivery Fee</span>
          <span className="font-semibold text-gray-900">{formatRupiah(deliveryFee)}</span>
        </div>
        <div className="flex justify-between text-dark-gray">
          <span>Admin / Tax Fee</span>
          <span className="font-semibold text-gray-900">{formatRupiah(taxFee)}</span>
        </div>
      </div>

      <div className="flex justify-between text-base font-bold text-gray-900">
        <span>Total Payment</span>
        <span className="text-primary">{formatRupiah(subTotal)}</span>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-primary/90 cursor-pointer"
      >
        Submit Top Up
      </button>

      <p className="text-center text-xs leading-relaxed text-dark-gray">
        *Instant confirmation after payment verification
      </p>
    </div>
  );
}
