import React from "react";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import "./header.css";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          {/* Linking to Home Page */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Apple Logo" />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              {/* Mac Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/mac">
                  Mac
                </a>
              </li>

              {/* iPhone Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/iphone">
                  iPhone
                </a>
              </li>

              {/* iPad Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/ipad">
                  iPad
                </a>
              </li>

              {/* Watch Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/watch">
                  Watch
                </a>
              </li>

              {/* TV Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/tv">
                  TV
                </a>
              </li>

              {/* Music Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/music">
                  Music
                </a>
              </li>

              {/* Support Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/support">
                  Support
                </a>
              </li>

              {/* Search Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search">
                  <img src={search} alt="Search" />
                </a>
              </li>

              {/* Cart Navigation */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart">
                  <img src={cart} alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
