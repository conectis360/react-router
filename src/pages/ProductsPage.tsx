import { products } from "../data/products";
import { Link } from "react-router-dom";

export function ProductsPage() {
  return (
    <div className="text-center p-5 text-xl">
      <h2 className="text-base text-slate-600">
        Here are some great tools for React
      </h2>
      <ul className="list-none m-0 p-0">
        {products.map((product) => (
          <Link
            to={`${product.id}`}
            className="p-1 text-base text-slate-800
hover:underline"
          >
            {product.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
