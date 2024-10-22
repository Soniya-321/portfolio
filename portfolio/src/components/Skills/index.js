// src/components/sections/Skills.js
import React from 'react';
import Header  from '../Header';
import './index.css'

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2 className='heading'>Skills</h2>
      <p className='description'>
      Here are some of my skills on which I have been working on for the past 2 years.
      </p>
      <div className='skills-list-container'>
        <div className="skills-list">
          <h4 className='skill-heading'>Frontend</h4>
          <div className='skill-card'>
            <div className='skill-item'>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc
              vMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlP
              lJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSI
              jNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbm
              UiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5
              PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC
              4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt='skill' 
              className='skill-img'/>
              <p className='skill-name'>React</p>
            </div>
            <div className='skill-item'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' alt='skill' 
              className='skill-img'/>
              <p className='skill-name'>Javascript</p>
            </div>
            <div className='skill-item'>
              <img src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' alt='skill' 
              className='skill-img'/>
              <p className='skill-name'>HTML</p>
            </div>
            <div className='skill-item'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' alt='skill' 
              className='skill-img'/>
              <p className='skill-name'>CSS</p>
            </div>
            <div className='skill-item'>
              <img src='https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' alt='skill' 
              className='skill-img'/>
              <p className='skill-name'>Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="skills-list">
          <h4 className='skill-heading'>Backend</h4>
          <div className='skill-card'>
            <div className='skill-item'>
              <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' alt='skill' 
              className='skill-img'/>
              <p className='skill-name'>Python</p>
            </div>
            <div className='skill-item'>
              <img src='https://nodejs.org/static/images/logo.svg' alt='skill' className='skill-img'/>
              <p className='skill-name'>Node Js</p>
            </div>
            <div className='skill-item'>
            <img src='https://res.cloudinary.com/dzsrw1tcr/image/upload/v1729319999/images-removebg-preview_sma2vc.png' alt='skill' className='skill-img'/>
            <p className='skill-name'>Express</p>
            </div>
            <div className='skill-item'>
            <img src='https://res.cloudinary.com/dzsrw1tcr/image/upload/v1729320575/png-transparent-sqlite-logo-thumbnail-tech-companies-removebg-preview_wexbxg.png' alt='skill' className='skill-img'/>
            <p className='skill-name'>SQLite</p>
            </div>
            <div className='skill-item'>
              <img src='https://res.cloudinary.com/dzsrw1tcr/image/upload/v1729319816/java-logo-11609365784e4gmvr3iyr-removebg-preview_huepro.png' alt='skill' className='skill-img'/>
              <p className='skill-name'>Java</p>
            </div>
            </div>
        </div>
        <div className="skills-list">
          <h4 className='skill-heading'>Others</h4>
          <div className='skill-card'>
            <div className='skill-item'>
              <img src='https://res.cloudinary.com/dzsrw1tcr/image/upload/v1729320923/kisspng-github-computer-icons-version-control-source-code-revert-the-revert-and-avoid-conflicts-theodo-5c26e09a6ad100.2107879715460517384375-removebg-preview_spyauf.png' alt='skill' 
              className='skill-img'/>
              <p className='skill-name'>Git</p>
            </div>
            <div className='skill-item'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilngoqnz1P538GzF9NIc8IY8nKXa2zRSLykdnhhClzAi--LhqXFi4mLJzy8cbpefthGE&usqp=CAU' alt='skill' className='skill-img'/>
              <p className='skill-name'>GitHub</p>
            </div>
            <div className='skill-item'>
            <img src='https://res.cloudinary.com/dzsrw1tcr/image/upload/v1729321283/images-removebg-preview_1_tipahb.png' alt='skill' className='skill-img'/>
            <p className='skill-name'>Power BI</p>
            </div>
            <div className='skill-item'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519' alt='skill' className='skill-img'/>
            <p className='skill-name'>VS Code</p>
            </div>
            <div className='skill-item'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEKFbvYz-Unui2k3HBBLMVyoPTLvV2aMM1w&s' alt='skill' className='skill-img'/>
              <p className='skill-name'>C</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
