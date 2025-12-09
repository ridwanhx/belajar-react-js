// inisiasi Component yang menerima parameternya adalah props dengan nama children
function Container({ children }) {
    return (
    // penulisan className tidak wajib (opsional)
    <div className="container" style={{ padding:"25px", borderRadius:"12px", boxShadow:"0 4px 8px rgba(0,0,0,0.2)" }}>
      <h1>Hello, World!</h1>
      {/* konten daripada children akan ditampilkan disini */}
      {children}
            <footer>&copy; Belajar React Dasar - 2025 <br /></footer>
    </div>
  );
}

export { Container };
