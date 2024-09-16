import * as tokens from "@bcgov/design-tokens/js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    padding: {
      hair: tokens.layoutPaddingHair,
      xs: tokens.layoutPaddingXsmall,
      sm: tokens.layoutPaddingSmall,
      md: tokens.layoutPaddingMedium,
      lg: tokens.layoutPaddingLarge,
      xl: tokens.layoutPaddingXlarge,
      huge: tokens.layoutMarginHuge,
    },
    margin: {
      hair: tokens.layoutMarginHair,
      xs: tokens.layoutMarginXsmall,
      sm: tokens.layoutMarginSmall,
      md: tokens.layoutMarginMedium,
      lg: tokens.layoutMarginLarge,
      xl: tokens.layoutMarginXlarge,
      '2xl': tokens.layoutMarginXxlarge,
      '3xl': tokens.layoutMarginXxxlarge,
      huge: tokens.layoutMarginHuge,
    },
    borderRadius: {
      none: tokens.layoutBorderRadiusNone,
      sm: tokens.layoutBorderRadiusSmall,
      md: tokens.layoutBorderRadiusMedium,
      lg: tokens.layoutBorderRadiusLarge,
      full: '9999px',
      DEFAULT: tokens.layoutBorderRadiusMedium,
    },
    borderWidth: {
      none: tokens.layoutBorderWidthNone,
      sm: tokens.layoutBorderWidthSmall,
      md: tokens.layoutBorderWidthMedium,
      lg: tokens.layoutBorderWidthLarge,
      DEFAULT: tokens.layoutBorderWidthSmall,
    },
    boxShadow: {
      none: 'none',
      xs: tokens.surfaceShadowNone,
      sm: tokens.surfaceShadowSmall,
      md: tokens.surfaceShadowMedium,
      lg: tokens.surfaceShadowLarge,
      DEFAULT: tokens.surfaceShadowSmall,
    },
    extend: {
      colors: {
        primaryBlue: tokens.themePrimaryBlue,
        primaryGold: tokens.themePrimaryGold,
        white: tokens.themeGrayWhite,
        black: tokens.themeGray110,
        primary: tokens.typographyColorPrimary,
        primaryInvert: tokens.typographyColorPrimaryInvert,
        secondary: tokens.typographyColorSecondary,
        secondaryInvert: tokens.typographyColorSecondaryInvert,
        disabled: tokens.typographyColorDisabled,
        placeholder: tokens.typographyColorPlaceholder,
        danger: tokens.typographyColorDanger,
        link: tokens.typographyColorLink,
        info: tokens.iconsColorInfo,
        success: tokens.iconsColorSuccess,
        warning: tokens.iconsColorWarning,
        surface: {
          info: tokens.supportSurfaceColorInfo,
          success: tokens.supportSurfaceColorSuccess,
          warning: tokens.supportSurfaceColorWarning,
          danger: tokens.supportSurfaceColorDanger,
          primary: tokens.surfaceColorPrimaryButtonDefault,
          secondary: tokens.surfaceColorSecondaryButtonDefault,
          tertiary: tokens.surfaceColorTertiaryButtonDefault,
          form: tokens.surfaceColorFormsDefault,
          menu: tokens.surfaceColorMenusDefault,
          primaryHover: tokens.surfaceColorPrimaryButtonHover,
          secondaryHover: tokens.surfaceColorSecondaryButtonHover,
          tertiaryHover: tokens.surfaceColorSecondaryButtonHover,
          dangerHover: tokens.surfaceColorPrimaryDangerButtonHover,
          formHover: tokens.surfaceColorFormsDisabled,
          menuHover: tokens.surfaceColorMenusHover,
          primaryDisabled: tokens.surfaceColorPrimaryButtonDisabled,
          secondaryDisabled: tokens.surfaceColorSecondaryButtonDisabled,
          tertiaryDisabled: tokens.surfaceColorTertiaryButtonDisabled,
          dangerDisabled: tokens.surfaceColorPrimaryDangerButtonDisabled,
          formDisabled: tokens.surfaceColorFormsDisabled,
        },
        bcdsGold: {
          10: tokens.themeGold10,
          20: tokens.themeGold20,
          30: tokens.themeGold30,
          40: tokens.themeGold40,
          50: tokens.themeGold50,
          60: tokens.themeGold60,
          70: tokens.themeGold70,
          80: tokens.themeGold80,
          90: tokens.themeGold90,
          100: tokens.themeGold100,
        },
        bcdsBlue: {
          10: tokens.themeBlue10,
          20: tokens.themeBlue20,
          30: tokens.themeBlue30,
          40: tokens.themeBlue40,
          50: tokens.themeBlue50,
          60: tokens.themeBlue60,
          70: tokens.themeBlue70,
          80: tokens.themeBlue80,
          90: tokens.themeBlue90,
          100: tokens.themeBlue100,
        },
        bcdsGray: {
          10: tokens.themeGray10,
          20: tokens.themeGray20,
          30: tokens.themeGray30,
          40: tokens.themeGray40,
          50: tokens.themeGray50,
          60: tokens.themeGray60,
          70: tokens.themeGray70,
          80: tokens.themeGray80,
          90: tokens.themeGray90,
          100: tokens.themeGray100,
          110: tokens.themeGray110,
        },
      },
      fontFamily: {
        sans: tokens.typographyFontFamiliesBcSans,
      },
      fontSize: {
        base: tokens.typographyFontSizeBody,
        xs: tokens.typographyFontSizeLabel,
        sm: tokens.typographyFontSizeSmallBody,
        body: tokens.typographyFontSizeBody,
        md: tokens.typographyFontSizeBody,
        lg: tokens.typographyBoldLargeBody,
        xl: tokens.typographyFontSizeH5,
        '2xl': tokens.typographyFontSizeH4,
        '3xl': tokens.typographyFontSizeH3,
        '4xl': tokens.typographyFontSizeH2,
        '5xl': tokens.typographyFontSizeH1,
        '6xl': tokens.typographyFontSizeDisplay,
      },
      lineHeight: {
        none: '1',
        xxsparse: tokens.typographyLineHeightsXxsparse,
        xsparse: tokens.typographyLineHeightsXsparse,
        sparse: tokens.typographyLineHeightsSparse,
        relaxed: tokens.typographyLineHeightsSparse,
        regular: tokens.typographyLineHeightsRegular,
        dense: tokens.typographyLineHeightsDense,
        xdense: tokens.typographyLineHeightsXdense,
        xxdense: tokens.typographyLineHeightsXxdense,
        xxxdense: tokens.typographyLineHeightsXxxdense,
      },
    },
  },
  plugins: [],
};
