import styled from 'styled-components/native';

export const Container = styled.View`
width: 185px;

background: #FFFFFF;
border: 1px solid #707070;
border-radius: 12px;
margin: 10px;

`;

export const Image = styled.Image`
width: 150px;
height: 150px;
background: #D5D5D5;
border-radius: 8px;
margin: 0 auto;
margin-top:10px;

`;

export const Titulo = styled.Text`
font-family: Barlow;
font-size: 16px;
margin-top:10px;
margin-left:12.5px;

`;

export const Preco = styled.Text`
font-family: Barlow;
font-size: 16px;
margin-top:5px;
margin-left:12.5px;
margin-bottom: 10px;
`;

export const ButtonComprar = styled.TouchableOpacity`
align-items: center;
justify-content: center;
margin: 0 auto;
margin-bottom:10px;
width: 156px;
height: 38px;
background: #7F36FF;
border-radius: 7px;
`;

export const ButtonComprarText = styled.Text`

color: #FFFFFF;
font-size: 19px;

`;
