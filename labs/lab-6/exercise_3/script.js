var movies = [
    {
        title: 'A Star Is Born',
        length: 136,
        stars: [
            'Lady Gaga', 
            'Bradley Cooper', 
            'Sam Elliott'
        ],
        seen: true
    },
    {
        title: 'The Theory of Everything',
        length: 124,
        stars: [
            'Eddie Redmayne',
            'Felicity Jones' 
        ],
        seen: true
    },
    {
        title: 'Lorem ipsum dolor',
        length: 140,
        stars: [
            'sit amet', 
            'consectetur', 
            'adipisicing elit'
        ],
        seen: true
    }
];

for (movie of movies) {
    var tag = document.createElement("p");
    var node = document.createTextNode(`The movie title is "${movie.title}".`);
    tag.appendChild(node);
    //or tag.textContent = `The movie title is "${movie.title}".`;
    document.body.appendChild(tag);
}