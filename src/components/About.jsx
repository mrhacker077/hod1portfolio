import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Info Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Personal Information
          </h2>
          <p className="text-gray-700">
            Hello everyone, my name is Rekha T, and I am the Head
            of the Chemical Engineering Department here at Karnataka Govt. Polytechnic. I was born on 03/12/1972 in Bangalore, Karnataka.
          </p>
          <p className="mt-4 text-gray-700">
            Hobbies: reading novels, listening to music.
          </p>
        </div>

        {/* Education Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Education & Training
          </h2>
          <p className="text-gray-700">
            I have completed BE (Chemical Engineering) at MS Ramaiah Institute of Technology, Bangalore, Karnataka. Currently working as Selection
            Grade Lecturer/HOD in KPT Mangalore, Karnataka.
          </p>
        </div>

        {/* Skills Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Skills & Expertise
          </h2>
          <p className="text-gray-700">
          Comprehensive understanding of chemical engineering principles, with expertise in process design, optimization, and analysis. Skilled in laboratory techniques, research methodologies, and a dedication to fostering a collaborative learning environment.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Professional Experience
          </h2>
          <p className="text-gray-700">
            Joined the CH department as a lecturer in 1999 and worked for 7
            years at KPT ,Kadri hills, Mangalore and also at SJP(Sri Jayachamarajendra Polytechnic) Bangalore for 15 years. Currently serving as the Head of the Chemical
            Engineering Department at KPT since the past 3 years.
          </p>
        </div>


        {/* Mission Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Mission Statement
          </h2>
          <p className="text-gray-700">
          My mission is to utilize my expertise and passion for chemical engineering to inspire students and deliver innovative solutions that address real-world challenges, foster sustainable practices, and contribute positively to the field of chemical engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
