const theme = {
  breakpoints: [
    36, 48, 64
  ],
  fontFamily:[ "Gotham", "Athelas" ],
  fontSize: [
    10, 12, 14, 16, 20, 24, 32, 48, 64, 96, 128
  ],
  fontWeight: [ 400, 700 ],
  lineHeight: [1, 1.25, 1.5],
  colors: [
    { text: "#000", bg: "#fff" },
    { text: "#374047", bg: "#f8f9f9" },
    { text: "#7f8a93", bg: "#f8f9f9" },
    { text: "#0077cc", bg: "#f8f9f9" },
    { text: "#005da0", bg: "#f8f9f9" },
    { text: "#00365d", bg: "#f8f9f9" },
  ],
  borderStyle: [ 'solid', 'double' ],
  borderWidth: [ 0, 1, 2  ],
  borderDirection: ['all', 'top', 'bottom' ],
  radii: [
    0, 2, 4, 8, 9999
  ],
  space: [
    0, 2, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  measure: ['20em', '30em', '34em'],
  boxShadow: [ '0 0 16px rgba(0,0,0,.2)' ],
  gradientDirection: ['45deg', '90deg'],
}

export default theme
