function Product({ product }) {
  console.info(product);
  return (
    <>
      <h3>
        {product.id}. {product.name}
      </h3>
      <p>Harga: {product.price}</p>
    </>
  );
}

export { Product };
