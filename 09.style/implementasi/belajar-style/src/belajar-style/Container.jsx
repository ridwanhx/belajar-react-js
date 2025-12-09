function Container({ children }) {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <h3>Diposting 30 menit lalu oleh Muhamad Ridwan</h3>
      {children}
      <footer>&copy; Belajar React Dasar | 2025</footer>
    </div>
  );
}

export { Container };
