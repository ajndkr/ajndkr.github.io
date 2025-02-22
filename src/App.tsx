import { Github, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* noise overlay */}
      <div className="fixed inset-0 noise"></div>

      {/* content */}
      <div className="relative">
        {/* header */}
        <header className="border-b-4 border-zinc-800 p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            AJN/DKR
          </h1>
        </header>

        {/* main content */}
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-12">
            {/* Profile Image - Moved to top on mobile */}
            <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border-4 border-zinc-800 rounded-full overflow-hidden flex-shrink-0 md:order-last">
              <img
                src="/images/profile.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* left content */}
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  MACHINE-LEARNING
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold">PYTHONISTA_</h2>
              </div>

              <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                <span className="block mb-4">
                  i build end-to-end machine learning solutions, specialising in
                  computer vision and generative ai applications.
                </span>

                <span className="block mb-4">
                  i'm currently the head of engineering at{" "}
                  <a
                    href="https://sensity.ai"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Sensity AI
                  </a>
                  , leading technical strategy and engineering to build
                  anti-fraud applications.
                </span>

                <span className="block">
                  while i mainly code in python, i tinker with rust for fun.
                </span>
              </p>
            </div>
          </div>
        </main>

        {/* footer */}
        <footer className="border-t-4 border-zinc-800 p-4 sm:p-6 mt-8 sm:mt-12">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-sm order-2 sm:order-1">© 2025 AJNDKR.COM</p>
            <div className="flex gap-6 order-1 sm:order-2">
              <a
                href="https://github.com/ajndkr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/AjinkyaIndulkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:ajndkr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
