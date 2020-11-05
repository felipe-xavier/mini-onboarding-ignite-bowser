import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, SafeAreaView, View } from "react-native"
import RadioButtonRN from 'radio-buttons-react-native'
import { Screen, Text, Wallpaper, Button } from "../../components"
import { color, spacing } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"

interface GoalsType {
  label: string,
}

const goals: GoalsType[] = [
  { label: 'Find workouts for my pregnancy' },
  { label: 'Not to gain unnecessary weight' },
  { label: 'Prepare for birth' },
  { label: 'Feel more relaxed' },
]

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
  radioBtn: {
    padding: spacing[4]
  },
  radioBtnItemText: {
    fontSize: 18,
    paddingVertical: spacing[2]
  },
  radioBtnView: {
    backgroundColor: color.palette.lowWhite,
    paddingHorizontal: spacing[4],
  },
})

export const LandingScreen = observer(function GoalsScreen() {
  const { onBoardingStore } = useStores()

  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("dueDate")

  const onClick = (e) => onBoardingStore.setGoal(e.label)

  const getStart = () => {
    const index = goals.map((goal) => goal.label).indexOf(onBoardingStore.goal)
    // since RadioButton start at 1 instead of 0
    // -1 not found
    return index !== -1 ? index + 1 : index
  }

  return (
    <Screen style={styles.container} preset="fixed">
      <Wallpaper />
      <SafeAreaView style={styles.bottom}>
        <View style={ styles.radioBtnView}>
          <Text preset={"title"} text="What are your goals?"/>
          <Text preset={"subtitle"} text="Help us tailor our program to your needs"/>
          <RadioButtonRN
            data={goals}
            selectedBtn={onClick}
            activeColor={color.palette.lightBlue}
            box={false}
            boxDeactiveBgColor=''
            textStyle={ styles.radioBtnItemText }
            style={ styles.radioBtn }
            initial={getStart()}
          />
        </View>
        <Button
          tx="welcomeScreen.continue"
          onPress={nextScreen}
          preset={onBoardingStore.goal ? "continue" : "disabled"}
          disabled={!onBoardingStore.goal}
        />
      </SafeAreaView>
    </Screen>
  )
})
