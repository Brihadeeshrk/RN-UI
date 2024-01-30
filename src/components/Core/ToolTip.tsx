import React from 'react'
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { showTip, closeTip, Tip } from './Tip'
import Icon from 'react-native-vector-icons/Ionicons'

const Screen = ({  }) => {
    const [_showTip, setShowTip] = React.useState(true)

    return (
        <View style={styles.container}>
            <Tip
                id
                title
                body=
                showItemPulseAnimation
                pulseColor
                active={false}
            >
                <TouchableOpacity
                    onPress={() => {
                        _showTip && showTip('heart')
                        setShowTip(false)
                    }}
                    style={{ padding: 10, borderRadius: 50 }}
                >
                    <Icon name='heart' color='red' size={35}/>
                </TouchableOpacity>
            </Tip>

            <View style={{ width: 200 }}>
                <Button
                    title="Show heart tip"
                    onPress={() => showTip('heart')}
                />
            </View>
        </View>
    )
}