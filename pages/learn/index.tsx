import Link from "next/link";
import router from "next/router";
import Layout from "../../components/Layout";

const LearnPage = () => {
  return (
    <Layout title="Learn | Neth Chem">
      <div className="h-full bg-right bg-no-repeat bg-[url('../public/images/learn-background.png')] bg-[length:1280px_720px]">
        <div className="container mx-auto">
          <div className="h-screen py-8 px-10">
            <div className="w-full flex flex-col">
              <h1 className="hero text-7xl text-amber-100 italic mt-10 mb-10 leading-normal">
                Web Learning National <br /> Etnochemistry
              </h1>
            </div>
            <div className="py-3 flex flex-row space-x-5 items-end">
              <button
                className="bg-amber-100 text-amber-700 text-2xl font-bold py-2 px-4 rounded h-[300px] w-[300px] hover:bg-amber-200 hover:text-amber-800"
                onClick={() => router.push("/learn/materi")}
              >
                <a>Materi</a>
              </button>
              <button
                className="bg-cyan-100 text-cyan-700 text-2xl font-bold py-2 px-4 rounded h-[300px] w-[300px] hover:bg-cyan-200 hover:text-cyan-800"
                onClick={() => {
                  router.push("/learn/video");
                }}
              >
                <a>Video</a>
              </button>
              <button
                className="bg-amber-100 text-amber-700 text-2xl font-bold py-2 px-4 rounded h-[300px] w-[300px] hover:bg-amber-200 hover:text-amber-800"
                onClick={() => {
                  router.push("/learn/kuis");
                }}
              >
                <a>Kuis</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LearnPage;
