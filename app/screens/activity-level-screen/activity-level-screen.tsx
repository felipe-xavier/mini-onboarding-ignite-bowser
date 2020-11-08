import React from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, StyleSheet } from "react-native"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import levels from '../../utils/activity-levels'
import Slider from '@react-native-community/slider'

const bgImage = require('../../components/wallpaper/clouds.png')

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
  datePickerView: {
    alignItems: 'center',
    backgroundColor: color.palette.lowWhite,
    paddingHorizontal: spacing[4],
  },
  slider: {
    margin: spacing[4],
    paddingVertical: spacing[5]
  },
  textLevel: {
    color: color.palette.darkGrey,
    fontSize: 18,
    paddingVertical: spacing[5],
    textAlign: 'center'
  },
  // eslint-disable-next-line react-native/no-color-literals
  wallpaper: {
    backgroundColor: color.palette.white,
    resizeMode: "center"
  },

})

export const ActivityLevelScreen = observer(function ActivityLevelScreen() {
  const { onBoardingStore } = useStores()

  const setActivityLevel = (level: number) => onBoardingStore.setActivityLevel(level)

  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const nextScreen = () => navigation.navigate("summary")

  return (
    <Screen style={styles.container} preset="fixed">
      <Wallpaper
        style={styles.wallpaper}
        backgroundImage={bgImage}/>
      <SafeAreaView>
        <Header
          leftIcon="back"
          onLeftPress={goBack}
        />
      </SafeAreaView>
      <Text preset={'title'} text="To get your perfect workouts, tell us your activity level"/>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        minimumTrackTintColor="#9ADCD7"
        maximumTrackTintColor="#c3c3c3"
        step={1}
        onValueChange={setActivityLevel}
        value={onBoardingStore.activityLevel}
      />
      <SafeAreaView style={styles.bottom}>
        <Text style={styles.textLevel}>
          {levels[onBoardingStore.activityLevel]}
        </Text>
        <Button
          tx="welcomeScreen.continue"
          onPress={nextScreen}
          preset="continue"
        />
      </SafeAreaView>
    </Screen>
  )
})
