// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3VaultDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3VaultDiamond/i);
    expect(titleElement).toBeInTheDocument();
});
