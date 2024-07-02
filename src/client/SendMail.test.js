import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SendMail from './SendMail'; 

jest.mock('axios');

describe('SendMail function', () => {
  it('should send email successfully', async () => {
    axios.post.mockResolvedValueOnce({ data: 'Email sent successfully!' });

    await SendMail('Hello, this is a test message.');

    expect(axios.post).toHaveBeenCalledWith('/send-email', {
      message: 'Hello, this is a test message.'
    });

  });

  it('should handle errors when sending email', async () => {
    const errorMessage = 'Network error';
    axios.post.mockRejectedValueOnce(new Error(errorMessage));

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await SendMail('Test message');

    expect(axios.post).toHaveBeenCalledWith('/send-email', {
      message: 'Test message'
    });

    expect(consoleSpy).toHaveBeenCalledWith('error', new Error(errorMessage));

    consoleSpy.mockRestore();
  });
});
