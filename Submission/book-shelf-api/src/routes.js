const {addBooks,
  getAllBooks,
  getAllBooksbyId,
  editBooksbyId,
  deleteBooksbyId,

} = require('./handler');

const routes = [
  {
    method:'POST',
    path: '/books',
    handler:addBooks,
  },
  {
    method:'GET',
    path:'/books',
    handler: getAllBooks,
  },
  {
    method:'GET',
    path:'/books/{id}',
    handler: getAllBooksbyId,
  },
  {
    method:'PUT',
    path:'/books/{id}',
    handler: editBooksbyId,
  },
  {
    method:'DELETE',
    path:'/books/{id}',
    handler: deleteBooksbyId,
  },
];
module.exports = routes;