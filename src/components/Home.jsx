import React from 'react';
import Hero from '../assets/hero.jpg';

const Home = () => {
  return (
    <>
      <section
        className="bg-blue-700 text-white py-20 hero-bg"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold">Hello, I'm Muhammad Azhar</h2>
          <p className="text-lg mt-4">I'm a Web Developer passionate about React.js and JavaScript, always looking for new challenges!</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          I'm a self-driven web developer with a strong passion for crafting beautiful, functional web applications. I specialize in React.js, JavaScript, and front-end technologies. 
          Outside of development, I love problem-solving and always strive to learn new things, pushing myself to grow both professionally and personally.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Education</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Secondary Education (Matriculation)</h3>
              <p className="text-gray-600">Noukhez Public High School | Completed: 2022</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Intermediate of Computer Science (ICS)</h3>
              <p className="text-gray-600">City College of Science & Commerce | Completed: 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Associate Degree in Computer Science</h3>
              <p className="text-gray-600">City College of Science & Commerce | Currently Enrolled</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Relevant Experience</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">SEO Intern</h3>
          <p className="text-gray-600">Invento Crew | Duration: 3 Months</p>
          <p className="mt-2 text-gray-700">
            Worked on optimizing website content to improve search engine rankings. I was involved in both on-page and off-page SEO strategies, and I also analyzed performance metrics to provide actionable insights.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Call Center Representative</h3>
          <p className="text-gray-600">AI Neuralz | Duration: 3 Months</p>
          <p className="mt-2 text-gray-700">
            Managed inbound and outbound calls, providing excellent customer service and assisting clients with various inquiries. The role helped me build strong communication and problem-solving skills.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">Freelance Web Development Projects</h3>
          <p className="text-gray-600">Personal Projects for Learning</p>
          <p className="mt-2 text-gray-700">
            Designed and developed multiple personal projects, including a responsive portfolio website. I focused on mastering front-end technologies, including HTML, CSS, and JavaScript.
          </p>
        </div>
      </section>

    </>
  );
};

export default Home;
