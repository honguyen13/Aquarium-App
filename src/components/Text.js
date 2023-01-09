// just copy this code from the driving repo :)
import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      body,
      size,
      transform,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      left,
      justify,
      spacing, // letter-spacing
      height, // line-height
      //flex
      flex,
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      blue,
      blue2,
      blue3,
      violet,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      body && styles.body,
      size && { fontSize: size },
      transform && { textTransform: transform },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      flex && { flex: flex},
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      left && styles.left,
      center && styles.center,
      right && styles.right,
      justify && styles.justify,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      blue && styles.blue,
      blue2 && styles.blue2,
      blue3 && styles.blue3,
      violet && styles.violet,
      style // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontFamily: "Lexend-Regular",
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  // variations
  regular: {
    fontWeight: "normal",
    fontFamily: "Lexend-Regular"
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Lexend-Bold"
  },
  semibold: {
    fontWeight: "500",
    fontFamily: "Lexend-SemiBold"
  },
  medium: {
    fontWeight: "500",
    fontFamily: "Lexend-Medium"
  },
  light: {
    fontWeight: "200",
    fontFamily: "Lexend-Light"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  left: { textAlign: "left" },
  justify: { textAlign: "justify"},
  // colors
  accent: { color: theme.colors.accent },
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  gray2: { color: theme.colors.gray2 },
  violet: { color: theme.colors.violet },
  blue: { color: theme.colors.blue },
  blue2: { color: theme.colors.blue2 },
  blue3: { color: theme.colors.blue3 },

  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  body: theme.fonts.body,
});