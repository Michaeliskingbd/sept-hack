import { useState } from "react";
import ahhkids from "../assets/gzaaa.avif";

import { Link } from "react-router-dom";
import Addrex from "../components/Addrex";

const Gofundme = () => {
  const [amount, setAmount] = useState("");
  const [raised, setRaised] = useState(53643);

  const goal = 200000;
  const progress = Math.min((raised / goal) * 100, 100);

  const payWithPaystack = () => {
    if (!amount) return;

    const handler = window.PaystackPop.setup({
      key: "pk_test_064d1ab7c7420892a19045c5b4caf8d26ed5c5ab",
      email: "donor@email.com",
      amount: Number(amount) * 100,
      currency: "NGN",
      ref: "DON_" + Date.now(),

      callback: function (response) {
        setRaised((prev) => prev + Number(amount));
        setAmount("");

        alert("Thank you for donating");
      },

      onClose: function () {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="mx-auto p-4 md:p-0 bg-gray-50">
      <nav className="relative flex items-center justify-between px-10 py-6 text-white bg-black">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="">❤</span>
          GOODWILL
        </div>

        <div className="flex items-center  justify-between gap-5">
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/">
              {" "}
              <li className="hover:text-pink-400 cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-pink-400 cursor-pointer">About</li>
            </Link>
            <Link to="/what-we-do">
              {" "}
              <li className="hover:text-pink-400 cursor-pointer">What we do</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-pink-400 cursor-pointer">Contact</li>
            </Link>
          </ul>
          {/* <Link to="donate">
            <button className="border border-white px-8 py-4 text-sm text-[#833556] font-semibold bg-white hover:bg-white hover:text-black transition">
              DONATE
            </button>
          </Link> */}
        </div>
      </nav>

      <section className="px-8 mb-10">
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* LEFT */}
          <section>
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="children"
              className="rounded-xl w-full object-cover"
            />

            <div className="mt-4 text-gray-700">
              {/* <p className="font-semibold">Appclick September 2025 Cohort</p> */}
              <p className="mt-3 leading-relaxed">
                Help orphans from all around the world get a better life. Your
                donation supports food, shelter, education, and healthcare for
                vulnerable children affected by conflict and poverty.
              </p>
            </div>
          </section>

          <aside className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-black">
              ₦{raised.toLocaleString()}
            </h2>
            <p className="text-gray-500 mb-3">
              raised of ₦{goal.toLocaleString()} goal
            </p>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* AMOUNT INPUT */}
            <div className="mt-6">
              <label className="block text-sm mb-1 font-medium">
                Donation amount (₦)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              onClick={payWithPaystack}
              disabled={!amount}
              className="mt-5 bg-[#7b344f]  disabled:opacity-50 text-white w-full py-3 rounded-full font-semibold transition"
            >
              Donate with Paystack ❤️
            </button>
          </aside>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <section>
            <img
              src={ahhkids}
              alt="children"
              className="rounded-xl w-full object-cover"
            />

            <div className="mt-4 text-gray-700">
              {/* <p className="font-semibold">Appclick September 2025 Cohort</p> */}
              <p className="mt-3 leading-relaxed">
                Help children and families affected by war rebuild their lives.
                Your donation provides food, safe shelter, medical care, and
                access to education for innocent victims displaced by conflict
                and violence.
              </p>
            </div>
          </section>

          <aside className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-black">₦230,450</h2>
            <p className="text-gray-500 mb-3">raised of ₦700,000 goal</p>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-1 font-medium">
                Donation amount (₦)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              onClick={payWithPaystack}
              disabled={!amount}
              className="mt-5 bg-[#7b344f]  disabled:opacity-50 text-white w-full py-3 rounded-full font-semibold transition"
            >
              Donate with Paystack ❤️
            </button>
          </aside>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* LEFT */}
          <section>
            <img
              src="https://images.unsplash.com/photo-1694286068611-d0c24cbc2cd5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="children"
              className="rounded-xl w-full object-cover"
            />

            <div className="mt-4 text-gray-700">
              {/* <p className="font-semibold">Appclick September 2025 Cohort</p> */}
              <p className="mt-3 leading-relaxed">
                Help orphans from all around the world get a better life. Your
                donation supports food, shelter, education, and healthcare for
                vulnerable children affected by conflict and poverty.
              </p>
            </div>
          </section>

          <aside className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-black">₦75,540</h2>
            <p className="text-gray-500 mb-3">raised of ₦345,000 goal</p>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-1 font-medium">
                Donation amount (₦)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              onClick={payWithPaystack}
              disabled={!amount}
              className="mt-5 bg-[#7b344f]  disabled:opacity-50 text-white w-full py-3 rounded-full font-semibold transition"
            >
              Donate with Paystack ❤️
            </button>
          </aside>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <section>
            <img
              src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="children"
              className="rounded-xl w-full object-cover"
            />

            <div className="mt-4 text-gray-700">
              {/* <p className="font-semibold">Appclick September 2025 Cohort</p> */}
              <p className="mt-3 leading-relaxed">
                Help children gain access to quality education and a brighter
                future. Your donation supports school fees, learning materials,
                uniforms, and a safe learning environment for vulnerable
                children affected by poverty and hardship.
              </p>
            </div>
          </section>

          <aside className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-black">₦150,500</h2>
            <p className="text-gray-500 mb-3">raised of ₦800,000 goal</p>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-1 font-medium">
                Donation amount (₦)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              onClick={payWithPaystack}
              disabled={!amount}
              className="mt-5 bg-[#7b344f]  disabled:opacity-50 text-white w-full py-3 rounded-full font-semibold transition"
            >
              Donate with Paystack ❤️
            </button>
          </aside>
        </div>
      </section>
      <Addrex />
    </div>
  );
};

export default Gofundme;
