export const searchYts = (genre, sortBy) => {
    return (
        fetch(`https://yts.lt/api/v2/list_movies.json?genre=${genre}&sort_by=${sortBy}&order_by=asc&limit=30`)
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.data.movies) {
                    return jsonResponse.data.movies.map(movie => {
                        return movie;
                    });
                }
            })

    );
}
