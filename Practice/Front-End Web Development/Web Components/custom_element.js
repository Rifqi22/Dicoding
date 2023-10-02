class ImageFigure extends HTMLElement {

}

customElements.define('image-figure', ImageFigure)
/*
customElements merupakan global variable (object) yang digunakan untuk mendefinisikan custom element 
dan memberitahu bahwa terdapat HTML tag baru. 
Di dalam customElements terdapat method yang bernama define(). 
Di sinilah kita meletakkan tag name baru kemudian diikuti dengan JavaScript class yang menerapkan sifat HTMLElement.

PS:
Dalam penamaan tag untuk custom element, nama tag harus terdiri dari dua kata yang dipisahkan oleh dash (-). 
Jika tidak, pembuatan custom element tidak akan berhasil. 
Hal Ini diperlukan untuk memberi tahu browser perbedaan antara elemen asli HTML dan custom element.
*/

