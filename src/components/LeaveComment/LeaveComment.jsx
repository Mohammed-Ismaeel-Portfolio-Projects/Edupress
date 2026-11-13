import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useDemoStore } from "../../context/DemoStoreContext";
import { FaCircleInfo } from "react-icons/fa6";

const LeaveComment = ({ articleId }) => {
  const { savedCommenter, updateSavedCommenter, addArticleComment, user } = useDemoStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-prefill if saved commenter info exists or demo user is signed in
  useEffect(() => {
    if (savedCommenter?.name) {
      setName(savedCommenter.name);
      setEmail(savedCommenter.email || "");
      setSaveInfo(true);
    } else if (user?.name) {
      setName(user.name);
      setEmail(user.email || "");
    }
  }, [savedCommenter, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    // Save info preference if toggled
    if (saveInfo) {
      updateSavedCommenter({ name: name.trim(), email: email.trim() });
    }

    // Persist comment locally in DemoStore
    addArticleComment({
      articleId: articleId ?? 0,
      name: name.trim(),
      email: email.trim(),
      content: comment.trim(),
    });

    setSubmitted(true);
    setComment("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="leave-comment-section">
      <div className="heading">
        <h2 className="text-2xl font-exo font-semibold text-black">Leave A Comment</h2>
        <p className="text-gray-500 text-sm mt-1">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      {/* Demo Notice */}
      <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2.5 text-xs text-slate-600">
        <FaCircleInfo className="text-orange shrink-0" size={13} />
        <span>
          <strong>Local Demo Notice:</strong> Comments are stored locally in your browser. They appear immediately and persist across page reloads.
        </span>
      </div>

      {submitted && (
        <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
          ✓ Your comment has been posted successfully and saved to your local browser session!
        </div>
      )}

      <div className="comment-form">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          <div className="w-full flex gap-4 max-sm:flex-col">
            <div className="input w-full">
              <label htmlFor="comment-name" className="sr-only">Name</label>
              <input
                id="comment-name"
                type="text"
                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
                placeholder="Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input w-full">
              <label htmlFor="comment-email" className="sr-only">Email</label>
              <input
                id="comment-email"
                type="email"
                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input w-full">
            <label htmlFor="comment-content" className="sr-only">Comment</label>
            <textarea
              id="comment-content"
              rows={4}
              className="w-full p-4 rounded-xl border border-slate-300 text-sm outline-none focus:border-orange transition-colors resize-y"
              placeholder="Write your comment here*..."
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="save-commenter-info"
              className="accent-orange cursor-pointer"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
            />
            <label
              htmlFor="save-commenter-info"
              className="text-xs text-gray-600 cursor-pointer select-none"
            >
              Save my name and email in this browser for the next time I comment.
            </label>
          </div>

          <div>
            <Button
              type="submit"
              className="py-3 px-8 text-sm cursor-pointer"
              buttonText="Post Comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveComment;
