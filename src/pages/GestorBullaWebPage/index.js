import React, { Component } from 'react';
import logoInstitutoBulla from '../../assets/logoInstitutoBulla.png';
import { View, Text , TouchableOpacity, Linking ,Alert, Image} from 'react-native';

export default class GestorBullaWebPage extends Component {
    state={
        logo: logoInstitutoBulla,
        title: "Gestor Bulla WEB",
        description: "Essa é a home e nos gostamos dela",
        link: "https://gestorbullaweb.com.br/auth/login",
    }
  render() {
    return (
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
            <Image source={this.state.logo} style={{width: 300,height: 300,}}/>
            <Text>
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
    );
  }
}
