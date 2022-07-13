import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";

const IndexPage = () => (
  <Layout title="Home | Neth Chem">
    <div className="bg-cyan-600 h-[900px]">
      <div className="container mx-auto py-8 flex space-x-5">
        {/* Hero Section */}
        <div className="w-[1200px]">
          <h1 className="hero text-7xl text-amber-100 italic mt-10 mb-10 leading-normal">
            Welcome to National <br /> Etnochemistry
          </h1>
          <p className="text-lg mb-5">
            Web Learning Terintegrasi Etnokimia untuk <br />
            Pelestarian Kebudayaan Indonesia dalam <br />
            Pembelajaran Kimia
          </p>
          <button className="text-xl text-black bg-yellow-400 w-[200px] py-3 rounded-full hover:bg-yellow-200 shadow-2xl flex flex-row justify-center items-center space-x-5 ease-in-out duration-300">
            <Link href="/">
              <a>Learn More</a>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        {/* Hero Image */}
        <div className="flex flex-col items-end justify-center w-full">
          <Image
            src="/images/flask.png"
            alt="Neth Chem Logo"
            className="w-auto h-auto shadow-2xl"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
