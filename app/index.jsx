import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from "../components/botao/Botao.jsx";
import { Input } from "../components/input/Input.jsx";
import {Card} from '../components/card/Card.jsx';
import axios from 'axios';
import { useState } from "react";

export default function Index() {

  const [cep,setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [aparecidinho, setAparecidinho] = useState(false);

  async function consultaCep(e) {
    e.preventDefault();
    try {
      if (cep !== "" && cep.length === 8){
        const resposta =  await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        setJsonCep(resposta.data);
        console.log(jsonCep);
        setAparecidinho(true);
        
      }else{
        alert("O cep esta incorreto, digite 8 numeros se vc nao quiser tomar gap")
      }
    } catch (error) {
      console.log();
    }
  }

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
    <Input 
    valorCep={cep}
    onChangeValorCep={e => {setCep(e); console.log(e);}}
    />

    {/* 2.3. Botão */}
    <Botao tituloBotao='Consultar' onPress={consultaCep}/>

    {/* 2.4. Botão */}

    {/* 2.5. Card de informações */}
    {aparecidinho && 
    <Card 
    cep={jsonCep.cep}
    logradouro={jsonCep.logradouro}
    bairro={jsonCep.bairro}
    uf={jsonCep.uf}
    estado={jsonCep.estado}
    regiao={jsonCep.regiao}
    />
    }
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
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: '#000000'
  }

})
