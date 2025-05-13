import './App.css';
import { HomePage } from './components/HomePage';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <MantineProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationForm />} />
          </Routes>
        </div>
      </MantineProvider>
    </Router>
  );
}

export default App;
