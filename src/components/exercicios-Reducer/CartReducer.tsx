import { useReducer, useMemo } from "react";
import { PRODUCTS } from "../../../data/mockData";
import styles from "./styles/cartReducer.module.css";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  coupon: string | null;
  discount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "APPLY_COUPON"; payload: string }
  | { type: "CLEAR_CART" };

const COUPONS: Record<string, number> = {
  REACT10: 0.1,
  REACT20: 0.2,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== id) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      };
    }

    case "APPLY_COUPON": {
      const discount = COUPONS[action.payload.toUpperCase()] ?? 0;
      return {
        ...state,
        coupon: discount > 0 ? action.payload.toUpperCase() : null,
        discount,
      };
    }

    case "CLEAR_CART":
      return { items: [], coupon: null, discount: 0 };

    default:
      return state;
  }
}

export function Cart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    coupon: null,
    discount: 0,
  });

  const summary = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const discountAmount = subtotal * state.discount;
    return { subtotal, discountAmount, total: subtotal - discountAmount };
  }, [state.items, state.discount]);

  return (
    <div className={styles.layout}>
      {/* ── Catálogo ── */}
      <section className={styles.catalog}>
        <p className={styles.sectionLabel}>Catálogo</p>
        <h2 className={styles.sectionTitle}>Produtos</h2>

        <ul className={styles.productList}>
          {PRODUCTS.map((product, index) => {
            const inCart = state.items.find((i) => i.id === product.id);
            return (
              <li key={product.id} className={styles.productCard}>
                <span className={styles.productIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.productInfo}>
                  <span className={styles.productName}>{product.name}</span>
                  <span className={styles.productDescription}>
                    {product.description}
                  </span>
                </div>
                <span className={styles.productPrice}>
                  R$ {product.price.toFixed(2)}
                </span>
                <button
                  className={
                    inCart
                      ? `${styles.addButton} ${styles.addButtonActive}`
                      : styles.addButton
                  }
                  onClick={() =>
                    dispatch({
                      type: "ADD_ITEM",
                      payload: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                      },
                    })
                  }
                >
                  {inCart ? `+1 (${inCart.quantity})` : "Adicionar"}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ── Carrinho ── */}
      <section className={styles.cart}>
        <p className={styles.sectionLabel}>Seleção</p>
        <h2 className={styles.sectionTitle}>Carrinho</h2>

        {state.items.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>◻</span>
            <p className={styles.emptyMessage}>Nenhum item selecionado</p>
          </div>
        ) : (
          <ul className={styles.itemList}>
            {state.items.map((item) => (
              <li key={item.id} className={styles.itemRow}>
                <span className={styles.itemName}>{item.name}</span>
                <div className={styles.quantityWrapper}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity - 1 },
                      })
                    }
                  >
                    −
                  </button>
                  <input
                    className={styles.quantityInput}
                    type="number"
                    value={item.quantity}
                    min={0}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: {
                          id: item.id,
                          quantity: Number(e.target.value),
                        },
                      })
                    }
                  />
                  <button
                    className={styles.qtyBtn}
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity + 1 },
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <span className={styles.itemTotal}>
                  R$ {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className={styles.removeButton}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                  aria-label={`Remover ${item.name}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.couponRow}>
          <span className={styles.couponIcon}>⬡</span>
          <input
            className={styles.couponInput}
            type="text"
            placeholder="Código do cupom — Enter para aplicar"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch({
                  type: "APPLY_COUPON",
                  payload: (e.target as HTMLInputElement).value,
                });
              }
            }}
          />
          {state.coupon && (
            <span className={styles.couponBadge}>{state.coupon} ✓</span>
          )}
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>R$ {summary.subtotal.toFixed(2)}</span>
          </div>
          {state.discount > 0 && (
            <div className={`${styles.summaryRow} ${styles.discountRow}`}>
              <span>Desconto {state.discount * 100}%</span>
              <span>− R$ {summary.discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalValue}>
              R$ {summary.total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.checkoutButton}
            disabled={state.items.length === 0}
          >
            Finalizar pedido
          </button>
          <button
            className={styles.clearButton}
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            disabled={state.items.length === 0}
          >
            Limpar carrinho
          </button>
        </div>
      </section>
    </div>
  );
}
