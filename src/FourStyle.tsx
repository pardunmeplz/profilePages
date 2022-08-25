import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'flex-end'
    },
    tab: {
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        flex: 0.6
    },
    picture: {
        backgroundColor: 'orange',
        height: '35%',
        aspectRatio: 1,
        borderRadius: 500
    },
    title: {
        color: 'white',
        fontSize: 20
    }

})

export default styles;