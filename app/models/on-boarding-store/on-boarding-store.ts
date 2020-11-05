import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const OnBoardingStoreModel = types
  .model("OnBoardingStore")
  .props({
    goal: types.maybe(types.string),
    dueDate: types.maybe(types.Date),
    activityLevel: types.optional(types.number, 1)
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    setDueDate(date: Date) {
      self.dueDate = date
    },
    setGoal(goal: string) {
      self.goal = goal
    },
    setActivityLevel(level: number) {
      self.activityLevel = level
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type OnBoardingStoreType = Instance<typeof OnBoardingStoreModel>
export interface OnBoardingStore extends OnBoardingStoreType {}
type OnBoardingStoreSnapshotType = SnapshotOut<typeof OnBoardingStoreModel>
export interface OnBoardingStoreSnapshot extends OnBoardingStoreSnapshotType {}
