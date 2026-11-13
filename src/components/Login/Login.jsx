import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDemoStore } from "../../context/DemoStoreContext";
import { FaCircleInfo, FaCheck } from "react-icons/fa6";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { loginDemoUser, isAuthenticated, user } = useDemoStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setMessage("Please enter your name and email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      return;
    }

    loginDemoUser({ name: name.trim(), email: email.trim() });
    setMessage(`Logged in successfully as ${name.trim()}! Redirecting...`);
    setTimeout(() => {
      navigate("/my-learning");
    }, 1200);
  };

  const handleQuickDemo = () => {
    setName("Alex Rivera");
    setEmail("alex.rivera@example.com");
  };

  return (
    <div className="Login w-1/2 p-7 max-md:w-full border border-slate-200 rounded-3xl shadow-xs bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold font-exo text-black">
          Demo Login
        </h2>
        <span className="text-xs font-semibold py-1 px-3 bg-slate-100 text-slate-600 rounded-full">
          No Password Required
        </span>
      </div>

      {/* Demo Disclosure Notice */}
      <div className="mb-5 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
        <FaCircleInfo className="text-orange shrink-0 mt-0.5" size={14} aria-hidden="true" />
        <p>
          <strong className="font-semibold">Simulated Authentication:</strong> Enter any name and email to simulate logging into your student dashboard. No sensitive passwords are collected or stored.
        </p>
      </div>

      {isAuthenticated && (
        <div className="p-3.5 rounded-xl mb-5 text-xs bg-amber-50 text-amber-800 border border-amber-200">
          Currently signed in as <strong>{user?.name}</strong> ({user?.email}). Submitting will switch active demo user.
        </div>
      )}

      {message && (
        <div
          className={`p-3.5 rounded-xl mb-5 text-xs font-medium flex items-center gap-2 ${
            message.includes("successfully")
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {message.includes("successfully") && <FaCheck className="text-green-600 shrink-0" />}
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="login-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Your Name *
          </label>
          <input
            id="login-name"
            type="text"
            className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
            placeholder="e.g. Alex Rivera"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="login-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            id="login-email"
            type="email"
            className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
            placeholder="e.g. alex@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-orange text-white py-3 px-8 rounded-xl font-semibold text-sm hover:bg-orange/90 transition-colors shadow-sm cursor-pointer"
          >
            Sign In (Demo)
          </button>

          <button
            type="button"
            onClick={handleQuickDemo}
            className="w-full sm:w-auto text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-xl transition-colors cursor-pointer"
          >
            Auto-fill Sample User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
