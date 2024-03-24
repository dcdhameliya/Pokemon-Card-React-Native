import {SafeAreaView, StyleSheet, Platform, ScrollView} from 'react-native';
import PokemonCard from "./components/PokemonCard";

export default function App() {

    const charmanderData = {
        name: "Charmander",
        image: require("./assets/charmander.png"),
        type: "Fire",
        hp: 39,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weaknesses: ["Water", "Rock"],
    };

    const bulbasaurData = {
        name: "Bulbasaur",
        image: require("./assets/bulbasaur.png"),
        type: "Grass",
        hp: 45,
        moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip"],
        weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
    };

    const squirtleData = {
        name: "Squirtle",
        image: require("./assets/squirtle.png"),
        type: "Water",
        hp: 44,
        moves: ["Tackle", "Tail Whip", "Bubble", "Water Gun"],
        weaknesses: ["Electric", "Grass"],
    }
    const pikachuData = {
        name: "Pikachu",
        image: require("./assets/pikachu.png"),
        type: "Electric",
        hp: 35,
        moves: ["Thundershock", "Growl", "Tail Whip", "Quick Attack"],
        weaknesses: ["Ground"],
    }


    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <PokemonCard {...charmanderData}/>
                <PokemonCard {...bulbasaurData}/>
                <PokemonCard {...squirtleData}/>
                <PokemonCard {...pikachuData}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
});
