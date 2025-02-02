import BackgroundBeams from "./BackgroundBeams";
function Intro() {
  const skills = [
    ["JavaScript", "TypeScript"],
    ["Python", "Java"],
    ["React.js", "React Native"],
    ["Node.js", "Express.js"],
    ["SQL", "MongoDB"],
    ["Git", "Docker"],
  ];

  return (
    <>
      <BackgroundBeams />
      <section className="text-white py-6">
        {/* About Developer */}
        <h1 className="text-2xl mb-2">About Developer</h1>
        <div className="w-full h-[1px] bg-[#605f5f] mb-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base leading-tight">
          {/* Name Section */}
          <div className="flex flex-col">
            <p className="text-[#858585]">The Name</p>
            <p className="font-semibold">Joseph Boateng</p>
            <p className="text-[#858585]">(Based in the USA)</p>
          </div>

          {/* Status Section */}
          <div className="flex flex-col">
            <p className="text-[#858585]">Status</p>
            <p className="font-semibold">
              Actively seeking internships, co-op opportunities, or entry-level
              roles in software development.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <p className="text-[#858585]">Contact</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://drive.google.com/file/d/1554u8nGoFCoazNOghbLGK_INanAESgqb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                Resume
              </a>
              <a
                href="https://github.com/JosephBoat404"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/josephboat45"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                LinkedIn
              </a>
            </div>
            <a
              href="mailto:boatengj2@montclair.edu"
              className="underline hover:text-gray-400 mt-1"
            >
              boatengj2@montclair.edu
            </a>
          </div>
        </div>

        {/* Background Information */}
        <div className="w-full h-[1px] bg-[#605f5f] my-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base leading-tight">
          {/* Education Section */}
          <div className="flex flex-col">
            <p className="text-gray-500">Education</p>
            <p className="text-white">Montclair State University</p>
            <p className="text-gray-500">
              Bachelor of Science in Computer Science
              <br />
              Expected Graduation: May 2024
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col">
            <p className="text-gray-500">Skills</p>
            <div className="text-white grid grid-cols-1 gap-x-4">
              {skills.map((pair, index) => (
                <p key={index}>
                  {pair[0]} - {pair[1]}
                </p>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col">
            <p className="text-gray-500">Experience</p>
            <p className="text-white">
              Junior Web Developer
              <br />
              <span className="text-gray-400">
                Opportunity College (2023 - 2023)
              </span>
              <br />
              BMW Security Officer
              <br />
              <span className="text-gray-400">
                Dothan Security Inc (2024 - Present)
              </span>
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <h2 className="text-2xl mb-2">Projects</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Project 1 */}
          <div className="border border-gray-500 p-3 rounded-md flex-1">
            <a
              href="https://github.com/JosephBoat404/pay-check"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-400 flex items-center gap-1"
            >
              Work Hours & Pay Tracker Mobile App ↗
            </a>
            <p className="text-gray-400 mt-1">
              A React Native app for tracking work hours and earnings, with
              clerk for real-time data sync and authentication.
            </p>
            <div className="text-sm text-gray-500 mt-1">
              {["React Native", "TypeScript", "Clerk"].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block border  border-gray-500 rounded-full px-2 py-1 mr-2 mb-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-500 p-3 rounded-md flex-1">
            <a
              href="https://josephboat404.github.io/Parking-Calculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-400 flex items-center gap-1"
            >
              Student Parking Expense Calculator Web App ↗
            </a>
            <p className="text-gray-400 mt-1">
              A React.js app for estimating parking costs, built with TypeScript
              and Tailwind CSS for a responsive UI.
            </p>
            <div className="text-sm text-gray-500 mt-1">
              {["React.js", "TypeScript", "Vite", "Tailwind CSS"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="inline-block border border-gray-500 rounded-full px-2 py-1 mr-2 mb-1"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
