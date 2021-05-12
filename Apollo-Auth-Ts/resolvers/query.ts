/* eslint-disable no-unused-vars */
export interface User {
  username: string,
  password: string,
  role: string[]

}
export interface Context {
  dataSources: any;
  user: User
}

export const Query = {
  movies: (parent: unknown, args: unknown, { dataSources, user }: Context, info: unknown) => {
    return dataSources.moviesDataSource.getMovies();
  },
  movieById: (parent: unknown, args: unknown, { dataSources, user }: Context, info: unknown) => {
    return dataSources.moviesDataSource.getMoviesById();
  },
};
