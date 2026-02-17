import { router } from 'expo-router'; 
import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import AlertModal from './alertmodal';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);  
    const [showAlert, setShowAlert] = useState(false);
    const[alertMessage, setAlertMessage]= useState('');

    const handleSubmit = () => {
    if (!username && !password) {
      setAlertMessage('Please enter both username and password!');
      setShowAlert(true);
      return;
    }
    
    if (!username) {
      setAlertMessage('Please enter your username!');
      setShowAlert(true);
      return;
    }
    
    if (!password) {
      setAlertMessage('Please enter your password!');
      setShowAlert(true);
      return;
    }
    handleLogin();
}
    
    const handleLogin = () => {
        router.push({
            pathname: '/MainPage',  
            params: { 
                username: username,
                password: password, 
                 profileImageIndex: selectedIndex, 
            }
        });
    };

    const profileImages = [
        require('../assets/images/flame.jpg'),
        require('../assets/images/flame2.jpg'),
        require('../assets/images/flame3.jpg'),
    ];

    return (
        <View style={{
            flexDirection: 'column', 
            margin: 40,
            gap: 20,
            alignSelf: 'center',
        }}>
            <Image 
                source={require('../assets/images/Logog.png')} 
                style={{ 
                    alignSelf: 'center', 
                    marginBottom: 20,
                    marginTop: 20,
                }} 
            />
            
            <TextInput  
                placeholder="Name"
                onChangeText={setUsername}
                value={username}
                style={{
                    height: 40, 
                    padding: 5, 
                    color: '#ad2617',
                    borderRadius: 10,
                    borderWidth: 1,
                    width: 200,
                    borderBlockColor:'#ad2617', 
                }}
            />
            
            <TextInput  
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry  
                style={{
                    height: 40, 
                    padding: 5, 
                    color: '#ad2617',
                    borderRadius: 10,
                    borderWidth: 1,
                    width: 200, 
                    borderBlockColor:'#ad2617', 

                }}
            />
              <Text style={{ color: '#ad2617', alignSelf: 'center'}}>
                    Select Profile Image:</Text>
            
            <View style={styles.container}>
                {profileImages.map((img, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedIndex(index)}  
                        style={[
                            styles.imageWrapper,
                            selectedIndex === index && styles.selectedImage  
                        ]}
                    >
                        <Image source={img} style={styles.image} />
                    </Pressable>
                ))}
            </View>

            <Pressable 
                onPress={handleSubmit}
                style={{
                    backgroundColor: '#ad2617',
                    width: 150,
                    height: 50,  
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                }}>
                    Login
                </Text>
            </Pressable>
             <AlertModal
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        title="Missing Information"
        message={alertMessage}
      />
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    imageWrapper: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 50,
    },
    selectedImage: {
        borderColor: '#ad2617',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});