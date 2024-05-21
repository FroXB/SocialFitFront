import { FiMail, FiLock, FiUser, FiPhone, FiFile, FiHome } from 'react-icons/fi'
import { FaRegFlag, FaBirthdayCake, FaTransgender } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background, GridContainer, FullWidth, HalfWidth } from "./styles"

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>Social Fit</h1>
                
                <h2>Crie sua conta</h2>

                <GridContainer>
                    <HalfWidth>
                        <Input
                            placeholder="Nome"
                            type="text"
                            icon={FiUser}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Nome de usuário"
                            type="text"
                            icon={FiUser}
                        />
                    </HalfWidth>

                    <FullWidth>
                        <Input
                            placeholder="E-mail"
                            type="text"
                            icon={FiMail}
                        />
                    </FullWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Senha"
                            type="password"
                            icon={FiLock}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Telefone"
                            type="tel"
                            icon={FiPhone}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="CPF"
                            type="text"
                            icon={FiFile}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Data de nascimento"
                            type="date"
                            icon={FaBirthdayCake}
                        />
                    </HalfWidth>

                    <FullWidth>
                        <Input
                            placeholder="Endereço"
                            type="text"
                            icon={FiHome}
                        />
                    </FullWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Nacionalidade"
                            type="text"
                            icon={FaRegFlag}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Gênero"
                            type="text"
                            icon={FaTransgender}
                        />
                    </HalfWidth>

                </GridContainer>

                <Button title="Cadastrar"/>

                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>

            <Background />
        </Container>
    )
}