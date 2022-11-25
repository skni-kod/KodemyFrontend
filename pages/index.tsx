import Head from "next/head";

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

      <div className="flex justify-center h-screen items-center text-4xl">
        Hello kodemy!
      </div>
    </>
  );
}
