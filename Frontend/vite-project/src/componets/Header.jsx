// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import "../App.css" // hamburger icons

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold text-blue-600">
//           ✈️ FlightBook
//         </NavLink>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 font-medium">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             Home
//           </NavLink>
        
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             Contact
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             About
//           </NavLink>
//         </nav>

//         {/* CTA Button */}
//         <NavLink
//           to="/login"
//           className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           login
//         </NavLink>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <nav className="md:hidden bg-white border-t shadow-lg flex flex-col space-y-4 py-4 px-6">
//           <NavLink to="/" onClick={() => setMenuOpen(false)}>
//             Home
//           </NavLink>
//           <NavLink to="/flights" onClick={() => setMenuOpen(false)}>
//             Flights
//           </NavLink>
//           <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </NavLink>
//           <NavLink to="/about" onClick={() => setMenuOpen(false)}>
//             About
//           </NavLink>
//           <NavLink
//             to="/flights"
//             onClick={() => setMenuOpen(false)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
//           >
//             Book Now
//           </NavLink>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;






import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";
import "../App.css"; // hamburger icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Login status check (cookie ke basis par)
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/checkToken", {
          withCredentials: true, // cookie bhejega
        });
        if (res.data.success) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/user/logout", {}, { withCredentials: true });
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          ✈️ FlightBook
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            About
          </NavLink>
        </nav>

        {/* CTA Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hidden md:inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </NavLink>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t shadow-lg flex flex-col space-y-4 py-4 px-6">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/flights" onClick={() => setMenuOpen(false)}>
            Flights
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Login
            </NavLink>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
