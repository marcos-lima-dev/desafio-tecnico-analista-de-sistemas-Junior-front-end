import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header' // Ajuste o import conforme seu projeto

test('deve renderizar o título do sistema', () => {
  render(<Header />)
  
  // Procura na "tela" virtual um texto que contenha "Gerenciador"
  const logoText = screen.getByText(/Gerenciador/i);
  
  // Espero que esse elemento exista no documento
  expect(logoText).toBeDefined();
})