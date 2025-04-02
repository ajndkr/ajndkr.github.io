import { Outlet } from "react-router-dom";

import SEO from "../components/SEO";

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="digital thoughts from my brain to yours. no refunds"
        path="/blog"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Outlet />
      </div>
    </>
  );
};

export default Blog;
