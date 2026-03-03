import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginPage from '@/app/login/page';

describe('LoginPage', () => {
  it('renders the login form elements', () => {
    render(<LoginPage />);

    expect(screen.getByText('Bienvenido a Relevy')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingresa tu email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingresa tu contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument();
  });

  it('renders alternative login options', () => {
    render(<LoginPage />);

    expect(screen.getByText('O continúa con')).toBeInTheDocument();
    expect(screen.getByText('Google')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
  });
});
