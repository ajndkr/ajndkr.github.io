import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OpenSource from "./pages/OpenSource";
import Blog from "./pages/Blog";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        {/* noise overlay */}
        <div className="fixed inset-0 noise"></div>

        {/* content */}
        <div className="relative">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/blog" element={<Blog />}>
              <Route index element={<BlogList />} />
              <Route path=":slug" element={<BlogPost />} />
            </Route>
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
