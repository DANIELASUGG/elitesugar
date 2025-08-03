// Estrutura completa de um projeto React para o site EliteSugar

// 1. package.json
{
  "name": "elitesugar",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

// 2. public/index.html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Encontre seu parceiro ideal no EliteSugar. Site exclusivo para Sugar Daddies e Sugar Babies." />
    <title>EliteSugar</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

// 3. src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// 4. src/index.css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fdfdfd;
}

// 5. src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>EliteSugar</h1>
        <p>O site exclusivo para Sugar Daddies e Sugar Babies</p>
      </header>
      <main>
        <section className="intro">
          <h2>Relacionamentos sem julgamentos</h2>
          <p>Cadastre-se para encontrar conexões autênticas com benefícios mútuos.</p>
          <button>Comece Agora</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 EliteSugar. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

// 6. src/App.css
.App {
  text-align: center;
  background-color: #fff0f5;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 2rem;
  background: #d63384;
  color: white;
}

.intro {
  padding: 2rem;
}

button {
  padding: 1rem 2rem;
  background: #d63384;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: #a61e61;
}

footer {
  margin-top: auto;
  padding: 1rem;
  background: #f8d7da;
  color: #333;
}
