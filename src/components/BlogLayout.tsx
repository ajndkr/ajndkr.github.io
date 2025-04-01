import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Blog</h1>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
