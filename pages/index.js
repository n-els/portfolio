import NewestProject from '@/components/NewestProject';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nader el Sayed</title>
        <meta name="description" content="Portfolio by Nader el Sayed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center p-4 text-center tracking-wide">
        <Image src="/images/potrait-bw.png" width="250" height="250" />
        <h1 className="font-black text-3xl mt-4 tracking-wide">
          Nader el Sayed
        </h1>
        <h2 className="font-bold text-xl mb-4">Webentwickler</h2>
        <p>
          Herzlich Willkommen auf meinem Portfolio.
          <br />
          Ich bin ein 28-jähriger autodidaktischer Webentwickler aus der
          Metropolregion Hamburg.
        </p>
        <p className="mt-4 tracking-wide">
          In den letzten Jahren habe ich mich besonders auf die Entwicklung von
          Webapplikationen spezialisiert.
        </p>
        <p className="mt-4 tracking-wide">
          Technologien, die ich beherrsche sind unter anderem:
          <br /> HTML, CSS, TailwindCSS, JavaScript, React, Next.js, Node.js,
          Express.js, MongoDB und Git.
        </p>
        <p className="mt-4 tracking-wide">
          Mein Portfolio befindet sich derzeit im Aufbau. Schau doch solange in
          mein neustes Projekt rein..
        </p>
        <NewestProject
          title={'EinkaufsGenie'}
          image="/images/screenshot-einkaufsgenie.png"
          link="https://einkaufsgenie.vercel.app"
        />
      </section>
    </>
  );
}
