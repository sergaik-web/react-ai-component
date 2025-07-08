import React from 'react';
import AIComponent from './index';

const TestComponent = () => <div>Привет, мир!</div>;

export default function App() {
  return (
    <AIComponent context="Сделай текст красным">
      <TestComponent />
      <p>Дополнительный текст</p>
    </AIComponent>
  );
}
