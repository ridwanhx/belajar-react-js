function FormSayHello() {
  return (
    <form>
      <input
        type="text"
        className="form-control rounded me-2"
        autoFocus
        id="form-input"
      />
      <button
        className="btn btn-outline-primary"
        onClick={(e) => {
          // set prevent default
          e.preventDefault();
          // tangkap nilai yang dikirimkan oleh pengguna melalui input
          const name = document.getElementById("form-input").value;

          // ganti teks dengan nilai yang dikirimkan
          document.getElementById("form-text").innerText = "Hello, " + name;
        }}
      >
        Submit
      </button>

      {/* inisiasi element untuk menampilkan teks nya */}
      <h3 id="form-text">Hello, World!</h3>
    </form>
  );
}

export { FormSayHello };
