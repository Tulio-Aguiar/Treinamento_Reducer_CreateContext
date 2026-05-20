import { useCart } from "./CartContext";
import { useNotification } from "./NotificationContext";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface AddToCartButtonProps {
  product: Product;
}
export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem, items } = useCart();
  const { notify } = useNotification();

  return (
    <button onClick={() => {
    addItem(product);
    
    // Calcula a quantidade após o clique
    const current = items.find(i => i.id === product.id);
    const newQty = (current?.quantity ?? 0) + 1;
    
    notify(
      newQty > 1
        ? `${product.name} — ${newQty} unidades no carrinho`
        : `${product.name} adicionado ao carrinho`,
      'success',
      3000,
      `cart-${product.id}`   // ← groupId baseado no id do produto
    );
  }}>
      Adicionar ao Carrinho
    </button>
  );
}
