import React, { Component } from 'react';
import logoInstitutoBulla from '../../assets/logoInstitutoBulla.png';
import { View, Text , TouchableOpacity, Linking ,Alert, Image} from 'react-native';

export default class DrBullaPage extends Component {
    state={
        logo: logoInstitutoBulla,
        title: "Dr. Bulla",
        description: "Essa é a home e nos gostamos dela",
        link: "https://facebook.github.io/react-native/docs/0.60/handling-touches",
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
