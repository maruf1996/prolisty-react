import { Link } from "react-router-dom";
import { sidebarCategories } from "../../data/site";
import { recentPosts } from "../../data/site";
import { sidebarTags } from "../../data/site";

const BlogSidebar = () => {
  return (
    <aside>
      <div className="main-sidebar">
        {/* Search */}
        <div className="single-sidebar-widget mb-60">
          <div className="search-widget">
            <form className="form-control">
              <input type="text" placeholder="Type here" />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Categories */}
        <div className="single-sidebar-widget mb-60">
          <h3 className="single-sidebar-widget__title">Category</h3>
          <ul className="single-sidebar-widget-list__item">
            {sidebarCategories?.map((cat) => (
              <li key={cat?._id}>
                <Link to="#!">
                  <i className="fa-light fa-arrow-right"></i> {cat.name}
                </Link>{" "}
                <span className="number">{cat.number}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="single-sidebar-widget rp-widget mb-60">
          <h3 className="single-sidebar-widget__title">Recent post</h3>
          {recentPosts?.map((post) => (
            <div className="rp-widget-item" key={post?._id}>
              <div className="rp-widget-item__thumb">
                <img src={post.img} alt="thumb" loading="lazy" />
              </div>
              <div className="rp-widget-item__content">
                <p className="rp-widget-item__content-category">
                  <span>
                    <i className="fa-regular fa-folder-open"></i>
                  </span>
                  {post.category}
                </p>
                <h5>
                  <Link
                    className="rp-widget-item__content-title"
                    to={`/blog-details/${post?.slug}`}
                  >
                    {post.title}
                  </Link>
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="single-sidebar-widget tag-widget mb-60">
          <h3 className="single-sidebar-widget__title">Tags</h3>
          <ul className="single-widget-tag">
            {sidebarTags?.map((tag) => (
              <li key={tag?._id}>
                <Link className="single-widget-tag__item" to="#!">
                  {tag?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="single-sidebar-widget social-widget">
          <h3 className="single-sidebar-widget__title">Follow Us</h3>
          <ul className="single-widget-social">
            <li>
              <Link className="single-widget-social__item" to="#!">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link className="single-widget-social__item" to="#!">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link className="single-widget-social__item" to="#!">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link className="single-widget-social__item" to="#!">
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
