import React,{useState} from 'react';
import {
    View,
    StyleSheet,
    Text
  } from 'react-native';
import {
    Button,
    Input,
    Item
} from 'native-base';
import axios from 'axios';


function Home({navigation}) {
    const [username, setUsername] = useState('')
    const fetchInfo = async () => {
        try{
            const {data} = await axios.get(`https://api.github.com/users/${username}`)
            navigation.navigate('Profile', {data})
            
        }catch(error){
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <Item style={styles.item}>
                <Input
                    placeholder='Enter username'
                    style= {{color: 'white',}}
                    value = {username}
                    onChangeText = {(name) => setUsername(name)}
                />
            </Item>
            <Button
               style={styles.button}
               block
               onPress = {()=> fetchInfo()}
            >
                <Text style={styles.buttontext}>
                    Submit
                </Text>
            </Button>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0d1117',
        height: '100%'
    },
    item: {
        marginBottom: 20,
        width: '80%',
        alignSelf: 'center',
        marginTop: 80
    },
    button : {
        backgroundColor: '#238636',
        alignSelf: 'center',
        width: '25%',
        marginVertical: 25,
        borderRadius: 10
    },
    buttontext : {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    },
})
