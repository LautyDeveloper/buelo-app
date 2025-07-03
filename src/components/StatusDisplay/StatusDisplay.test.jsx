// src/components/StatusDisplay/StatusDisplay.test.jsx
import { render, screen } from '@testing-library/react';
import StatusDisplay from './StatusDisplay';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('StatusDisplay Component', () => {
  it('renders loading state correctly with default message', () => {
    render(<StatusDisplay isLoading={true} />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('renders loading state correctly with custom message', () => {
    render(<StatusDisplay isLoading={true} loadingMessage="Please wait" />);
    expect(screen.getByText('Please wait')).toBeInTheDocument();
  });

  it('renders error state correctly with default message', () => {
    render(<StatusDisplay isError={true} />);
    expect(screen.getByText('Error al cargar los datos.')).toBeInTheDocument();
  });

  it('renders error state correctly with custom message and error object', () => {
    const error = { message: 'Network Error' };
    render(<StatusDisplay isError={true} error={error} errorMessage="Failed to fetch" />);
    expect(screen.getByText('Failed to fetch')).toBeInTheDocument();
    expect(screen.getByText('Network Error')).toBeInTheDocument();
  });

  it('renders no active user state with default message', () => {
    render(<StatusDisplay noActiveUser={true} />);
    expect(screen.getByText('No hay persona activa. Por favor, seleccioná una persona mayor.')).toBeInTheDocument();
  });

  it('renders no active user state with custom message', () => {
    render(<StatusDisplay noActiveUser={true} noActiveUserMessage="Please select a user." />);
    expect(screen.getByText('Please select a user.')).toBeInTheDocument();
  });

  it('renders empty data state with default message', () => {
    render(<StatusDisplay emptyCondition={true} />);
    expect(screen.getByText('No hay datos disponibles.')).toBeInTheDocument();
  });

  it('renders empty data state with custom message', () => {
    render(<StatusDisplay emptyCondition={true} emptyDataMessage="No items found." />);
    expect(screen.getByText('No items found.')).toBeInTheDocument();
  });

  it('renders children when no other state is active', () => {
    render(
      <StatusDisplay
        isLoading={false}
        isError={false}
        noActiveUser={false}
        emptyCondition={false}
      >
        <div>Content available</div>
      </StatusDisplay>
    );
    expect(screen.getByText('Content available')).toBeInTheDocument();
  });

  it('renders null if no specific state and no children', () => {
    const { container } = render(
      <StatusDisplay
        isLoading={false}
        isError={false}
        noActiveUser={false}
        emptyCondition={false}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it('prioritizes loading over error', () => {
    render(<StatusDisplay isLoading={true} isError={true} loadingMessage="Still loading" />);
    expect(screen.getByText('Still loading')).toBeInTheDocument();
    expect(screen.queryByText(/Error/)).not.toBeInTheDocument();
  });

  it('prioritizes error over noActiveUser', () => {
    render(<StatusDisplay isError={true} noActiveUser={true} errorMessage="Big Error" />);
    expect(screen.getByText('Big Error')).toBeInTheDocument();
    expect(screen.queryByText(/No hay persona activa/)).not.toBeInTheDocument();
  });

  it('prioritizes noActiveUser over emptyCondition', () => {
    render(<StatusDisplay noActiveUser={true} emptyCondition={true} noActiveUserMessage="Select user first" />);
    expect(screen.getByText('Select user first')).toBeInTheDocument();
    expect(screen.queryByText(/No hay datos disponibles/)).not.toBeInTheDocument();
  });
});
