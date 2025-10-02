import Breadcumb from "../../component/Breadcumb/Breadcumb";
import { Link } from "react-router-dom";
import Pagination from "../../component/Pagination/Pagination";
import BlogSidebar from "../../component/Blog/BlogSidebar";
import { blogPageData } from "../../data/data";
import { BlogPageDataType } from "../../data/types";

const BlogPage = () => {
  return (
    <div>
      <Breadcumb title="Blog" />
      <div className="blog-standard section-padding fix">
        <div className="container">
          <div className="row gy-5 justify-content-center">
            {/* Blog Posts */}
            <div className="col-xl-8">
              {blogPageData.map((blog: BlogPageDataType, i: number) => (
                <div
                  className={`blog3-card ${
                    i !== blogPageData?.length - 1 ? "mb-80" : ""
                  }`}
                  key={blog?._id}
                >
                  <div className="blog3-card__thumb">
                    <img src={blog?.img} alt="thumb" loading="lazy" />
                  </div>
                  <div className="blog3-card__content">
                    <div className="blog3-card__content-meta">
                      <span>
                        <i className="fa-solid fa-comments"></i>{" "}
                        {blog?.comments}
                      </span>
                      <span>
                        <i className="fa-regular fa-calendar-days"></i>{" "}
                        {blog?.date}
                      </span>
                    </div>
                    <Link to={`/blog-details/${blog?.slug}`}>
                      <h2 className="blog3-card__content-title">
                        {blog?.title}
                      </h2>
                    </Link>
                    <Link
                      className="theme-btn style3"
                      to={`/blog-details/${blog?.slug}`}
                    >
                      Read More <i className="fa-light fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
              {/* Pagination */}
              <Pagination />
            </div>
            {/* Blog Sidebar  */}
            <div className="col-xl-4 col-lg-10">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
