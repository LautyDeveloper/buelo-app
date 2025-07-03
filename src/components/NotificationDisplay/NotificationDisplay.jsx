// src/components/NotificationDisplay/NotificationDisplay.jsx
import React, { useEffect } from 'react';
import { useNotification } from '../../context/NotificationContext';
import './NotificationDisplay.css';

const NOTIFICATION_TIMEOUT = 5000; // 5 seconds

export default function NotificationDisplay() {
  const { notifications, removeNotification } = useNotification();

  if (!notifications.length) {
    return null;
  }

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onDismiss={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
}

function NotificationItem({ notification, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, NOTIFICATION_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [notification, onDismiss]);

  const typeClass = `notification-item--${notification.type || 'info'}`;

  return (
    <div className={`notification-item ${typeClass}`}>
      <p>{notification.message}</p>
      <button onClick={onDismiss} className="notification-dismiss-btn">
        &times;
      </button>
    </div>
  );
}
