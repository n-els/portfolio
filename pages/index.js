import NewestProject from '@/components/NewestProjectSection';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import TechStackSection from '@/components/TechStackSection';
import InfoSection from '@/components/InfoSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nader el Sayed</title>
        <meta name="description" content="Webentwicklung und Fotografie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <InfoSection />
    </>
  );
}
