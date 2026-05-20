import { useCart } from "./CartContext";
import { useNotification } from "./NotificationContext";

interface Product {
  id: string;
  name: string;
  price: number;
  groupId?: string;
}

interface EraseItemProps {
  product: Product;
}
export default function EraseItem({ product }: EraseItemProps) {
  const { eraseItem } = useCart();
  const { notify } = useNotification();
  return (
    <button
      onClick={() => {
        eraseItem(product.id);

        notify(
          `${product.name} removido do carrinho`,
          "info",
          2000,
          `cart-${product.id}`, // mesmo groupId — fecha o ciclo
        );
      }}
    >
      Remover do Carrinho
    </button>
  );
}
