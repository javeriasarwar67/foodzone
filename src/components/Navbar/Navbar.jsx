import "./Navbar.css";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Links that scroll within the home page use "id" (matched against a
// section's actual DOM id). Contact is a real route, so it uses "path"
// instead and skips scrolling entirely.
const links = [
  { label: "Home", id: "home" },
  { label: "Categories", id: "categories" },
  { label: "Menu", id: "dishes" },
  { label: "About", id: "about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(
    location.pathname === "/contact" ? "Contact" : "Home"
  );
  const [scrolled, setScrolled] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // if we just navigated to "/" because a scroll-link was clicked from
  // another page (e.g. Contact), finish the job once Home has mounted
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (link) => {
    setMenuOpen(false);
    setActive(link.label);

    // Contact is a real page -- just navigate, no scrolling involved
    if (link.path) {
      navigate(link.path);
      return;
    }

    // Home-page section links: scroll directly if already home,
    // otherwise navigate home first and scroll once it has mounted
    if (location.pathname === "/") {
      scrollToSection(link.id);
    } else {
      navigate("/", { state: { scrollTo: link.id } });
    }
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleLinkClick({ label: "Menu", id: "dishes" });
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* LOGO */}

          <div
            className="logo"
            onClick={() => handleLinkClick({ label: "Home", id: "home" })}
          >
            <span className="logo-dot"></span>

            <h2>Foodie.</h2>
          </div>

          {/* DESKTOP MENU */}

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.path ? link.path : `#${link.id}`}
                className={active === link.label ? "active-link" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}

          <div className="nav-actions">
            <button
              className={`icon-btn ${searchOpen ? "icon-btn-active" : ""}`}
              onClick={toggleSearch}
              aria-label="Search"
            >
              <FiSearch />
            </button>

            {/* TODO: wire this up to AuthModal once that folder is added */}
            <button className="icon-btn" aria-label="Account">
              <FiUser />
            </button>

            {/* TODO: wire this up to CartDrawer once that folder is added */}
            <button className="cart-btn" aria-label="Cart">
              <FiShoppingCart />
            </button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}

        <div className={`search-panel ${searchOpen ? "open" : ""}`}>
          <form className="search-panel-inner" onSubmit={handleSearchSubmit}>
            <FiSearch className="search-panel-icon" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for dishes, e.g. Avocado Toast..."
            />
            <button type="button" className="search-panel-close" onClick={closeSearch}>
              <FiX />
            </button>
          </form>
        </div>
      </header>
    </>
  );
}

export default Navbar;