import React from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { useNavigation } from "@react-navigation/native"
import DatePicker from 'react-native-date-picker'
import { useStores } from "../../models"
import { color, spacing } from "../../theme"

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
  subtitleText: {
    paddingBottom: spacing[6],
  },
})

export const DueDateScreen = observer(function DueDateScreen() {
  const { onBoardingStore } = useStores()

  const setDate = (date: Date) => {
    onBoardingStore.setDueDate(date)
  }

  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const nextScreen = () => navigation.navigate("activityLevel")

  const addMonths = (dt, n) => {
    return new Date(dt.setMonth(dt.getMonth() + n))
  }

  // Set restrictions for Data Picker. No less then today and no longer then 9 months from now.
  const today = new Date()
  const future = addMonths(new Date(), 9)

  return (
    <Screen style={styles.container} preset="fixed">
      <Wallpaper />
      <SafeAreaView>
        <Header
          leftIcon="back"
          onLeftPress={goBack}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.bottom}>
        <View style={styles.datePickerView}>
          <Text preset={"title"} text="Select your estimated due date."/>
          <Text preset={"subtitle"} style={styles.subtitleText} text="No earlier than today and no more than 9 months."/>
          <DatePicker
            date={onBoardingStore.dueDate ? onBoardingStore.dueDate : today}
            onDateChange={setDate}
            mode={'date'}
            minimumDate={today}
            maximumDate={future}
          />
        </View>
        <Button
          tx="welcomeScreen.continue"
          onPress={nextScreen}
          preset="continue"
        />
      </SafeAreaView>
    </Screen>
  )
})
