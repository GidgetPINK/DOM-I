const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
/*let logo = document.getElementById("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])*/

//navbar

const navBarLinks = document.querySelectorAll('nav > a');
navBarLinks[0].textContent = "Services"
navBarLinks[1].textContent = "Product"
navBarLinks[2].textContent = "Vision"
navBarLinks[3].textContent = "Features"
navBarLinks[4].textContent = "About"
navBarLinks[5].textContent = "Contact"

for(let i=0; i < navBarLinks.length; i += 1){
    navBarLinks[i].style.color = 'green';
};




const newNav = document.createElement('a');
newNav.textContent = "Blog";
document.querySelector('nav').appendChild(newNav).style.color = "green"

const newNavLink = document.createElement('a');
newNavLink.textContent = "Home";
document.querySelector('nav').prepend(newNavLink)
newNavLink.style.color = "green"

  
//images

const logoImg = document.querySelector('#logo-img');
logoImg.src = "img/logo.png"

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png"

const midImg = document.querySelector('#middle-img');
midImg.src = "img/mid-page-accent.jpg"

const title =document.querySelector('h1');
title.innerHTML = "Dom<br> is<br> Awesome"

const btnText = document.querySelector('button');
btnText.textContent = "Get Started"

//top content

const mainText = document.querySelectorAll('.text-content > h4');
mainText[0].textContent = "Features"

const mainPara = document.querySelectorAll('.text-content > p');
mainPara[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const mainText2 = document.querySelectorAll('.text-content > h4');
mainText2[1].textContent = "About"

const mainPara2 = document.querySelectorAll('.text-content > p');
mainPara2[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


//bottom content

const mainText3 = document.querySelectorAll('.text-content > h4');
mainText3[2].textContent = "Services"

const mainPara3 = document.querySelectorAll('.text-content > p');
mainPara3[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const mainText4 = document.querySelectorAll('.text-content > h4');
mainText4[3].textContent = "Product"

const mainPara4 = document.querySelectorAll('.text-content > p');
mainPara4[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const mainText5 = document.querySelectorAll('.text-content > h4');
mainText5[4].textContent = "Vision"

const mainPara5 = document.querySelectorAll('.text-content > p');
mainPara5[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


//contact info

const contactInfo = document.querySelector('.contact > h4');
contactInfo.textContent ="Contact"

const ContactSec1 = document.querySelectorAll('.contact > p');
ContactSec1[0].innerHTML ="123 Way 456 Street<br>Somewhere, USA"

const ContactSec2 = document.querySelectorAll('.contact > p');
ContactSec2[1].textContent ="1 (888) 888-8888"

const ContactSec3 = document.querySelectorAll('.contact > p');
ContactSec3[2].textContent ="sales@greatidea.io"

//footer info

const footerSec = document.querySelector('footer > p');
footerSec.textContent = siteContent.footer.copyright
