// import React, { Component } from 'react';
import './index.css';
import LOGO from "./image/atlassian-logo.svg"
function App () {
  
    
    return (
      <div>
      <nav>
        <div className="logo">
          <img src={LOGO} alt="logo1" />
        </div>
        <ul className="firstul">
          <li>
            <a href="https://www.atlassian.com/software/jira">Products</a>
          </li>
          <li>
            <a href="https://www.atlassian.com/solutions/work-management">
              For Team's
            </a>
          </li>
          <li>
            <a href="https://www.atlassian.com/migration/assess/journey-to-cloud">
              Support
            </a>
          </li>
        </ul>
        <button class="try-free-btn">Try free</button>
        <ul class="secondul">
          <li>Buy Now </li>
          <li>
            <a href="https://start.atlassian.com/">Login</a>
          </li>
        </ul>
      </nav>
      

<img src={require("./image/image1.png")} alt="logo"/>
</div>
    );
  }

  
export default App;