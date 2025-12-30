import { Wish } from "./Wish";

// inisiasi method WishList
function WishList({ wishs, onChangeWish, onDeleteWish }) {
  return (
    <ul>
      {wishs.map((wish) => (
        <li key={wish.id}>
          <Wish
            wish={wish}
            onChangeWish={onChangeWish}
            onDeleteWish={onDeleteWish}
          />
        </li>
      ))}
    </ul>
  );
}

export { WishList };