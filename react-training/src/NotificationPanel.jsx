import { useState } from 'react';

const NotificationPanel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="notification-panel">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? 'Hide Panel' : 'Show Panel'}
      </button>
      {isVisible && (
        <div className="panel-content">
          <p>You have 3 new messages</p>
          <button onClick={() => setIsMuted((prev) => !prev)}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
          <span>
            {isMuted ? '🔕 Notifications muted' : '🔔 Notifications on'}
          </span>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
