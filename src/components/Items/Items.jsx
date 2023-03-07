import './Items.scss'
import Item from "../Item/Item";

const testItems = [
  {
    title: "Web Development Bootcamp",
    description: "This course is designed for beginners who want to learn web development from scratch. You will learn HTML, CSS, JavaScript, and other web development technologies to build interactive and responsive websites. The course is self-paced and includes hands-on projects to help you reinforce your skills.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "development"
  },
  {
    title: "Data Science Fundamentals",
    description: "This course covers the fundamentals of data science, including statistics, data visualization, machine learning, and data analysis. You will learn how to use tools like Python and R to analyze data and make data-driven decisions. The course is suitable for beginners and requires no prior knowledge of programming.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png",
    category: "development"
  },
  {
    title: "Digital Marketing Essentials",
    description: "This course teaches you the essentials of digital marketing, including SEO, PPC, social media marketing, email marketing, and content marketing. You will learn how to create effective digital marketing strategies to reach your target audience and increase conversions. The course is suitable for beginners and includes real-world examples and case studies.",
    image: "https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj",
    category: "marketing"
  },
  {
    title: "Mobile App Development",
    description: "This course teaches you how to develop mobile apps for iOS and Android using the latest technologies and programming languages. You will learn how to create responsive user interfaces, integrate APIs, and use native features of mobile devices. The course is suitable for beginners and requires basic knowledge of programming.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "development"
  },
  {
    title: "Graphic Design Fundamentals",
    description: "This course covers the fundamentals of graphic design, including typography, color theory, layout design, and branding. You will learn how to use tools like Adobe Photoshop, Illustrator, and InDesign to create visually appealing designs for print and digital media. The course is suitable for beginners and includes hands-on projects and assignments.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "design"
  },
  {
    title: "Web Design Fundamentals",
    description: "This course covers the basics of web design, including HTML, CSS, and responsive design techniques. You will learn how to create visually appealing and user-friendly websites that work well on desktop and mobile devices. Suitable for beginners.",
    image: "https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj",
    category: "design"
  },
  {
    title: "English Language Course",
    description: "Improve your English language skills with this comprehensive course, which covers grammar, vocabulary, listening, speaking, and writing. Suitable for all levels, from beginners to advanced learners.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png",
    category: "language"
  },
  {
    title: "JavaScript Programming",
    description: "Learn how to code in JavaScript, the language of the web. This course covers the fundamentals of programming, including variables, functions, conditionals, loops, and more. You will also learn how to use JavaScript to interact with HTML and CSS. Suitable for beginners with some coding experience.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "development"
  },
  {
    title: "Social Media Marketing",
    description: "This course teaches you how to create effective social media marketing campaigns that increase engagement and drive sales. You will learn how to create content that resonates with your audience, how to run targeted ads, and how to track your results. Suitable for marketers and business owners.",
    image: "https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj",
    category: "marketing"
  },
  {
    title: "3D Animation",
    description: "In this course, you will learn how to create stunning 3D animations using industry-standard software like Blender and Maya. You will learn how to create models, rig characters, animate movements, and add special effects. Suitable for beginners with some design experience.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "animation"
  },
  {
    title: "Graphic Design Fundamentals",
    description: "This course provides an introduction to graphic design principles and techniques. Students will learn how to use typography, color, and layout to create effective designs for print and digital media. No prior experience in graphic design is required.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "design"
  },
  {
    title: "Spanish Language for Beginners",
    description: "In this course, students will learn the basics of Spanish grammar, vocabulary, and pronunciation. Emphasis is placed on developing conversational skills and cultural awareness. No prior knowledge of Spanish is required.",
    image: "https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj",
    category: "language"
  },
  {
    title: "JavaScript Programming",
    description: "This course covers the fundamentals of JavaScript programming, including variables, data types, control structures, functions, and objects. Students will learn how to use JavaScript to create interactive web applications. Basic knowledge of HTML and CSS is recommended.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png",
    category: "development"
  },
  {
    title: "Digital Marketing Strategy",
    description: "This course provides an overview of digital marketing strategies and tactics, including social media, content marketing, email marketing, and search engine optimization. Students will learn how to create and implement a successful digital marketing plan.",
    image: "https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj",
    category: "marketing"
  },
  {
    title: "User Experience Design",
    description: "In this course, students will learn how to create user-centered designs for websites and mobile applications. Topics covered include user research, information architecture, prototyping, and usability testing.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "design"
  },
  {
    title: "Introduction to Python",
    description: "This course provides an introduction to programming using the Python language. Topics covered include variables, data types, control structures, functions, and modules. No prior experience in programming is required.",
    image: "https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj",
    category: "development"
  },
  {
    title: "Business Writing Skills",
    description: "In this course, students will learn how to write clear and effective business documents, including emails, memos, and reports. Emphasis is placed on grammar, punctuation, and formatting.",
    image: "https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg",
    category: "language"
  },
  {
    title: "Motion Graphics Animation",
    description: "This course covers the fundamentals of motion graphics animation, including keyframe animation, easing, and timing. Students will learn how to use Adobe After Effects to create visually compelling animations.",
    image: "https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj",
    category: "animation"
  }

];


export default function Items(props) {
  return (
    <ul className={'items'}>
      {
        testItems.map((item, index) =>
          <Item key={index}
                item={item}
                onItemClick={props.onItemClick} />
        )
      }
    </ul>
  )
}