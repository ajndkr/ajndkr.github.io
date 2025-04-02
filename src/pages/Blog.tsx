import { Outlet } from "react-router-dom";

import SEO from "../components/SEO";

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="Thoughts and tutorials on machine learning, computer vision, and software engineering."
        path="/blog"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Outlet />
      </div>
    </>
  );
};

export default Blog;
