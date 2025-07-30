import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            JobTracker
          </Link>
          
          <div className="hidden sm:flex space-x-4">
            <NavLink to="/" className="nav-link">
              Dashboard
            </NavLink>
            <NavLink to="/add-job" className="nav-link">
              Add Job
            </NavLink>
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-gray-500 hover:text-gray-700"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="sm:hidden pb-3 space-y-2">
            <NavLink to="/" className="nav-link block">
              Dashboard
            </NavLink>
            <NavLink to="/add-job" className="nav-link block">
              Add Job
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, className, ...props }) => (
  <Link
    to={to}
    className={`${className} px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors`}
    {...props}
  >
    {children}
  </Link>
);

export default Navbar;