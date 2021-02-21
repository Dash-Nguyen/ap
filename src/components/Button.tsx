import react from 'react';
import styled from 'styled-components';

interface Props {
    [key: string]: any;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
    return <ButtonWrap {...rest}>
        {children}
    </ButtonWrap>
}

const ButtonWrap = styled.button`
    height: 32px;
    padding-left: 12px;
    padding-right: 12px;
    background: radial-gradient(
        94.27% 100.22% at 8.92% 23.84%, 
        var(--red-4) 0%, 
        var(--red-3) 43.33%, 
        var(--red-4) 100%);
    border: none;
    border-radius: 6px;
    color:var(--white);
    outline: none;
    &:hover {
        cursor: pointer;
    }
`

export default Button;