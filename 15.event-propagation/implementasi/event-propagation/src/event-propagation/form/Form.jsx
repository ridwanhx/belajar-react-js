import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";
import "../EventPropagation.css";

function Form({ textLabel, textButton }) {
  return (
    <form className="mt-4">
      <Label text={textLabel} />
      <Input />
      <Button
        text={textButton}
        onClick={(e) => {
          // Implementasi preventDefault
          // Pada kasus ini, untuk memastikan bahwa preventDefault nya berjalan, kita bisa mengamati dari bagaimana ketika kita memasukan nilai kedalam field
          // jika pada saat tombol ditekan nilai masih tampil didalam field input, maka disitulah preventDefault berjalan
          // sedangkan jika kita tidak memakai preventDefault, secara otomatis nilai nya akan menghilang karena sudah di submit oleh form
          e.preventDefault();
          alert("Tombol submit ditekan");
        }}
      />
    </form>
  );
}

export { Form };
