/**
 * An object with the activity levels for the onBoarding
 *
 */
type LevelsType = Record<number, string>;

const levels: LevelsType = {
  1: 'I don’t exercise',
  2: 'I rarely exercise',
  3: 'I sometimes exercise',
  4: 'I regularly exercise',
  5: 'I often exercise',
}

export default levels
