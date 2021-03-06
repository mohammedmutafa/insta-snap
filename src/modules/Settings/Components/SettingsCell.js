import React, { PropTypes, Component } from 'react';
import { ListView, ScrollView, TouchableHighlight, StyleSheet, Text, View, AlertIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SettingsCell extends Component {

  static propTypes = {
    callback:PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.cellContainer}>

        <View style={styles.separator} />

        <TouchableHighlight onPress={() => this.props.callback()} underlayColor='transparent'>
          <View style={styles.cellWrapper}>
            <View style={styles.leftCol}>
              <Icon
                name={this.props.icon}
                size={20}
                color={'red'}
                style={{width:20,height:20,alignSelf:'center',fontWeight:'100'}}
              />
            </View>
            <View style={styles.middleCol}>
              <Text>{this.props.title}</Text>
            </View>
            <View style={styles.rightCol}>
              <Icon
                name='md-arrow-back'
                size={20}
                color={'#f0f5f5'}
                style={{width:20,height:20,alignSelf:'flex-end',fontWeight:'200'}}
              />
            </View>
          </View>
        </TouchableHighlight>

        <View style={styles.separator} />

      </View>

    );
  }
}

var styles = StyleSheet.create({
  cellContainer:{
    backgroundColor:'white',
  },
  cellWrapper: {
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    padding:10,
  },
  rightCol:{
    flex:1,
  },
  middleCol:{
    flex:3,
    paddingRight:10,
    paddingLeft:10,
  },
  leftCol:{
    flex:1,
  },
  separatorWrapper:{
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: 'white',
  },
  separator: {
    height:1,
    borderBottomColor:'#f0f5f5',
  }

});
