import './App.css'
import Profile from "./assets/Photo.png"
import ProfileBg from "./assets/small.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";

function App() {

  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-bold text-xl'>Aksh Portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* Intro/Banner section */}
        <section>
          <div className='container m-auto px-4 py-32 flex flex-col sm:flex-row gap-6'>
            <div>
              <h2 className='font-bold text-4xl'>Hello, I'm Aksh,</h2>
              <h2 className='font-bold text-4xl mt-1 gradiant-text running-text'>Frontend developer</h2>
              <p className='mt-4 text-gray-400'>Seeking to apply competent development skills with focus on collaboration, communication, and passion</p>
            </div>
            <div className='relative'>
              <img src={Profile} width={520} className='relative z-10' />
              <img src={ProfileBg} width={180} className='absolute top-6 left-12 z-0' />
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Designer furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online store of designer
                  furniture. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Landing page for front-end developer
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page for front-end
                  developer. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Website redesign for The Venus project
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                  (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technology section */}
        <section className='py-10'>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Technologies</h2>
            <div className='mt-14'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>CSS, Sass & Bootstrap</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>JavaScript, TypeScript, JQuery</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>UI design in Figma</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Angular</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[25%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>React</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[30%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>React Native</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[20%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className='container m-auto px-4 py-14'>
            <h2 className='text-2xl font-semibold'>Additional technologies and skills</h2>
            <div className='flex gap-12 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:black before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Git</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:black before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Wordpress</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:black before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Team work</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:black before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Quick learning</p>
              </div>
            </div>
            <div className='flex gap-12 mt-6 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:black before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Engagement</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:black before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>B2 english</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:black before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>RWD</p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-8'>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>About me</h2>
            <div className='mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full sm:before:bottom-2 before:w-1 before:bg-white'>
              <div className='pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='absolute left-0 text-lg font-semibold'>2020</h3>
                <p>Passout (10th) from Annie Beasent National School Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa consequatur, excepturi porro nulla deserunt magnam exercitationem neque laboriosam eligendi odio blanditiis nisi harum corrupti ab! Totam quia impedit suscipit.
                  Placeat nam doloremque quae, dolores fugiat culpa voluptate eveniet, non, neque quibusdam veritatis enim aliquid. Et incidunt itaque nisi ipsam laboriosam, necessitatibus aut distinctio expedita, ea reiciendis fuga nemo maxime?</p>
              </div>
              <div className='pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='absolute left-0 text-lg font-semibold'>2021</h3>
                <p>Underwent a digital marketing course and started to work as a PPC and project manager in a local web studio. After 3 months started my own freelance practice.</p>
              </div>
              <div className='pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='absolute left-0 text-lg font-semibold'>2023</h3>
                <p>Became more interested in IT and decided to try programming. Underwent Java course and made a project.</p>
              </div>
              <div className='pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                <h3 className='absolute left-0 text-lg font-semibold'>2024</h3>
                <p>Worked out in which field I want to build a developer's career and started to learn Frontend Development.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
