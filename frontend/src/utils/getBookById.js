const getBookById = (id) =>
  JSON.parse(localStorage.getItem("books")).find(({ _id }) => id === _id);

export default getBookById;
