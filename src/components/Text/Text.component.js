import React from 'react'
import { Text as RNText } from 'react-native'
import tstyles from './Text.style';

const Text = ({children, style}) => {
    return (
        <RNText style={[tstyles.text, style]}>{children}</RNText>
    )
}

export default Text
