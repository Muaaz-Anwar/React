import Header from "../sections/Header"
function Index() {
  
  return (
    <div>
    <div className="body_wrap">
      <Header />
      {/* <!-- slide-bar start --> */}
      <aside className="slide-bar">
        <div className="close-mobile-menu">
          <a href={{javascript:void(0)}}><i className="fal fa-times"></i></a>
        </div>

        {/* <!-- sidebar-info start -->/ */}
        <div className="cart_sidebar">
          <button type="button" className="cart_close_btn"><i className="fal fa-times"></i></button>
          <h2 className="heading_title text-uppercase">Cart Items - <span>4</span></h2>
          <div className="cart_items_list">
            <div className="cart_item">
              <div className="item_image">
                <img src="/img/product/img_01.png" alt="image_not_found" />
              </div>
              <div className="item_content">
                <h4 className="item_title">
                  Rorem ipsum dolor sit amet.
                </h4>
                <span className="item_price">$19.00</span>
                <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
              </div>
            </div>
            <div className="cart_item">
              <div className="item_image">
                <img src="/img/product/img_02.png" alt="image_not_found" />
              </div>
              <div className="item_content">
                <h4 className="item_title">
                  Rorem ipsum dolor sit amet.
                </h4>
                <span className="item_price">$22.00</span>
                <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
              </div>
            </div>
            <div className="cart_item">
              <div className="item_image">
                <img src="/img/product/img_03.png" alt="image_not_found" />
              </div>
              <div className="item_content">
                <h4 className="item_title">
                  Rorem ipsum dolor sit amet.
                </h4>
                <span className="item_price">$43.00</span>
                <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
              </div>
            </div>
            <div className="cart_item">
              <div className="item_image">
                <img src="/img/product/img_04.png" alt="image_not_found" />
              </div>
              <div className="item_content">
                <h4 className="item_title">
                  Rorem ipsum dolor sit amet.
                </h4>
                <span className="item_price">$14.00</span>
                <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
              </div>
            </div>
          </div>
          <div className="total_price text-uppercase">
            <span>Sub Total:</span>
            <span>$87.00</span>
          </div>
          <ul className="btns_group ul_li">
            <li><a href="cart.html" className="thm-btn">
              <span className="btn-wrap">
                <span>View Cart</span>
                <span>View Cart</span>
              </span>
            </a></li>
            <li><a href="checkout.html" className="thm-btn thm-btn__black">
              <span className="btn-wrap">
                <span>Checkout</span>
                <span>Checkout</span>
              </span>
            </a></li>
          </ul>
        </div>
        {/* <!-- sidebar-info end -->

        <!-- side-mobile-menu start --> */}
        <nav className="side-mobile-menu">
          <div className="header-mobile-search">
            <form role="search" method="get" action="#">
              <input type="text" placeholder="Search Keywords" />
                <button type="submit"><i className="ti-search"></i></button>
            </form>
          </div>
          <ul id="mobile-menu-active">
            <li className="dropdown"><a href="index.html">Home</a>
              <ul className="sub-menu">
                <li><a href="index.html">Home One</a></li>
                <li><a href="home-2.html">Home Two</a></li>
                <li><a href="home-3.html">Home Three</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Shop</a>
              <ul className="sub-menu">
                <li><a href="shop.html">Shop Default</a></li>
                <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                <li><a href="shop-single.html">Shop Single</a></li>
                <li><a href="cart.html">Shop Cart</a></li>
                <li><a href="checkout.html">Shop Checkout</a></li>
                <li><a href="account.html">Account</a></li>
              </ul>
            </li>
            <li><a href="shop.html">Accesories</a></li>
            <li className="dropdown">
              <a href="#!">Blog</a>
              <ul className="sub-menu">
                <li><a href="news.html">Blog</a></li>
                <li><a href="news-single.html">Blog Details</a></li>
              </ul>
            </li>
            <li className="dropdown">
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
        {/* <!-- side-mobile-menu end --> */}
      </aside>
      <div className="body-overlay"></div>
      {/* <!-- slide-bar end --> */}

      <main>
        {/* <!-- featured start --> */}
        <div className="featured pt-10">
          <div className="container mxw_1530">
            <div className="row mt-none-30">
              <div className="col-lg-9 mt-30">
                <div className="featured__item featured__big bg_img ul_li_between" style={{backgroundImage: 'url(/img/bg/bg_06.jpg)'}} >
                  <div className="featured__content">
                    <span>Widesceen 4k .......</span>
                    <h2>Digital Slr Camera <br /> High Defination</h2>
                    <p>Sumptuous, filling, and temptingly</p>
                    <div className="ul_li mt-20">
                      <div className="upto-offer ul_li">
                        <span className="upto">Up <br /> To</span>
                        <span className="offer-no">70 <span>%</span></span>
                      </div>
                      <h4 className="price">$ 180.99</h4>
                    </div>
                    <div className="banner__btn mt-30">
                      <a className="thm-btn thm-btn__black" href="shop.html">
                        <span className="btn-wrap">
                          <span>Shop Now</span>
                          <span>Shop Now</span>
                        </span>
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="featured__img">
                    <img src="/img/product/img_56.png" alt="" />
                  </div>
                  <div className="featured__shape">
                    <img src="/img/icon/h_01.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mt-30">
                <div className="add-banner bg_img add-banner__2 add-banner__h555" style={{backgroundImage: 'url(/img/bg/bg_07.jpg)'}}>
                  <span>New</span>
                  <h2>Cloud Cam, <br />Security Camera</h2>
                  <div className="upto-offer ul_li mb-35">
                    <span className="upto">Up <br /> To</span>
                    <span className="offer-no">70 <span>%</span></span>
                  </div>
                  <a className="thm-btn thm-btn__transparent" href="shop.html">
                    <span className="btn-wrap">
                      <span>Shop Now</span>
                      <span>Shop Now</span>
                    </span>
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                  <div className="add-banner__img">
                    <img src="/img/product/img_57.png" alt="" />
                  </div>
                  <div className="add-banner__text-box">
                    25% <br />
                      <span>off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- featured end -->

        <!-- tx baner start --> */}
        <div className="banner-product">
          <div className="container mxw_1530 pt-45">
            <div className="row mt-none-30">
              <div className="col-lg-3 col-md-6 mt-30">
                <div className="banner-product__item ul_li bg_img"style={{backgroundImage: 'url(/img/bg/bg_08.jpg)'}} >
                  <div className="banner-product__img">
                    <img src="/img/product/img_59.png" alt="" />
                  </div>
                  <div className="banner-product__content">
                    <h2>Break Disc <br /> <span>deals</span> on this</h2>
                    <div className="upto-offer ul_li mb-10">
                      <span className="upto">Up <br /> To</span>
                      <span className="offer-no">70 <span>%</span></span>
                    </div>
                    <a href="shop.html">Shop Now <i className="fas fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-30">
                <div className="banner-product__item ul_li bg_img" style={{backgroundImage: 'url(/img/bg/bg_09.jpg)'}}>
                  <div className="banner-product__img">
                    <img src="/img/product/img_60.png" alt="" />
                  </div>
                  <div className="banner-product__content">
                    <h2>Break Disc <br /> <span>deals</span> on this</h2>
                    <div className="upto-offer ul_li mb-10">
                      <span className="upto">Up <br /> To</span>
                      <span className="offer-no">70 <span>%</span></span>
                    </div>
                    <a href="shop.html">Shop Now <i className="fas fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-30">
                <div className="banner-product__item ul_li bg_img" style={{backgroundImage: 'url(/img/bg/bg_10.jpg)'}}>
                  <div className="banner-product__img">
                    <img src="/img/product/img_61.png" alt="" />
                  </div>
                  <div className="banner-product__content">
                    <h2>Break Disc <br /> <span>deals</span> on this</h2>
                    <div className="upto-offer ul_li mb-10">
                      <span className="upto">Up <br /> To</span>
                      <span className="offer-no">70 <span>%</span></span>
                    </div>
                    <a href="shop.html">Shop Now <i className="fas fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-30">
                <div className="banner-product__item ul_li bg_img" style={{backgroundImage: 'url(/img/bg/bg_11.jpg)'}}>
                  <div className="banner-product__img">
                    <img src="/img/product/img_62.png" alt="" />
                  </div>
                  <div className="banner-product__content">
                    <h2>Break Disc <br /> <span>deals</span> on this</h2>
                    <div className="upto-offer ul_li mb-10">
                      <span className="upto">Up <br /> To</span>
                      <span className="offer-no">70 <span>%</span></span>
                    </div>
                    <a href="shop.html">Shop Now <i className="fas fa-chevron-circle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tx baner end -->

        <!-- rd tab product start --> */}
        <div className="rd-tab-product pt-60">
          <div className="container mxw_1530">
            <div className="row mt-none-30">
              <div className="col-lg-3 mt-30">
                <div className="add-banner__wrap pr-90">
                  <div className="add-banner bg_img add-banner__2 add-banner__h444" style={{backgroundImage: 'url(/img/bg/bg_07.jpg)'}} >
                    <span>New</span>
                    <h2>Cloud Cam, <br />Security Camera</h2>
                    <div className="upto-offer ul_li mb-35">
                      <span className="upto">Up <br /> To</span>
                      <span className="offer-no">70 <span>%</span></span>
                    </div>
                    <a className="thm-btn thm-btn__transparent" href="shop.html">
                      <span className="btn-wrap">
                        <span>Shop Now</span>
                        <span>Shop Now</span>
                      </span>
                      <i className="far fa-long-arrow-right"></i>
                    </a>
                    <div className="add-banner__img">
                      <img src="/img/product/img_63.png" alt="" />
                    </div>
                    <div className="add-banner__text-box add-banner__text-box--2">
                      25% <br />
                        <span>off</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mt-30">
                <div className="rd-products__wrap">
                  <div className="rd-products__nav ul_li_between mb-20">
                    <h2 className="section-heading"><span>Best Seller Product</span></h2>
                    <ul className="nav nav-tabs" id="vd-myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vd-tab-01" data-bs-toggle="tab" data-bs-target="#vd-tab1" type="button" role="tab" aria-controls="vd-tab1" aria-selected="true">Engine</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vd-tab-02" data-bs-toggle="tab" data-bs-target="#vd-tab2" type="button" role="tab" aria-controls="vd-tab2" aria-selected="false">Transmission</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vd-tab-03" data-bs-toggle="tab" data-bs-target="#vd-tab3" type="button" role="tab" aria-controls="vd-tab3" aria-selected="false">Battery</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="vd-tab-04" data-bs-toggle="tab" data-bs-target="#vd-tab4" type="button" role="tab" aria-controls="vd-tab4" aria-selected="false">Radiator</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vd-tab-05" data-bs-toggle="tab" data-bs-target="#vd-tab5" type="button" role="tab" aria-controls="vd-tab5" aria-selected="false">Fuel Tank</button>
                      </li>
                    </ul>
                  </div>
                  <div className="rd-products">
                    <div className="tab-content tab_has_slider" id="vd-myTabContent">
                      <div className="tab-pane fade" id="vd-tab1" role="tabpanel" aria-labelledby="vd-tab-01">
                        <div className="rd-tab-product__slide">
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_64.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg2 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_65.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg4 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_67.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Sceptre 24″ Thin 75Hz 1080p LED Monitor</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg5 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_68.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Portable External Hard Drive Portable HDD USB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="vd-tab2" role="tabpanel" aria-labelledby="vd-tab-02">
                        <div className="rd-tab-product__slide">
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_64.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg2 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_65.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg4 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_67.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Sceptre 24″ Thin 75Hz 1080p LED Monitor</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg5 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_68.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Portable External Hard Drive Portable HDD USB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="vd-tab3" role="tabpanel" aria-labelledby="vd-tab-03">
                        <div className="rd-tab-product__slide">
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_64.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg2 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_65.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg4 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_67.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Sceptre 24″ Thin 75Hz 1080p LED Monitor</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg5 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_68.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Portable External Hard Drive Portable HDD USB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade show active" id="vd-tab4" role="tabpanel" aria-labelledby="vd-tab-04">
                        <div className="rd-tab-product__slide">
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_64.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg2 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_65.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg4 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_67.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Sceptre 24″ Thin 75Hz 1080p LED Monitor</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg5 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_68.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Portable External Hard Drive Portable HDD USB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="vd-tab5" role="tabpanel" aria-labelledby="vd-tab-05">
                        <div className="rd-tab-product__slide">
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_64.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg2 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_65.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg4 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_67.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Sceptre 24″ Thin 75Hz 1080p LED Monitor</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item bg5 tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_68.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                          <div className="tab-product__item tx-product text-center">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                              <ul className="product__action style-2 ul_li">
                                <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                <li><a href="#!"><i className="far fa-heart"></i></a></li>
                              </ul>
                            </div>
                            <div className="content">
                              <div className="product__review ul_li_center">
                                <ul className="rating-star ul_li mr-10">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                  <li><i className="far fa-star"></i></li>
                                </ul>
                                <span>(126)</span>
                              </div>
                              <h3 className="title"><a href="shop-single.html">Portable External Hard Drive Portable HDD USB</a></h3>
                              <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                            </div>
                            <span className="badge-skew">New</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- rd tab product end --> */}

        <div className="pt-40">
          <div className="container mxw_1530">
            <div className="row mt-none-30">
              <div className="col-lg-3 mt-30">
                <div className="tx-widget__wrap pr-90">
                  <div className="tx-widget widget__product">
                    <h2 className="section-heading mb-20 fs-18"><span>Leatest Item</span></h2>
                    <div className="tx-widget__product-slide tx-arrow">
                      <div className="tx-widget__product-single">
                        <div className="tx-widget__product-item tx-product ul_li">
                          <div className="thumb">
                            <a href="shop-single.html"><img src="/img/product/img_69.png" alt="" /></a>
                          </div>
                          <div className="content">
                            <h3><a href="shop-single.html">Panasonic Cordless Phone System,</a></h3>
                            <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                          </div>
                        </div>
                        <div className="tx-widget__product-item tx-product ul_li">
                          <div className="thumb">
                            <a href="shop-single.html"><img src="/img/product/img_70.png" alt="" /></a>
                          </div>
                          <div className="content">
                            <h3><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Wide Angle</a></h3>
                            <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                          </div>
                        </div>
                        <div className="tx-widget__product-item tx-product ul_li">
                          <div className="thumb">
                            <a href="shop-single.html"><img src="/img/product/img_71.png" alt="" /></a>
                          </div>
                          <div className="content">
                            <h3><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h3>
                            <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                          </div>
                        </div>
                        <div className="tx-widget__product-item tx-product ul_li">
                          <div className="thumb">
                            <a href="shop-single.html"><img src="/img/product/img_72.png" alt="" /></a>
                          </div>
                          <div className="content">
                            <h3><a href="shop-single.html">Basics 2 Slice, Extra-Wide Slot Toaster</a></h3>
                            <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                          </div>
                        </div>
                        <div className="tx-widget__product-item tx-product ul_li">
                          <div className="thumb">
                            <a href="shop-single.html"><img src="/img/product/img_73.png" alt="" /></a>
                          </div>
                          <div className="content">
                            <h3><a href="shop-single.html">Galaxy Tab A7 Lite 8.7″ 32GB</a></h3>
                            <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                          </div>
                        </div>
                        <div className="tx-widget__product-item tx-product ul_li">
                          <div className="thumb">
                            <a href="shop-single.html"><img src="/img/product/img_73.png" alt="" /></a>
                          </div>
                          <div className="content">
                            <h3><a href="shop-single.html">USDA Choice Angus Beef Stew Meat</a></h3>
                            <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mt-30">
                <div className="tx-product-style-01">
                  <div className="tx-product-wrap">
                    <div className="product__nav-wrap style-3 ul_li_between mb-20">
                      <h2 className="section-heading"><span>Used <span>Car</span> Area</span></h2>
                      <ul className="product__nav nav nav-tabs" id="myTab3" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="ctx-tab-01" data-bs-toggle="tab" data-bs-target="#ctx-tab1" type="button" role="tab" aria-controls="ctx-tab1" aria-selected="true">Recent</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="ctx-tab-02" data-bs-toggle="tab" data-bs-target="#ctx-tab2" type="button" role="tab" aria-controls="ctx-tab2" aria-selected="false">Best Seller</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="ctx-tab-03" data-bs-toggle="tab" data-bs-target="#ctx-tab3" type="button" role="tab" aria-controls="ctx-tab3" aria-selected="false">Top</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="ctx-tab-04" data-bs-toggle="tab" data-bs-target="#ctx-tab4" type="button" role="tab" aria-controls="ctx-tab4" aria-selected="false">New Arrivals</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="ctx-tab-05" data-bs-toggle="tab" data-bs-target="#ctx-tab5" type="button" role="tab" aria-controls="ctx-tab5" aria-selected="false">top rating</button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane animated fadeInUp" id="ctx-tab1" role="tabpanel" aria-labelledby="ctx-tab-01">
                        <div className="row g-0">
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Amazon Basics 2 Slice, Extra-Wide Slot</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_75.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SMORFIT Smart Watch for Men/Women, Fitness</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_76.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Home Security Camera, Baby Camera</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_77.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">ByronStatics Portable Radio AM FM, Vintage</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_78.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp" id="ctx-tab2" role="tabpanel" aria-labelledby="ctx-tab-02">
                        <div className="row g-0">
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Amazon Basics 2 Slice, Extra-Wide Slot</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_75.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SMORFIT Smart Watch for Men/Women, Fitness</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_76.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Home Security Camera, Baby Camera</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_77.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">ByronStatics Portable Radio AM FM, Vintage</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_78.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp show active" id="ctx-tab3" role="tabpanel" aria-labelledby="ctx-tab-03">
                        <div className="row g-0">
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Amazon Basics 2 Slice, Extra-Wide Slot</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_75.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SMORFIT Smart Watch for Men/Women, Fitness</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_76.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Home Security Camera, Baby Camera</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_77.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">ByronStatics Portable Radio AM FM, Vintage</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_78.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp" id="ctx-tab4" role="tabpanel" aria-labelledby="ctx-tab-04">
                        <div className="row g-0">
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Amazon Basics 2 Slice, Extra-Wide Slot</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_75.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SMORFIT Smart Watch for Men/Women, Fitness</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_76.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Home Security Camera, Baby Camera</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_77.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">ByronStatics Portable Radio AM FM, Vintage</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_78.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp" id="ctx-tab5" role="tabpanel" aria-labelledby="ctx-tab-05">
                        <div className="row g-0">
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Amazon Basics 2 Slice, Extra-Wide Slot</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_75.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SMORFIT Smart Watch for Men/Women, Fitness</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_76.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Home Security Camera, Baby Camera</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_77.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">ByronStatics Portable Radio AM FM, Vintage</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-1-of-5">
                            <div className="product__item style-2">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_78.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(126)</span>
                                </div>
                                <div className="product__progress progress mt-2 color-primary">
                                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                                <span className="badge-skew">New</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-none-10">
                    <div className="col-xl-6 col-lg-12 mt-30">
                      <div className="vd-banner__item pos-rel ul_li_between bg_img" style={{backgroundImage: 'url(/img/bg/bg_12.jpg)'}} >
                        <div className="content">
                          <span>Get 30% off</span>
                          <h2>Buy One. Get Free delivery</h2>
                          <h3>Starting  <span>560.99</span></h3>
                          <div className="banner__btn mt-10">
                            <a href="shop.html">Shop Now</a>
                          </div>
                        </div>
                        <div className="image">
                          <img src="/img/product/img_79.png" alt="" />
                        </div>
                        <div className="vd-banner__offer-box">
                          25%<span>off</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 mt-30">
                      <div className="vd-banner__item vd-banner__item-two pos-rel ul_li_between bg_img" style={{backgroundImage: 'url(/img/bg/bg_13.jpg)'}}>
                        <div className="content">
                          <span>Get 30% off</span>
                          <h2>Buy One. Get Free delivery</h2>
                          <h3>Starting  <span>560.99</span></h3>
                          <div className="banner__btn mt-10">
                            <a href="shop.html">Shop Now</a>
                          </div>
                        </div>
                        <div className="image">
                          <img src="/img/product/img_80.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-30">
          <div className="container mxw_1530">
            <h2 className="section-heading mb-20"><span><span>Deals</span> Of The Day</span></h2>
            <div className="row mt-none-30">
              <div className="col-lg-3 mt-30">
                <div className="add-banner__wrap mr-70">
                  <div className="add-banner add-banner__3 bg_img add-banner__h530" style={{backgroundImage: 'url(/img/bg/bg_15.jpg)'}} >
                    <div className="add-banner__content text-center">
                      <span>Get Save 30% off</span>
                      <h3 className="text-capitalize">general motors buick <br /> sonic engine</h3>
                      <a className="thm-btn mt-40" href="shop.html">
                        <span className="btn-wrap">
                          <span>Shop Now</span>
                          <span>Shop Now</span>
                        </span>
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div className="add-banner__img">
                      <img src="/img/product/img_81.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-30">
                <div className="weekly-product__wrap">
                  <div className="weeekly-product__head pos-rel">
                    <div className="weekly-product__content">
                      <div className="product__review ul_li">
                        <ul className="rating-star ul_li mr-10">
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="far fa-star"></i></li>
                          <li><i className="far fa-star"></i></li>
                        </ul>
                        <span>(26)</span>
                      </div>
                      <h3 className="weekly-product__title">Brendy Bluest Headphone</h3>
                      <h3 className="weekly-product__price ul_li mb-15"><span className="new">$16.00</span><span className="old">$32.00</span><span className="off">-34%</span></h3>
                      <p>Namkand sodales vel online best prices <br /> an unknown printer took a galley of</p>
                      <h4 className="weekly-product__deal">Deals End To:</h4>
                      <div className="countdown style-2 ul_li mt-15" data-countdown="2024/08/28"></div>
                    </div>

                    <div className="tab-content" id="wpTabContent">
                      <div className="tab-pane fade show active" id="wp-tab-1" role="tabpanel" aria-labelledby="wp-tab-01">
                        <div className="weekly-product__img">
                          <img src="/img/product/img_82.png" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="wp-tab-2" role="tabpanel" aria-labelledby="wp-tab-02">
                        <div className="weekly-product__img">
                          <img src="/img/product/img_82.png" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="wp-tab-3" role="tabpanel" aria-labelledby="wp-tab-03">
                        <div className="weekly-product__img">
                          <img src="/img/product/img_82.png" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="wp-tab-4" role="tabpanel" aria-labelledby="wp-tab-04">
                        <div className="weekly-product__img">
                          <img src="/img/product/img_82.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="weekly-product__nav nav nav-tabs" id="wpTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="wp-tab-01" data-bs-toggle="tab" data-bs-target="#wp-tab-1" type="button" role="tab" aria-controls="wp-tab-1" aria-selected="true">
                        <span className="weekly-product__nav-img">
                          <img src="/img/product/img_83.png" alt="" />
                        </span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="wp-tab-02" data-bs-toggle="tab" data-bs-target="#wp-tab-2" type="button" role="tab" aria-controls="wp-tab-2" aria-selected="false">
                        <span className="weekly-product__nav-img">
                          <img src="/img/product/img_84.png" alt="" />
                        </span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="wp-tab-03" data-bs-toggle="tab" data-bs-target="#wp-tab-3" type="button" role="tab" aria-controls="wp-tab-3" aria-selected="false">
                        <span className="weekly-product__nav-img">
                          <img src="/img/product/img_85.png" alt="" />
                        </span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="wp-tab-04" data-bs-toggle="tab" data-bs-target="#wp-tab-4" type="button" role="tab" aria-controls="wp-tab-4" aria-selected="false">
                        <span className="weekly-product__nav-img">
                          <img src="/img/product/img_86.png" alt="" />
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 mt-30">
                <div className="rd-side__product">
                  <div className="tab-content" id="rdSideImag">
                    <div className="tab-pane fade show active" id="rds-01" role="tabpanel" aria-labelledby="rds-tab-01">
                      <div className="rd-side__img">
                        <img src="/img/product/img_88.png" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="rds-02" role="tabpanel" aria-labelledby="rds-tab-02">
                      <div className="rd-side__img">
                        <img src="/img/product/img_88.png" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="rds-03" role="tabpanel" aria-labelledby="rds-tab-03">
                      <div className="rd-side__img">
                        <img src="/img/product/img_88.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-tabs rd-side__nav" id="rdSideNav" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="rds-tab-01" data-bs-toggle="tab" data-bs-target="#rds-01" type="button" role="tab" aria-controls="rds-01" aria-selected="true">
                        <img src="/img/product/img_89.png" alt="" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="rds-tab-02" data-bs-toggle="tab" data-bs-target="#rds-02" type="button" role="tab" aria-controls="rds-02" aria-selected="false">
                        <img src="/img/product/img_90.png" alt="" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="rds-tab-03" data-bs-toggle="tab" data-bs-target="#rds-03" type="button" role="tab" aria-controls="rds-03" aria-selected="false">
                        <img src="/img/product/img_91.png" alt="" />
                      </button>
                    </li>
                  </ul>
                  <div className="ul_li_between mb-6">
                    <span className="product__available">Available: <span>334</span></span>
                    <span className="product__available">Sold Out: <span>180</span></span>
                  </div>
                  <div className="product__progress progress h-8 color-primary">
                    <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h2 className="title"><a href="#!">Amazon Cloud Cam Security</a></h2>
                  <div className="product__review ul_li">
                    <ul className="rating-star ul_li mr-10">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="far fa-star"></i></li>
                      <li><i className="far fa-star"></i></li>
                    </ul>
                    <span>(26)</span>
                  </div>
                  <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span><span className="off">-34%</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rd-product__bg pt-30">
          <div className="container mxw_1530">
            <div className="rd-product__slide-wrap">
              <h2 className="section-heading mb-30 ul_li_between"><span>Tructor Parts</span> <span><span>Baby Items</span> / Gift Item   </span> </h2>
              <div className="rd-product__slide-two d-flex">
                <div className="tab-product__item tx-product text-center">
                  <div className="thumb">
                    <a href="shop-single.html"><img src="/img/product/img_64.png" alt="" /></a>
                    <ul className="product__action style-2 ul_li">
                      <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                      <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                      <li><a href="#!"><i className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="product__review ul_li_center">
                      <ul className="rating-star ul_li mr-10">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span>(126)</span>
                    </div>
                    <h3 className="title"><a href="shop-single.html">Air Purifier for Home Allergies Pets Hair</a></h3>
                    <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                  </div>
                  <span className="badge-skew">New</span>
                </div>
                <div className="tab-product__item tx-product text-center">
                  <div className="thumb">
                    <a href="shop-single.html"><img src="/img/product/img_65.png" alt="" /></a>
                    <ul className="product__action style-2 ul_li">
                      <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                      <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                      <li><a href="#!"><i className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="product__review ul_li_center">
                      <ul className="rating-star ul_li mr-10">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span>(126)</span>
                    </div>
                    <h3 className="title"><a href="shop-single.html">Skullcandy Dime True In-Ear Earbuds</a></h3>
                    <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                  </div>
                  <span className="badge-skew">New</span>
                </div>
                <div className="tab-product__item tx-product text-center">
                  <div className="thumb">
                    <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                    <ul className="product__action style-2 ul_li">
                      <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                      <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                      <li><a href="#!"><i className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="product__review ul_li_center">
                      <ul className="rating-star ul_li mr-10">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span>(126)</span>
                    </div>
                    <h3 className="title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a></h3>
                    <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                  </div>
                  <span className="badge-skew">New</span>
                </div>
                <div className="tab-product__item tx-product text-center">
                  <div className="thumb">
                    <a href="shop-single.html"><img src="/img/product/img_67.png" alt="" /></a>
                    <ul className="product__action style-2 ul_li">
                      <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                      <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                      <li><a href="#!"><i className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="product__review ul_li_center">
                      <ul className="rating-star ul_li mr-10">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span>(126)</span>
                    </div>
                    <h3 className="title"><a href="shop-single.html">Portable 2TB External Hard Drive Portable</a></h3>
                    <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                  </div>
                  <span className="badge-skew">New</span>
                </div>
                <div className="tab-product__item tx-product text-center">
                  <div className="thumb">
                    <a href="shop-single.html"><img src="/img/product/img_68.png" alt="" /></a>
                    <ul className="product__action style-2 ul_li">
                      <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                      <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                      <li><a href="#!"><i className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="product__review ul_li_center">
                      <ul className="rating-star ul_li mr-10">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span>(126)</span>
                    </div>
                    <h3 className="title"><a href="shop-single.html">Amazon Basics 2 Slice, Extra-Wide Slot</a></h3>
                    <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                  </div>
                  <span className="badge-skew">New</span>
                </div>
                <div className="tab-product__item tx-product text-center">
                  <div className="thumb">
                    <a href="shop-single.html"><img src="/img/product/img_66.png" alt="" /></a>
                    <ul className="product__action style-2 ul_li">
                      <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                      <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                      <li><a href="#!"><i className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="product__review ul_li_center">
                      <ul className="rating-star ul_li mr-10">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span>(126)</span>
                    </div>
                    <h3 className="title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h3>
                    <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                  </div>
                  <span className="badge-skew">New</span>
                </div>
                <div className="tab-product__item tx-product text-center">
                  <div className="thumb">
                    <a href="shop-single.html"><img src="/img/product/img_67.png" alt="" /></a>
                    <ul className="product__action style-2 ul_li">
                      <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                      <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                      <li><a href="#!"><i className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="product__review ul_li_center">
                      <ul className="rating-star ul_li mr-10">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span>(126)</span>
                    </div>
                    <h3 className="title"><a href="shop-single.html">Basics 2 Slice, Extra-Wide Slot Toaster</a></h3>
                    <span className="price">( $28.52 - <span className="old-price">$30.00</span> )</span>
                  </div>
                  <span className="badge-skew">New</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- newslater start --> */}
        <div className="newslater gray-bg pt-55 pb-60">
          <div className="container mxw_1530">
            <div className="newslater__three ul_li">
              <div className="newslater__content">
                <h2 className="title">Join Our <span>Newsletter</span></h2>
                <p>Sale up to 20% off for your next purchase in this month</p>
              </div>
              <form className="newslater__form" action="#!">
                <input placeholder="Enter Your Email Address" type="text"/>
                  <button className="thm-btn">
                    <span className="btn-wrap">
                      <span>Subscribe Now</span>
                      <span>Subscribe Now</span>
                    </span>
                  </button>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- newslater end -->

        <!-- rd slide product start --> */}
        <div className="rd-parts pt-60">
          <div className="container mxw_1530">
            <div className="row mt-none-30">
              <div className="col-lg-3 mt-30">
                <div className="product-category product-category__two mr-60">
                  <h2 className="section-heading mb-40"><span><span>Catagory</span></span></h2>
                  <ul className="list-unstyled">
                    <li className="cat-item-has-children"><a href="#!">Motorbike parts</a></li>
                    <li className="cat-item-has-children"><a href="#!">Car parts Name</a></li>
                    <li className="cat-item-has-children"><a href="#!">Bicycle Parts</a></li>
                    <li><a href="#!">Taxi bike parts</a></li>
                    <li className="cat-item-has-children"><a href="#!">Double decker bus</a></li>
                    <li className="cat-item-has-children"><a href="#!">Tractor parts</a></li>
                    <li><a href="#!">Bull Dozer</a></li>
                    <li><a href="#!">Rope tram vehicle</a></li>
                    <li className="cat-item-has-children"><a href="#!">Excavator</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 mt-30">
                <div className="rd-parts__wrap">
                  <div className="rd-products__nav ul_li_between mb-20">
                    <h2 className="section-heading"><span>Motorbike parts <span>(new)</span></span></h2>
                    <ul className="nav nav-tabs" id="rdpTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="rdp-tab-01" data-bs-toggle="tab" data-bs-target="#rdp-tab1" type="button" role="tab" aria-controls="rdp-tab1" aria-selected="true">Engine</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="rdp-tab-02" data-bs-toggle="tab" data-bs-target="#rdp-tab2" type="button" role="tab" aria-controls="rdp-tab2" aria-selected="false">Transmission</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="rdp-tab-03" data-bs-toggle="tab" data-bs-target="#rdp-tab3" type="button" role="tab" aria-controls="rdp-tab3" aria-selected="false">Battery</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="rdp-tab-04" data-bs-toggle="tab" data-bs-target="#rdp-tab4" type="button" role="tab" aria-controls="rdp-tab4" aria-selected="false">Radiator</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="rdp-tab-05" data-bs-toggle="tab" data-bs-target="#rdp-tab5" type="button" role="tab" aria-controls="rdp-tab5" aria-selected="false">Fuel Tank</button>
                      </li>
                    </ul>
                  </div>
                  <div className="rd-parts__products">
                    <div className="tab-content" id="rdpTabContent">
                      <div className="tab-pane animated fadeInUp" id="rdp-tab1" role="tabpanel" aria-labelledby="rdp-tab-01">
                        <div className="row g-0 mt-none-30">
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Beats Flex Wireless Earbuds – Apple W1 Headphone</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_93.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">DEWALT 20V MAX* XR Oscillating Tool Kit,</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>
                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_94.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">BLACK+DECKER BPWH84W Washer Portable Laundry</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_95.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy S20 FE 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_96.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">CLB 510BT Wireless Headphones with Purebass</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_97.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Panasonic Cordless Phone System, Expandable</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_98.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_99.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_100.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Sceptre 24″ Professional Thin 75Hz 1080p LED Monitor</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_101.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp" id="rdp-tab2" role="tabpanel" aria-labelledby="rdp-tab-02">
                        <div className="row g-0 mt-none-30">
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Beats Flex Wireless Earbuds – Apple W1 Headphone</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_93.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">DEWALT 20V MAX* XR Oscillating Tool Kit,</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>
                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_94.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">BLACK+DECKER BPWH84W Washer Portable Laundry</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_95.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy S20 FE 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_96.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">CLB 510BT Wireless Headphones with Purebass</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_97.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Panasonic Cordless Phone System, Expandable</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_98.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_99.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_100.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Sceptre 24″ Professional Thin 75Hz 1080p LED Monitor</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_101.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp" id="rdp-tab3" role="tabpanel" aria-labelledby="rdp-tab-03">
                        <div className="row g-0 mt-none-30">
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Beats Flex Wireless Earbuds – Apple W1 Headphone</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_93.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">DEWALT 20V MAX* XR Oscillating Tool Kit,</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>
                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_94.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">BLACK+DECKER BPWH84W Washer Portable Laundry</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_95.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy S20 FE 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_96.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">CLB 510BT Wireless Headphones with Purebass</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_97.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Panasonic Cordless Phone System, Expandable</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_98.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_99.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_100.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Sceptre 24″ Professional Thin 75Hz 1080p LED Monitor</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_101.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp show active" id="rdp-tab4" role="tabpanel" aria-labelledby="rdp-tab-04">
                        <div className="row g-0 mt-none-30">
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Beats Flex Wireless Earbuds – Apple W1 Headphone</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_93.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">DEWALT 20V MAX* XR Oscillating Tool Kit,</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>
                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_94.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">BLACK+DECKER BPWH84W Washer Portable Laundry</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_95.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy S20 FE 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_96.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">CLB 510BT Wireless Headphones with Purebass</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_97.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Panasonic Cordless Phone System, Expandable</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_98.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_99.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_100.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Sceptre 24″ Professional Thin 75Hz 1080p LED Monitor</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_101.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane animated fadeInUp" id="rdp-tab5" role="tabpanel" aria-labelledby="rdp-tab-05">
                        <div className="row g-0 mt-none-30">
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_74.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Beats Flex Wireless Earbuds – Apple W1 Headphone</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_93.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">DEWALT 20V MAX* XR Oscillating Tool Kit,</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>
                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_94.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">BLACK+DECKER BPWH84W Washer Portable Laundry</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_95.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy S20 FE 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_96.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">CLB 510BT Wireless Headphones with Purebass</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_97.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Panasonic Cordless Phone System, Expandable</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_98.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Fire HD 10 tablet, 10.1″, 1080p Full HD, 32 GB</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_99.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">SAMSUNG Galaxy A13 5G Cell Phone, Factory</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_100.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Sceptre 24″ Professional Thin 75Hz 1080p LED Monitor</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                          <div className="col-1-of-5 mt-30">
                            <div className="product__item style-3">
                              <div className="product__img text-center pos-rel">
                                <a href="shop-single.html"><img src="/img/product/img_101.png" alt="" /></a>
                                <ul className="product__action style-2 ul_li">
                                  <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                  <li><a href="#!"><i className="far fa-shopping-basket"></i></a></li>
                                  <li><a href="#!"><i className="far fa-heart"></i></a></li>
                                </ul>
                              </div>
                              <div className="product__content">
                                <div className="product__review ul_li_center">
                                  <ul className="rating-star ul_li mr-10">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                    <li><i className="far fa-star"></i></li>
                                  </ul>
                                  <span>(26)</span>
                                </div>
                                <h2 className="product__title"><a href="shop-single.html">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide Angle</a></h2>
                                <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                              </div>

                              <span className="badge-skew">New</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- rd slide product end -->

        <!-- product catagories start --> */}
        <div className="rd-product-category pt-50">
          <div className="container mxw_1530">
            <h2 className="section-heading mb-25"><span>Product Catagories</span></h2>
            <div className="row mt-none-30">
              <div className="col-lg-9 mt-30">
                <div className="rd-product-category__wrap">
                  <div className="row mt-none-50">
                    <div className="col-lg-4 col-md-4">
                      <div className="product-cat__item product-cat__item-two pos-rel mt-40">
                        <div className="product-cat__images mt-20">
                          <div className="tab-content" id="fc-myTabContent">
                            <div className="tab-pane fade show active" id="fc-home" role="tabpanel" aria-labelledby="fc-home-tab">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_102.png" alt="" /></a>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="fc-profile" role="tabpanel" aria-labelledby="fc-profile-tab">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_103.png" alt="" /></a>
                              </div>
                            </div>
                          </div>
                          <ul className="nav product-cat__nav product-cat__nav-two nav-tabs" id="fc-myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="fc-home-tab" data-bs-toggle="tab" data-bs-target="#fc-home" type="button" role="tab" aria-controls="fc-home" aria-selected="true">
                                <img src="/img/product/img_102.png" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="fc-profile-tab" data-bs-toggle="tab" data-bs-target="#fc-profile" type="button" role="tab" aria-controls="fc-profile" aria-selected="false">
                                <img src="/img/product/img_103.png" alt="" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-cat__content mt-20">
                          <h3 className="title">welding stud welding</h3>
                          <ul className="list-unstyled">
                            <li><a href="#!">Bluetooth speaker</a></li>
                            <li><a href="#!">Robotics vacuum</a></li>
                            <li><a href="#!">Laser printer</a></li>
                            <li><a href="#!">Electric frying pan</a></li>
                          </ul>
                        </div>
                        <span className="product-cat__number">01</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="product-cat__item product-cat__item-two pos-rel mt-40">
                        <div className="product-cat__images mt-20">
                          <div className="tab-content" id="fc-myTabContent2">
                            <div className="tab-pane fade show active" id="fc-home2" role="tabpanel" aria-labelledby="fc-home-tab2">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_103.png" alt="" /></a>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="fc-profile2" role="tabpanel" aria-labelledby="fc-profile-tab2">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_104.png" alt="" /></a>
                              </div>
                            </div>
                          </div>
                          <ul className="nav product-cat__nav product-cat__nav-two nav-tabs" id="fc-myTab2" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="fc-home-tab2" data-bs-toggle="tab" data-bs-target="#fc-home2" type="button" role="tab" aria-controls="fc-home2" aria-selected="true">
                                <img src="/img/product/img_103.png" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="fc-profile-tab2" data-bs-toggle="tab" data-bs-target="#fc-profile2" type="button" role="tab" aria-controls="fc-profile2" aria-selected="false">
                                <img src="/img/product/img_104.png" alt="" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-cat__content mt-20">
                          <h3 className="title">car automotive engine</h3>
                          <ul className="list-unstyled">
                            <li><a href="#!">Bluetooth speaker</a></li>
                            <li><a href="#!">Robotics vacuum</a></li>
                            <li><a href="#!">Laser printer</a></li>
                            <li><a href="#!">Electric frying pan</a></li>
                          </ul>
                        </div>
                        <span className="product-cat__number">02</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="product-cat__item product-cat__item-two pos-rel mt-40">
                        <div className="product-cat__images mt-20">
                          <div className="tab-content" id="fc-myTabContent3">
                            <div className="tab-pane fade show active" id="fc-home3" role="tabpanel" aria-labelledby="fc-home-tab3">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_104.png" alt="" /></a>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="fc-profile3" role="tabpanel" aria-labelledby="fc-profile-tab3">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_105.png" alt="" /></a>
                              </div>
                            </div>
                          </div>
                          <ul className="nav product-cat__nav product-cat__nav-two nav-tabs" id="fc-myTab3" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="fc-home-tab3" data-bs-toggle="tab" data-bs-target="#fc-home3" type="button" role="tab" aria-controls="fc-home3" aria-selected="true">
                                <img src="/img/product/img_104.png" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="fc-profile-tab3" data-bs-toggle="tab" data-bs-target="#fc-profile3" type="button" role="tab" aria-controls="fc-profile3" aria-selected="false">
                                <img src="/img/product/img_105.png" alt="" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-cat__content mt-20">
                          <h3 className="title">engines muffler two</h3>
                          <ul className="list-unstyled">
                            <li><a href="#!">Bluetooth speaker</a></li>
                            <li><a href="#!">Robotics vacuum</a></li>
                            <li><a href="#!">Laser printer</a></li>
                            <li><a href="#!">Electric frying pan</a></li>
                          </ul>
                        </div>
                        <span className="product-cat__number">03</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="product-cat__item product-cat__item-two pos-rel mt-40">
                        <div className="product-cat__images mt-20">
                          <div className="tab-content" id="fc-myTabContent4">
                            <div className="tab-pane fade show active" id="fc-home4" role="tabpanel" aria-labelledby="fc-home-tab4">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_105.png" alt="" /></a>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="fc-profile4" role="tabpanel" aria-labelledby="fc-profile-tab4">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_106.png" alt="" /></a>
                              </div>
                            </div>
                          </div>
                          <ul className="nav product-cat__nav product-cat__nav-two nav-tabs" id="fc-myTab4" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="fc-home-tab4" data-bs-toggle="tab" data-bs-target="#fc-home4" type="button" role="tab" aria-controls="fc-home4" aria-selected="true">
                                <img src="/img/product/img_105.png" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="fc-profile-tab4" data-bs-toggle="tab" data-bs-target="#fc-profile4" type="button" role="tab" aria-controls="fc-profile4" aria-selected="false">
                                <img src="/img/product/img_106.png" alt="" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-cat__content mt-20">
                          <h3 className="title">air suspension car</h3>
                          <ul className="list-unstyled">
                            <li><a href="#!">Bluetooth speaker</a></li>
                            <li><a href="#!">Robotics vacuum</a></li>
                            <li><a href="#!">Laser printer</a></li>
                            <li><a href="#!">Electric frying pan</a></li>
                          </ul>
                        </div>
                        <span className="product-cat__number">04</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="product-cat__item product-cat__item-two pos-rel mt-40">
                        <div className="product-cat__images mt-20">
                          <div className="tab-content" id="fc-myTabContent5">
                            <div className="tab-pane fade show active" id="fc-home5" role="tabpanel" aria-labelledby="fc-home-tab5">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_106.png" alt="" /></a>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="fc-profile5" role="tabpanel" aria-labelledby="fc-profile-tab5">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_107.png" alt="" /></a>
                              </div>
                            </div>
                          </div>
                          <ul className="nav product-cat__nav product-cat__nav-two nav-tabs" id="fc-myTab5" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="fc-home-tab5" data-bs-toggle="tab" data-bs-target="#fc-home5" type="button" role="tab" aria-controls="fc-home5" aria-selected="true">
                                <img src="/img/product/img_106.png" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="fc-profile-tab5" data-bs-toggle="tab" data-bs-target="#fc-profile5" type="button" role="tab" aria-controls="fc-profile5" aria-selected="false">
                                <img src="/img/product/img_107.png" alt="" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-cat__content mt-20">
                          <h3 className="title">brake pad wheel</h3>
                          <ul className="list-unstyled">
                            <li><a href="#!">Bluetooth speaker</a></li>
                            <li><a href="#!">Robotics vacuum</a></li>
                            <li><a href="#!">Laser printer</a></li>
                            <li><a href="#!">Electric frying pan</a></li>
                          </ul>
                        </div>
                        <span className="product-cat__number">05</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="product-cat__item product-cat__item-two pos-rel mt-40">
                        <div className="product-cat__images mt-20">
                          <div className="tab-content" id="fc-myTabContent6">
                            <div className="tab-pane fade show active" id="fc-home6" role="tabpanel" aria-labelledby="fc-home-tab6">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_107.png" alt="" /></a>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="fc-profile6" role="tabpanel" aria-labelledby="fc-profile-tab6">
                              <div className="product-cat__img">
                                <a href="shop-single.html"><img src="/img/product/img_103.png" alt="" /></a>
                              </div>
                            </div>
                          </div>
                          <ul className="nav product-cat__nav product-cat__nav-two nav-tabs" id="fc-myTab6" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="fc-home-tab6" data-bs-toggle="tab" data-bs-target="#fc-home6" type="button" role="tab" aria-controls="fc-home6" aria-selected="true">
                                <img src="/img/product/img_107.png" alt="" />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="fc-profile-tab6" data-bs-toggle="tab" data-bs-target="#fc-profile6" type="button" role="tab" aria-controls="fc-profile6" aria-selected="false">
                                <img src="/img/product/img_103.png" alt="" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-cat__content mt-20">
                          <h3 className="title">Smartphone & Tablet</h3>
                          <ul className="list-unstyled">
                            <li><a href="#!">Bluetooth speaker</a></li>
                            <li><a href="#!">Robotics vacuum</a></li>
                            <li><a href="#!">Laser printer</a></li>
                            <li><a href="#!">Electric frying pan</a></li>
                          </ul>
                        </div>
                        <span className="product-cat__number">06</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mt-30">
                <div className="add-banner__wrap ml-70">
                  <div className="add-banner add-banner__4 add-banner__h530 bg_img text-center" style={{backgroundImage: 'url(/img/bg/bg_16.jpg)'}} >
                    <span>Get Save 30% off</span>
                    <h3 className="text-capitalize">general motors buick <br /> sonic engine</h3>
                    <span className="price">$ 18560.99</span>
                    <a className="thm-btn mt-40" href="shop.html">
                      <span className="btn-wrap">
                        <span>Shop Now</span>
                        <span>Shop Now</span>
                      </span>
                      <i className="far fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- product catagories end -->

        <!-- banner start --> */}
        <div className="banner pt-50">
          <div className="container mxw_1530">
            <div className="banner__wrap bg_img ul_li" style={{background: 'url(/img/bg/bg_17.jpg)'}}>
              <div className="banner__content">
                <span>Expert mechanic</span>
                <h3>Repair Car Tets <br /> From Expertist</h3>
                <p>Sumptuous, filling, and temptingly healthy.</p>
                <a className="hero__btn" href="#!">Make enquiry <i className="far fa-long-arrow-right"></i></a>
              </div>
              <div className="banner__ofer-box">
                <img src="/img/icon/offer_bg.png" alt="" />
                  <span className="offer-text">30% <br /> <span>OFF</span></span>
              </div>
              <div className="banner-img">
                <img src="/img/product/img_108.png" alt="" />
              </div>
              <div className="banner-offer-text">
                <img src="/img/icon/offer_text.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- banner end --> */}

        <div className="pt-55">
          <div className="container mxw_1530">
            <div className="row mt-none-30">
              <div className="col-lg-10">
                <div className="rd-category__left">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 tab-product-col mt-30">
                      <div className="product-category product-category__2 bg_img" style={{backgroundImage: 'url(/img/bg/cat_bg.jpg)'}}>
                        <h2 className="product-category__title">Choose Catagory</h2>
                        <ul className="list-unstyled">
                          <li className="cat-item-has-children"><a href="#!">Meats &amp; Grocery</a></li>
                          <li className="cat-item-has-children"><a href="#!">Fruits &amp; Vegetables</a></li>
                          <li className="cat-item-has-children"><a href="#!">Frozen Foods</a></li>
                          <li><a href="#!">Breakfast &amp; Dairy</a></li>
                          <li className="cat-item-has-children"><a href="#!">Dried Foods</a></li>
                          <li className="cat-item-has-children"><a href="#!">Car &amp; Motobike Care</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 tab-product-col mt-30">
                      <h2 className="section-heading mb-20 fs-18"><span>Top Rated</span></h2>
                      <div className="tx-widget__product-slide tx-arrow">
                        <div className="tx-widget__product-single">
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_109.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">JBL Tune 510BT Wireless On-Ear Head</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_110.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">Apple iPhone 12 Pro, 128GB, Pacific</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_111.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">Air Purifier for Home Allergies Pets Hair</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_112.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">TP-Link Smart WiFi Router Wireless Interne</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 tab-product-col mt-30">
                      <h2 className="section-heading mb-20 fs-18"><span>Hot Product</span></h2>
                      <div className="tx-widget__product-slide tx-arrow">
                        <div className="tx-widget__product-single">
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_113.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">ByronStatics Portable Radio AM FM, Vintage</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_114.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">Panasonic Cordless Phone System, Expandable</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_115.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">Beats Flex Wireless Earbuds – Apple W1</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_116.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">Panasonic Cordless Phone System, Expandable</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 tab-product-col mt-30">
                      <h2 className="section-heading mb-20 fs-18"><span>leatest Item</span></h2>
                      <div className="tx-widget__product-slide tx-arrow">
                        <div className="tx-widget__product-single" >
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_117.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">SAMSUNG Galaxy Tab A7 Lite 8.7″ 32GB Android</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_118.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">Amazon Basics 2 Slice, Extra-Wide Slot</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_119.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">SMORFIT Smart Watch for Men/Women, Fitness</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                          <div className="tx-widget__product-item style-2 tx-product ul_li">
                            <div className="thumb">
                              <a href="shop-single.html"><img src="/img/product/img_120.png" alt="" /></a>
                            </div>
                            <div className="content">
                              <h3><a href="shop-single.html">Home Security Camera, Baby Camera,1080P</a></h3>
                              <h4 className="product__price"><span className="new">$30.52</span><span className="old">$28.52</span></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 mt-30">
                <div className="add-banner__wrap ml-none-70">
                  <div className="add-banner add-banner__4 add-banner__h476 br-5 bg_img text-center" style={{backgroundImage: 'url(/img/bg/bg_18.jpg)'}}>
                    <span>Get Save 30% off</span>
                    <h3 className="text-capitalize">Cloud Cam, <br /> Security Camera</h3>
                    <span className="price">$ 18560.99</span>
                    <a className="thm-btn mt-40" href="shop.html">
                      <span className="btn-wrap">
                        <span>Shop Now</span>
                        <span>Shop Now</span>
                      </span>
                      <i className="far fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- brand start --> */}
        <div className="brand pt-70 pb-90">
          <div className="container mxw_1530">
            <div className="brand__active d-flex">
              <div className="brand__item">
                <a href="#!">
                  <img src="/img/brand/img_01.png" alt="" />
                </a>
              </div>
              <div className="brand__item">
                <a href="#!">
                  <img src="/img/brand/img_02.png" alt="" />
                </a>
              </div>
              <div className="brand__item">
                <a href="#!">
                  <img src="/img/brand/img_03.png" alt="" />
                </a>
              </div>
              <div className="brand__item">
                <a href="#!">
                  <img src="/img/brand/img_04.png" alt="" />
                </a>
              </div>
              <div className="brand__item">
                <a href="#!">
                  <img src="/img/brand/img_05.png" alt="" />
                </a>
              </div>
              <div className="brand__item">
                <a href="#!">
                  <img src="/img/brand/img_06.png" alt="" />
                </a>
              </div>
              <div className="brand__item">
                <a href="#!">
                  <img src="/img/brand/img_03.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- brand end --> */}

      </main>

      {/* <!-- footer start --> */}
      <footer className="footer footer__style-two black-bg">
        <div className="newslater newslater__border pt-30 pb-30">
          <div className="container mxw_1530">
            <div className="newslater__two ul_li">
              <div className="newslater__content">
                <h2 className="title">We are ready to <span>help</span>!</h2>
                <p>For information Consult with our expert members</p>
              </div>
              <form className="newslater__form" action="#!">
                <input placeholder="Enter your Email" type="text" />
                  <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="container mxw_1530">
          <div className="footer__main pt-90 pb-90">
            <div className="row mt-none-40">
              <div className="footer__widget col-lg-3 col-md-6 mt-40">
                <div className="footer__logo mb-20">
                  <a href="index.html"><img src="/img/logo/logo-2.svg" alt="" /></a>
                </div>
                <p>4517 Washington Ave. Manchester, Kentucky 39495 ashington Ave. Manchester,</p>
                <ul className="footer__info mt-30">
                  <li><i className="far fa-map-marker-alt"></i>254 Lillian Blvd, Holbrook</li>
                  <li><i className="fas fa-phone"></i>1-800-654-3210</li>
                </ul>
                <div className="apps-img mt-15 ul_li">
                  <div className="app mt-15">
                    <a href="#!"><img src="/img/icon/google_play.png" alt="" /></a>
                  </div>
                  <div className="app mt-15">
                    <a href="#!"><img src="/img/icon/app_store.png" alt="" /></a>
                  </div>
                </div>
              </div>
              <div className="footer__widget col-lg-3 col-md-6 mt-40">
                <h2 className="title">Find It Fast</h2>
                <ul className="quick-links">
                  <li><a href="#!">Laptops & Computers</a></li>
                  <li><a href="#!">Cameras & Photography</a></li>
                  <li><a href="#!">Smart Phones & Tablets</a></li>
                  <li><a href="#!">Video Games & Consoles</a></li>
                  <li><a href="#!">TV & Audio</a></li>
                  <li><a href="#!">Gadgets</a></li>
                  <li><a href="#!">Waterproof Headphones</a></li>
                </ul>
              </div>

              <div className="footer__widget col-lg-3 col-md-6 mt-40">
                <h2 className="title">Quick Links</h2>
                <ul className="quick-links">
                  <li><a href="#!">Your Account</a></li>
                  <li><a href="#!">Returns & Exchanges</a></li>
                  <li><a href="#!">Return Center</a></li>
                  <li><a href="#!">Purchase Hisotry</a></li>
                  <li><a href="#!">App Download</a></li>
                  <li><a href="#!">Latest News Blog</a></li>
                  <li><a href="#!">Shipping & Delivery</a></li>
                </ul>
              </div>
              <div className="footer__widget col-lg-3 col-md-6 mt-40">
                <h2 className="title">Service us</h2>
                <ul className="category">
                  <li><a href="#!">Support Center</a></li>
                  <li><a href="#!">Term & Conditions</a></li>
                  <li><a href="#!">Shipping</a></li>
                  <li><a href="#!">Privacy Policy</a></li>
                  <li><a href="#!">Help</a></li>
                  <li><a href="#!">Products Return</a></li>
                  <li><a href="#!">FAQS</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom ul_li_center">
            <div className="footer__copyright mt-15">
              &copy; 2022 <a href="#!">Themexriver</a> . All Rights Reserved.
            </div>
            <div className="footer__social mt-15">
              <a href="#!"><i className="fab fa-facebook-f"></i></a>
              <a href="#!"><i className="fab fa-twitter"></i></a>
              <a href="#!"><i className="fab fa-instagram"></i></a>
              <a href="#!"><i className="fab fa-youtube"></i></a>
              <a href="#!"><i className="fab fa-pinterest"></i></a>
            </div>
            <div className="payment_method mt-15">
              <img src="/img/bg/payment_method.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer end --> */}

      {/* <!-- start newsletter-popup-area-section --> */}
      <section className="newsletter-popup-area-section">
        <div className="newsletter-popup-area">
          <div className="newsletter-popup-ineer">
            <button className="btn newsletter-close-btn"><i className="fal fa-times"></i></button>
            <div className="img-holder">
              <img src="/img/bg/newsletter.jpg" alt="" />
            </div>
            <div className="details">
              <h4>Get 45% discount shipped to your inbox</h4>
              <p>Subscribe to the radios eCommerce newsletter to receive timely updates to your favorite products</p>
              <form>
                <div>
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </div>
                <div>
                  <label className="checkbox-holder"> Don't show this popup again!
                    <input type="checkbox" className="show-message" />
                      <span className="checkmark"></span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end newsletter-popup-area-section --> */}


      {/* <!-- start cookies-area --> */}
      {/* <div className="cookies-area">
        <p> This website uses cookies to improve your experience. By using this website you agree to our <a href="#">Data Protection Policy</a>. </p>
        <a href="#" className="read-more">Read more</a>
        <div>
          <button className="cookie-btn">Accept</button>
        </div>
      </div> */}
      {/* <!-- end cookies-area --> */}


    </div>
  </div>
  )
}

export default Index