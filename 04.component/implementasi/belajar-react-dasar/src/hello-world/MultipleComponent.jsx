// karena pendefinisian tiap component nya pada kasus kali ini dilakukan hanya kepada satu buah elemen saja di masing masing function nya, maka kita bisa menuliskannya tanpa pembungkus (fragment / div)

function HeaderHelloWorld() {
    return (
        <h1>Hello, World!</h1>
    );
}

function ParagraphHelloWorld() {
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum, illum atque veritatis sapiente modi in suscipit sit quaerat itaque minima nam tempore dicta iusto cupiditate similique. Libero, asperiores qui.</p>
    );
}

// karena apa yang kita lakukan di file Component ini adalah melakukan inisiasi untuk beberapa component (multiple), maka perlu diperhatikan bahwa kita mendefinisikan export nya sudah tidak boleh diikuti keyword default lagi.
// karena default sendiri hanya berlaku jika Component yang dikembalikan hanya 1 component saja (seperti yang kita lakukan di pertemuan sebelumnya mengenai membuat hello world)
export {HeaderHelloWorld, ParagraphHelloWorld};