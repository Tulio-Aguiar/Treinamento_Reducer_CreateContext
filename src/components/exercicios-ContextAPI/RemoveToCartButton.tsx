import { useCart } from "./CartContext";
import { useNotification } from "./NotificationContext";

interface Product {
  id: string;
  name: string;
  price: number;
  groupId?: string;
}
interface RemoveToCartButtonProps {
  product: Product;
}

export default function RemoveToCartItemButton({
  product,
}: RemoveToCartButtonProps) {
  const { removeItem, items } = useCart();
  const { notify } = useNotification();
  return (
    <button
      onClick={() => {
        const current = items.find((i) => i.id === product.id);

        // Se não existe ou já está em 1, o próximo estado é zero
        const newQty = (current?.quantity ?? 1) - 1;

        removeItem(product.id);

        notify(
          newQty > 0
            ? `${product.name} — ${newQty} unidades no carrinho`
            : `${product.name} removido do carrinho`,
          "error",
          3000,
          `cart-${product.id}`, // mesmo groupId do AddToCartButton
        );
      }}
    >
      Zerar Carrinho
    </button>
  );
}
