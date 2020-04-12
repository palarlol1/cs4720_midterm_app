import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    app_title:{
        fontSize : 68
    },
    centered_container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homePageChild : {
        width : "100%",
    },
    bidCard : {
      flex : 1,
      justifyContent : "flex-start",
      alignItems : "center",
      flexDirection : "column",
      borderColor : '#708090',
      borderWidth : 2,
      borderRadius : 11
    }
  });


export default styles;