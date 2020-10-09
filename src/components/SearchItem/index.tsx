import React from 'react';

import formatValue from '../../utils/formatValue';
import {
  ButtonComprar,
  ButtonComprarText,
  Container,
  Image,
  Preco,
  Titulo,
} from './styles';

export interface IItem {
  images: [{ imageUrl: string}]
  sellers: [
    {
      commertialOffer:{
         Price: number
        }
    }
  ]
}

export interface IItemsData {
  productId: string,
  productName: string,
  link: string,
  items: Array<IItem>

}

interface SearchItemProps{
  item: IItemsData
}

const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const preco = formatValue(item.items[0].sellers[0].commertialOffer.Price);

  return (
    <Container>

      <Image source={{ uri: item.items[0].images[0].imageUrl }} />
      <Titulo>{item.productName}</Titulo>
      <Preco>{preco}</Preco>

      <ButtonComprar>
        <ButtonComprarText>Comprar</ButtonComprarText>
      </ButtonComprar>
    </Container>

  );
};

export default SearchItem;
