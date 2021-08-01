import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Container
  } from 'react-native';

function Profile({navigation,route}) {
    const {data} = route.params
    // console.log(data)
    return (
        <View style={styles.container}>
            <Image 
            source = {{
              uri: data.avatar_url,
              width: 150,
              height: 250,
            }}
            style = {styles.image}/>
        
            <Text style={styles.text}>
                Username: {data.login}
            </Text>
            <Text style={styles.text}>
                Followers: {data.followers}
            </Text>
            <Text style={styles.text}>
                Following: {data.following}
            </Text>
            
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0d1117',
        height: '100%'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'black',
        marginTop: 60,
        alignSelf:'center'
      },
      text:{
          margin:10,
          alignSelf:'center',
          color: 'white',
          fontSize: 18
      }
})