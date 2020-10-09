import React from 'react';
import { FlatList } from 'react-native';
import { useItems } from '../../hooks/items';

import {
  PageButton,
  PageButtonText,
  Container,
} from './styles';

interface PaginationProps{
  pages: number
  flatListRef: React.RefObject<FlatList<any>>
}

const Pagination: React.FC<PaginationProps> = ({ pages, flatListRef }) => {
  const { toPage } = useItems();
  function handleToPage(page: number) {
    flatListRef.current?.scrollToIndex({ animated: true, index: 0 });
    setTimeout(() => {
      toPage(page);
    }, 250);
  }
  const pageButtons = [];
  for (let i = 0; i < pages; i += i + 1) {
    pageButtons.push(
      <PageButton key={i} onPress={() => handleToPage(i + 1)}>
        <PageButtonText>{i + 1}</PageButtonText>
      </PageButton>,
    );
  }
  return (
    <Container>
      {pageButtons}
    </Container>
  );
};

export default Pagination;
