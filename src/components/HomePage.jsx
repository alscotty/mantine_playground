import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Button onClick={() => navigate('/registration')}>Go to Registration</Button>
    </div>
  );
}