// inisiasi function
function HelloWorld() {
    return (
        // inisiasi element
        // element dibawah ini adalah merupakan XML (HTML namun tidak sepenuhnya HTML)
        // yang menjadi pembeda XML dari HTML salah satunya adalah terkait aturan penulisan tag nya, yang dimana pada XML sangat menekankan pasangan (tag pembuka - penutup)
        // contoh, misalnya pada HTML, tag <img> boleh ditulis tanpa tag penutup
        // sedangkan pada XML, tag seperti img harus dituliskan langsung dengan penutupnya, menjadi </img>
        <div>
            <h1>Hello, World!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quis pariatur expedita labore, laboriosam voluptatum error hic perferendis a ut commodi deserunt architecto ex at, aspernatur dignissimos. Aut, porro quisquam?</p>

            {/* pada saat aplikasi dijalankan menggunakan npm run dev, maka yang terjadi adalah hot reload / perubahan yang terjadi akan langsung di render di halaman */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus doloribus illum?</p>
        </div>
    );
}

// export
export default HelloWorld;