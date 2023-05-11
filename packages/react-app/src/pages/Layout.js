import React from 'react';
import { Outlet } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Eth from'../images/eth.png';
import BnbChain from'../images/bnbchain.png';
import Arbitrum from'../images/arbitrum.png';
import Wallet from '../api/Metamask';
import Network from '../api/Networks';


const pages = ['Swap'];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Layout() {

  const [openS, setOpenS] = React.useState(false);

  const handleClick = () => {
    setOpenS(true);
  };

  const handleCloseS = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenS(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const options = ['Ethereum','BNB Chain','Arbitrum'];
  const optionsIMG = [Eth,BnbChain,Arbitrum];

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
      <div>
        <div className="container-fluid bg-amweriswap-content1">
          <div className="header-menu">
            <Wallet/>
          </div>
          <div className="row header-content1">
                <div className="content1 col-md-6">
                    <img className="logo" src="image/Logo/Ameriswaplogo.png"/>
                    <h1>All-in-One Decentralized Finance Platform</h1>
                    <h6>Ameriswap is a trustless decentralized cryptocurrency trading platform.</h6>
                </div>
                <div className="content1 col-md-6">
                    <img className="future" src="image/Image/3D/future.png"/>
                </div>
          </div>
        </div>
        <div className="bg-amweriswap-content">
          <div className="bg-amweriswap-section">
            <div className="bg-amweriswap-section-left">
              <div id="overlay">
                <div id="text">COMING SOON</div>          
              </div>                
              <div className="swap-box-3">
                <div className="row">
                    <div className="col-md-6">
                      <img className="coin" src="image/Images/Bitcoin.svg.png"/>
                      <label>Bitcoin</label>
                      <h5>$55,544.95</h5>
                      <span className="green">2.5%</span>
                    </div>
                    <div className="col-md-6">
                      <img className="linegraph" src="image/dummy_linegraph_green.png"/>
                    </div>
                </div>
              </div>
              <div className="swap-box-3">
                <div className="row">
                  <div className="col-md-6">
                    <img className="coin" src="image/Images/eth.png"/>
                    <label>Eth</label>
                    <h5>$55,544.95</h5>
                    <span className="red">2.5%</span>
                  </div>
                  <div className="col-md-6">
                    <img className="linegraph" src="image/dummy_linegraph_red.png"/>
                  </div>
              </div>
              </div>
              <div className="swap-box-3">
                <div className="row">
                    <div className="col-md-6">
                      <img className="coin" src="image/Images/dogecoin.svg"/>
                      <label>Dogecoin</label>
                      <h5>$55,544.95</h5>
                      <span className="green">2.5%</span>
                    </div>
                    <div className="col-md-6">
                      <img className="linegraph" src="image/dummy_linegraph_green.png"/>
                    </div>
                </div>
              </div>
              <div className="swap-box-3">
                <div className="row">
                    <div className="col-md-6">
                      <img className="coin" src="image/Images/monero.png"/>
                      <label>Monero </label>
                      <h5>$55,544.95</h5>
                      <span className="green">2.5%</span>
                    </div>
                    <div className="col-md-6">
                      <img className="linegraph" src="image/dummy_linegraph_green.png"/>
                    </div>
                </div>
              </div>
              <div className="swap-box-3">
                <div className="row">
                    <div className="col-md-6">
                      <img className="coin" src="image/Images/litecoin.png"/>
                      <label>Litecoin</label>
                      <h5>$55,544.95</h5>
                      <span className="red">2.5%</span>
                    </div>
                    <div className="col-md-6">
                      <img className="linegraph" src="image/dummy_linegraph_red.png"/>
                    </div>
                </div>
              </div>
            </div>
            <div className="bg-amweriswap-section-right">
              <h1>Never-ending liquidity</h1>
              <p>Ameriswap platform instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</p>
              <button className="btn-learn-more" onClick={handleClick}>
                Learn More <img className="lear" src="image/icons/arrow.svg"/>
              </button>
              <Snackbar open={openS} autoHideDuration={6000} onClose={handleCloseS}>
                <Alert onClose={handleCloseS} severity="warning" sx={{ width: '100%' }}>
                  Coming soon...
                </Alert>
              </Snackbar>              
            </div>
          </div>
        </div>
        <div className="bg-amweriswap-content2">
          <Outlet/>
        </div>
        <div className="bg-amweriswap-content4">
          <div className="bg-amweriswap-section4">
            <h1>Swap any amount of tokens at the best rates.</h1>
            <div className="swap-box-4">
              <div className="row">
                <div className="col-md-6">
                    <h5>Transfer</h5>
                    <span>Transfer crypto in multiple blockchain networks.</span>
                </div>
                <div className="col-md-6">
                  <img src="image/Images/buy1.png"/>
                </div>
              </div>
            </div>
            <div className="swap-box-4">
              <div className="row">
                <div className="col-md-6">
                  <h5>Store</h5>
                  <span>Your crypto is protected with the most sophisticated security measures.</span>
                </div>
                <div className="col-md-6">
                  <img src="image/Images/image2.png"/>
                </div>
              </div>
            </div>
            <div className="swap-box-4">
              <div className="row">
                <div className="col-md-6">
                  <h5>Coming Soon! Buy</h5>
                  <span>Buy crypto with your bank card using our partner fiat gateway providers.</span>
                </div>
                <div className="col-md-6">
                  <img className="last_img" src="image/Images/image3.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-amweriswap-content5">
          <div className="bg-amweriswap-section5">
            <span>Your decentralized finance shield Ameriswap uses sophisticated security measures to protect users’ funds in swaps on other DeFi protocols</span>
            <br/>
            <div className="swap-box-5">
              <div id="overlay">
                <div id="text">COMING SOON</div>          
              </div>              
            </div>                
          </div>
        </div>
        <div className="bg-amweriswap-content6">
          <div className="bg-amweriswap-section6">
            <div className="row">
              <div className="col-md-6">
                <div className="left-section">
                  <h1>COMING SOON</h1>
                  <h1>Ameriswap Earn</h1>
                  <h2>A derivative-based product offering liquidity providers attractive APYs.</h2>
                  <p></p>
                  <img className="appstore" src="image/dummy_appstore.png"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-section">
                  <img className="phone" src="image/Images/phone.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-section">
            <div className="footer-content-left">
              <img src="image/Logo/Ameriswaplogo.png"/>
              <p>We Are Ameriswap - a new social crypto community <br/> offering fun and simple investing for everyone</p>
            </div>
            <div className="footer-content-right">
              <h6>Subscribe Now</h6>
              <p>Get the latest news and updates</p>
              <input type="text" placeholder="Email Address" className="form-control" />
              <img className="socmed" src="image/dummy_socmed.png"/>
            </div>
            <div className="copyright">
              <p>Ameriswap -  © 2023 All Rights Reserved</p>
            </div>
          </div>
        </footer>
      
    </div>

  );
}
export default Layout;
