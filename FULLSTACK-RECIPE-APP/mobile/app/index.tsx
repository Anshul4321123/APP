import { StyleSheet,Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import {Link} from "expo-router";
export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Edit app/index.tsx to edit this screen.</Text>
      <Image source={require("@/assets/images/react-logo.png")}
      style={{
        width:100,
        height:100
      }}/>


      <TextInput placeholder="youremail" style={{borderWidth:1,padding:10}} secureTextEntry={true}/>
     <TouchableOpacity>
      <Text>hello</Text>
     </TouchableOpacity>
     <Link href={"/about"}>visit google</Link>
      </View>
  );
}

const style=StyleSheet.create({
  container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
text:{color:"red"},
});