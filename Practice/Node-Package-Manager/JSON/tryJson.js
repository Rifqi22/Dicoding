const data = {
    'error': false,
    'message': 'success',
    'books': [
      {
        'id': 1,
        'title': 'Laskar Pelangi',
        'author': 'Andrea Hirata'
      },
      {
        'id': 2,
        'title': 'Filosofi Kopi',
        'author': 'Dewi Lestari'
      },
      {
        'id': 3,
        'title': 'Clean Code',
        'author': 'Robert C Martin'
      }
    ]
  };
   
  console.log(`Error? ${data.error}`);
  console.log('Daftar Buku: ');
  data.books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} (${book.author})`);
  });
   
  // Parse
  // Converting from string to JSON
  const data_string =  `{
    "error": false,
    "message": "success",
    "books": [
      {
        "id": 1,
        "title": "Laskar Pelangi",
        "author": "Andrea Hirata"
      },
      {
        "id": 2,
        "title": "Filosofi Kopi",
        "author": "Dewi Lestari"
      },
      {
        "id": 3,
        "title": "Clean Code",
        "author": "Robert C Martin"
      }
    ]
  }`;

  const dataConverted = JSON.parse(data_string);
  console.log(dataConverted);

  // Stringify
  // Convert JSON into String
  const data_json =  {
    "error": false,
    "message": "success",
    "books": [
      {
        "id": 1,
        "title": "Laskar Pelangi",
        "author": "Andrea Hirata"
      },
      {
        "id": 2,
        "title": "Filosofi Kopi",
        "author": "Dewi Lestari"
      },
      {
        "id": 3,
        "title": "Clean Code",
        "author": "Robert C Martin"
      }
    ]
  };

  const dataStringConverted = JSON.stringify(data_json);
  console.log(dataStringConverted);