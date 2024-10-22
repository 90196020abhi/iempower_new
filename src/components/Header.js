import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Header.css'; // Make sure to create and update this CSS file
import IntroductionModules from './IntroductionModules';
import OverView from './OverView';
import Possibilities from './Possibilities'; // Import the Possibilities component
import BlogImages from './BlogImages';
import Product from './Product';
import Dashboardpayroll from './Dashboardpayroll';
import ContactUs from './ContactUs';
import Pricing from './Pricing';
import Fotter from './Fotter';
import Login from './Login';




function Header({ onModulesClick, onExperienceClick, onContactUsClick, onClickSignIn }) {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const headerItems = [
    "Payroll Processing",
    "Manager Self Services",
    "Employee Self Service",
    "HR Processes",
    "Leaves And Attendance",
    "Regularisation and Reimbursements"
  ];
// testing
  const handleSignInClick = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  const handleLoginTypeSelect = (type) => {
    setShowLoginOptions(false);
    onClickSignIn(type);
  };

const HeaderList = () => {
    return (
      <div className="ticker-wrap">
        <div className="ticker">
          {[...headerItems, ...headerItems].map((item, index) => (
            <div 
              key={index} 
              className={`ticker-item ${item === "Payroll Processing" ? "with-dot" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page-background">
            <div
        className="landing-page-background relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('topsection.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundPositionY: '16%',
          backgroundPositionX: 'center',
          minHeight: '150vh',
          width: '230vh',
          top: '7694px',
          rotate: '90',
          backdropFilter: 'blur(20px)',
        }}
      >
      <header className="header">
        <div className="header-content">
          <img src="/Dlogo.png" alt="iEmpPower Logo" className="small-image" />
          <nav className="nav ">
            <ul className="nav-list ">
              <li className="nav-item" onClick={onModulesClick}>
                Modules
                <ChevronDown size={16} />
              </li>
              <li className="nav-item" onClick={onExperienceClick}>
                Experience
                <ChevronDown size={16} />
              </li>
              <li className="nav-item flex justify-center items-center gap-1.5 pt-[1.0625rem] pr-[1.0625rem] pb-[1.0625rem] pl-[1.0625rem] text-[#0b0a0a] font-['Poppins'] text-[.8125rem] font-medium leading-[13.999px]">Pricing</li>
              <li className="nav-item flex justify-center items-center gap-1.5 pt-[1.0625rem] pr-[1.0625rem] pb-[1.0625rem] pl-[1.0625rem] text-[#0b0a0a] font-['Poppins'] text-[.8125rem] font-medium leading-[13.999px]">Blogs</li>
              <li className="nav-item flex justify-center items-center gap-1.5 pt-[1.0625rem] pr-[1.0625rem] pb-[1.0625rem] pl-[1.0625rem] text-[#0b0a0a] font-['Poppins'] text-[.8125rem] font-medium leading-[13.999px]" onClick={onContactUsClick}>Contact Us</li>
            </ul>
          </nav>
          <div className="sign-in-container flex justify-end items-start pt-[0.8125rem] pb-[0.8125rem] pl-[2.875rem] pr-[0.6875rem] pl-[2.5625rem] pr-[2.5625rem] h-[2.5625rem] rounded-[0.625rem] bg-[#200544]">
            <button className="sign-in-button flex justify-center items-center pr-[0.1875rem] h-[0.8125rem] /*sign_in bg-[#ece9e6] font-['Poppins'] text-xs font-medium leading-[13.999px]" onClick={handleSignInClick}>
              Sign In
              {showLoginOptions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showLoginOptions && (
              <ul className="login-options">
                <li onClick={() => handleLoginTypeSelect('employee')}>Employee Login</li>
                <li onClick={() => handleLoginTypeSelect('admin')}>Admin Login</li>
                <li onClick={() => handleLoginTypeSelect('manager')}>Manager Login</li>
              </ul>
            )}
          </div>
        </div>
      </header>
      <div className="content">
        <div className="image-second">
          <img src="/logo.png" alt="iEmpPower Logo" className="centered-logo" />
        </div>
        <h1 className="content-header">
          Empowering your workforce, one click at a time.</h1>
        <p className="content-text">
           EMpower your workforce with IEmpPower,the all in one HR solution for modern businesses
        </p>
        <div className="buttons">

          <button className="book-demo">Book a Demo</button>
        </div>
      </div>
      </div>
      <div className="landing-page">
        <div className="dashboard">
          <img 
            src="/Background.png" 
            alt="iEmpPower Dashboard" 
            style={{ width: '1400px', height: 'auto' }} />
        </div>
        <div className="floating-text-container">
          <HeaderList />
      </div>
    </div>
              {/* Add IntroductionModules component here */}
              <div className="introduction-modules-container">
          <IntroductionModules />
        </div>
              {/* OverView section - added after IntroductionModules */}
      <div className="overview-container">
        <OverView />
      </div>
            {/* Add Possibilities component here */}
            <div className="possibilities-container">
        <Possibilities />
      </div>
      <div>
        <BlogImages/>
      </div>
      <div>
        <Pricing/>
      </div>
      <div>
        <Product/>
      </div>
      <div>
        <Dashboardpayroll/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <div>
        <Fotter/>
      </div>
      <div>
        <Login/>
      </div>
    </div>
  );
}

export default Header;  