/*
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

    a <p> with red text that says “Hey I’m red!”

    an <h3> with blue text that says “I’m a blue h3!”

    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// */
// const container = document.querySelector('#container')
// const html = document.querySelector('html')
// html.setAttribute('style','font-family: ibm plex mono')
// // Add a <p> with red text that says “Hey I’m red!”
// const para = document.createElement('p')
// para.setAttribute('style', 'color: red; font-size: 18px; font-family: noto mono')
// para.textContent = 'Hey I\'m red!'
// container.appendChild(para)
// // add an <h3> with blue text that says “I’m a blue h3!”
// const subHeader = document.createElement('h3')
// subHeader.textContent = 'I\'m a blue h3!'
// subHeader.setAttribute('style','color: blue; font-family: jaclynn')
// container.insertBefore(subHeader,para) 

// // div with child elements

// const box = document.createElement('div')
// box.setAttribute('style','border: 1px solid black; background-color: pink;')

// const childHeader = document.createElement('h1')
// childHeader.textContent=`I'm in a div`

// const childPara = document.createElement('p')
// childPara.textContent='ME TOO!'

// container.appendChild(box)

// box.appendChild(childHeader)
// box.appendChild(childPara)

// const btn = document.querySelector('#btn')

// btn.addEventListener('click', function(e){
//   console.log(e.target)
//   e.target.setAttribute('style','background: blue; color: white')
// })

const buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    alert(button.id)
  }
)})