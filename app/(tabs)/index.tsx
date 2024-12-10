import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://cdn.awsli.com.br/600x700/538/538026/produto/263812131/2-peitoral-para-c-es-coleira-de-cachorro-pp---p---m---g---gg--7--ug27dblovu.jpg' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Coleira para cachorro grande reforçada, muito resistente</Text>
      <Text style={styles.productPrice}><b>R$ 85,00</b></Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d47502',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#fca503',
    marginBottom: 10,
    textAlign: 'center',
  },
});