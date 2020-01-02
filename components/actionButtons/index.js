import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class ActionButtons extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { reset, goBack } = this.props;
        return (
            <>
            <TouchableOpacity
                style={styles.btnReset}
                onPress={reset}
            >
              <Text style={styles.btnTxt}>Reset</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.btnReset}
                onPress={goBack}
            >
              <Text style={styles.btnTxt}>Atras</Text>
            </TouchableOpacity>
            </>
        ); 
    }
}

const styles = StyleSheet.create({
    btnTxt: {
        fontSize: 18,
        color: '#7f8c8d',
        fontWeight: 'bold',
    },
    btnReset: {
        height: 50,
        width: 100,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
    },
});

export default ActionButtons;
