import Link from "next/link";
export default function ProductsList() {
  const productId: number = 100;
  return (
    <>
      <h1>ProductsList</h1>
      <h2>
        <a href="http://localhost:3000/products/1">product1</a>
      </h2>
      <h2>product2</h2>
      <h2>product3</h2>
      <h2>
        <Link href={`products/${productId}`}>Product{productId}</Link>
      </h2>
    </>
  );
}
