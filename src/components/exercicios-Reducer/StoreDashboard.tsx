import { AppStoreProvider, useAppState, useAppDispatch } from "./StoreContext";
import { PRODUCTS, type Product } from "../../../data/MockData_New";
import "./styles/StoreDashboard.css";

// ─── Dados mockados ───────────────────────────────────────
const MOCK_USER = {
  name: "Túlio Aguiar",
  role: "admin" as const,
  avatar: "TA",
};

// ─── Componente raiz ──────────────────────────────────────
export function StoreDashboard() {
  return (
    <AppStoreProvider>
      <DashboardShell />
    </AppStoreProvider>
  );
}

// ─── Shell da aplicação ───────────────────────────────────
function DashboardShell() {
  const state = useAppState();

  return (
    <div className={`shell ${state.theme}`}>
      <Header />
      <div className="shell__body">
        <Sidebar />
        <main className="shell__main">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────
function Header() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">◈</span>
        <span className="header__name">Aruanda Store</span>
      </div>

      <div className="header__actions">
        {/* Toggle de tema */}
        <button
          className="header__icon-btn"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          aria-label="Alternar tema"
        >
          {state.theme === "dark" ? "☀" : "☽"}
        </button>

        {/* Badge de notificações */}
        <button
          className="header__icon-btn"
          onClick={() => dispatch({ type: "CLEAR_NOTIFICATIONS" })}
          aria-label="Limpar notificações"
        >
          <span className="header__icon">🔔</span>
          {state.notifications > 0 && (
            <span className="header__badge">{state.notifications}</span>
          )}
        </button>

        {/* Badge do carrinho */}
        <button
          className="header__icon-btn"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          aria-label="Ver carrinho"
        >
          <span className="header__icon">◫</span>
          {state.cartCount > 0 && (
            <span className="header__badge header__badge--cart">
              {state.cartCount}
            </span>
          )}
        </button>

        {/* Sessão */}
        {state.user ? (
          <div className="header__user">
            <span className="header__avatar">{state.user.avatar}</span>
            <button
              className="header__logout"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              Sair
            </button>
          </div>
        ) : (
          <button
            className="header__login"
            onClick={() => dispatch({ type: "LOGIN", payload: MOCK_USER })}
          >
            Entrar
          </button>
        )}
      </div>
    </header>
  );
}

// ─── Sidebar ─────────────────────────────────────────────
function Sidebar() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const NAV = ["Início", "Produtos", "Pedidos", "Clientes", "Relatórios"];

  return (
    <aside className="sidebar">
      {/* Perfil */}
      <div className="sidebar__profile">
        {state.user ? (
          <>
            <span className="sidebar__avatar">{state.user.avatar}</span>
            <div className="sidebar__user-info">
              <span className="sidebar__user-name">{state.user.name}</span>
              <span className="sidebar__user-role">{state.user.role}</span>
            </div>
          </>
        ) : (
          <span className="sidebar__guest">Visitante</span>
        )}
      </div>

      {/* Navegação */}
      <nav className="sidebar__nav">
        {NAV.map((item, i) => (
          <button
            key={item}
            className={`sidebar__nav-item${i === 0 ? " sidebar__nav-item--active" : ""}`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Ação de simulação */}
      <div className="sidebar__footer">
        <button
          className="sidebar__notify-btn"
          onClick={() => dispatch({ type: "ADD_NOTIFICATION" })}
        >
          + Simular notificação
        </button>
      </div>
    </aside>
  );
}

// ─── Grid de produtos ─────────────────────────────────────
function ProductGrid() {
  const dispatch = useAppDispatch();

  return (
    <div className="product-grid">
      <div className="product-grid__header">
        <h1 className="product-grid__title">Produtos</h1>
        <span className="product-grid__count">{PRODUCTS.length} itens</span>
      </div>

      <div className="product-grid__list">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => {
              dispatch({ type: "ADD_TO_CART" });
              dispatch({ type: "ADD_NOTIFICATION" });
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Card de produto ──────────────────────────────────────
type ProductCardProps = {
  product: Product;
  onAdd: () => void;
};

function ProductCard({ product, onAdd }: ProductCardProps) {
  const stockClass =
    product.stock <= 5 ? "product-card__stock--low" : "product-card__stock--ok";

  return (
    <div className="product-card">
      <div className="product-card__category">{product.category}</div>
      <h3 className="product-card__name">{product.name}</h3>
      <div className="product-card__footer">
        <div className="product-card__meta">
          <span className="product-card__price">
            R$ {product.price.toFixed(2)}
          </span>
          <span className={`product-card__stock ${stockClass}`}>
            {product.stock} em estoque
          </span>
        </div>
        <button className="product-card__btn" onClick={onAdd}>
          Adicionar
        </button>
      </div>
    </div>
  );
}
