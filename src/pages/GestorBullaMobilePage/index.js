import React, { Component } from 'react';
import logoInstitutoBulla from '../../assets/logoInstitutoBulla.png';
import { View, Text , TouchableOpacity, Linking ,Alert, Image} from 'react-native';

export default class GestorBullaMobilePage extends Component {
    state={
        logo: logoInstitutoBulla,
        title: "Gestor Bulla Mobile",
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
            <TouchableOpacity onPress={() => Alert.alert('Em Breve')}>
                <Text>
                    Em Breve
                </Text>
            </TouchableOpacity>
        </View>    
    );
  }
}
