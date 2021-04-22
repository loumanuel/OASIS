import styled from 'styled-components';
const colores = {
    borde: "#aaaaaa",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr;
`;

const Label = styled.label`
    display: block;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
`;

const GroupInput = styled.div`
    position: relative;
    z-index: 90;

`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 40px;
    line-height: 45px;
    padding: 0 35px 0 10px;
    transition: .3s ease all;
    border: 1px solid transparent;
    &:focus{
        border: 0.01px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    
`;

export {Formulario, Label, GroupInput, Input, LeyendaError};