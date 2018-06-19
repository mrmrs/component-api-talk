import theme from './theme'

const textInputTheme = {
  radii: [ 
    theme.radii[0],
    theme.radii[1],
    theme.radii[2],
  ],
  space: [
    theme.space[3],
    theme.space[4],
  ],
  fontSize: theme.fontSize.slice(0,-8),
  fontFamily: theme.fontFamily[0],
  fontWeight: theme.fontWeight,
  lineHeight: 1,
  borderStyle: [
    theme.borderStyle[0],
    theme.borderStyle[1]
  ],
  borderWidth: theme.borderWidth[1],
  colors: [
    {text: '#303031' , bg: '#f3f3f3'},
    {text: '#303031' , bg: '#fefefe'},
    {text: '#303031' , bg: '#ffffff'},
  ],


  // hover, focus, active states
  
  hoverColor: [ 
    theme.colors[0].text, 
    theme.colors[1].text 
  ],
  hoverBgColor: [ 
    theme.colors[0].bg, 
    theme.colors[0].bg 
  ],
  focusColor: [ 
    theme.colors[1].text, 
    theme.colors[1].bg 
  ],
  textTransform: ['uppercase', 'capitalized'],
  transitionProperty: ['opacity', 'color', 'background-color'],
  transitionDuration: ['.2s'],
  transitionTimingFunction: ['ease-in'],
}

export default textInputTheme
