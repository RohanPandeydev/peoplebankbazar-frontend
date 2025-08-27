import React, { useState, useEffect, createContext, useContext } from 'react';

// React Icons components
const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

// Alert Context
const AlertContext = createContext();

// Alert Provider Component
export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (alertConfig) => {
    const newAlert = { 
      id: Date.now(), 
      dismissible: true,
      autoClose: false,
      autoCloseDelay: 5000,
      ...alertConfig 
    };
    setAlerts(prev => [...prev, newAlert]);
    return newAlert.id;
  };

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert, clearAllAlerts }}>
      {children}
      <AlertContainer />
    </AlertContext.Provider>
  );
};

// Single Alert Component
const AlertItem = ({ 
  type = 'success', 
  title, 
  message, 
  onClose, 
  dismissible = true,
  autoClose = false,
  autoCloseDelay = 5000,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const alertStyles = {
    success: {
      container: 'bg-white border border-green-200 shadow-lg',
      icon: <CheckCircleIcon />,
      titleColor: 'text-gray-900',
      messageColor: 'text-gray-600'
    },
    error: {
      container: 'bg-white border border-red-200 shadow-lg',
      icon: <AlertCircleIcon />,
      titleColor: 'text-gray-900',
      messageColor: 'text-gray-600'
    },
    warning: {
      container: 'bg-white border border-yellow-200 shadow-lg',
      icon: <AlertTriangleIcon />,
      titleColor: 'text-gray-900',
      messageColor: 'text-gray-600'
    },
    info: {
      container: 'bg-white border border-blue-200 shadow-lg',
      icon: <InfoIcon />,
      titleColor: 'text-gray-900',
      messageColor: 'text-gray-600'
    }
  };

  const currentStyle = alertStyles[type];

  return (
    <div className={`${currentStyle.container} rounded-lg p-4 flex items-start gap-3 transform transition-all duration-300 ease-in-out ${className}`}>
      <div className="flex-shrink-0">
        {currentStyle.icon}
      </div>
      
      <div className="flex-1 min-w-0">
        {title && (
          <h3 className={`text-sm font-medium ${currentStyle.titleColor}`}>
            {title}
          </h3>
        )}
        {message && (
          <p className={`text-sm ${currentStyle.messageColor} ${title ? 'mt-1' : ''}`}>
            {message}
          </p>
        )}
      </div>
      
      {dismissible && (
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Dismiss alert"
        >
          <XIcon />
        </button>
      )}
    </div>
  );
};

// Alert Container Component
const AlertContainer = () => {
  const { alerts, removeAlert } = useContext(AlertContext);

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-md space-y-2">
      {alerts.map(alert => (
        <AlertItem
          key={alert.id}
          type={alert.type}
          title={alert.title}
          message={alert.message}
          dismissible={alert.dismissible}
          autoClose={alert.autoClose}
          autoCloseDelay={alert.autoCloseDelay}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </div>
  );
};

// Hook to use alerts
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

// Functional Alert API
let globalAlertContext = null;

// Initialize global context (call this once in your app)
export const initializeAlerts = (context) => {
  globalAlertContext = context;
};

// Functional Alert Methods
export const Alert = {
  success: ({ title, message, autoClose = true, autoCloseDelay = 3000 }) => {
    if (!globalAlertContext) {
      console.error('Alert system not initialized. Wrap your app with AlertProvider and call initializeAlerts.');
      return;
    }
    return globalAlertContext.addAlert({
      type: 'success',
      title,
      message,
      autoClose,
      autoCloseDelay
    });
  },

  error: ({ title, message, autoClose = false }) => {
    if (!globalAlertContext) {
      console.error('Alert system not initialized. Wrap your app with AlertProvider and call initializeAlerts.');
      return;
    }
    return globalAlertContext.addAlert({
      type: 'error',
      title,
      message,
      autoClose
    });
  },

  warning: ({ title, message, autoClose = false }) => {
    if (!globalAlertContext) {
      console.error('Alert system not initialized. Wrap your app with AlertProvider and call initializeAlerts.');
      return;
    }
    return globalAlertContext.addAlert({
      type: 'warning',
      title,
      message,
      autoClose
    });
  },

  info: ({ title, message, autoClose = true, autoCloseDelay = 5000 }) => {
    if (!globalAlertContext) {
      console.error('Alert system not initialized. Wrap your app with AlertProvider and call initializeAlerts.');
      return;
    }
    return globalAlertContext.addAlert({
      type: 'info',
      title,
      message,
      autoClose,
      autoCloseDelay
    });
  },

  // Generic method
  show: (config) => {
    if (!globalAlertContext) {
      console.error('Alert system not initialized. Wrap your app with AlertProvider and call initializeAlerts.');
      return;
    }
    return globalAlertContext.addAlert(config);
  },

  // Clear all alerts
  clear: () => {
    if (globalAlertContext) {
      globalAlertContext.clearAllAlerts();
    }
  }
};


