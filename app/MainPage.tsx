import { View, Text } from 'react-native';
import  UserTab from '@/components/usertab';
import Scroll from '@/components/scrollView';
export default function MainPage() {


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <UserTab />
            <Scroll />
        </View>
    );
}