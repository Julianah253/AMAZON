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
                            <a href=""> <span></span> See More Make Money <br/>with Us  </a>
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
        </footer>
    </div>
  )
}

export default Footer