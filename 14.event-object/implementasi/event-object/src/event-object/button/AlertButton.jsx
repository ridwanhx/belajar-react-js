import "../EventObject.css";

function AlertButton({ text, message }) {
  function handleClick(e) {
    // Event object ini berisi informasi lengkap tentang kejadian yang terjadi, misalnya: Jenis event (click, keydown, dll.) Posisi mouse saat klik Elemen yang terlibat Status tombol keyboard/mouse
    console.info(e);

    //  elemen DOM yang menjadi sumber event.
    console.info(e.target);
    return alert(message);
  }

  return (
    <button className="btn btn-outline-primary" onClick={handleClick}>
      {text}
    </button>
  );
}

export { AlertButton };
