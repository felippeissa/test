import React, { Component } from 'react';
import logoInstitutoBulla from '../../assets/logoInstitutoBulla.png';
import { View, Text , TouchableOpacity, Linking ,Alert, Image} from 'react-native';

export default class RedesSociaisPage extends Component {
    state={
        logo: logoInstitutoBulla,
        title: "Redes Sociais Bulla",
        description: "Essa é a home e nos gostamos dela",
        link: "",
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
            <TouchableOpacity onPress={() => Alert.alert('Navegando para Instituto Bulla')}>
                <Text>
                    Navegar para o Site
                </Text>
            </TouchableOpacity>
        </View>    
    );
  }
}
