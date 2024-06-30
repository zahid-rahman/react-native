import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";
import { getTypeDetails } from "../lib/pokemon";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️HP: {hp} </Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
        style={styles.image}
      />

      <View style={styles.typeContiner}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}> Moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weaknesses: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    margin: 16,
    padding: 16,
    borderWidth: 2,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowOffset: {
          height: 2,
          width: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: "#333",
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 16,
  },
  typeContiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 4,
    borderRadius: 30,
  },
  emoji: {
    fontSize: 34,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 12,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
