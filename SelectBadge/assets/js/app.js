const movies = ["The Protector", "Merlin", "The Letter For The King", "The Order"]
const badgeContainer = document.querySelector('.badges')
const badges = document.querySelector('.badges').children


movies.forEach((movie, index) => {
    badgeContainer.innerHTML += `<span class="badge bg-primary p-2 m-2" role="button" onclick="selectMovie(this)">${movie}</span>`
})

const selectMovie = (elem) => {
    for (let badge of badges) {
        badge.className = "badge bg-primary p-2 m-2"
    }
    elem.className = "badge bg-danger p-2 m-2"
}