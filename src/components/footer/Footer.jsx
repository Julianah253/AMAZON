import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer">
                <center> <a href="">Back to top</a> </center>
            </div>
            <div className="main__footer">
                <div className="main">
                    <div className="get">
                        <h4> Get to Know Us </h4>
                        <div className="a1">
                            <a href=""> Careers </a>
                            <a href=""> Blog </a>
                            <a href=""> About Amazon </a>
                            <a href=""> Investor Relations </a>
                            <a href=""> Amazon Devices </a>
                            <a href=""> Amazon Science </a>
                        </div>
                    </div>
                    <div className="make__money">
                        <h4> Make Money with Us </h4>
                        <br/>
                        <div className="a2">
                            <a href=""> Sell products on Amazon </a>
                            <a href=""> Sell on Amazon Business </a>
                            <a href=""> Sell apps on Amazon </a>
                            <a href=""> Become an Affiliate </a>
                            <a href=""> Advertise Your products </a>
                            <a href=""> Self-Publish with Us </a>
                            <a href=""> Host an Amazon Hub </a>
                            <a href=""> <span>›</span> See More Make Money <br/>with Us  </a>
                        </div>
                    </div>
                    <div className="amazon__payment">
                        <h4> Amazon Payment Products </h4>
                        <div className="a3">
                            <a href=""> Amazon Business Card </a>
                            <a href=""> Shop with Points </a>
                            <a href=""> Reload Your Balance </a>
                            <a href=""> Amazon Currency Converter </a>
                        </div>
                    </div>
                    <div className="help">
                       <h4> Let Us Help You </h4>
                       <div className="a4">
                            <a href=""> Amazon and COVID-<br/>19 </a>
                            <a href=""> Your Account </a>
                            <a href=""> Your Orders </a>
                            <a href=""> Shipping Rates & <br/>Policies </a>
                            <a href=""> Returns &<br/> Replacements </a>
                            <a href=""> Manage Your<br/> Content and Devices </a>
                            <a href=""> Amazon Assistant </a>
                            <a href=""> Help </a>
                       </div>
                    </div>
                </div>
            </div>

        <div className="image">
            <div className="div1">
                <a href="#"><img src='./amazon.png'/></a>
            </div>
            <div className="div2">
                <div className="select1">
                    <div className="world__icon">
                        <i class="fa-solid fa-globe" style={{color:"#999"}}></i><span style={{color:"#999", fontSize:"15px", fontWeight:"500"}}> English </span>
                    </div>
                    <div className="angle__icon">
                        <i class="fa-solid fa-angle-up"  style={{color:"#999"}}></i>
                        <i class="fa-solid fa-angle-down"  style={{color:"#999"}}></i>
                    </div>
                </div>
                <div className="select2">
                    <p style={{color:"#999", fontSize:"15px", fontWeight:"500"}}> $  USD - U.S. Dollar </p>
                </div>
                <div className="select3">
                    <img src="data:image/png;base64,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"/>
                    <p> United States </p>
                </div>
            </div>
        </div>

        <div className="last__footer">
            <table class="navFooterMoreOnAmazon" cellspacing="0" summary="More on Amazon">
                <tbody>
                    <tr>
                        <td class="navFooterDescItem"><a href="https://music.amazon.com?ref=dm_aff_amz_com" class="nav_a">Amazon Music<br/><span class="navFooterDescText">Stream millions<br/>of songs</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://advertising.amazon.com/?ref=footer_advtsing_amzn_com" class="nav_a">Amazon Advertising<br/><span class="navFooterDescText">Find, attract, and<br/>engage customers</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.6pm.com" class="nav_a">6pm<br/><span class="navFooterDescText">Score deals<br/>on fashion brands</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.abebooks.com" class="nav_a">AbeBooks<br/><span class="navFooterDescText">Books, art<br/>&amp; collectibles</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.acx.com/" class="nav_a">ACX <br/><span class="navFooterDescText">Audiobook Publishing<br/>Made Easy</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://sell.amazon.com/?ld=AZUSSOA-footer-aff&amp;ref_=footer_sell" class="nav_a">Sell on Amazon<br/><span class="navFooterDescText">Start a Selling <br/>Account</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="/business?ref_=footer_retail_b2b" class="nav_a">Amazon Business<br/><span class="navFooterDescText">Everything For<br/>Your Business</span></a></td>
                    </tr>
                        <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td class="navFooterDescItem"><a href="/gp/browse.html?node=230659011&amp;ref_=footer_amazonglobal" class="nav_a">AmazonGlobal<br/><span class="navFooterDescText">Ship Orders<br/>Internationally</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="/services?ref_=footer_services" class="nav_a">Home Services<br/><span class="navFooterDescText">Experienced Pros<br/>Happiness Guarantee</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://ignite.amazon.com/?ref=amazon_footer_ignite" class="nav_a">Amazon Ignite<br/><span class="navFooterDescText">Sell your original<br/>Digital Educational<br/>Resources</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=amazonfooter" class="nav_a">Amazon Web Services<br/><span class="navFooterDescText">Scalable Cloud<br/>Computing Services</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.audible.com" class="nav_a">Audible<br/><span class="navFooterDescText">Listen to Books &amp; Original<br/>Audio Performances</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.bookdepository.com" class="nav_a">Book Depository<br/><span class="navFooterDescText">Books With Free<br/>Delivery Worldwide</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.boxofficemojo.com/?ref_=amzn_nav_ftr" class="nav_a">Box Office Mojo<br/><span class="navFooterDescText">Find Movie<br/>Box Office Data 🔍</span></a></td>
                    </tr>
                        <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td class="navFooterDescItem"><a href="https://www.comixology.com" class="nav_a">ComiXology<br/><span class="navFooterDescText">Thousands of<br/>Digital Comics</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.dpreview.com" class="nav_a">DPReview<br/><span class="navFooterDescText">Digital<br/>Photography</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.fabric.com" class="nav_a">Fabric<br/><span class="navFooterDescText">Sewing, Quilting<br/>&amp; Knitting</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.goodreads.com" class="nav_a">Goodreads<br/><span class="navFooterDescText">Book reviews<br/>&amp; recommendations</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.imdb.com" class="nav_a">IMDb<br/><span class="navFooterDescText">Movies, TV<br/>&amp; Celebrities</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://pro.imdb.com?ref_=amzn_nav_ftr" class="nav_a">IMDbPro<br/><span class="navFooterDescText">Get Info Entertainment<br/>Professionals Need</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://kdp.amazon.com" class="nav_a">Kindle Direct Publishing<br/><span class="navFooterDescText">Indie Digital &amp; Print Publishing<br/>Made Easy</span></a></td>
                    </tr>
                        <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td class="navFooterDescItem"><a href="https://videodirect.amazon.com/home/landing" class="nav_a">Prime Video Direct<br/><span class="navFooterDescText">Video Distribution<br/>Made Easy</span></a></td><td class="navFooterDescSpacer"  style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.shopbop.com" class="nav_a">Shopbop<br/><span class="navFooterDescText">Designer<br/>Fashion Brands</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.woot.com/" class="nav_a">Woot!<br/><span class="navFooterDescText">Deals and <br/>Shenanigans</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.zappos.com" class="nav_a">Zappos<br/><span class="navFooterDescText">Shoes &amp;<br/>Clothing</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://ring.com" class="nav_a">Ring<br/><span class="navFooterDescText">Smart Home<br/>Security Systems</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://eero.com/" class="nav_a">eero WiFi<br/><span class="navFooterDescText">Stream 4K Video<br/>in Every Room</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://blinkforhome.com/?ref=nav_footer" class="nav_a">Blink<br/><span class="navFooterDescText">Smart Security<br/>for Every Home</span></a></td>
                    </tr>
                        <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td class="navFooterDescItem">&nbsp;</td>
                        <td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem">&nbsp;</td>
                        <td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://shop.ring.com/pages/neighbors-app" class="nav_a">Neighbors App <br/><span class="navFooterDescText"> Real-Time Crime<br/>&amp; Safety Alerts</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="/gp/browse.html?node=14498690011&amp;ref_=amzn_nav_ftr_swa" class="nav_a">Amazon Subscription Boxes<br/><span class="navFooterDescText">Top subscription boxes – <br/>right to your door</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem"><a href="https://www.pillpack.com" class="nav_a">PillPack<br/><span class="navFooterDescText">Pharmacy Simplified</span></a></td><td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem">&nbsp;</td>
                        <td class="navFooterDescSpacer" style={{width: "3%"}}></td>
                        <td class="navFooterDescItem">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <div class="navFooterLine navFooterLinkLine navFooterPadItemLine navFooterCopyright">
                 <ul><li class="nav_first"><a href="/gp/help/customer/display.html?nodeId=508088&amp;ref_=footer_cou" class="nav_a">Conditions of Use</a></li><li><a href="/gp/help/customer/display.html?nodeId=468496&amp;ref_=footer_privacy" class="nav_a">Privacy Notice</a></li><li class="nav_last"><a href="/privacyprefs?ref_=footer_iba" class="nav_a">Your Ads Privacy Choices</a></li></ul><span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer