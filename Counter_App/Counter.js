import { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Plus, Minus,RefreshCcw } from 'lucide-react-native';
export default Counter = () => {

    const [count, setCount] = useState(0);

    function handleDecrement() {
        if (count == 0) {
            Alert.alert('Cannot Decrement below 0');
            return;
        }

        setCount(count - 1);
    }

    return (
        <View style={styles.container} >
            <StatusBar />
            <Text style={styles.header}>Counter App</Text>

            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}} >
            <Text style={styles.countMsg} >{count}</Text>
            </View>

            <View style={{flex:1,justifyContent:'flex-end'}} >

            <View style={styles.btnWrapper} >
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { setCount(count + 1) }}
                    activeOpacity={0.6}
                >
                    <Plus color={'white'} size={'22'} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.resetBtn}
                    onPress={() => setCount(0)}
                    activeOpacity={0.6}
                >
                  <RefreshCcw color={'white'} size={20} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleDecrement}
                    activeOpacity={0.6}
                >
                    <Minus color={'white'} size={20} />
                </TouchableOpacity>

            </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'black'
    },
    header: {
        fontSize: 44,
        textAlign: 'center',
        color: 'red',
        marginTop: 30,
        textShadowColor: '#ffffff', // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
        textShadowRadius: 3, // Shadow blur radius
    },
    countMsg: {
        fontSize: 55,
        color: 'red',
        textShadowColor: '#ffffff', // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
        textShadowRadius: 3, // Shadow blur radius
    },
    btn: {
        backgroundColor: 'blue',
        borderRadius: 25,
        padding: 15,
    },
    btnTxt: {
        textAlign: 'center',
        fontWeight: '700',
        color: 'white',
        fontSize: 16
    },
    btnWrapper: {
        flexDirection: 'row',
        marginVertical: 15,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '20%'
    },
    resetBtn: {
        backgroundColor: 'blue',
        borderRadius: 25,
        padding: 15,
    }
});
