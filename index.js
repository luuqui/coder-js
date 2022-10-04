document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        pintarCards(data)
    } catch (error) {       
    }
}

const pintarCards = (data) => {
    const card = document.querySelector('#card-dinamicas');
    const templateCard = document.querySelector('#template-card').content;
    const fragment = document.createDocumentFragment()

    data.results.forEach(element => {
        const clone = templateCard.cloneNode(true)
        clone.querySelector('h5').textContent = element.name
        clone.querySelector('p').textContent = element.species
        clone.querySelector('img').setAttribute("src", element.image)

        
        fragment.appendChild(clone)
    });

    card.append(fragment)
}