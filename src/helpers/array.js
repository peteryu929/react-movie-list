export const sortMovies = (method, list) => {
  const mlist = [...list];
  switch (method) {
    case "title":
      mlist.sort((a, b) => a.title > b.title);
      console.log(mlist.sort((a, b) => a.title.localeCompare(b.title)))
      return mlist;
    case "time":
      mlist.sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date));
      return mlist;
    case "rating":
      mlist.sort((a, b) => +b.vote_average - +a.vote_average);
      return mlist;
    default:
      return mlist;
  }
};
