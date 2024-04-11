
import './style.css';

import homeContent from './homeContent.js';
import menu from './menu';
import aboutContent from './about.js';


function component() {
    const content = document.querySelector('#content');
  
    const logoButton = document.querySelector('.logo-button');
    const homeButton = document.querySelector('.home-button');
    const menuButton = document.querySelector('.menu-button');
    const aboutButton = document.querySelector('.about-button');
    let renderContent;

    logoButton.addEventListener('click',() => {
      content.innerHTML = "";
    });

    homeButton.addEventListener('click',() => {
      content.innerHTML = "";  
      renderContent = homeContent();
    });
    
    menuButton.addEventListener('click',() => {
      content.innerHTML = "";
      renderContent = menu();
    });

    aboutButton.addEventListener('click',() => {
      content.innerHTML = "";
      renderContent = aboutContent();
    });


    return content;
  }


  document.body.appendChild(component());
