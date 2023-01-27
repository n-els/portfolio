import NewestProject from '@/components/NewestProject';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nader el Sayed</title>
        <meta name="description" content="Webentwicklung und Fotografie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mt-12 mb-12 sm:mt-24">
        <div className="sm:mt-12 flex flex-col-reverse items-center md:flex-row md:justify-between w-full">
          <div>
            <p className="text-xl mt-12">Moin,</p>
            <h2 className="text-2xl font-medium sm:text-4xl  tracking-wider">
              Ich bin <span className="font-extrabold">Nader el Sayed</span>
            </h2>
            <p className="text-xl sm:text-2xl sm:my-2 sm:tracking-widest">
              Webentwickler aus dem Norden
            </p>
            <p className="mt-6">
              Ich liebe es Ideen für's Web unter Berücksichtigung der
              Responsiveness <br />
              und Benutzerfreundlichkeit umzusetzen.
            </p>
            <div className="block mt-8">
              <a
                href="mailto:nader.elsayed@aol.de"
                className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                Lass' quatschen!
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/images/potrait-bw.png"
              width="250"
              height="250"
              alt="Potraitfoto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
