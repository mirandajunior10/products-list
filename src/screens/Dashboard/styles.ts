import styled from 'styled-components/native';

import Autocomplete from 'react-native-autocomplete-input';

export const Container = styled.View`
flex: 1;

`;

export const Header = styled.View`
width: 100%;
height: 60px;
background: #7F36FF;
justify-content: center;
align-items: center;
`;

export const Title = styled.Text`
font: normal normal bold 18px/22px Barlow;
color: #FFFFFF;

`;

export const SearchContainer = styled.View`
z-index:1;
margin: 10px;
display: flex;
justify-content: space-between;
flex-direction: row;
`;

export const SearchInputContainer = styled.View`
  flex: 1;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
z-index:1;
  width: 85%;
`;

export const SearchButton = styled.TouchableOpacity`
width: 50px;
height: 50px;
margin-left: 10px;
background: #7F36FF;
border-radius: 8px;

justify-content: center;
align-items: center;
`;

export const FlatList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 200,
  },

}))``;

export const AutoComplete = styled(Autocomplete).attrs(() => ({
  inputContainerStyle: {
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#7F36FF',
    borderRadius: 8,
  },
  listStyle: {
    width: '100%',
    margin: 0,
    padding: 10,

  },
  listContainerStyle: {
    width: '100%',

  },
  containerStyle: {
    width: '100%',

  },
}))``;
