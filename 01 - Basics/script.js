const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
  /*
    1. Get references to all the buttons on the page in an array format.
    2. Loop through all the buttons and add a click event listener to each one.
  
    When any button is pressed, the createParagraph() function will be run.
  */
  
  const buttons = document.querySelectorAll('button');
  
  for (let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }