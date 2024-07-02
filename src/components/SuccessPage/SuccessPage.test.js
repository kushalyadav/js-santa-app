import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SuccessPage from './SuccessPage';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('SuccessPage Component', () => {

  test('renders successpage on routing', () => {
    render(
      <MemoryRouter initialEntries={['/success']} initialIndex={0}>
        <SuccessPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Success!')).toBeInTheDocument();
  });

  test('clicking on "Go To Home" button navigates to home page', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <MemoryRouter initialEntries={['/success']} initialIndex={0}>
        <SuccessPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /Go To Home/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  
});
