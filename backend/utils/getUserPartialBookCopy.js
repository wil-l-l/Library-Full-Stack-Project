const getUserPartialBookCopy = (bookDocument) => {
  let userBookCopy = structuredClone(JSON.stringify(bookDocument));
  userBookCopy = JSON.parse(userBookCopy);

  return {
    ...userBookCopy,
    loanedTo: undefined,
    loanCount: undefined,
    __v: undefined,
  };
};

export default getUserPartialBookCopy;
