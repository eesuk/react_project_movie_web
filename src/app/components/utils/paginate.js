const paginate = (items, pageNumber, PageSize) => {
  const startIndex = (pageNumber - 1) * PageSize;
  return [...items].splice(startIndex, PageSize);
};

export default paginate;
