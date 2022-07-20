import Layout from "../../components/Layout";

const LearnPage = () => {
  return (
    <Layout title="Learn | Neth Chem">
      <div className="h-full bg-right bg-no-repeat bg-[url('../public/images/learn-background.png')] bg-[length:1280px_720px]">
        <div className="container mx-auto py-8 space-y-5">
          <div className="h-screen">
            <div className="w-full flex flex-col justify center">
              <h1 className="hero text-5xl text-amber-100 italic mt-10 mb-10 leading-normal">
                Web Learning National <br /> Etnochemistry
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LearnPage;
