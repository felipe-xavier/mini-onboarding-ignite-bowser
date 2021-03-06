import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 0,
  justifyContent: "center",
  alignItems: "center",
  height: 70,
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
}

const BOTTOM_BUTTON: TextStyle = {
  ...BASE_TEXT,
  color: color.palette.white,
  fontFamily: typography.primary,
  fontSize: 16,
  fontWeight: "bold",
  letterSpacing: 2,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondary information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.palette.orange } as ViewStyle,

  continue: { ...BASE_VIEW, backgroundColor: color.palette.lightBlue } as ViewStyle,

  disabled: { ...BASE_VIEW, backgroundColor: color.palette.lightGrey } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,

  continue: { ...BOTTOM_BUTTON } as TextStyle,

  disabled: { ...BOTTOM_BUTTON } as TextStyle,

  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
