import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProductRow} from './ProductRow';
import {ListHeader} from './ListHeader';

export const Products = () => {
  const renderItems = ({item}) => {
    return <ProductRow />;
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderHeader = () => {
    return (
      <ListHeader
        title={'Health Product'}
        subTitle={'Find out Health Product'}
        onPressSeeAll={() => {}}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={[
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ]}
        horizontal
        renderItem={renderItems}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  separator: {
    height: 24,
  },
});
