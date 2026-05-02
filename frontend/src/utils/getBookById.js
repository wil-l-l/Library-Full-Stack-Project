const getBookById = (id, books) => books.find(({ _id }) => id === _id);

export default getBookById;
