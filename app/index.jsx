import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from "../components/botao/Botao.jsx";
import { Input } from "../components/input/Input.jsx";
import {Card} from '../components/card/Card.jsx';
export default function Index() {
  return (
    <>
    {/* 1. Logo + Img de fundo */}
    <ImageBackground source={require('../assets/images/ImgFundo.png')} style={styles.imgFundo}>
      <Image source={require('../assets/images/Logo.png')} style={styles.logo}></Image>
    </ImageBackground>
    {/* 2. Campo de consulta */}

    <ScrollView style={styles.containerScroll}>
    <View style={styles.container}>
    {/* 2.1. Título */}
    <Text style={styles.titulo}>Consulte seu CEP</Text>
    {/* 2.2. Input */}
    <Input/>
    {/* 2.3. Botão */}
    <Botao tituloBotao='Consultar'/>
    {/* 2.4. Botão */}
    {/* 2.5. Card de informações */}
    <Card/>
    </View>

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'100%'
  },

  logo: {
    width: 100,
    height: 120
  },

  container:{
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: 'center',
    paddingBottom: 60
  },

  containerScroll:{
    flex: 1.5,
    height: '100%',
    //alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 80,
  },

  titulo: {
    fontSize: 25
  }

})
