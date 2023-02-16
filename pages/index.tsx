import Head from "next/head";
import Link from 'next/link'


export default function Home() {

  return (
    <>
      <Head>
        <title>Kodemy</title>
        <meta
          name="description"
          content="Kodemy to najlepszy zbiór materiałów."
        />
      </Head>
        <div className="flex justify-center h-full items-center text-4xl flex-col ">
          Hello kodemy!
          <Link className="mt-5" href='/components/navigationComp/navigationBar'>Navigation bar</Link>
        </div>
    </>
  );
}
