export function selectBook(book) {
  // selectBook is an acion creator, and returns a action,
  // object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
