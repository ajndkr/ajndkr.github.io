import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b-4 border-zinc-800 p-4 sm:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-20 h-20 rounded-full border-2 border-zinc-800 overflow-hidden">
            <img
              src="/images/profile.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              AJN/DKR
            </h1>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
