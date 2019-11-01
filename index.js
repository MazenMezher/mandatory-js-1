// Selecting our only h1 element and changing its textContent
  let h1 = document.querySelector("h1").textContent = "Fruits & Vegetables Corp";

// Pathing my self to our li items and targeting the last child
  let a = document.querySelector("ul li:last-child a");

// Selecting our variable that we named "a" and targeting the href element in it to change its value
  a.href = "#vegetables";
// Selecting our variable that we named "a" and targeting the textContent element in it to change its value
  a.textContent = "Vegetables";
// Creating a variable that will hold our main tag in html and everything in it
  let main = document.getElementById("main");

// Creating a variable "about" to target our about section in html
  let about = document.getElementById("about");

// Taking the about section and putting it position 1 = as the first child in the main section
  main.insertBefore(about, main.childNodes[1]);

// Creating 3 variables that hold our main,contact and about sections in html
  let section = document.getElementById("main"),
  myContact = document.getElementById("contact"),
  myAbout = document.getElementById("about");

// Creating a h2 element in our html with the textContent Contact
  let contactH2 = document.createElement("h2");
  contactH2.textContent = "Contact";

//Creating a h2 element in our html with the textContent About
  let aboutH2 = document.createElement("h2");
  aboutH2.textContent = "About";

// if our section with the id "contact" exists in our section variable = main then we inserts our created h2 = contactH2 0 in "contact"
  if (section.contains(myContact)) {
    myContact.insertBefore(contactH2, myContact.childNodes[0])
  };
// if our section with the id "about" exists in our section variable = main then we inserts our created h2 = aboutH2 in position 0 in "contact"
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

// Creating the css link and appending it to the head of our html
  let css = document.createElement("link");

  css.rel = "stylesheet";
  css.type = "text/css";
  css.href = "main.css";
  document.head.appendChild(css);
