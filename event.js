// select two eyes pupil
let pupil = document.getElementsByClassName('pupil');
let pupilsarr = Array.from(pupil); //create pupil array

// position for cursor movement
let pupilstart = -50;

// making range of (eye - pupil) (100px - 40px)
let pupilrange = 60;

// Xposition
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

// Yposition
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

// mouse movement range in width and height
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const cursor = (e) => {

  // cursor position on X direction 0 to max width
  currentXPosition = e.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  // cursor position on Y direction 0 to max height
  currentYPosition = e.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  // calculate the range of the screen and movement positions
  let pupilXCurrentPosition = pupilstart + (fracXValue * pupilrange);
  let pupilYCurrentPosition = pupilstart + (fracYValue * pupilrange);

  // continuously executing the for each loop to track each cursor movement
  pupilsarr.forEach((curPupils) => {

    curPupils.style.transform = `translate(${pupilXCurrentPosition}px , ${pupilYCurrentPosition}px)`;

  })

}

const resize = (e) => {
  // this function use for every screen's height and width measure 
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;

  mouseXRange = mouseXEndPoint - mouseXStartPoint;
  
}

window.addEventListener('mousemove', cursor);
window.addEventListener('resze', resize);