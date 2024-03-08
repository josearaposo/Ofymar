import React, { useContext } from 'react'
import { Page, Text, View, Document, StyleSheet , Image} from '@react-pdf/renderer';

export default function Pdf(props) {

  const {micompra} = props;
  return (
    <Document>
      <Page size="A4">
        <View>
          {micompra.map((articulo) => (
            <View key={articulo.id}>
              <Text>{articulo.nombre}</Text>
              <Text>{articulo.cantidad}</Text>
              <Text>{articulo.precio}€</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}


