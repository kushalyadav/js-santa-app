import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ErrorPage Component', () => {
  test('renders error message when provided', () => {
    const errorMessage = 'An error occurred.';
    
    render(
      <MemoryRouter initialEntries={['/error']} initialIndex={0}>
        <ErrorPage />
      </MemoryRouter>,
      {
        initialState: {
          state: {
            errorMessage,
          },
        },
      }
    );

    expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('renders default error message when no message provided', () => {
    render(
      <MemoryRouter initialEntries={['/error']} initialIndex={0}>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
    expect(screen.getByText(/An error occurred/i)).toBeInTheDocument();
  });

  test('clicking on "Go To Home" button navigates to home page', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <MemoryRouter initialEntries={['/error']} initialIndex={0}>
        <ErrorPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /Go To Home/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
