import { View,Text,StyleSheet,SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Link} from 'expo-router';
import Constants from 'expo';


export default function HomeScreen() {

  const theme = useColorScheme() ?? 'light';

  return (
     <View style={styles.container}>
         <View style={styles.header}>
           <Text style={{color:Colors[theme].text},[styles.title]}>Home</Text>
           <Link href="/signup" >Sign up</Link>
         </View>
     </View>
  );
}

const styles = StyleSheet.create({
   container:{
      backgroundColor: '#B1D8B7',
      flex: 1,
      padding: 14,
      paddingTop: 40,
   },
   header: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   title:{
      flexGrow: 1,
      fontSize: 30,
      fontWeight: 800,
   }
});
