import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const stylesHome = StyleSheet.create({
    container: {
        width: '100%'
    },
    welcomeText: {
        fontWeight: "bold",
        fontSize: SIZES.xxLarge
    },
    buttonArea: {
        width: SIZES.width,
        height: SIZES.height,
        backgroundColor: COLORS.secondary
    }
})

export default stylesHome;