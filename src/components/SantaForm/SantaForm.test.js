import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import SantaForm from './SantaForm';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import SendMail from '../../client/SendMail'

// Mock axios calls
jest.mock('axios');

//Mock useNavigate
const mockNavigate = jest.fn();
jest.spyOn(require('react-router'), 'useNavigate').mockReturnValue(mockNavigate);


describe('SantaForm component', () => {
  it('renders form elements correctly', () => {
    render(<SantaForm />, { wrapper: Router });

    expect(screen.getByText('A letter to Santa')).toBeInTheDocument();
    expect(screen.getByText('Ho ho ho, what you want for Christmas?')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('charlie.brown')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Gifts!')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
  });
  
  it('handles user input and button click correctly', async () => {
    render(<SantaForm />, { wrapper: Router });

    const nameInput = screen.getByPlaceholderText('charlie.brown');
    const wishInput = screen.getByPlaceholderText('Gifts!');
    const sendButton = screen.getByRole('button', { name: /Send/i });

    fireEvent.change(nameInput, { target: { value: 'charlie.brown' } });
    fireEvent.change(wishInput, { target: { value: 'Toys' } });

    axios.get.mockResolvedValueOnce({ data: [{ username: 'charlie.brown', uid: 123 }] });

    axios.get.mockResolvedValueOnce({ data: [{ userUid: 123, address: '123 Main St', birthdate: '2020-01-01' }] });

    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.queryByText('Child Not Found')).toBeNull();
      expect(screen.queryByText('Child is more than 10 years old!')).toBeNull();
      expect(mockNavigate).toHaveBeenCalledWith('/success');
    });
  });

  it('handles child not found error correctly', async () => {
    render(<SantaForm />, { wrapper: Router });

    const nameInput = screen.getByPlaceholderText('charlie.brown');
    const wishInput = screen.getByPlaceholderText('Gifts!');
    const sendButton = screen.getByRole('button', { name: /Send/i });

    fireEvent.change(nameInput, { target: { value: 'unknown' } });
    fireEvent.change(wishInput, { target: { value: 'Toys' } });

    axios.get.mockResolvedValueOnce({ data: [{ username: 'charlie.brown', uid: 123 }] });

    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/error', {"state": {"errorMessage": "Child Not Found"}});
    });
  });

  it('handles child older than 10 years error correctly', async () => {
    render(<SantaForm />, { wrapper: Router });

    const nameInput = screen.getByPlaceholderText('charlie.brown');
    const wishInput = screen.getByPlaceholderText('Gifts!');
    const sendButton = screen.getByRole('button', { name: /Send/i });

    fireEvent.change(nameInput, { target: { value: 'bugs.bunny' } });
    fireEvent.change(wishInput, { target: { value: 'Toys' } });


    axios.get.mockResolvedValueOnce({ data: [{ username: 'bugs.bunny', uid: 123 }] });

    axios.get.mockResolvedValueOnce({ data: [{ userUid: 123, address: 'Mock Address', birthdate: '1990-01-01' }] });

    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/error', {"state":{"errorMessage": "Child is more than 10 years old!"}});
    });
  });  

 test('interval sends email every 15 seconds', () => {
    jest.useFakeTimers();
    render(<SantaForm />);
    jest.spyOn(global, 'setInterval');
    jest.spyOn
    const nameInput = screen.getByPlaceholderText('charlie.brown');
    fireEvent.change(nameInput, { target: { value: 'Snoopy' } });
    
    const wishTextarea = screen.getByPlaceholderText('Gifts!');
    fireEvent.change(wishTextarea, { target: { value: 'Bones!' } });
        
    jest.advanceTimersByTime(15000); // 15 seconds
    
    expect(setInterval).toHaveBeenCalledTimes(2);
    
    jest.useRealTimers();
  });


});
