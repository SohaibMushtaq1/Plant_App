import React from 'react';
import {
    View, Text,Image
} from 'react-native';

import {
    CommonStyle
} from '../../../styles'; 

const Screen1 = () => {
    return (
        <View style={CommonStyle.container}>
            <Image 
            source={require('../../asserts/Images/Onboarding/Group1.png')}
            />
        </View>
    );
};

export default Screen1;