// Exercise 3
import React, { useState } from 'react';
import {SectionList, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, Button} from 'react-native';

const datasource = [
  {
    title: "Mamamoo",
    bgColor: "lightgreen",
    data: [
      { name: 'Solar', cardImage: "https://lh3.googleusercontent.com/PYhoBGT38Mrqc7GypPkDXWoUSzsDAXaNL_7VxG0vf3FPSDrjZqLtR8vvNG2MQCd35IdN9lNSjokfdtTBXwnd5YBQTC2lIXwL=nu-e365-rj-q80-w925" },
      { name: 'Moon', cardImage: "https://lh3.googleusercontent.com/j3ekj-sEU3Zyf4oEU4CnHrafZikbxNv1Z-DuN8De8g6M2wyYEyuNCwCo_kQA9WCpxzBIxK6-JXMAlWx3uJiRGC5OinF7tHu6IQ=nu-e365-rj-q80-w925" },
      { name: 'Wheein', cardImage: "https://lh3.googleusercontent.com/5jVCF59M4xZbR0Ri8NDQtEB6I3-t2FaEgcV9DzeEsQnpeBelxrWYKM6wnOHBdBZ4LHepfnHG1vatbqXkdi0eciTVJfdCjbcApQ=nu-e365-rj-q80-w925" },
      { name: 'Hwasa', cardImage: "https://lh3.googleusercontent.com/hyvZqa91vDJlOmaPRNSU8oqoFJvoutPxunzOishj8YzqZztpKiotu7x6zsqQv8CYZQ3a0tvT-HeX90_7hM0qIhuci0V4SU2wOg=nu-e365-rj-q80-w925" },
    ],
  },
  {
    title: "Twice",
    bgColor: "pink",
    data: [
      { name: 'Nayeon', cardImage: "https://lh3.googleusercontent.com/AO_bGEZX93tFDgAR_WHIU-c0wmFJwL7wV6tKY9snjz__MrtNIf2v4-GwIbl52EqeGJ9Dy6Nq2hXzfDIj8xubSyLhz4-r78d26g=w960-rj-nu-e365" },
      { name: 'Jeong', cardImage: "https://images6.fanpop.com/image/photos/41600000/Twice-Jeongyeon-YES-or-YES-MV-Shooting-by-Naver-x-Dispatch-twice-jyp-ent-41648773-1999-3000.jpg" },
      { name: 'Momo', cardImage: "https://i.pinimg.com/originals/0e/a2/2a/0ea22a24e7c656c551c707df85781cbf.jpg" },
      { name: 'Sana', cardImage: "https://i.pinimg.com/originals/6d/a3/95/6da39529ac2cd3924c1fe44a1f851ab3.jpg" },
      { name: 'Jihyo', cardImage: "https://i.pinimg.com/originals/bc/31/d5/bc31d52643e0664b6c11887af5131dad.jpg" },
      { name: 'Mina', cardImage: "https://lh3.googleusercontent.com/TxYlymHtYtWj11FVpXF6VVrwhJULvIKVQ3t0apFuvi4ybZaJ9ge2C8pkyUA4yNrzovPLJZCclOGHFxr4qWOM5bm1Yg7ag76R_Q=w960-rj-nu-e365" },
      { name: 'Dahyun', cardImage: "https://i.pinimg.com/originals/6f/0a/62/6f0a62dc0c72dd2dfb27bdc0716ce8b6.png" },
      { name: 'Chae', cardImage: "http://pm1.narvii.com/7250/4c198dc696417f936c0768c28e0b2c24f40d8baar1-736-920v2_uhq.jpg" },
      { name: 'Tzuyu', cardImage: "https://preview.redd.it/sps03qcy5jv01.jpg?auto=webp&s=d7e314dab578f97da9b2b3ae1c792f25b6254253" },
    ],
  },
  {
    title: "Blackpink",
    bgColor: "Black",
    data: [
      { name: 'Rose', cardImage: "https://lh3.googleusercontent.com/B_3SAta9A8qlninZdmm4M8r_PpOk9zEunUPxDLJF45tZzj9ruw3ekW6wciSgBiJs2Oqq5KTuWeryBywXMzzNG933D0nmL0Rb=w960-rj-nu-e365" },
      { name: 'Jisoo', cardImage: "https://lh3.googleusercontent.com/-o4b0jGjyXr1PFCJpobVw_QfwTNxMcoIQ_J13uEbjBesrS30_1cO3lcYffgnbgkH4rskmF0FAxAaX1TGnxxmLJ3_tuftFLw6=w1600-rj" },
      { name: 'Lisa', cardImage: "https://i.pinimg.com/originals/03/d8/9f/03d89f19675dcc189d1b21660081943b.jpg" },
      { name: 'Jennie', cardImage: "https://lh3.googleusercontent.com/XWEEvtYRUnFk3daRFETBa84jmHRg2oKyQdLqAzFT_IAaH737ATJ-Ve7SbOLq7wl0pj6P3coLnhlngPEkAS7IOhWH8igDuGn4HA=w960-rj-nu-e365" },
    ],
  },
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  textStyle: {
    fontSize: 15,
    margin: 70,
    textAlign: 'left',
    fontWeight: 'bold'
  },

  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },

  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'lightblue',
    marginTop: 40
  },

  cardImage: {
    width: 180,
    height: 200,
  },

  addButton: {
    marginTop: 20,
  }
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.opacityStyle}>
      <Text style={styles.textStyle}>{item.name}</Text>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
);

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Button title="Add Idols" onPress={() => {}} style={styles.addButton} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, icon, bgColor } }) => (
                <Text style={[styles.headerText, { backgroundColor: bgColor }]}>
                  {title}
                </Text>
            )}
        />
      </View>
  );
};

export default App;
