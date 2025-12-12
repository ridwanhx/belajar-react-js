function Todo({ text, isChecked = false, isDeleted = false }) {
  // Implementasi return / mengembalikan null jika memang tidak ingin ada komponen apapun yang dikembalikan
  // dalam kasus kali ini misalnya kita ingin menghilangkan salah satu elemen yang nilai isDeleted nya adalah true
  // if (isDeleted) {
  //   return null;
  // } else {
  //   // Setelah menggunakan Ternary Operator
  //   return (
  //     <ul>
  //       <li>
  //         {/* Implementasi Ternary Operator */}
  //         {isChecked ? <del>{text}</del> : text}
  //       </li>
  //     </ul>
  //   );
  // }

  // sebelum menggunakan Ternary Operator
  if (isDeleted) {
    return null;
  } else if (isChecked) {
    return (
      <ul>
        <li>
          {/* Implementasi AND Condition */}
          {text} {isChecked && "✅"}
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>{text}</li>
      </ul>
    );
  }
}

export { Todo };
