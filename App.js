import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";
import { pokemonCardList } from "./@fakeDb/pokemon";
pokemonCardList;
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pokemonCardList.map((el, index) => {
          return <PokemonCard key={index} {...el} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
