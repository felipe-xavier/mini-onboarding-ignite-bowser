import { OnBoardingStoreModel, OnBoardingStore } from "./on-boarding-store"

test("can be created empty", () => {
  const instance: OnBoardingStore = OnBoardingStoreModel.create({})

  expect(instance).toBeTruthy()
})

test("can be created with a state", () => {
  const testDate = new Date()
  const instance: OnBoardingStore = OnBoardingStoreModel.create({
    goal: 'Some Goal',
    dueDate: testDate,
    activityLevel: 1,
  })

  expect(instance).toBeTruthy()
  expect(instance.goal).toEqual('Some Goal')
  expect(instance.dueDate).toEqual(testDate)
  expect(instance.activityLevel).toEqual(1)
})

test("can be created empty and apply set actions", () => {
  const testDate = new Date()
  const instance: OnBoardingStore = OnBoardingStoreModel.create({})

  instance.setGoal('Some Goal')
  instance.setDueDate(testDate)
  instance.setActivityLevel(1)

  expect(instance).toBeTruthy()
  expect(instance.goal).toEqual('Some Goal')
  expect(instance.dueDate).toEqual(testDate)
  expect(instance.activityLevel).toEqual(1)
})
