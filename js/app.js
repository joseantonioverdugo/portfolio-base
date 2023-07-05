'use strict'

document.addEventListener('DOMContentLoaded', function () {
  let body = document.querySelector('body')
  let cursor = document.getElementById('cursor')

  body.addEventListener('mousemove', function (e) {
    console.clear()
    let clientX = e.clientX
    let clientY = e.clientY
    cursor.style.left = clientX - 40 + 'px'
    cursor.style.top = clientY - 40 + 'px'
  })

  // let aElements = document.getElementsByClassName('a')
  // for (let i = 0; i < aElements.length; i++) {
  //   aElements[i].addEventListener('mouseover', function () {
  //     cursor.classList.add('mini')
  //   })
  //   aElements[i].addEventListener('mouseout', function () {
  //     cursor.classList.remove('mini')
  //   })
  // }
})
