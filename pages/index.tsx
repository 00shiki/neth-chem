import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import router from "next/router";

const IndexPage = () => (
  <Layout title="Home | Neth Chem">
    <div className="h-screen bg-[url('../public/images/hero-homepage.png')]">
      <div className="container mx-auto py-8 flex h-full">
        {/* Hero Section */}
        <div className="w-full flex flex-col justify-center">
          <h1 className="hero text-8xl text-amber-100 italic mt-10 mb-10 leading-normal">
            Welcome to National <br /> Etnochemistry
          </h1>
          <p className="text-2xl mb-10">
            Web Learning Terintegrasi Etnokimia untuk <br />
            Pelestarian Kebudayaan Indonesia dalam <br />
            Pembelajaran Kimia
          </p>
          <button
            className="text-xl text-black bg-yellow-400 w-[200px] py-3 rounded-full hover:bg-yellow-200 shadow-2xl flex flex-row justify-center items-center space-x-5 ease-in-out duration-300"
            type="button"
            onClick={() => router.push("/learn")}
          >
            <a>Learn More</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              className="bi bi-arrow-right hover:animate-arrow-slide-out"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
