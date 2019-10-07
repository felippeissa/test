import React, { Component } from 'react';
import backgroundInstitutoBulla from '../../assets/backgroundInstitutoBulla.png';
import { View, Text , TouchableOpacity, ImageBackground, Linking , Image, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class InstitutoBullaPage extends Component {
    state={
        
        background: backgroundInstitutoBulla,
        title: "Instituto Bulla",
        description: "Essa é a home e nos gostamos dela",
        link: "https://www.institutobulla.com.br/",
    }
  render() {
    return (
        <ImageBackground source={backgroundInstitutoBulla} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={styles.Container}>
                <View style={styles.ContainerView}>
                    <Text style={styles.TextView}>
                        {this.state.title}
                    </Text>
                    <Text>
                        {this.state.description}
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL(`${ this.state.link }`)}>
                        <Text>
                            Navegar para o Site
                        </Text>
                    </TouchableOpacity>
                </View>  
            </SafeAreaView>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContainerView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    TextView:{
        color: '#111'
    },

  });