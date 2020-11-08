import React from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import levels from '../../utils/activity-levels'

const bgImage = require('../../components/wallpaper/clouds.png')

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1
  },
  itemText: {
    color: color.palette.darkGrey,
    fontSize: 20,
    padding: 16,
    textAlign: 'center'
  },
  listView: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: color.palette.darkGrey,
    fontSize: 22,
    padding: 16,
    textAlign: 'center'
  },
  wallpaper: {
    backgroundColor: color.palette.white,
    resizeMode: "center"
  },
})

export const SummaryScreen = observer(function SummaryScreen() {
  const { onBoardingStore } = useStores()

  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const homeScreen = () => navigation.navigate("goals")

  return (
    <Screen style={styles.container} preset="fixed">
      <Wallpaper
        style={styles.wallpaper}
        backgroundImage={bgImage}
      />
      <SafeAreaView>
        <Header
          leftIcon="back"
          onLeftPress={goBack}
        />
      </SafeAreaView>
      <Text preset={'title'} text="Perfect! Let's review!" />
      <View style={styles.listView}>
        <Text style={styles.itemText} text={"Goal: " + onBoardingStore.goal}/>
        <Text style={styles.itemText} text={"Due date: " + onBoardingStore.dueDate.toDateString()}/>
        <Text style={styles.itemText} text={"Activity Level: " + levels[onBoardingStore.activityLevel]}/>
      </View>

      <SafeAreaView style={styles.bottom}>
        <Button
          onPress={homeScreen}
          preset={"continue"}
          text={"START OVER"}
          disabled={!onBoardingStore.goal}
        />
      </SafeAreaView>

    </Screen>
  )
})
