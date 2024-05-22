import { Container } from './styles';

export function Button({ title, type = 'button', ...props }) {
    return (
        <Container type={type} {...props}>
            {title}
        </Container>
    );
}
