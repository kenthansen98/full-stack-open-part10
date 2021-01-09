import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  pickerContainer: {
    height: 50,
    justifyContent: 'center',
    marginLeft: 25,
  },
  picker: {
    alignSelf: 'center',
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, choice, setChoice }) => {
  const renderItem = ({ item }) => {
    return (
      <RepositoryItem
        item={item}
      />
    );
  };

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        () => 
        (<View style={styles.pickerContainer} >
          <RNPickerSelect
            onValueChange={(value) => setChoice(value)}
            items={[
              { label: 'Latest repositories', value: 'Latest repositories' },
              { label: 'Highest rated repositories', value: 'Highest rated repositories' },
              { label: 'Lowest Rated Repositories', value: 'Lowest Rated Repositories' },
            ]}
            style={styles.picker} > 
            <Text>{choice}</Text>
          </RNPickerSelect>
        </View>)}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const [choice, setChoice] = useState('Latest repositories');
  const { repositories } = useRepositories(choice);

  return <RepositoryListContainer repositories={repositories} choice={choice} setChoice={setChoice} />;
};

export default RepositoryList;