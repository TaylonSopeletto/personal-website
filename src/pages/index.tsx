import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Taylon Sopeletto</title>
    </Head>
    <div className="w-[90%] max-w-[1200px] m-auto">
      <div className="mt-10 flex justify-between">
        <div className="sm:flex gap-10">
          <img className="h-auto sm:h-60 w-full sm:w-auto object-cover rounded-xl" src="https://avatars.githubusercontent.com/u/42319708?v=4"/>
          <div className="flex flex-col gap-5 sm:h-full justify-center">
            <h1 className="mt-6 sm:mt-0 text-xl font-bold">Taylon Sopeletto</h1>
            <p className="text-lg">Full stack developer with a focus on front-end</p>
            <div className="flex flex-wrap gap-5">
              <a className="hover:underline hover:text-gray-100" href="http://linkedin.com/in/taylon-sopeletto-a1916317a"><i className="fa-brands fa-linkedin mr-3"></i>LinkedIn</a>
              <a className="hover:underline hover:text-gray-100" href="http://github.com/TaylonSopeletto"><i className="fa-brands fa-github mr-3"></i>GitHub</a>
              <a className="hover:underline hover:text-gray-100" href="mailto:gtataylon@gmail.com"><i className="fa-brands fa-google mr-3"></i>gtataylon@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
     <div className="sm:grid sm:grid-cols-2">
      <div>
        <h2 className="mt-15 text-xl font-bold">Experience</h2>
          <p className="text-lg font-bold mt-5">Bucksense<span className="pl-2 font-normal text-sm">( 2022 - Ongoing ) </span></p>
          <p className="mb-5 text-sm">New York - United States</p>
          <ul className="list-disc list-inside">
            <li>Maintanance of e-commerce websites</li>
            <li>Creating server side pages using NextJS</li>
            <li>Working with Algolia to create a detailed search system</li>
            <li>Working with Sanity as a CMS</li>
            <li>Development of UI using React, NodeJS and Tailwind</li>
          </ul>
          <p className="text-lg font-bold mt-5">NeoApp<span className="pl-2 font-normal text-sm">( 2020 - 2022 ) </span></p>
          <p className="mb-5 text-sm">Cachoeiro de Itapemirim - Brazil</p>
          <ul className="list-disc list-inside">
            <li>Maintanance of e-commerce websites</li>
            <li>Training AI models using TensorFlow</li>
            <li>Development of UI using React, NodeJS and Tailwind</li>
          </ul>
        </div>
        <div className="col-start-2 ml-auto">
          <h2 className="mt-15 text-xl font-bold">Languages</h2>
          <p className="text-md font-bold mt-5">English</p>
          <p className="mb-5 text-sm">Advanced</p>

          <p className="text-md font-bold mt-5">Portuguese</p>
          <p className="mb-5 text-sm">Fluent / Native</p>

          <h2 className="mt-15 text-xl font-bold">Education</h2>
          <p className="text-md font-bold mt-5">Data Science<span className="pl-2 font-normal text-sm">( 2024 - Ongoing ) </span></p>
          <p className="mb-5 text-sm">Descomplica</p>

          <p className="text-md font-bold mt-5">Computer Science<span className="pl-2 font-normal text-sm">( Not finished ) </span></p>
          <p className="mb-5 text-sm">Instituto Federal do Espirito Santo</p>
        </div>
        <div>
          <h2 className="mt-15 text-xl font-bold">Main Skills</h2>
          <ul className="list-disc list-inside mt-5">
            <li>React, NextJS, NodeJS</li>
            <li>Typescript, Javascript</li>
            <li>HTML5, CSS</li>
            <li>Styled components, Tailwind, Sass</li>
            <li>SwiftUI</li>
            <li>Python and Django</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
