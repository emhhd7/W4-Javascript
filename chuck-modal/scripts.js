"use strict"

function toggleModal() {
    const overlay = document.querySelector('#overlay')
    overlay.classList.toggle('visible')
}

const closeModalButton = document.querySelector('#closeModal')

closeModalButton.addEventListener('click', function () {
    toggleModal()
})

// Continue to work on not putting everything in Global scope
// Fetch Quote from Chuck Norris [Fulfilled, Rejected]
// Put inside Modal Paragraph Window

function buildQuote(theQuote) {
    // 1. Select the #modal element
    // 2. Select the paragraph element from the #modal
    // 3. Change the innerText of the paragraph to be the quote
    const modalElement = document.querySelector('#modal p')
    modalElement.innerText = theQuote;
    toggleModal()

}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            buildQuote(data.value)
        })
        .catch(function (error) {
            console.error("ERROR: ", error)
            return error
        })

    document.addEventListener('keydown', function (event) {
        console.log('The key was prassed: ', event.key)
        if (event.key === 'Escape') {
            toggleModal()
        }
    })
})