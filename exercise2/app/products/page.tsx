
interface Product {
  id: number;
  title: string;
}

interface ProductsResponse {
  products: Product[];
}

export default async function ProductsPage() {
  // Fetch products from the API
  const res = await fetch("https://dummyjson.com/products");

  // Check for errors
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  // Convert response into JSON
  const data: ProductsResponse = await res.json();

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {data.products.slice(0, 5).map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
