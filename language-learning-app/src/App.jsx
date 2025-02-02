import LanguageLearningApp from './components/LanguageLearningApp';

import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
      }}
    >
      <LanguageLearningApp />
    </div>
  );
}

export default App;
