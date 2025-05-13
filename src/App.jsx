import './App.css';
import { RegistrationForm } from './components/RegistrationForm';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <RegistrationForm />
      </div>
    </MantineProvider>
  );
}

export default App;
