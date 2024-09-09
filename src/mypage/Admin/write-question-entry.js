import React from 'react';
import { createRoot } from 'react-dom/client';
import WriteQuestion from './WriteQuestion';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('write-question-root');
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <WriteQuestion onClose={() => window.close()} />
    </React.StrictMode>
  );
});