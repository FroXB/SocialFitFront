import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login bem-sucedido', data);
            // Adicione aqui a lógica para redirecionar o usuário ou armazenar o token, etc.
        } else {
            console.error('Erro no login', data);
            // Adicione aqui a lógica para lidar com erros, como mostrar uma mensagem ao usuário
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Social Fit</h1>
                <p>Sua rede social fitness.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title="Entrar" type="submit" />

                <Link to="/register">
                    Criar Conta
                </Link>
            </Form>

            <Background />
        </Container>
    );
}
