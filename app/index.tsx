import Login from '@/components/login';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d'}}>
            <Login />
        </View>
    );
}