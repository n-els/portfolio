import NewestProject from '@/components/NewestProject';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nader el Sayed</title>
        <meta name="description" content="Portfolio by Nader el Sayed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-6 text-center tracking-wide">
        <div className="mt-4 sm:mt-12 mb-6 flex flex-col items-center sm:flex-row sm:justify-center w-full mx-auto sm:gap-10">
          <div>
            <Image
              src="/images/potrait-bw.png"
              width="200"
              height="200"
              alt="Potraitfoto"
            />
          </div>
          <div>
            <h2 className="font-black text-6xl mt-4 tracking-wide">Nader</h2>
            <h2 className="font-black text-6xl tracking-wide">el Sayed</h2>

            <h3 className="font-bold text-2xl my-4 tracking-widest">
              Webentwickler
            </h3>
          </div>
        </div>

        <div className="tracking-wide sm:mt-10">
          <p className="text-lg">
            Herzlich Willkommen auf meinem Portfolio.
            <br />
            Ich bin ein 28-jähriger autodidaktischer Webentwickler aus der
            Metropolregion Hamburg.
          </p>
          <p className="text-lg mt-4">
            In den letzten Jahren habe ich mich besonders auf die Entwicklung
            von Webapplikationen spezialisiert.
          </p>
          <p className="text-lg mt-4">
            Technologien, die ich unter anderem einsetze:
            <br /> HTML, CSS, TailwindCSS, JavaScript, React, Next.js, Node.js,
            Express.js, MongoDB und Git.
          </p>
          <p className="text-lg my-4">
            Mein Portfolio befindet sich derzeit im Aufbau. Schau doch solange
            in mein neustes Projekt rein..
          </p>
        </div>

        <div className="flex justify-center">
          <a href="#project">
            <AiOutlineArrowDown size="3rem" />
          </a>
        </div>

        <div id="project" className="flex flex-col items-center">
          <NewestProject
            title={'EinkaufsGenie'}
            image="/images/screenshot-einkaufsgenie.png"
            link="https://einkaufsgenie.vercel.app"
          />
        </div>
      </section>
    </>
  );
}
