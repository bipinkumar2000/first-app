import styled from 'styled-components';



const Title = styled.p`
font-size:25px;
color:${props=>props.color};


@media (max-width:768px){
    width:auto;
}
`;

export default Title;