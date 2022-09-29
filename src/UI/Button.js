import styled from 'styled-components';


const Button = styled.button`

padding:0.5rem;
border:2px solid;
border-color:71306d;
border-radius:3px;
marign:4px;


&:hover{
    color:white;
    border-color:white;
    background:#e535e5; 
}


@media (max-width:768px){
    width:auto;
}

`;

export default Button;