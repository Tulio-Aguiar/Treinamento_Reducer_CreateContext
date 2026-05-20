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
      }}
    >
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
          }}
        >
          <span>{n.message}</span>
          <button
            onClick={() => dismiss(n.id)}
            style={{
              background: "none",
              border: "none",
              color: "#8b949e",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
