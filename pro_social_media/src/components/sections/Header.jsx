import React from 'react'
import { useState } from 'react'

function Header() {
  const [toggle, settoggle] = useState("");
  const toggler = () => {
    toggle == '' ? settoggle("hidden") : settoggle("");
  }
  return (
    <>

      {/* <!-- preloder start  --> */}
      <div className="preloder_part">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div>
      {/* <!-- preloder end  --> */}

      {/* <!-- back to top start --> */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* <!-- back to top end --> */}

      {/* <!-- header start --> */}
      <header className="header header__style-two">
        <div className="header__top-wrap">
          <div className="container mxw_1530">
            <div className="header__top-info ul_li_between mt-none-10">
              <ul className="header__top-left ul_li mt-10">
                <li><a href="#!">Call us</a> free 24/7 : (555) 172-244-7888</li>
                <li><i className="fas fa-envelope"></i> adminpath@gmail.com</li>
              </ul>
              <ul className="header__top-right ul_li mt-10">
                <li><i className="fas fa-clouds"></i>30 degree</li>
                <li><i className="far fa-city"></i>new yourk</li>
                <li><a href="#!"><i className="fas fa-star"></i>My Wishlist</a></li>
                <li><a href="#!"><i className="far fa-check-circle"></i>Cheakout</a></li>
                <li>
                  <div className="header__language currency">
                    <ul>
                      <li><a href="#!" className="lang-btn"><img src="/img/icon/usd_flag.png" alt="" />USD <i className="far fa-chevron-down"></i></a>
                        <ul className="lang_sub_list">
                          <li><a href="#">USD</a></li>
                          <li><a href="#">BDT</a></li>
                          <li><a href="#">EUR</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mxw_1530">
          <div className="header__middle ul_li_between">
            <div className="header__logo">
              <a href="index.html">
                <img src="/img/logo/logo.svg" alt="" />
              </a>
            </div>
            <div className="header-date">
              <i className="far fa-calendar-alt"></i>Friday - Jul 27, 2020
            </div>
            <div className="add">
              <a href="#!">
                <img src="/img/add/img_01.jpg" alt="" />
              </a>
            </div>
            <div className="d-none d-lg-block">
              <div className="ul_li">
                <div className="header__language style-2 mr-25">
                  <ul>
                    <li><a href="#!" className="lang-btn"><img src="/img/icon/usd_flag.png" alt="" /> English <i className="far fa-chevron-down"></i></a>
                      <ul className="lang_sub_list">
                        <li><a href="#">English</a></li>
                        <li><a href="#">Arabic</a></li>
                        <li><a href="#">Bangla</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="header__social">
                  <a href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a href="#!"><i className="fab fa-twitter"></i></a>
                  <a href="#!"><i className="fab fa-instagram"></i></a>
                  <a href="#!"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__wrap" data-uk-sticky="top: 250; animation: uk-animation-slide-top;">
          <div className="container mxw_1530">
            <div className="header__main ul_li" >
              <div className="header__logo">
                <a href="index.html">
                  <img src="/img/logo/logo.svg" alt="" />
                </a>
              </div>
              <div className="header__category pos-rel">
                <div className="vertical-menu">
                  <button className="header__category-nav" onClick={toggler}>
                    <img className="bar" src="/img/icon/bar.svg" alt="" />
                    Browse Catetory
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className={`${toggle} vertical-menu-list category-nav`}>
                    <ul className="category-nav__list list-unstyled">
                      <li><a href="#"><img src="/img/icon/cat_01.svg" alt="" />Bluetooth speaker</a></li>
                      <li className="menu-item-has-children">
                        <a href="#"><img src="/img/icon/cat_02.svg" alt="" />Digital camera</a>
                        <ul>
                          <li><a href="#">Electric razor</a></li>
                          <li><a href="#">Digital camera</a></li>
                          <li><a href="#">Electric frying pan</a></li>
                          <li><a href="#">external hard drive</a></li>
                        </ul>
                      </li>
                      <li><a href="#"><img src="/img/icon/cat_03.svg" alt="" />Laser printer</a></li>
                      <li className="menu-item-has-children">
                        <a href="#"><img src="/img/icon/cat_04.svg" alt="" />Electric frying pan</a>
                        <ul>
                          <li><a href="#">Electric razor</a></li>
                          <li><a href="#">Digital camera</a></li>
                          <li><a href="#">Electric frying pan</a></li>
                          <li><a href="#">external hard drive</a></li>
                        </ul>
                      </li>
                      <li><a href="#"><img src="/img/icon/cat_05.svg" alt="" />Robotics vacuum</a></li>
                      <li className="menu-item-has-children">
                        <a href="#"><img src="/img/icon/cat_06.svg" alt="" />external hard drive</a>
                        <ul>
                          <li><a href="#">Electric razor</a></li>
                          <li><a href="#">Digital camera</a></li>
                          <li><a href="#">Electric frying pan</a></li>
                          <li><a href="#">external hard drive</a></li>
                        </ul>
                      </li>
                      <li><a href="#"><img src="/img/icon/cat_07.svg" alt="" />Electric razor</a></li>
                      <li><a href="#"><img src="/img/icon/cat_08.svg" alt="" />Washing machine</a></li>
                      <li><a href="#"><img src="/img/icon/cat_09.svg" alt="" />Rice cooker</a></li>
                      <li><a href="#"><img src="/img/icon/cat_10.svg" alt="" />Telivsion & Monitor</a></li>
                    </ul>
                  </div>

                </div>

              </div>
              <div className="hamburger_menu d-lg-none">
                <a href={{ javascript: void (0) }} className="active">
                  <div className="icon bar">
                    <span><i className="fal fa-bars"></i></span>
                  </div>
                </a>
              </div>
              <div className="main-menu navbar navbar-expand-lg">
                <nav className="main-menu__nav collapse navbar-collapse">
                  <ul>
                    <li className="menu-item-has-children has-mega-menu active"><a href="index.html">Home</a>
                      <ul className="mega-menu">
                        <li>
                          <div className="mega-menu-content mxw_1505">
                            <div className="row">
                              <div className="col col-md-3">
                                <div className="demo-pic">
                                  <a href="index.html">
                                    <img src="/img/demo/demo-1.jpg" alt="" />
                                  </a>
                                </div>
                                <h3>#Home Demo 1</h3>
                              </div>
                              <div className="col col-md-3">
                                <div className="demo-pic">
                                  <a href="home-2.html">
                                    <img src="/img/demo/demo-2.jpg" alt="" />
                                  </a>
                                </div>
                                <h3>#Home Demo 2</h3>
                              </div>
                              <div className="col col-md-3">
                                <div className="demo-pic">
                                  <a href="home-3.html">
                                    <img src="/img/demo/demo-3.jpg" alt="" />
                                  </a>
                                </div>
                                <h3>#Home Demo 3</h3>
                              </div>
                              <div className="col col-md-3">
                                <div className="demo-pic coming-soon">
                                  <span>Coming Soon</span>
                                </div>
                                <h3>Coming Soon</h3>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#!">Shop</a>
                      <ul className="submenu">
                        <li><a href="shop.html">Shop Default</a></li>
                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                        <li><a href="shop-single.html">Shop Single</a></li>
                        <li><a href="cart.html">Shop Cart</a></li>
                        <li><a href="checkout.html">Shop Checkout</a></li>
                        <li><a href="account.html">Account</a></li>
                      </ul>
                    </li>
                    <li><a href="shop.html">Accesories</a></li>
                    <li className="menu-item-has-children">
                      <a href="#!">Blog</a>
                      <ul className="submenu">
                        <li><a href="news.html">Blog</a></li>
                        <li><a href="news-single.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#!">Pages</a>
                      <ul className="submenu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="about.html">Account</a></li>
                        <li><a href="404.html">404</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div className="header__main-right ul_li">
                <form className="header__search mr-30" action="#!">
                  <input type="text" placeholder="Search........" />
                  <button><i className="far fa-search"></i></button>
                </form>
                <div className="header__icons ul_li mr-15">
                  <div className="icon">
                    <a href="#!"><img src="/img/icon/user.svg" alt="" /></a>
                  </div>
                  <div className="icon wishlist-icon">
                    <a href="#!">
                      <img src="/img/icon/heart.svg" alt="" />
                      <span className="count">0</span>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#!">
                      <img src="/img/icon/bookmark.svg" alt="" />
                      <span className="count">0</span>
                    </a>
                  </div>
                </div>
                <div className="login-sign-btn">
                  <a className="thm-btn thm-btn__2 text-black" href="account.html">
                    <span className="btn-wrap">
                      <span>Login / Sign Up</span>
                      <span>Login / Sign Up</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header end --> */}
    </>
  )
}

export default Header