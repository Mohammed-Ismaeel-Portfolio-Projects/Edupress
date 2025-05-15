import course1Image from "./../assets/images/courses-image-1.png";
import course2Image from "./../assets/images/courses-image-2.png";
import course3Image from "./../assets/images/courses-image-3.png";
import course4Image from "./../assets/images/courses-image-4.png";
import course5Image from "./../assets/images/courses-image-5.png";
import course6Image from "./../assets/images/courses-image-6.png";

const coursesPosts = [
  {
    image: course1Image,
    scope: "commercial",
    title: "Commercial Design Basics",
    by: "Kenny White",
    weeks: 2,
    students: 156,
    levels: "Beginner",
    lessons: 20,
    salary: "0.0",
    isFree: true,
    rating: 5,
  },
  {
    image: course2Image,
    scope: "office",
    title: "Office Interior Layouts",
    by: "John Doe",
    weeks: 4,
    students: 220,
    levels: "Beginner",
    lessons: 30,
    salary: "49.0",
    isFree: false,
    rating: 4,
  },
  {
    image: course3Image,
    scope: "shop",
    title: "Shop Renovation Guide",
    by: "Kenny White",
    weeks: 3,
    students: 180,
    levels: "Intermediate",
    lessons: 25,
    salary: "29.0",
    isFree: false,
    rating: 3,
  },
  {
    image: course4Image,
    scope: "educate", // fixed
    title: "Modern Classroom Designs",
    by: "Alice Smith",
    weeks: 2,
    students: 98,
    levels: "All levels",
    lessons: 18,
    salary: "0.0",
    isFree: true,
    rating: 4,
  },
  {
    image: course5Image,
    scope: "single_family", // fixed
    title: "Minimalist Home Projects",
    by: "John Doe",
    weeks: 5,
    students: 350,
    levels: "Expert",
    lessons: 35,
    salary: "99.0",
    isFree: false,
    rating: 5,
  },
  {
    image: course6Image,
    scope: "university", // fixed
    title: "Campus Planning Essentials",
    by: "Alice Smith",
    weeks: 6,
    students: 500,
    levels: "Intermediate",
    lessons: 40,
    salary: "0.0",
    isFree: true,
    rating: 2,
  },
];

export default coursesPosts;
