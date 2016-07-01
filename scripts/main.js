
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myButton = document.querySelector('button');

var myImg = document.querySelector('img');
myImg.onclick = function () {
  var imgSrc = myImg.getAttribute('src');
  if (imgSrc === 'images/dog-face-through-fence.jpg') {
      myImg.setAttribute('src','images/dog-face-through-fence2.jpg');
  } else {
      myImg.setAttribute('src','images/dog-face-through-fence.jpg');
  }
}

myButton.onclick = function() {
  if(!localStorage.getItem('name')) {
    setUsername();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozzila is cool  ' + storedName;
  }
}

function setUsername () {
  var myName = prompt('please enter your name');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Mozilla is cool  ' + myName;
}
