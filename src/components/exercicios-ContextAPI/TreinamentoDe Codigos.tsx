import { createContext, useContext, useState, useCallback } from "react";
import NotificationContainer from "./NotificationContainer";

export type NotificationType = "Sucess" | "Error" | "Info";

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration: number;
  groupId?: string;
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

export default function NotificationsProvider({
  children,
}: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const dismiss = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const notify = useCallback(
    (
      message: string,
      type: NotificationType = "Info",
      duration = 3000,
      groupId?: string,
    ) => {
      if (groupId) {
        setNotifications((prev) => {
          const existing = prev.find((n) => n.groupId === groupId);
          if (existing) {
            return prev.map((n) =>
              n.groupId === groupId ? { ...n, message } : n,
            );
          }
          const id = crypto.randomUUID();
          setTimeout(() => dismiss(id), duration);
          return [...prev, { id, message, type, duration, groupId }];
        });
      } else {
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
      <NotificationContainer />
      {children}
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
