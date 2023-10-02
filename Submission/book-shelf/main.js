// Fungsi ketika tombol Masukkan Buku ... ditekan.
document.addEventListener("DOMContentLoaded", function () {
  const submitBook = document.getElementById("inputBook");
  submitBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  // Fungsi menambah buku pada tombol Masukkan Buku ...
  function addBook() {
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    const bookIsComplete = document.getElementById(
      "inputBookIsComplete"
    ).checked;
    const generatedId = generateBookId();
    // fungsi untuk membuat object buku dari value input user pada form
    const bookObject = generateBookObject(
      generatedId,
      bookTitle,
      bookAuthor,
      parseInt(bookYear),
      bookIsComplete
    );
    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  // Fungsi untuk mencheck storage
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

// fungsi untuk membuat id pada buku dengan unik
function generateBookId() {
  return +new Date();
}

// fungsi untuk membuat objek buku
function generateBookObject(
  generatedId,
  bookTitle,
  bookAuthor,
  bookYear,
  isCompleted
) {
  return {
    generatedId,
    bookTitle,
    bookAuthor,
    bookYear,
    isCompleted,
  };
}

// Membuat konstanta buku dalam bentuk array
const books = [];
const RENDER_EVENT = "render-book";

// Memberikan fungsi pada custom event RENDER_EVENT
document.addEventListener(RENDER_EVENT, function () {
  const uncompletedBookList = document.getElementById(
    "incompleteBookshelfList"
  );
  uncompletedBookList.innerHTML = ""; // Clear content

  const completedBookList = document.getElementById("completeBookshelfList");
  completedBookList.innerHTML = ""; // Clear content

  for (const bookItem of books) {
    const bookElement = makeBook(bookItem); // book element merupakan hasil fungsi createElement pada makeBook
    if (!bookItem.isCompleted) uncompletedBookList.append(bookElement);
    //Menaruh buku sesuai dengan status isCompletednya (true/false)
    else completedBookList.append(bookElement);
  }
});

// Fungsi untuk membuat element
function makeBook(bookObject) {
  const textTitle = document.createElement("h3");
  textTitle.innerText = bookObject.bookTitle;

  const textAuthor = document.createElement("p");
  textAuthor.innerHTML = "Penulis: " + bookObject.bookAuthor;

  const textYear = document.createElement("p");
  textYear.innerHTML = "Tahun: " + bookObject.bookYear;

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action");

  const articleBook = document.createElement("article"); // Article menjadi parent element
  articleBook.classList.add("book_item");
  articleBook.append(textTitle, textAuthor, textYear, actionContainer); // line ini bermaksud untuk menaruh tag sebagai childnya
  articleBook.setAttribute("id", `book-${bookObject.generatedId}`);

  // Membuat kondisi berdasarkan staus isCompleted dari bookObject
  if (bookObject.isCompleted) {
    const uncompletedButton = document.createElement("button");
    uncompletedButton.classList.add("green");
    uncompletedButton.innerText = "Belum selesai di Baca";

    uncompletedButton.addEventListener("click", function () {
      moveBookFromCompleted(bookObject.generatedId);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("red");
    trashButton.innerText = "Hapus Buku";

    trashButton.addEventListener("click", function () {
      removeBook(bookObject.generatedId);
    });

    actionContainer.append(uncompletedButton, trashButton);
  } else {
    const completedButton = document.createElement("button");
    completedButton.classList.add("green");
    completedButton.innerText = "Selesai di Baca";

    completedButton.addEventListener("click", function () {
      moveBookFromUncompleted(bookObject.generatedId);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("red");
    trashButton.innerText = "Hapus Buku";

    trashButton.addEventListener("click", function () {
      removeBook(bookObject.generatedId);
    });

    actionContainer.append(completedButton, trashButton);
  }
  return articleBook;
}

// Fungsi untuk memindahkan buku dari yang selesai dibaca ke belum dibaca
function moveBookFromCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// fungsi untuk memindahkan buku dari yang belum dibaca ke selesai dibaca
function moveBookFromUncompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// fungsi untuk validasi keberadaan buku
function findBook(bookId) {
  for (const bookItem of books) {
    if (bookItem.generatedId === bookId) {
      return bookItem;
    }
  }
  return null;
}

// fungsi untuk menghapus buku
function removeBook(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].generatedId === bookId) {
      return index;
    }
  }

  return -1;
}

// Fungsi Menyimpan Data ke Storage

const SAVED_EVENT = "saved-book";
const STORAGE_KEY = "BOOK_APPS";

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist() /* boolean */ {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// Fungsi untuk mencari buku melalui Local Storage

// Fungsi akan dijalankan ketika DOMContentLoad selesai,
// dan fungsi akan dijalankan ketika tombol pencarian disubmit
document.addEventListener("DOMContentLoaded", function () {
  const searchBook = document.getElementById("searchBook");
  searchBook.addEventListener("submit", function (event) {
    event.preventDefault();
    displayBookList();
  });

  // Fungsi untuk mencek storage apakah tersedia atau tidak
  function checkForStorage() {
    return typeof Storage !== "undefined";
  }

  // Fungsi untuk mengembalikan data buku dalam bentuk string menggunakan parse
  function getBookList() {
    if (checkForStorage()) {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } else {
      return [];
    }
  }

  // fungsi untuk menyocokkan title buku yang dicari dengan title buku pada storage
  function displayBookList() {
    const bookToSearch = document.getElementById("searchBookTitle").value;
    const bookData = getBookList();
    for (let book of bookData) {
      const bookElement = document.getElementById(`book-${book.generatedId}`);
      const bookTitleLocal = book.bookTitle;

      if (bookToSearch.toLowerCase() !== bookTitleLocal.toLowerCase()) {
        //disini saya mengubah kedua var menjadi lower case supaya huruf besar kecil tidak berpengaruh terhadap hasil
        bookElement.setAttribute("hidden", true);
      }
      if (
        bookToSearch == "" ||
        bookToSearch.toLowerCase() == bookTitleLocal.toLowerCase()
      ) {
        bookElement.removeAttribute("hidden");
      }
    }
  }
});
