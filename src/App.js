import React, { useState } from 'react';
import Header from './components/Header';
import ModulesDropdown from './components/ModulesDropdown';
import ExperienceDropdown from './components/ExperienceDropdown';
import ContactUsPage from './components/ContactUsPage';
import EmployeeLogin from './components/EmployeeLogin';
import AdminLogin from './components/AdminLogin';
import ManagerLogin from './components/ManagerLogin';
import IntroductionModules from './components/IntroductionModules';
import Login from './components/Login';


function App() {
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'contactUs', 'login'
  const [userType, setUserType] = useState(''); // Tracks 'employee', 'admin', 'manager'
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in

  // Toggle Modules Dropdown
  const toggleModules = () => {
    setIsModulesOpen(!isModulesOpen);
    setIsExperienceOpen(false);
  };

  // Toggle Experience Dropdown
  const toggleExperience = () => {
    setIsExperienceOpen(!isExperienceOpen);
    setIsModulesOpen(false);
  };

  // Navigation between pages
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsModulesOpen(false);
    setIsExperienceOpen(false);
  };

  // Handle Sign In and set user type
  const handleSignIn = (type) => {
    setUserType(type);
    setCurrentPage('Login');
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('');
    setCurrentPage('home');
  };

  return (
    <div>
      {/* Header component with navigation props */}
      <Header
        onModulesClick={toggleModules}
        onExperienceClick={toggleExperience}
        onContactUsClick={() => navigateTo('contactUs')}
        onClickSignIn={handleSignIn}
      />
      {isModulesOpen && <ModulesDropdown />}
      {isExperienceOpen && <ExperienceDropdown />}

      {currentPage === 'contactUs' && <ContactUsPage />}
      
      {/* Handle Login Pages based on userType */}
      {currentPage === 'Login' && (
        <>
          {userType === 'Login' && <EmployeeLogin onBack={() => navigateTo('home')} />}
        </>
      )}
    </div>
  );
}

export default App;


