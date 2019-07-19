// Exercise #1

interface Movie {
    id : number;
    title : string;
    year : number;
    budget : number;
    cast : string[];
    earnings : number;
}

interface MovieQuery {
    limit: number;
    movieTitle: string;
    exclude: number[];
}

const lotr : Movie = {
    id: 1,
    title: "Lord of the Rings",
    year: 2000,
    budget: 1,
    cast: ["so", "many", "people"],
    earnings: 2
};


// Exercise #2
class MovieDatabase {

    private movies : Movie[] = [];

    // [parameter name] : [type of parameter name]
    addMovie(movieToBeAdded : Movie) : void  {
        this.movies.push(movieToBeAdded);
    }

    getMovies() : Movie[] {
        return this.movies;
    }

    // limit
    // movieTitle
    // exclude
    // Exercise #3
    queryMovies(query : MovieQuery) : Movie[] {
        let filteredMovies : Movie[] = [];

        for(let i = 0; i < this.movies.length; i++) {
            if (query.movieTitle === this.movies[i].title && 
                query.exclude.indexOf(this.movies[i].id) < 0) {
                    filteredMovies.push(this.movies[i]);
                }
        }

        return filteredMovies.slice(0, query.limit);
    }
    
    // Exercise #4
    deleteMovie(id : number) : void {
        for (let i : number = 0; i < this.movies.length;i++) {
            if (this.movies[i].id === id) {
                this.movies.splice(i, 1);
                return;
            }
        }
    }
}

const movieDatabase : MovieDatabase = new MovieDatabase();
movieDatabase.addMovie(lotr);

console.log(movieDatabase.getMovies());
console.log(movieDatabase.queryMovies({
    limit: 1,
    exclude: [],
    movieTitle: 'Lord of the Rings'
}))
console.log(movieDatabase.deleteMovie(1));
console.log(movieDatabase.getMovies());