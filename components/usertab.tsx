import { useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from 'react-native';

export default function UserTab() {
    const { username, profileImageIndex } = useLocalSearchParams(); 
    
    const profileImages = [
        require('../assets/images/flame.jpg'),
        require('../assets/images/flame2.jpg'),
        require('../assets/images/flame3.jpg'),
    ];
    
    const imageIndex = Array.isArray(profileImageIndex) ? parseInt(profileImageIndex[0]) : parseInt(profileImageIndex as string);
    const selectedImage = profileImages[imageIndex];
    
    return (
        <View style={{ 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: 300, 
            height: 200, 
            backgroundColor: '#2d2d2d', 
            borderRadius: 20 
        }}>
            <Text style={{ color: '#ad2617', fontWeight: 'bold' }}>
                Welcome, {username}!
            </Text>
            <Image 
                source={selectedImage}
                style={{ width: 50, height: 50, borderRadius: 25, marginTop: 10 }} 
            />
        </View>
    );
}