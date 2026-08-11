import { LanguageProvider } from './context/LanguageContext';
import MainPage from './pages/MainPage';

import './styles/colors.css';
import './styles/App.css';

function App() {

  return (
  <LanguageProvider>  
    <MainPage />
  </LanguageProvider>
  );
}

export default App;