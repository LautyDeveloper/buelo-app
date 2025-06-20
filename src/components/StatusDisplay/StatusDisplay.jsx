import React from 'react';
import './StatusDisplay.css';

const StatusDisplay = ({
  isLoading,
  isError,
  error,
  data, // Keep data prop for potential direct checks if needed, though emptyCondition is preferred
  noActiveUser, // New prop
  emptyCondition, // New prop: boolean indicating if data is considered empty
  loadingMessage = "Cargando...", // Default loading message
  errorMessage = "Error al cargar los datos.", // Default error message
  noActiveUserMessage = "No hay persona activa. Por favor, seleccioná una persona mayor.", // Default message
  emptyDataMessage = "No hay datos disponibles.", // Default empty message
  children,
}) => {
  if (isLoading) {
    return <div className="status-display-loading">{loadingMessage}</div>;
  }

  if (isError) {
    return (
      <div className="status-display-error">
        {errorMessage} {error && <p>{error.message}</p>}
      </div>
    );
  }

  if (noActiveUser) {
    return <div className="status-display-no-active-user">{noActiveUserMessage}</div>;
  }

  if (emptyCondition) {
    return <div className="status-display-empty">{emptyDataMessage}</div>;
  }

  // If none of the above, and children are provided, render children
  // This implicitly means data is loaded, there's no error, there's an active user, and data is not empty
  if (children) {
    return <>{children}</>;
  }

  // Fallback if no children provided but also no specific state met (e.g. data is loaded but not considered "empty" and no children to render)
  // This case might need refinement based on usage, but for now, it means success with no specific content to show via children.
  // Or, it could be an oversight if children were expected.
  // For now, let's return null, or a generic success message if that's ever needed.
  return null;
};

export default StatusDisplay;
