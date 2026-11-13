import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDemoStore } from "../../context/DemoStoreContext";
import { FaCircleInfo, FaCheck } from "react-icons/fa6";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { loginDemoUser } = useDemoStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setMessage("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setMessage("Please provide a valid email format.");
      return;
    }

    loginDemoUser({ name: name.trim(), email: email.trim() });
    setMessage("Demo account created locally! Redirecting to your learning dashboard...");
    setTimeout(() => {
      navigate("/my-learning");
    }, 1200);
  };

  return (
    <div className="Register w-1/2 p-7 max-md:w-full border border-slate-200 rounded-3xl shadow-xs bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold font-exo text-black">
          Demo Register
        </h2>
        <span className="text-xs font-semibold py-1 px-3 bg-slate-100 text-slate-600 rounded-full">
          Instant Local Creation
        </span>
      </div>

      {/* Demo Disclosure Notice */}
      <div className="mb-5 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
        <FaCircleInfo className="text-orange shrink-0 mt-0.5" size={14} aria-hidden="true" />
        <p>
          <strong className="font-semibold">Local Registration:</strong> Your student account is generated entirely inside this browser. No external verification email or credentials required.
        </p>
      </div>

      {message && (
        <div
          className={`p-3.5 rounded-xl mb-5 text-xs font-medium flex items-center gap-2 ${
            message.includes("locally")
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {message.includes("locally") && <FaCheck className="text-green-600 shrink-0" />}
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="reg-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            id="reg-name"
            type="text"
            className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
            placeholder="e.g. Jordan Lee"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="reg-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            id="reg-email"
            type="email"
            className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
            placeholder="e.g. jordan@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-black text-white py-3 px-8 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            Create Demo Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
