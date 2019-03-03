const animationEffect = (laziness = 1) =>
  `${0.12 * laziness}s cubic-bezier(0, 0, 0.2, 1)`

const shadowEffect = (elevation = 1) => `0 0 ${0.125 * elevation}em 0`

export default {
  font: 'LatoLatin,Helvetica,Arial,sans-serif',
  shade: Object.assign('#6f6f6f', {
    _100: '#ffffff',
    _200: '#f6f6f6',
    _300: '#d4d4d4',
    _400: '#a1a1a1',
    _500: '#6f6f6f',
    _600: '#545454',
    _700: '#3b3b3b',
    _800: '#262626',
    _900: '#000000'
  }),
  primary: Object.assign('#349aee', {
    _100: '#daecfb',
    _200: '#b5daf8',
    _300: '#46a3ef',
    _400: '#46a3ef',
    _500: '#349aee',
    _600: '#2b7fc3',
    _700: '#226398',
    _800: '#18466d',
    _900: '#0f2a41'
  }),
  secondary: Object.assign('#ffcc00', {
    _100: '#ffeca2',
    _200: '#ffe373',
    _300: '#ffde5c',
    _400: '#ffd945',
    _500: '#ffcc00',
    _600: '#f2af07',
    _700: '#f49a04',
    _800: '#ea6808',
    _900: '#d85f08'
  }),
  error: Object.assign('#d40511', {
    _100: '#f5a1a5',
    _200: '#ed565e',
    _300: '#e9313b',
    _400: '#e80511',
    _500: '#d40511',
    _600: '#be0511',
    _700: '#aa0511',
    _800: '#8c0511',
    _900: '#640511'
  }),
  success: Object.assign('#64be64', {
    _100: '#c6e7c6',
    _200: '#aadbaa',
    _300: '#8ecf8e',
    _400: '#72c372',
    _500: '#64be64',
    _600: '#529c52',
    _700: '#407940',
    _800: '#2e572e',
    _900: '#1c341c'
  }),
  animate: Object.assign(animationEffect(), {
    _100: animationEffect(),
    _200: animationEffect(2),
    _300: animationEffect(3),
    _400: animationEffect(4),
    _500: animationEffect(5),
    _600: animationEffect(6),
    _700: animationEffect(7),
    _800: animationEffect(8),
    _900: animationEffect(9)
  }),
  edge: Object.assign('2px', {
    normal: '2px',
    square: '0px',
    smooth: '4px',
    round: '100%'
  }),
  elevation: Object.assign(shadowEffect(2), {
    _100: shadowEffect(1),
    _200: shadowEffect(2),
    _300: shadowEffect(3),
    _400: shadowEffect(4),
    _500: shadowEffect(4),
    _600: shadowEffect(6),
    _700: shadowEffect(7),
    _800: shadowEffect(8),
    _900: shadowEffect(9)
  })
}
