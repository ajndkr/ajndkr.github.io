import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="everything you wanted to know about me but were afraid to ask Google"
      />
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-12">
        {/* left content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">MACHINE-LEARNING</h2>
            <h2 className="text-3xl md:text-4xl font-bold">
              PYTHONISTA<span className="blinking-underscore">_</span>
            </h2>
          </div>

          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            <span className="block mb-4">
              i build end-to-end machine learning solutions, specialising in
              computer vision and generative ai applications.
            </span>

            <span className="block mb-4">
              currently, i'm the head of engineering at{" "}
              <a
                href="https://sensity.ai"
                className="text-blue-600 hover:text-blue-800"
              >
                Sensity AI
              </a>
              , leading technical strategy and engineering to build anti-fraud
              applications.
            </span>

            <span className="block">i also tinker with rust for fun.</span>
          </p>
        </div>
      </div>
    </main>
    </>
  );
};

export default Home;
