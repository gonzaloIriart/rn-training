import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'blue',
      justifyContent: 'space-between',      
    },
    redBox: {
        backgroundColor: 'red',        
        width: 80,
        height: '50%',
    },
    purpleBox: {
        backgroundColor: 'purple',        
        width: 80,
        height: '30%',
    },
    whiteBox: {
        backgroundColor: 'white',   
        width: 80,
        height: '20%',
    },
    borderStyle:{
        borderRadius: 10
    }
  });
  