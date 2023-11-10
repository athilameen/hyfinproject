import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authoptions";
import LogoutButton from "./LogoutButton";

const HeaderArea = async () => {

  const session = await getServerSession(authOptions);

  return (
    <header id="header" className="header-bg">
      <div className="myContainer">
        <div className="row">
          <div className="col-12 pad-0 header">
            <div className="menu mob-only">
              <button className="navbar-toggler">
                <i className="fas fa-bars"></i>
              </button>

              <nav className="navbar navbar-top-default navbar-expand-lg nav-mob">
                <div className="navbar-nav">
                  <div className="menu-row">
                    <div className="outer-close navbar-toggler">
                      <button
                        type="button"
                        className="close"
                        aria-label="close-menu"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>

                    <div
                      id="bs-example-navbar-collapse-1"
                      className=" navbar-collapse show"
                    >
                      <ul id="menu-header-menu" className="top-bar">
                        <li
                          id="menu-item-272"
                          className="megaDropMenu menu-item menu-item-type-post_type menu-item-object-page menu-item-272"
                        >
                          <a href="http://dev.thehyfin.com/businesses/">
                            Categories
                          </a>
                        </li>
                        <li
                          id="menu-item-1146"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1146"
                        >
                          <a href="http://dev.thehyfin.com/events/">Events</a>
                        </li>
                        <li
                          id="menu-item-1104"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1104"
                        >
                          <a href="http://dev.thehyfin.com/offers/">Offers</a>
                        </li>
                        <li
                          id="menu-item-625"
                          className="menu-item menu-item-type-post_type_archive menu-item-object-news menu-item-625"
                        >
                          <a href="http://dev.thehyfin.com/news/">
                            News &amp; Highlights
                          </a>
                        </li>
                        <li
                          id="menu-item-470"
                          className="signDropMenu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-470"
                        >
                          <a href="">
                            Sign Up{" "}
                            <i className="fa fa-bolt" aria-hidden="true"></i>
                          </a>
                          <div className="megamenu">
                            <ul
                              id="dropdown-470"
                              className="container megamenu-background sub-menu dropdown-content"
                            >
                              <li
                                id="menu-item-81"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-81"
                              >
                                <a href="http://dev.thehyfin.com/businesses-sign-up/">
                                  Businesses
                                </a>
                              </li>
                              <li
                                id="menu-item-471"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-471"
                              >
                                <a href="http://dev.thehyfin.com/entrepreneurs-sign-up/">
                                  Entrepreneurs
                                </a>
                              </li>
                              <li
                                id="menu-item-865"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-865"
                              >
                                <a href="http://dev.thehyfin.com/subscription/">
                                  Subscription
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li
                          id="menu-item-80"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-80"
                        >
                          <a href="http://dev.thehyfin.com/contact-us/">
                            Contact Us
                          </a>
                        </li>
                        <li
                          id="menu-item-525"
                          className="aboutDropMenu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-525"
                        >
                          <a href="">
                            About Us{" "}
                            <i className="fa fa-bolt" aria-hidden="true"></i>
                          </a>
                          <div className="megamenu">
                            <ul
                              id="dropdown-525"
                              className="container megamenu-background sub-menu dropdown-content"
                            >
                              <li
                                id="menu-item-477"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-477"
                              >
                                <a href="http://dev.thehyfin.com/about-us/">
                                  About Us
                                </a>
                              </li>
                              <li
                                id="menu-item-526"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-526"
                              >
                                <a href="http://dev.thehyfin.com/how-it-works/">
                                  How it Works
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div className="logo">
              <Link href="/">
                <Image
                  src="/logo-hyfin.png"
                  alt="The Hyfin"
                  width={212}
                  height={90}
                />
                <span>Lets Create, Lets Build</span>
              </Link>
            </div>

            <div className="menu menu-desk">
              <nav className="navbar navbar-top-default navbar-expand-lg nav-desk">
                <button className="navbar-toggler">
                  <i className="fas fa-bars"></i>
                </button>

                <div className="navbar-nav">
                  <div
                    id="bs-example-navbar-collapse-1"
                    className=" navbar-collapse show"
                  >
                    <ul id="menu-header-menu-1" className="top-bar">
                      <li className="megaDropMenu menu-item menu-item-type-post_type menu-item-object-page menu-item-272">
                        <Link href="/business-registration">Business Registration</Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1146">
                        <Link href="/entrepreneur-registration">Entrepreneur Registration</Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1104">
                        <Link href="/">Super Admin</Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-80">
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-525">
                         <Link href="/about">About Us</Link>
                      </li>
                      { session && <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <LogoutButton />
                      </li> }
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            { session ? (
              <div className="account accountLogged">
                <Link href='/my-account' className="login-link">My Account</Link>
                <div className="signInTop"><span className="signin">{session?.user?.name}, <span>you are logged in!</span></span></div>
              </div>
            ) : (
              <div className="account">
                <Link href='/my-account' className="login-link">Log In</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderArea;
