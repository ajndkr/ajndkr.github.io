import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center gap-6 mt-4">
      <Link
        to="/"
        className={`text-base font-medium ${location.pathname === "/" ? "text-zinc-800 underline underline-offset-4" : "text-zinc-600 hover:text-zinc-800"}`}
      >
        about-me/
      </Link>
      <Link
        to="/open-source"
        className={`text-base font-medium ${location.pathname === "/open-source" ? "text-zinc-800 underline underline-offset-4" : "text-zinc-600 hover:text-zinc-800"}`}
      >
        open-source/
      </Link>
      <Link
        to="/blog"
        className={`text-base font-medium ${location.pathname.startsWith("/blog") ? "text-zinc-800 underline underline-offset-4" : "text-zinc-600 hover:text-zinc-800"}`}
      >
        blog/
      </Link>
    </nav>
  );
};

export default Navbar;
