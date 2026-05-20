import { createContext, useContext, useState, useMemo } from "react";

interface CartItem {
id: string;
name: string;
price: number;
quantity: number;
}

interface CartContextType {
items: CartItem[];
totalItems: number;
totalPrice: number;
addItem: (item: Omit<CartItem, "quantity">) => void;
removeItem: (id: string) => void;
eraseItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
children: React.ReactNode;
}
export default function CartProvider({ children }: CartProviderProps) {
const [items, setItems] = useState<CartItem[]>([]);

const addItem = (newItem: Omit<CartItem, "quantity">) => {
setItems((prev) => {
const exists = prev.find((i) => i.id === newItem.id);
if (exists) {
return prev.map((i) =>
i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i,
);
}
return [...prev, { ...newItem, quantity: 1 }];
});
};

const eraseItem = (id: string) => {
setItems((prev) =>
prev
.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
.filter((i) => i.quantity > 0),
);
};

const removeItem = (id: string) => {
setItems((prev) => prev.filter((i) => i.id !== id));
};
const totalItems = useMemo(
() => items.reduce((sum, item) => sum + item.quantity, 0),
[items],
);
const totalPrice = useMemo(
() => items.reduce((sum, item) => sum + item.price \* item.quantity, 0),
[items],
);
const value = {
items,
totalItems,
totalPrice,
addItem,
removeItem,
eraseItem,
};
return <CartContext value={value}>{children}</CartContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
const ctx = useContext(CartContext);
if (!ctx) throw new Error("useCart fora do CartProvider");
return ctx;
}

import { useCart } from "./CartContext";

export default function CartCount() {
const { totalItems } = useCart();
return (
<span>
🛒 {totalItems} {totalItems === 1 ? "item" : "itens"}
</span>
);
}

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

import { createContext, useContext, useState, useCallback } from "react";
import NotificationContainer from "./NotificationContainer";

export type NotificationType = "success" | "error" | "info";

interface Notification {
id: string;
message: string;
type: NotificationType;
duration: number;
groupId?: string; // ← adicionar
}

interface NotificationContextType {
notifications: Notification[];
notify: (
message: string,
type?: NotificationType,
duration?: number,
groupId?: string,
) => void;
dismiss: (id: string) => void;
}

interface NotificationProviderProps {
children: React.ReactNode;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: NotificationProviderProps) {
const [notifications, setNotifications] = useState<Notification[]>([]);
const dismiss = useCallback((id: string) => {
setNotifications((prev) => prev.filter((n) => n.id !== id));
}, []);

const notify = useCallback(
(
message: string,
type: NotificationType = "info",
duration = 3000,
groupId?: string,
) => {
if (groupId) {
setNotifications((prev) => {
const existing = prev.find((n) => n.groupId === groupId);

          if (existing) {
            // Atualiza a mensagem do toast existente
            return prev.map((n) =>
              n.groupId === groupId ? { ...n, message } : n,
            );
          }

          // Primeiro clique — cria normalmente
          const id = crypto.randomUUID();
          setTimeout(() => dismiss(id), duration);
          return [...prev, { id, message, type, duration, groupId }];
        });
      } else {
        // Comportamento original sem groupId
        const id = crypto.randomUUID();
        setNotifications((prev) => [...prev, { id, message, type, duration }]);
        setTimeout(() => dismiss(id), duration);
      }
    },
    [dismiss],

);

const value = {
notifications,
notify,
dismiss,
};
return (
<NotificationContext value={value}>
{children}
<NotificationContainer />
</NotificationContext>
);
}
// eslint-disable-next-line react-refresh/only-export-components
export function useNotification() {
const context = useContext(NotificationContext);
if (!context) {
throw new Error(
"useNotification deve ser usado dentro de um NotificationProvider",
);
}
return context;
}

import { useNotification } from "./NotificationContext";
import type { NotificationType } from "./NotificationContext";

const colorMap: Record<NotificationType, string> = {
success: "#34d399",
error: "#f87171",
info: "#61dafb",
};

export default function NotificationContainer() {
const { notifications, dismiss } = useNotification();

return (
<div
style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        zIndex: 9999,
      }} >
{notifications.map((n) => (
<div
key={n.id}
style={{
            background: "#1c2333",
            border: `1px solid ${colorMap[n.type]}`,
            borderLeft: `4px solid ${colorMap[n.type]}`,
            borderRadius: "8px",
            padding: "12px 16px",
            color: "#e6edf3",
            fontSize: "14px",
            minWidth: "280px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }} >
<span>{n.message}</span>
<button
onClick={() => dismiss(n.id)}
style={{
              background: "none",
              border: "none",
              color: "#8b949e",
              cursor: "pointer",
            }} >
✕
</button>
</div>
))}
</div>
);
}
