import {Platform,StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor :Platform.OS === 'ios' ? 'grey':'green',
      justifyContent: 'space-between',      
    },
    redBox: {
        backgroundColor: 'red',        
        width: 80,
        height: 80,
    },
    purpleBox: {
        backgroundColor: 'purple',        
        width: 80,
        height: 80,
        marginLeft: 'auto',
    },
    whiteBox: {
        backgroundColor: 'white',   
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    borderStyle:{
        borderRadius: 10
    }
  });
  