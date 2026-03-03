import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DashboardPage from '@/app/dashboard/page';

describe('DashboardPage', () => {
  it('renders the overview cards', () => {
    render(<DashboardPage />);

    expect(screen.getByText('Total Monthly Spend')).toBeInTheDocument();
    expect(screen.getByText('Next Charge')).toBeInTheDocument();
    expect(screen.getByText('Estimated Savings')).toBeInTheDocument();
  });

  it('renders the upcoming payments section', () => {
    render(<DashboardPage />);

    expect(screen.getByText('Upcoming Payments')).toBeInTheDocument();
    expect(screen.getByText('Netflix')).toBeInTheDocument();
    expect(screen.getByText('Spotify')).toBeInTheDocument();
    expect(screen.getByText('Adobe CC')).toBeInTheDocument();
  });
});
