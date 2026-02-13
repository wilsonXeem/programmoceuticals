const mongoose = require('mongoose');
const Course = require('../models/Course');
const Cohort = require('../models/Cohort');

const courses = [
  { title: 'Python', slug: 'python', category: 'programming', description: 'Powerful and versatile. Great for backend development, data science, and automation.' },
  { title: 'JavaScript ES6+', slug: 'javascript', category: 'programming', description: 'The language of the browser. Learn DOM manipulation, async/await, and APIs.' },
  { title: 'HTML5', slug: 'html', category: 'programming', description: 'The foundation of the web. Learn semantic markup, forms, and modern HTML5 features.' },
  { title: 'CSS3', slug: 'css', category: 'programming', description: 'Style the web beautifully. Master layouts, animations, and responsive design.' },
  { title: 'React', slug: 'react', category: 'programming', description: 'Build modern UIs with components, hooks, and state management.' },
  { title: 'Node.js & Express', slug: 'nodejs', category: 'programming', description: 'Server-side JavaScript. Build APIs, handle databases, and deploy applications.' },
  { title: 'Data Structures & Algorithms', slug: 'dsa', category: 'programming', description: 'Master the foundation of computer science. Essential for technical interviews.' },
  { title: 'Web Hosting & Deployment', slug: 'hosting', category: 'programming', description: 'Learn to deploy and host your web applications. Domain setup, SSL, and performance optimization.' },
  { title: 'Django Web Framework', slug: 'django', category: 'programming', description: 'Build powerful web applications with Python’s most popular framework.' },
  { title: 'SQL Database Management', slug: 'sql', category: 'programming', description: 'Master database queries and data manipulation with SQL.' },
  { title: 'MongoDB NoSQL Database', slug: 'mongodb', category: 'programming', description: 'Master NoSQL databases and document-oriented storage with MongoDB.' },
  { title: 'AngularJS Framework', slug: 'angularjs', category: 'programming', description: 'Build dynamic single-page apps with AngularJS.' },
  { title: 'Excel & Data Analysis', slug: 'excel', category: 'basic', description: 'Master spreadsheets, formulas, pivot tables, and data analysis.' },
  { title: 'SPSS Statistical Analysis', slug: 'spss', category: 'basic', description: 'Master statistical analysis and research with IBM SPSS.' },
  { title: 'Computer Networking', slug: 'networking', category: 'basic', description: 'Master network protocols, architecture, and infrastructure.' }
];

const createCohort = async (courseId, title) => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 14);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + (12 * 7));

  const existing = await Cohort.findOne({ course_id: courseId });
  if (existing) {
    return;
  }

  await Cohort.create({
    course_id: courseId,
    name: `${title} Cohort`,
    start_date: startDate,
    end_date: endDate,
    instructor: 'ProgrammoCeuticals Faculty',
    schedule: {
      days_per_week: 3,
      hours_per_session: 2,
      time_slot: '6:00 PM WAT'
    },
    status: 'upcoming'
  });
};

const run = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/cohort-school';
  await mongoose.connect(mongoUri);

  for (const course of courses) {
    const existing = await Course.findOne({ slug: course.slug });
    const record = existing || await Course.create(course);
    await createCohort(record._id, course.title);
  }

  await mongoose.disconnect();
};

run()
  .then(() => {
    console.log('Seed complete');
  })
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  });
