import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHomeAlt, faSearch, faPlusSquare, faClapperboard, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const FooterComponent = () => {
  return (
    <View style={Styles.FooterContainer}>
      <FontAwesomeIcon icon={faHomeAlt} style={{color: 'white'}} size={27}/>
      <FontAwesomeIcon icon={faSearch} style={{color: 'white'}} size={27}/>
      <FontAwesomeIcon icon={faPlusSquare} style={{color: 'white'}} size={27}/>
      <FontAwesomeIcon icon={faClapperboard} style={{color: 'white'}} size={27}/>
      <FontAwesomeIcon icon={faUserCircle} style={{color: 'white'}} size={27}/>
    </View>
  )
}

const Styles = StyleSheet.create({
  FooterContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 15,
    marginTop: 15,
  }
})

export default FooterComponent