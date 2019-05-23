import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'blue',
      justifyContent: 'space-around',      
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
    },
    whiteBox: {
        backgroundColor: 'white',   
        width: 80,
        height: 80,
    },
    borderStyle:{
        borderRadius: 10
    }
  });
  