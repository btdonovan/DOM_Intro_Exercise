console.log("Javascript is alive!");

document.addEventListener('DOMContentLoaded', function () {
  // 1. Change the greeting from "Hello, There!" to "Hello, World!".
  let greeting = document.getElementById('greeting');
  greeting.innerText = "Hello, World!";

  // 2. Set the background color of each `<li>` to `yellow`.
  let listItems = document.getElementsByTagName('li');
  for (let listItem of listItems) {
    listItem.style='background-color:yellow'
  }

  // 3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.
  myImage = document.createElement('img');
  myImage.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  myImage.alt = "an image";
  greeting.append(document.createElement('br'));
  greeting.appendChild(myImage);
  
  // part2: 4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
  let allListItems = document.getElementsByTagName('li');
  
  var clickHandler = function(event) {
    let listItems = document.getElementsByTagName('li')

    for (let item of listItems) {
      item.removeAttribute('class');
    }

    event.target.className = 'selected';


    // 5. Change the image to be the most recently clicked food item.
    let pictureDiv = document.getElementById('food');
    pictureDiv.removeChild(pictureDiv.children[0])

    picture = document.createElement('img')
    picture.src = `./images/${event.target.innerText}.jpeg`;
    picture.alt = event.target.innerText;
    picture.height="60";
    picture.width="60";
    pictureDiv.appendChild(picture);
  }

  for (let item of allListItems) {
    item.addEventListener('click', clickHandler);
  }




  // 4. Create and add a ul element to the end of the body with a class of "todo-items"
  myUnorderedList = document.createElement('ul')
  myUnorderedList.class = "todo-items"
  document.body.appendChild(myUnorderedList)

  // 5. Go through the array `['make coffee','eat donut','change diapers','drive to work']` and create an li element for each item e.g. `<li>make coffee</li>`
  let todoArray = ['make coffee','eat donut','change diapers','drive to work'];
  for (let item of todoArray) {
    let innerText = item;
    item = document.createElement('li');
    item.innerText = innerText;
    // 6. Add each newly created li element to your ul of class "todo-items"
    myUnorderedList.appendChild(item)
  }

  // ## Part Two:

  // Afterwards: 

  // 6. When the gray div is moused over, it's removed from the DOM.
  let grayDiv = document.getElementById('ghosting');
  grayDiv.addEventListener('mouseover', function(event) {
    document.body.removeChild(event.target);
  })

  // 7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
  let orangeDiv = document.getElementById('resize');
  orangeDiv.addEventListener('mouseover', function(event) {
    event.target.style.width = '400px';
  })
  orangeDiv.addEventListener('mouseleave', function(event) {
    event.target.style.width = '200px';
  })
  // 8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.
  let reset = document.getElementById('reset');
  reset.addEventListener('click', function() {
    let essentials = document.getElementsByClassName('selected');
    for (let essential of essentials) {
      essential.removeAttribute('class');
    }
    let food = document.getElementById('food');
    food.removeChild(food.children[0])
    picture = document.createElement('img')
    picture.src = `./images/panic.jpeg`;
    picture.alt = 'panic';
    picture.height="60";
    picture.width="60";
    food.appendChild(picture);

  })
  // 9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
  
  document.body.addEventListener('keydown', function(event) {
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let number of numbers) {
      if (event.key === number) {
        alert("I HATE NUMBERZZZ!")
      }
    }
    last10keys.push(event.key)
    if (last10keys.length > 10) {
      last10keys.shift();
    }
    // BONUS: If someone types the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code), the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
    let konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    if (JSON.stringify(last10keys) === JSON.stringify(konami)) {
      alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!")
    }
  });

var last10keys = [];
});









