// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainAuth title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainAuth/i);
    expect(titleElement).toBeInTheDocument();
});
