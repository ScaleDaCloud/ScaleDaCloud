const colors  = {
  black:  "#1D1D24",
  brown:  "#BB8954",
  white:  "#EBE9E0",
  red:    "#984D51",
  purple: "#3A302F"
}

const theme = {
  colors: {
    background: colors.black,
    foreground: colors.white,
    primary: colors.white,
    danger: colors.red,
    warning: colors.brown,
    supporting: colors.purple
  },
  fontFamily: "'Baloo Da 2', cursive"
}

const sizes = {
  font: {
    baseSize: 16,
    smallSize: 14,
    title: 80,
    h1: 36,
    h2: 26,
    h3: 20,
    h4: 18
  },

  border: {
    radius: 6,
    size: 1
  },

  spacing: {
    padding: 25,
    margin: 0
  }
}

export { sizes, theme, colors }
