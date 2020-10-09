import React, { useEffect, useRef, useState } from 'react';
import {
  Text, TouchableOpacity, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useItems } from '../../hooks/items';
import SearchItem, { IItemsData } from '../../components/SearchItem';

import {
  Container,
  Header,
  Title,
  SearchContainer,
  SearchButton,
  AutoComplete,

} from './styles';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

interface ISuggestionData {
  name: string,
  href: string,
}

const Dashboard: React.FC = () => {
  const {
    items, setNewItems, paginatedItems, offset, page,
  } = useItems();

  const flatListRef = useRef<FlatList>(null);

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ISuggestionData[]>([] as ISuggestionData[]);
  const [hideResults, setHideResults] = useState(false);

  async function fetchSuggestions(term: string) {
    if (term && term.length > 3) {
      const response = await api.get('buscaautocomplete', {
        params: {
          productNameContains: term,
        },
      });

      setSuggestions(() => response.data.itemsReturned);
      setHideResults(false);
    } else {
      setSuggestions(() => []);
      setHideResults(true);
    }
  }

  async function fetchItems(term: string) {
    setHideResults(true);
    if (term && term.length > 3) {
      const response = await api.get('api/catalog_system/pub/products/search', {
        params: {
          ft: term,
        },
      });
      setNewItems(response.data);
    }
  }

  return (
    <Container>
      <Header>
        <Title>Listagem de produtos</Title>
      </Header>

      <SearchContainer>

        <AutoComplete
          onBlur={() => setHideResults(true)}
          onFocus={() => setHideResults(false)}
          hideResults={hideResults}
          data={suggestions}
          defaultValue={query}
          keyExtractor={(item : ISuggestionData) => String(item.name)}
          onChangeText={(text) => { setQuery(text); fetchSuggestions(text); }}
          renderItem={({ item }: { item: ISuggestionData, index: number }) => (
            <TouchableOpacity
              onPress={() => {
                setQuery(() => item.name); setHideResults(true);
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <SearchButton activeOpacity={0.6} onPress={() => fetchItems(query)}>
          <Icon name="search" size={36} color="white" />
        </SearchButton>

      </SearchContainer>

      <FlatList
        ref={flatListRef}
        data={paginatedItems}
        numColumns={2}
        contentContainerStyle={{
          alignItems: 'center',

        }}
        keyExtractor={(item) => String(item.productId)}
        renderItem={({ item }) => <SearchItem item={item} />}
        ListEmptyComponent={(<Text>Não foram encontrados resultados</Text>)}
        ListFooterComponent={
          items.length > 0
            ? <Pagination flatListRef={flatListRef} pages={Math.ceil(items.length) / offset} />
            : <></>
        }
      />

    </Container>

  );
};
export default Dashboard;
