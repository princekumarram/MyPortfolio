// import React from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
// import { Link } from "react-scroll";
// import Projects from "../Projects/Projects";
// import about from "../About/about";
// import login from "../Login/login";


// const navbar = () => {
//   return (



//   <div className="n-wrapper" id="Navbar">

//       {/* left */}
//       <div className="n-left">
//         <div className="n-name">Prince</div>
//         <Toggle />
//       </div>
//       {/* right */}
//       <div className="n-right">
//         <div className="n-list">
//           <ul style={{ listStyleType: "none" }}>
//             <li>
//               <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link activeClass="active" to="Projects" spy={true} smooth={true} onClick={Projects}>
//                 Projects
//               </Link>
//             </li>
            // <li>
            //   <Link  to="services" spy={true} smooth={true}>
            //     Serivces
            //   </Link>
            // </li>
//             <li>
//               <Link activeClass="active" to="about" spy={true} smooth={true} onClick={about}>
//               About
//               </Link>
//             </li>
//             <li>
//               <Link to="Projects" spy={true} smooth={true}>
//                Projects
//               </Link>
//             </li>
//             <li>
//               <Link to="login" spy={true} smooth={true}>
//               Login
//               </Link>
              
//             </li>
//           </ul>
//         </div>
//         <Link to="contact" spy={true} smooth={true}>
//         <button className="button n-button">Contact</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default navbar;




import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleProject = () => {
    navigate("/projects");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Prince</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
          <li>
              {/* <Link activeClass="active" to="Navbar" spy={true} smooth={true}> */}
              <Link to="/" >

                Home
              </Link>
            </li>
            <li>
              <Link  to="services" >
                Serivces
              </Link>
            </li>
            <li>
              <Link to="about"  onClick={handleAbout}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects"onClick={handleProject}>Projects</Link>
            </li>
            <li>
              <Link to="login" onClick={handleLogin}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/contact">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;