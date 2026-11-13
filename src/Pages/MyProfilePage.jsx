import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
import Footer from "../components/Footer/Footer";
import { useDemoStore } from "../context/DemoStoreContext";
import { FaCircleUser, FaCircleInfo, FaGraduationCap, FaHeart, FaRightFromBracket, FaCheck } from "react-icons/fa6";

const MyProfilePage = () => {
  const { user, isAuthenticated, updateProfile, logoutDemoUser, enrolledCount, wishlistCount } = useDemoStore();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setFeedback({ type: "error", text: "Name and email cannot be empty." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFeedback({ type: "error", text: "Please provide a valid email format." });
      return;
    }

    const success = updateProfile(name, email);
    if (success) {
      setFeedback({ type: "success", text: "Profile details updated and saved locally in your browser!" });
      setTimeout(() => setFeedback({ type: "", text: "" }), 4000);
    }
  };

  const handleLogout = () => {
    logoutDemoUser();
    navigate("/auth");
  };

  const navLinks = [
    { title: "Home", path: "" },
    { title: "Courses", path: "courses" },
    { title: "Blog", path: "blog" },
    { title: "Contact", path: "contact" },
    { title: "FAQs", path: "faqs" },
  ];

  const breakLinks = [
    { title: "Homepage", href: "" },
    { title: "My Profile", href: "my-profile" },
  ];

  return (
    <>
      <div className="header fixed top-0 w-full z-50">
        <NavBar navLinks={navLinks} />
        <BreakCrumb breakLinks={breakLinks} />
      </div>

      <div className="mt-52 mx-auto w-11/12 max-w-4xl mb-16">
        {/* Page Header */}
        <div className="pb-6 border-b border-slate-200 mb-8">
          <h1 className="text-3xl md:text-4xl font-exo font-bold text-black flex items-center gap-3">
            <FaCircleUser className="text-orange" size={34} aria-hidden="true" />
            <span>My Demo Profile</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your simulated local account credentials and dashboard activity
          </p>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs text-slate-700 leading-relaxed">
          <FaCircleInfo className="text-orange shrink-0" size={15} aria-hidden="true" />
          <p>
            <strong className="font-semibold">Local Demo Session Notice:</strong> Profile data is held entirely in your browser&apos;s localStorage. Logging out resets only your session identification, preserving your local wishlist and enrolled course history.
          </p>
        </div>

        {!isAuthenticated ? (
          <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-xs">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
              <FaCircleUser size={32} />
            </div>
            <h2 className="text-2xl font-exo font-bold text-black mb-2">
              You are currently signed out
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              Sign in with your name and email to access your personal profile controls and sync your demo learning dashboard.
            </p>
            <Link
              to="/auth"
              className="inline-block bg-orange text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-orange/90 transition-colors shadow-sm"
            >
              Sign In to Demo Session
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Quick Stats & Actions */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl h-fit space-y-6">
              <div>
                <div className="w-20 h-20 rounded-full bg-orange/10 text-orange flex items-center justify-center text-3xl font-exo font-bold mb-3 border-2 border-orange/20">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h3 className="font-exo font-bold text-xl text-black truncate">{user.name}</h3>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                <span className="inline-block mt-2 py-0.5 px-2.5 bg-green/10 text-green rounded-full text-xs font-semibold">
                  Active Demo Session
                </span>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3 text-sm">
                <Link
                  to="/my-learning"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-orange transition-colors no-underline text-inherit"
                >
                  <span className="flex items-center gap-2 font-medium text-slate-800">
                    <FaGraduationCap className="text-orange" />
                    Enrolled Courses
                  </span>
                  <span className="font-bold text-black text-xs bg-slate-100 px-2 py-0.5 rounded">
                    {enrolledCount}
                  </span>
                </Link>

                <Link
                  to="/my-wishlist"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-orange transition-colors no-underline text-inherit"
                >
                  <span className="flex items-center gap-2 font-medium text-slate-800">
                    <FaHeart className="text-red-500" />
                    Wishlist Items
                  </span>
                  <span className="font-bold text-black text-xs bg-slate-100 px-2 py-0.5 rounded">
                    {wishlistCount}
                  </span>
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-red-200 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <FaRightFromBracket size={14} />
                  <span>Sign Out Session</span>
                </button>
              </div>
            </div>

            {/* Right Column: Edit Profile Form */}
            <div className="md:col-span-2 p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
              <h2 className="text-xl font-exo font-bold text-black mb-6 pb-3 border-b border-slate-100">
                Edit Profile Information
              </h2>

              {feedback.text && (
                <div
                  className={`p-4 rounded-xl mb-6 text-sm flex items-center gap-2 ${
                    feedback.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {feedback.type === "success" && <FaCheck className="text-green-600 shrink-0" />}
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-5">
                <div>
                  <label htmlFor="profile-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    id="profile-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="profile-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    id="profile-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-orange text-white py-3 px-8 rounded-xl font-semibold text-sm hover:bg-orange/90 transition-colors shadow-sm cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MyProfilePage;
