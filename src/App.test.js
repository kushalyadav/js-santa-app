import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from './App';
import SantaForm from './components/SantaForm/SantaForm';
import SuccessPage from './components/SuccessPage/SuccessPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

test('renders SantaForm component by default', () => {
  render(
   <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <SantaForm />
  </MemoryRouter>
  );
  expect(screen.getByText('A letter to Santa')).toBeInTheDocument();
});

test('renders SuccessPage component when navigated to /success', () => {
  window.history.pushState({}, 'Success page', '/success');
  render(
    <MemoryRouter initialEntries={['/success']} initialIndex={0}>
        <SuccessPage />
    </MemoryRouter>
  );
  expect(screen.getByText('Success!')).toBeInTheDocument();
});

test('renders ErrorPage component when navigated to /error', () => {
  window.history.pushState({}, 'Error page', '/error');
  render(
    <MemoryRouter initialEntries={['/success']} initialIndex={0}>
        <ErrorPage />
    </MemoryRouter>
  );
  expect(screen.getByText('Error Page')).toBeInTheDocument();
});
