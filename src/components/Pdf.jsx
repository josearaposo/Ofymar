import React, { useContext } from 'react'
import { Page, Text, View, Document, StyleSheet , Image} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  section: {
    margin: 15,
    padding: 15,
    flexGrow: 1,
  },
  centeredView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Pdf(props) {
  let sumaTotal = 0;
  const {micompra} = props;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {micompra.map((articulo) => (
            <View key={articulo.id} style={styles.centeredView}>
              <Text>{articulo.nombre}</Text>
              <Text>{articulo.cantidad}</Text>
              <Text>{articulo.precio}€</Text>
              <Text>{articulo.precio * articulo.cantidad}€</Text>
              {sumaTotal += articulo.precio * articulo.cantidad}
              <Text>{'\n'}€</Text>
            </View>
          ))}
        </View>
      
        <View style={styles.section}>
          
            Total : {sumaTotal}
        </View>
      </Page>
    </Document>
  )
}


