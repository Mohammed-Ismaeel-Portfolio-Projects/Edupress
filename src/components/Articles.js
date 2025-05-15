import article1 from "./../assets/images/article-image-1.png";
import article2 from "./../assets/images/article-image-2.png";
import article3 from "./../assets/images/article-image-3.png";
import article4 from "./../assets/images/article-image-4.png";
import article5 from "./../assets/images/article-image-5.png";
import article6 from "./../assets/images/article-image-6.png";

import avatarLaura from "./../assets/images/laura-avatar.png";
import avatarMike from "./../assets/images/Mike.webp";
import avatarJohn from "./../assets/images/John.jpg";
import avatarSara from "./../assets/images/Sara.jpg";

const articles = [
  {
    id: 0,
    image: article1,
    title: "Top WordPress Themes for LearnPress in 2025",
    by: "Amira Al-Sayed",
    commentsCounter: 4,
    category: "educate",
    subject:
      "Discover the best WordPress themes designed specifically for LearnPress in 2025...",
    comments: [
      { userImage: avatarLaura, name: "Laura Hipster", date: "Feb 01, 2025", content: "This theme collection is so helpful!" },
      { userImage: avatarJohn, name: "John Doe", date: "Feb 02, 2025", content: "I tried Eduma, and it’s amazing." },
      { userImage: avatarSara, name: "Sara M.", date: "Feb 03, 2025", content: "Great list!" },
      { userImage: avatarMike, name: "Mike R.", date: "Feb 04, 2025", content: "Any theme strong on mobile?" },
    ],
    tags: ["LearnPress", "LMS", "WordPress"],
    date: "Jan 24, 2025",
    desc: "A curated list of top LearnPress-compatible WordPress themes...",
  },
  {
    id: 1,
    image: article2,
    title: "Free LMS Tools You Can Use in 2025",
    by: "Yousef Kamal",
    commentsCounter: 3,
    category: "academy",
    subject: "LMS tools don’t have to be expensive...",
    comments: [
      { userImage: avatarJohn, name: "John Doe", date: "Feb 05, 2025", content: "Thanks for the breakdown." },
      { userImage: avatarSara, name: "Sara M.", date: "Feb 06, 2025", content: "I’ve been using Moodle." },
      { userImage: avatarLaura, name: "Laura Hipster", date: "Feb 06, 2025", content: "Do a premium vs free comparison!" },
    ],
    tags: ["Free Courses", "LMS"],
    date: "Feb 01, 2025",
    desc: "Here are the best free LMS tools you can try today...",
  },
  {
    id: 2,
    image: article3,
    title: "Marketing Strategies for Online Instructors",
    by: "Nour Ibrahim",
    commentsCounter: 3,
    category: "commercial",
    subject: "Not all LMS plugins are built the same...",
    comments: [
      { userImage: avatarMike, name: "Mike R.", date: "Feb 07, 2025", content: "These tips are gold!" },
      { userImage: avatarJohn, name: "John Doe", date: "Feb 08, 2025", content: "I’ve been struggling to gain visibility." },
      { userImage: avatarSara, name: "Sara M.", date: "Feb 09, 2025", content: "Paid ads or organic?" },
    ],
    tags: ["Marketing", "Instructor"],
    date: "Feb 05, 2025",
    desc: "Explore essential marketing tips for instructors...",
  },
  {
    id: 3,
    image: article4,
    title: "How to Choose the Right LMS Plugin",
    by: "Khaled Nasser",
    commentsCounter: 3,
    category: "university",
    subject: "Struggling to come up with your next course idea?",
    comments: [
      { userImage: avatarLaura, name: "Laura Hipster", date: "Feb 10, 2025", content: "This cleared things up!" },
      { userImage: avatarMike, name: "Mike R.", date: "Feb 11, 2025", content: "Any WooCommerce updates?" },
      { userImage: avatarJohn, name: "John Doe", date: "Feb 11, 2025", content: "Do a video walkthrough!" },
    ],
    tags: ["LMS", "LearnPress"],
    date: "Feb 07, 2025",
    desc: "A complete comparison of LMS plugins for WordPress...",
  },
  {
    id: 4,
    image: article5,
    title: "Creative Course Ideas to Launch This Year",
    by: "Dana Alami",
    commentsCounter: 3,
    category: "studio",
    subject: "Explore trending, profitable course topics...",
    comments: [
      { userImage: avatarSara, name: "Sara M.", date: "Feb 12, 2025", content: "Micro-courses part is brilliant!" },
      { userImage: avatarJohn, name: "John Doe", date: "Feb 13, 2025", content: "Trying a course on AI tools." },
      { userImage: avatarLaura, name: "Laura Hipster", date: "Feb 14, 2025", content: "So inspired to start now!" },
    ],
    tags: ["Idea", "Instructor"],
    date: "Feb 10, 2025",
    desc: "Explore trending and creative online course topics for 2025...",
  },
  {
    id: 5,
    image: article6,
    title: "Why LearnPress Is Still Relevant in 2025",
    by: "Hassan Omar",
    commentsCounter: 4,
    category: "office",
    subject: "LearnPress remains one of the top LMS plugins...",
    comments: [
      { userImage: avatarLaura, name: "Laura Hipster", date: "Feb 15, 2025", content: "Still solid and simple." },
      { userImage: avatarMike, name: "Mike R.", date: "Feb 15, 2025", content: "Could use a UI refresh." },
      { userImage: avatarSara, name: "Sara M.", date: "Feb 16, 2025", content: "What themes work best?" },
      { userImage: avatarJohn, name: "John Doe", date: "Feb 16, 2025", content: "Needs mobile improvements!" },
    ],
    tags: ["LearnPress", "LMS", "Free Courses"],
    date: "Feb 12, 2025",
    desc: "A look at why LearnPress is still a go-to LMS plugin in 2025...",
  },
];

const tags = [
  "Free Courses",
  "Marketing",
  "Idea",
  "LMS",
  "LearnPress",
  "Instructor",
];

export default articles;
export { tags };
