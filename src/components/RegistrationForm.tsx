import { useForm } from '@mantine/form';
import { Button, TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationForm: React.FC = () => {
    const form = useForm<FormValues>({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: {
            email: (emailInput) => {
                return emailInput.length > 0 && emailInput.includes('@') && emailInput.endsWith('.com') ? null : 'Invalid email, check _@_.com format'
            },
            password: (passwordInput) => passwordInput.length === 6 ? null : 'Password must be 6 characters long',
            confirmPassword: (confirmPasswordInput, values) => confirmPasswordInput === values.password ? null : 'Passwords do not match'
        }
    });

    const navigate = useNavigate();

    const handleSubmit = form.onSubmit((values) => {
        console.log('Form values:', values);
    });

    return (
        <div>
            User Signup
            <form onSubmit={handleSubmit}>
                <TextInput
                    label='email'
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <TextInput
                    label='password'
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />
                <TextInput
                    label='confirmPassword'
                    key={form.key('confirmPassword')}
                    {...form.getInputProps('confirmPassword')}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
            <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
    );
}; 