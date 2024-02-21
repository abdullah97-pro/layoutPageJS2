// create h1 tag
var title = document.createElement("h1");
title.textContent = "Heading";

// create p tag
var content = document.createElement("p");
content.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel dolore alias animi architecto. Quia tempore magnam magni soluta et in qui eveniet incidunt, quasi veniam, nesciunt est deserunt nemo.";

// get div container
var container = document.getElementById('container');

// include h1 tag into container
container.appendChild(title);
container.appendChild(content);
