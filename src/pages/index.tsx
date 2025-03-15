import { taylonSopeletto } from "@/content/content";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {

  const [language, setLanguege] = useState<'english' | 'portuguese'>('english')

  const brazilTimezones = [
    'America/Noronha',
    'America/Belem',
    'America/Fortaleza',
    'America/Recife',
    'America/Araguaina',
    'America/Maceio',
    'America/Bahia',
    'America/Sao_Paulo',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Santarem',
    'America/Porto_Velho',
    'America/Boa_Vista',
    'America/Manaus',
    'America/Eirunepe',
    'America/Rio_Branco'
  ];

  useEffect(() => {
    if(brazilTimezones.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)){
      setLanguege('portuguese')
    }else{
      setLanguege('english')
    }
  }, [])
  
  return (
    <>
    <Head>
      <title>Taylon Sopeletto</title>
    </Head>
    <div className="w-[90%] max-w-[600px] m-auto">
      <div className="w-full flex ml-auto mt-5">
        <div className="flex gap-5">
          <p onClick={() => setLanguege('english')} className="hover:text-gray-400 hover:cursor-pointer">English</p>
          <p onClick={() => setLanguege('portuguese')} className="hover:text-gray-400 hover:cursor-pointer">Português</p>
        </div>
      </div>
      <div className="mt-10 flex">
        <div className="flex gap-5 w-full">
          <img className="h-30 sm:w-auto object-cover rounded-xl" src="https://avatars.githubusercontent.com/u/42319708?v=4"/>
          <div className="flex flex-col gap-2 sm:h-full w-full">
            <h1 className="sm:mt-0 text-xl sm:text-2xl font-bold">Taylon Sopeletto</h1>
            <p className="text-lg">{taylonSopeletto.description[language] ?? ''}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10">
        <a className="hover:underline hover:text-gray-400" href="http://linkedin.com/in/taylon-sopeletto-a1916317a"><i className="fa-brands fa-linkedin mr-3"></i>LinkedIn</a>
        <a className="hover:underline hover:text-gray-400" href="http://github.com/TaylonSopeletto"><i className="fa-brands fa-github mr-3"></i>GitHub</a>
        <a className="hover:underline hover:text-gray-400" href="mailto:gtataylon@gmail.com"><i className="fa-brands fa-google mr-3"></i>gtataylon@gmail.com</a>
      </div>
     <div className="flex flex-col">
      <div>
        <h2 className="mt-15 text-xl font-bold">{language === 'english' ? 'Experience' : 'Experiência'}</h2>
          <p className="text-lg font-bold mt-5">Bucksense<span className="pl-2 font-normal text-sm">( 2022 - {taylonSopeletto.ongoing[language]} ) </span></p>
          <p className="mb-5 text-sm">{taylonSopeletto.bucksense.location[language]}</p>
          <ul className="list-disc list-inside">
            {taylonSopeletto.bucksense.roles[language].map((item, index) => 
              <li key={index}>{item}</li>
            )}
          </ul>
          <p className="text-lg font-bold mt-5">NeoApp<span className="pl-2 font-normal text-sm">( 2020 - 2022 ) </span></p>
          <p className="mb-5 text-sm">{taylonSopeletto.neoapp.location[language]}</p>
          <ul className="list-disc list-inside">
            {taylonSopeletto.neoapp.roles[language].map((item, index) => 
              <li key={index}>{item}</li>
            )}
          </ul>
        </div>
        <div className="mb-5">
          <h2 className="mt-15 text-xl font-bold">{language === 'english' ? 'Main skills' : 'Principais habilidades'}</h2>
          <ul className="list-disc list-inside mt-5">
            <li>React, NextJS, NodeJS</li>
            <li>Typescript, Javascript</li>
            <li>HTML5, CSS</li>
            <li>Styled components, Tailwind, Sass</li>
            <li>SwiftUI</li>
            <li>Python and Django</li>
          </ul>
        </div>
        <div className="col-start-2">
          <h2 className="mt-15 text-xl font-bold">{language === 'english' ? 'Languages' : 'Línguas'}</h2>
          <p className="text-md font-bold mt-5">{language === 'english' ? 'English' : 'Inglês'}</p>
          <p className="mb-5 text-sm">{language === 'english' ? 'Advanced' : 'Avançado'}</p>

          <p className="text-md font-bold mt-5">{language === 'english' ? 'Portuguese' : 'Português'}</p>
          <p className="mb-5 text-sm">{language === 'english' ? 'Fluent / Native' : 'Fluente / Nativo'}</p>

          <h2 className="mt-15 text-xl font-bold">{language === 'english' ? 'Education' : 'Educação'}</h2>
          <p className="text-md font-bold mt-5">{language === 'english' ? 'Data science' : 'Ciência de dados'}<span className="pl-2 font-normal text-sm">( 2024 - {taylonSopeletto.ongoing[language]} ) </span></p>
          <p className="mb-5 text-sm">Descomplica</p>

          <p className="text-md font-bold mt-5">{language === 'english' ? 'Computer science' : 'Ciência da computaçäo'}<span className="pl-2 font-normal text-sm">( {taylonSopeletto.notFinished[language]} ) </span></p>
          <p className="mb-5 text-sm">Instituto Federal do Espirito Santo</p>
        </div>
       
      </div>
    </div>
    </>
  );
}
