// create h1 tag
var title = document.createElement("h1");
title.textContent = "Heading";

// create p tag
var content = document.createElement("p");
content.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel dolore alias animi architecto. Quia tempore magnam magni soluta et in qui eveniet incidunt, quasi veniam, nesciunt est deserunt nemo.";

// create image
var img = document.createElement("img");
img.src = "https://th.bing.com/th?id=ORMS.d5b50e8b0096a2b49557eb668efac3e8&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0";
img.alt = "New car";

// get div container
var container = document.getElementById('container');

// include h1 tag into container
container.appendChild(title);
container.appendChild(content);
container.appendChild(img);

