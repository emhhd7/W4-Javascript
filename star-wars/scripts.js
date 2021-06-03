'use strict'

// Empty Array to store data from fetch
let detailedData = {}
const characterQuery = document.querySelector('#characters')
const movieDocument = document.querySelector('#movies')

fetch('https://swapi.dev/api/films/')
    .then(function (response) {
        // Listens for the RESPONSE from the fetch() Promise #1
        return response.json()
    })
    .then(function (data) {
        detailedData = data
        // Listens for the DATA from response.json() Promise #2
        // MAP loops through each movie, return movie title
        const movieList = (data.results.map(function (movie) {
            return movie.title
        }))

        movieList.forEach(function (movieTitle) {
            const movieTitleOption = document.createElement('option')
            movieTitleOption.innerText = movieTitle
            movieDocument.append(movieTitleOption)
        })
    })
    .catch(function (error) {
        // Listens for a REJECTION from a fetch() promise
        console.error('ERROR:', error)
        return error
    })

// Returns BOOLEAN to MATCH TITLE with SELECTION
function clickSelection() {
    const selectedMovie = detailedData.results.filter(function (movie) {
        return movie.title == movieDocument.value
    })

    const openingCrawl = document.querySelector('#openingCrawl')
    openingCrawl.innerText = ""
    const p = document.createElement('p')
    p.innerText = selectedMovie[0].opening_crawl
    openingCrawl.append(p)

// Fetch Character manually
    fetchCharacter(selectedMovie[0].characters[0])
    fetchCharacter(selectedMovie[0].characters[1])
    fetchCharacter(selectedMovie[0].characters[2])
    characterQuery.innerText = ""
}

// Fetch CHARACTER DATA 
function fetchCharacter(url) {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const characterElement = document.createElement('p')
            characterElement.innerText = data.name
            characterQuery.append(characterElement)
        })
        .catch(function (error) {
            console.error('ERROR:', error)
            return error
        })
}

