// Changing h1 textcontent
let h1 = document.querySelector("h1").textContent = "Fruits & Vegetables Corp";

// Changing href tagname in list item in <ul>
let a = document.querySelector("ul li:last-child a");

// Changing href
a.href = "#vegetables";
// Changing textContent
a.textContent = "Vegetables";
// Changing order on the sections
let main = document.getElementById("main");

//section about
let about = document.getElementById("about");

//chaging order
main.insertBefore(about, main.childNodes[1]);

// Creating <h2> tags for our sections
let section = document.getElementById("main"),
  myContact = document.getElementById("contact"),
  myAbout = document.getElementById("about");

  // Creating <h2> tag for <section id="contact">
  let contactH2 = document.createElement("h2");
  contactH2.textContent = "Contact";


  let aboutH2 = document.createElement("h2");
  aboutH2.textContent = "About";

  // check if one
  if (section.contains(myContact)) {
    myContact.insertBefore(contactH2, myContact.childNodes[0])
  };
  if (section.contains(myAbout)) {
    myAbout.insertBefore(aboutH2, myAbout.childNodes[0])
  };

// wrapping text in <p> tag
let text = document.getElementById("about").childNodes[1],
  p = document.createElement("p");

  p.appendChild(text);
  about.insertBefore(p, about.childNodes[1]);

// replacing td tags for th tags

let thead = document.querySelector("thead tr");

let td1 = thead.getElementsByTagName("td")[0],
    td2 = thead.getElementsByTagName("td")[1];


let th = document.createElement("th"),
    th1 = document.createElement("th");
th.innerHTML = td1.innerHTML;
th1.innerHTML = td2.innerHTML;

td1.parentNode.appendChild(th);
td1.parentNode.removeChild(td1);

td2.parentNode.appendChild(th1);
td2.parentNode.removeChild(td2);

// chaging head title
let title = document.querySelector("title").innerHTML = "Fruits & Vegetables Corp";


let css = document.createElement("link");

css.rel = "stylesheet";
css.type = "text/css";
css.href = "main.css";
document.head.appendChild(css);
