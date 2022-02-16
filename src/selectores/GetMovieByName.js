import results from "../data/data";

const GetMovieByName =  (name) => {

  name = name.toLocaleLowerCase();

  return results.results.filter(
    (movie) => movie.name.toLocaleLowerCase().includes(name)
    

  );
};

export default GetMovieByName;
