// import navbar from './navbar';
import './App.css';
import React from 'react';
function App() {
  return (
    <>
      {/* NavBar Start*/}
      <nav>
        {/* Adding Logo Image */}
        <img className='nav-image' src='Images/navbar-image.jpg' alt='No Image Found' />
        {/* NavBar List Items */}
        <un className='nav-unordered-list'>
          <li className='nav-list'><a href='#main' className='nav-link'>Home</a></li>
          <li className='nav-list'><a href='#about-us-heading' className='nav-link'>About US</a></li>
          <li className='nav-list'><a href='#sills-heading' className='nav-link'>Skills</a></li>
          <li className='nav-list'><a href='#project-heading' className='nav-link'>Projects</a></li>
          <li className='nav-list'><a href='#footer' className='nav-link'>Contact US</a></li>
        </un>
      </nav>
      {/* NavBar End */}

      {/* Main Part or header part Start*/}
      <main id='main'>
        {/* Basic Info */}
        <div className='main-text-div'>
          <h4 className='main-text-div-h4'>Hey There😀</h4>
          <h1 className='main-text-div-h1'>I am Jayant</h1>
          <h3 className='main-text-div-h3'>Creative Developer & Professor</h3>
          <button className='main-text-div-button'>Resume</button>
        </div>
        {/* Image */}
        <div id='main-Image-Container'>
          <img className='main-image' src='Images/logo-image.jpg' alt='No Image Found' />
        </div>
      </main>
      {/* Main Part or header part End */}

      {/* ---------------------------------------------------- */}

      {/* Center Heading */}
      <center><h1 id='about-us-heading'className='about-us-heading'>About US</h1></center>

      {/* Section About US Start */}
      <section id='about-us-section'>

        {/* About-Us Image */}
        <div className='about-image-div'>
          <img className='about-us-image' src='Images/logo-image.jpg' alt='No Image Found' />
        </div>

        {/* About-Us Container */}
        <div className='about-content-div'>
          <h2>So,Who am I</h2>
          <p>Hey I'm your new developer bestie.My mission is to solve complex problems<br /> and develop
            Applications,Website,etc.My goal is to help you for developement<br /> and teach how to solve
            problems or how to write code.</p>
        </div>
      </section>
      {/* Section About US End */}

      {/* ------------------------------ */}

      <center><h1 id='sills-heading'className='skills-main-heading'>Technical Skills</h1></center>
      {/* Professional Skills Section Start */}
      <section id='skills'>
        <div className='skills-main-div1'>
          {/* Div for ML/DL/NLP */}
          <div className='ml-div'>
            <img className='skills-images' src='Images/machine-learning.png' alt='No Image Found' />
            <div className='div-skills-hidden-data'>
              <h1 className='skills-heading'><b>Machine Learning</b></h1>
              <progress className='skills-progress' value='70' max='100'>70%</progress>
              <label><b>70%</b></label><br />
              <span className='skills-para'>
                <p>ML/DL/NLP is very demanding skills for performing automation,new AI Tools or etc.
                  I learn this in effective way and trained various modals.
                </p>
              </span>
            </div>
          </div>

          {/* Div for Power BI */}
          <div className='power-bi-div'>
            <img className='skills-images' id='power-bi-image' src='Images/power-bi.png' alt='No Image Found' />
            <div className='div-skills-hidden-data'>
              <h1 className='skills-heading'><b>Power BI</b></h1>
              <progress className='skills-progress' value='70' max='100'>70%</progress>
              <label><b>70%</b></label><br />
              <span className='skills-para'>
                <p>Power BI is newly demanding skill.It's used for creating interactive reports with different graphs or functionality.I made lots of reports using Power BI.</p>
              </span>
            </div>
          </div>
          {/* Div for Flutter */}
          <div className='flutter-div'>
            <img className='skills-images' src='Images/flutter.png' alt='No Image Found' />
            <div className='div.skills-hidden-data'>
              <h1 className='skills-heading'><b>Flutter</b></h1>
              <progress className='skills-progress' value='90' max='100'>90%</progress>
              <label><b>90%</b></label><br />
              <span className='skills-para'>
                <p>Flutter is very demanding skills for Application Development because it is used in hybrid level because it's works on cross platforms.
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* Div for React JS */}
        <div className='skills-main-div2'>
          <div className='react-div'>
            <img className='skills-images' src='Images/react.png' alt='No Image Found' />
            <div className='div.skills-hidden-data'>
              <h1 className='skills-heading'><b>React</b></h1>
              <progress className='skills-progress' value='70' max='100'>70%</progress>
              <label><b>70%</b></label><br />
              <span className='skills-para'>
                <p>React Js is very popular framework for making components,hooks,etc in frontend developement.</p>
              </span>
            </div>
          </div>
          {/* Div for Python */}
          <div className='python-div'>
            <img className='skills-images' src='Images/python.png' alt='No Image Found' />
            <div className='div.skills-hidden-data'>
              <h1 className='skills-heading'><b>Python</b></h1>
              <progress className='skills-progress' value='80' max='100'>80%</progress>
              <label><b>80%</b></label><br />
              <span className='skills-para'>
                <p>Python is very demanding skills for GUI/AI/ML/Games,etc.I am also comfortable with Python
                </p>
              </span>
            </div>
          </div>
          {/* Div for HTML/CSS/JS/PHP/MYSQL */}
          <div className='full-stack-div'>
            <img className='skills-images' src='Images/html.png' alt='No Image Found' />
            <div className='div.skills-hidden-data'>
              <h1 className='skills-heading'><b>HTML/CSS/JS/PHP/MYSQL</b></h1>
              <progress className='skills-progress' value='85' max='100'>85%</progress>
              <label><b>85%</b></label><br />
              <span className='skills-para'>
                <p> HTML/CSS/JS/PHP/MYSQL is a combination of full stack Web-Development.I made lots of websites using these with database Connectivity.
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* Skills Main Div End */}
        {/* </div> */}
      </section>
      {/* Professional Skills Section End */}


      <center><h1 id='project-heading'className='projects-main-heading'>Projects</h1></center>
      {/* Project Section Start */}
      <section id='projects'>
        <div className='projects-main-div1'>
          {/* Div for Coding Application */}
          <div className='ml-div'>
            <img className='projects-images' src='Images/projectapplication.png' alt='No Image Found' />
            <div className='div-projects-hidden-data'>
              <h1 className='projects-heading'><b>Programming Application</b></h1>
              <progress className='projects-progress' value='90' max='100'>90%</progress>
              <label><b>Performance:90%</b></label><br />
              <span className='projects-para'>
                <p>Programming Application solve problems for those students have facing problem regarding programming or projects.
                  There are various types of programming,projects or questions are available on this projects.It takes
                  good quality content with video's lecture available on this project.
                </p>
              </span>
            </div>
          </div>

          {/* Div for E-Commerce Website */}
          <div className='power-bi-div'>
            <img className='projects-images' src='Images/projectecommerce.png' alt='No Image Found' />
            <div className='div-projects-hidden-data'>
              <h1 className='projects-heading'><b>E-Commerce Website</b></h1>
              <progress className='projects-progress' value='70' max='100'>70%</progress>
              <label><b>Performance:70%</b></label><br />
              <span className='projects-para'>
                <p>This project saves customers time for purchasing products or available different products
                  and different costs for each level of customers.It's store data into databases as a details of customers.
                </p>
              </span>
            </div>
          </div>
          {/* Div for Car Prediction or Image Processing */}
          <div className='flutter-div'>
            <img className='projects-images' src='Images/machine-learning.png' alt='No Image Found' />
            <div className='div.projects-hidden-data'>
              <h1 className='projects-heading'><b>Car Prediction or Image Progressing</b></h1>
              <progress className='projects-progress' value='75' max='100'>75%</progress>
              <label><b>Performance:75%</b></label><br />
              <span className='projects-para'>
                <p>This project based on machine learning model for predictions like Car Predictions,Image Processing,etc.
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* Div for Power Bi Report */}
        <div className='projects-main-div2'>
          <div className='react-div'>
            <img className='projects-images' id='power-bi-image' src='Images/power-bi.png' alt='No Image Found' />
            <div className='div.projects-hidden-data'>
              <h1 className='projects-heading'><b>Power Bi</b></h1>
              <progress className='projects-progress' value='70' max='100'>70%</progress>
              <label><b>Performance:70%</b></label><br />
              <span className='projects-para'>
                <p>This project based on Power BI.I Made different Power Bi reports with different graphs with data cleaning.</p>
              </span>
            </div>
          </div>
          {/* Div for Language Translator */}
          <div className='python-div'>
            <img className='projects-images' src='Images/language-translator.png' alt='No Image Found' />
            <div className='div.projects-hidden-data'>
              <h1 className='projects-heading'><b>Language Translator</b></h1>
              <progress className='projects-progress' value='85' max='100'>85%</progress>
              <label><b>Performance:85%</b></label><br />
              <span className='projects-para'>
                <p>This project based on language Translator for those people have facing problem for understading different
                  languages.
                </p>
              </span>
            </div>
          </div>
          {/* Div for HTML/CSS/JS/PHP/MYSQL */}
          <div className='full-stack-div'>
            <img className='projects-images' src='Images/networking.png' alt='No Image Found' />
            <div className='div.projects-hidden-data'>
              <h1 className='projects-heading'><b>Redistribution of Networking</b></h1>
              <progress className='projects-progress' value='75' max='100'>75%</progress>
              <label><b>Performance:75%</b></label><br />
              <span className='projects-para'>
                <p>Redistribution of Networking means connect multiple devices to each other.</p>
              </span>
            </div>
          </div>
        </div>
        {/* Skills Main Div End */}
        {/* </div> */}
      </section>
      {/* Project Section End */}

      {/* Footer Start */}
      <section id='footer'>
        <div className='footer-main-div'>
          {/* First Column Div Start */}
          <div class="foot-info">
            <div className='foot-info-icon-and-label'>
            <i class="fa-solid fa-phone-volume"></i>
            <img className='footer-logo-image1'src='Images/phone-logo.png' alt='No Image Found'/>
            <p>Mobile.No:9671414679</p>
            </div>
            <div className='foot-info-icon-and-label'>
            <i class="fa-sharp fa-solid fa-envelope"></i>
            <img className='footer-logo-image1'src='Images/gmail.png'/>
            <p>jayant62644@gmail.com</p>
            </div>
          </div>
          {/* First Column Div End */}

          {/* Second Column Div Start */}
          <div className='foot-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7027.998301102267!2d77.06270129124935!3d28.26804258724117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725984738107!5m2!1sen!2sin" 
          width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* Second Column Div End */}

          {/* Last Column Div Start */}
          <div class="social-media">
            <a href="https://github.com/Jayant211120">
            <img className='footer-logo-image'src='Images/github.png'alt='No Image Found'/>
            </a>
            <a href='https://www.linkedin.com/in/jayant-8a56bb221/'>
            <img className='footer-logo-image'src='Images/linkedin.png'alt='No Image Found'/>
            </a>
            <a href="https://www.instagram.com/ja.yant348/">
            <img className='footer-logo-image'src='Images/instagram.png'alt='No Image Found'/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100037947731589">
            <img className='footer-logo-image'src='Images/facebook.png'alt='No Image Found'/>
            </a>
          </div>
          {/* Last Column Div End */}
        </div>
      </section>
      {/* Footer End */}
    </>
  );
}

export default App;