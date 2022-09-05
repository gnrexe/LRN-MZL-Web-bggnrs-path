const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/bmw-projects.JPG') {
    myImage.setAttribute('src','images/img2.jpg');
  } else {
    myImage.setAttribute('src','images/bmw-projects.JPG');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `This is the first heading, ${myName}`;
  }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `This is the first heading, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }