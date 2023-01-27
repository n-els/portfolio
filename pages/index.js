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
      <section className=" tracking-wide">
        <div className="mt-4 sm:mt-12 mb-6 flex flex-col-reverse items-center md:flex-row md:justify-between w-full mx-auto">
          <div>
            <h2 className=" text-4xl mt-4 tracking-wide">
              Ich bin <span className="font-bold">Nader el Sayed</span>
            </h2>

            <h3 className=" text-2xl my-4 tracking-widest">
              Webentwickler & Hobbyfotograf
            </h3>
          </div>
          <div>
            <Image
              src="/images/potrait-bw.png"
              width="200"
              height="200"
              alt="Potraitfoto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
