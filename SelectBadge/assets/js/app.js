const movies = ["The Protector", "Merlin", "The Letter For The King", "The Order"]; // data source
const badgeContainer = document.querySelector('.badges'); // main container 
const badges = document.querySelector('.badges').children // dynamic elements

// Generate UI using movies data source
movies.forEach((movie, index) => {
    badgeContainer.innerHTML += `<span class="badge bg-primary p-2 m-2" role="button" onclick="selectMovie(this)">${movie}</span>`
})


// select method for every elements
const selectMovie = (elem) => {
    for (let badge of badges) {
        badge.className = "badge bg-primary p-2 m-2"
    }
    elem.className = "badge bg-danger p-2 m-2"
}