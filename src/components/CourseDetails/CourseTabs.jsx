import { useState, useRef } from "react";
import {
  FaBookOpen,
  FaUserTie,
  FaCircleInfo,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaCircleQuestion,
  FaGraduationCap
} from "react-icons/fa6";

const CourseTabs = ({ course, categoryLabel, details }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabRefs = useRef({});
  // Default first module open in curriculum
  const [openModules, setOpenModules] = useState({ 0: true });

  const toggleModule = (index) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FaCircleInfo },
    { id: "curriculum", label: "Curriculum", icon: FaBookOpen },
    { id: "instructor", label: "Instructor", icon: FaUserTie },
    { id: "faqs", label: "FAQs", icon: FaCircleQuestion },
  ];

  const handleKeyDown = (e, index) => {
    let targetIndex = null;

    if (e.key === "ArrowRight") {
      targetIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      targetIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      targetIndex = 0;
    } else if (e.key === "End") {
      targetIndex = tabs.length - 1;
    }

    if (targetIndex !== null) {
      e.preventDefault();
      const targetTab = tabs[targetIndex];
      setActiveTab(targetTab.id);
      if (tabRefs.current[targetTab.id]) {
        tabRefs.current[targetTab.id].focus();
      }
    }
  };

  return (
    <div className="course-tabs my-8">
      {/* Demo Educational Content Disclosure Notice */}
      <div className="mb-6 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-center gap-3 text-xs text-amber-900 leading-relaxed">
        <FaCircleInfo className="text-amber-600 shrink-0" size={15} aria-hidden="true" />
        <p>
          <strong className="font-semibold">Demo Course Notice:</strong> Detailed course descriptions, learning objectives, curricula, lesson outlines, instructor profiles, and FAQs are simulated demonstration content provided for interface evaluation.
        </p>
      </div>

      {/* Tab Navigation */}
      <div
        role="tablist"
        aria-label="Course Sections"
        className="flex border-b border-slate-200 gap-2 md:gap-8 overflow-x-auto"
      >
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`flex items-center gap-2 py-3.5 px-4 font-exo font-semibold text-sm md:text-base border-b-2 transition-all whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange/40 rounded-t-lg ${
                isActive
                  ? "border-orange text-orange-accessible"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="tab-content py-6 font-jost text-gray-700 leading-relaxed">
        {/* ================= OVERVIEW PANEL ================= */}
        {activeTab === "overview" && (
          <div
            role="tabpanel"
            id="panel-overview"
            aria-labelledby="tab-overview"
            className="space-y-8 animate-fadeIn"
          >
            {/* Course Summary & Description */}
            <div>
              <h2 className="text-xl md:text-2xl font-exo font-bold text-black mb-3">
                Course Overview
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                {details?.overview || course.title}
              </p>
              <p className="text-sm text-gray-500 italic">
                Category: <span className="font-semibold text-black">{categoryLabel}</span> • Difficulty Level: <span className="font-semibold text-black">{course.levels}</span>
              </p>
            </div>

            {/* What You Will Learn (Learning Objectives) */}
            {details?.learningObjectives && details.learningObjectives.length > 0 && (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
                <h3 className="text-lg md:text-xl font-exo font-bold text-black mb-4 flex items-center gap-2.5">
                  <FaGraduationCap className="text-orange" size={20} aria-hidden="true" />
                  What You Will Learn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {details.learningObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green/10 text-green flex items-center justify-center shrink-0 mt-0.5">
                        <FaCheck size={10} aria-hidden="true" />
                      </div>
                      <span className="text-sm text-gray-700 leading-snug">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Target Audience & Prerequisites */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="p-5 bg-white border border-slate-200 rounded-2xl">
                <h4 className="font-exo font-bold text-black text-base mb-2">
                  Target Audience
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {details?.targetAudience || "Students and professionals seeking foundational domain expertise."}
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl">
                <h4 className="font-exo font-bold text-black text-base mb-2">
                  Prerequisites
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {details?.prerequisites || "No special prerequisites required."}
                </p>
              </div>
            </div>

            {/* Skills Acquired Badges */}
            {details?.skills && details.skills.length > 0 && (
              <div>
                <h4 className="font-exo font-bold text-black text-base mb-3">
                  Skills You Will Develop
                </h4>
                <div className="flex flex-wrap gap-2">
                  {details.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="py-1.5 px-3.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= CURRICULUM PANEL ================= */}
        {activeTab === "curriculum" && (
          <div
            role="tabpanel"
            id="panel-curriculum"
            aria-labelledby="tab-curriculum"
            className="space-y-6 animate-fadeIn"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl md:text-2xl font-exo font-bold text-black">
                  Course Curriculum
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {details?.curriculum?.length || 0} Modules • {course.lessons} Lessons Total • {course.weeks} Weeks Duration
                </p>
              </div>
              <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 self-start sm:self-auto">
                {course.levels} Level
              </div>
            </div>

            {/* Expandable Accordion Modules */}
            <div className="space-y-4">
              {details?.curriculum?.map((module, mIdx) => {
                const isOpen = !!openModules[mIdx];
                return (
                  <div
                    key={mIdx}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
                  >
                    {/* Module Accordion Header */}
                    <button
                      type="button"
                      onClick={() => toggleModule(mIdx)}
                      className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange/10 text-orange flex items-center justify-center font-bold text-xs shrink-0">
                          {module.moduleNumber}
                        </div>
                        <div>
                          <h3 className="font-exo font-bold text-black text-sm md:text-base">
                            {module.title}
                          </h3>
                          <span className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                            <FaClock size={11} aria-hidden="true" />
                            {module.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-400 pl-2">
                        {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                      </div>
                    </button>

                    {/* Module Lessons List */}
                    {isOpen && (
                      <div className="p-4 divide-y divide-slate-100 bg-white">
                        {module.lessons.map((lesson, lIdx) => (
                          <div
                            key={lIdx}
                            className="py-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-xs font-mono font-semibold text-gray-400 mt-0.5 w-6 shrink-0">
                                {lIdx + 1 < 10 ? `0${lIdx + 1}` : lIdx + 1}
                              </span>
                              <div>
                                <p className="font-medium text-black text-sm leading-snug">
                                  {lesson.title}
                                </p>
                                {lesson.desc && (
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {lesson.desc}
                                  </p>
                                )}
                              </div>
                            </div>
                            <span className="text-xs font-semibold text-gray-500 shrink-0 bg-slate-100 px-2 py-0.5 rounded self-start sm:self-auto">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= INSTRUCTOR PANEL ================= */}
        {activeTab === "instructor" && (
          <div
            role="tabpanel"
            id="panel-instructor"
            aria-labelledby="tab-instructor"
            className="space-y-6 animate-fadeIn"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-exo font-bold text-black mb-4">
                Instructor Information
              </h2>
            </div>

            {/* Clean Professional Layout - Monogram Initial Circle Completely Removed */}
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-exo font-bold text-black">
                    {course.by}
                  </h3>
                  <p className="text-xs text-orange font-semibold uppercase tracking-wider mt-1">
                    {details?.instructorProfile?.title || "Educational Course Instructor"}
                  </p>
                </div>
                <div className="text-xs font-medium text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 self-start shadow-xs">
                  Demo Instructor Profile
                </div>
              </div>

              {/* Fictional Biography Notice */}
              <div className="py-6 space-y-4 text-sm text-gray-600 leading-relaxed border-b border-slate-200">
                <p className="text-xs text-slate-500 italic pb-1">
                  * Note: The following instructor profile, teaching focus, and expertise are simulated demo data.
                </p>
                <p>
                  {details?.instructorProfile?.bio ||
                    `${course.by} is an educator teaching ${course.title} on the EduPress learning platform.`}
                </p>
                {details?.instructorProfile?.teachingFocus && (
                  <p>
                    <strong className="text-black font-semibold">Teaching Focus: </strong>
                    {details.instructorProfile.teachingFocus}
                  </p>
                )}
              </div>

              {/* Areas of Expertise */}
              {details?.instructorProfile?.expertise && details.instructorProfile.expertise.length > 0 && (
                <div className="pt-6">
                  <h4 className="font-exo font-bold text-black text-sm uppercase tracking-wider mb-3">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {details.instructorProfile.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="py-1 px-3 bg-white border border-slate-200 text-slate-700 rounded-md text-xs font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= FAQS PANEL ================= */}
        {activeTab === "faqs" && (
          <div
            role="tabpanel"
            id="panel-faqs"
            aria-labelledby="tab-faqs"
            className="space-y-6 animate-fadeIn"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-exo font-bold text-black mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-500">
                Common questions about {course.title} and course requirements.
              </p>
            </div>

            <div className="space-y-4">
              {details?.faqs?.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-50 border border-slate-200 rounded-2xl"
                >
                  <h3 className="font-exo font-bold text-black text-base mb-2 flex items-start gap-2.5">
                    <span className="text-orange font-bold">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseTabs;
