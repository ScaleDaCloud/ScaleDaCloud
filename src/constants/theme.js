const colors  = {
  black: "#1D1D24",
  brown: "#675148",
  lightgreen: "#9FC8B7",
  red: "#984D51",
  yellow: "#D5C775"
}

const theme = {
  colors: {
    background: colors.black,
    foregroud: colors.lightgreen,
    danger: colors.red,
    warning: colors.yellow,
    supporting: colors.brown
  }
}

const sizes = {
  font: {
    baseSize: 16,
    smallSize: 14,
    title: 20,
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