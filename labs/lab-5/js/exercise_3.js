var favoriteMovie = {
    title: 'A Star Is Born',
    length: 136,
    stars: [
        'Lady Gaga', 
        'Bradley Cooper', 
        'Sam Elliott'
    ]
};

function describeMovie(object) {
    console.log(`"${object.title}" is about ${object.length} minutes in length and is starring ${object.stars}`)

}

describeMovie(favoriteMovie);