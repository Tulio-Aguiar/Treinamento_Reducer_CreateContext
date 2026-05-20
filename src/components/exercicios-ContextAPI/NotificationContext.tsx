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
