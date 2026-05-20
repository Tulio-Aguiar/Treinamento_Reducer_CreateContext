import { useCart } from "./CartContext";

export default function CartCount() {
  const { totalItems } = useCart();
  return (
    <span>
      🛒 {totalItems} {totalItems === 1 ? "item" : "itens"}
    </span>
  );
}
