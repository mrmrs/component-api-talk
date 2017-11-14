import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import glamorous from 'glamorous'
import theme from './theme'
import buttonTheme from './buttonTheme'

const Box = glamorous.button({
  display: 'inline-block',
  fontFamily: theme.fonts[0]
})

const Header = glamorous.div({
  borderBottom: '1px solid black',
  padding: '.5rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const Div = glamorous.div({})

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <img src={logo} />
          Component API Examples
        </Header>
        <Div style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap' }}>
                  {buttonTheme.fontSizes && buttonTheme.fontSizes.map((fontSize, f) => (
                    <div>
              {buttonTheme.radii && buttonTheme.radii.map((radius, r) => (
                <div>
                          {buttonTheme.borderWidths && buttonTheme.borderWidths.map((borderWidth, w) => (
                            <div>
                      {buttonTheme.borderStyles && buttonTheme.borderStyles.map((borderStyle, b) => (
                        <div>
                              {buttonTheme.space && buttonTheme.space.map((x, s) => (
                                <div>
          {buttonTheme.colors && buttonTheme.colors.map((color, i) => (
            <div>
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.bg,
                                    backgroundColor: color.text,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x,
                                    paddingLeft: x,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.bg,
                                    backgroundColor: color.text,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x *2,
                                    paddingLeft: x *2,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.bg,
                                    backgroundColor: color.text,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x * 4,
                                    paddingLeft: x * 4,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.bg,
                                    backgroundColor: color.text,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x * 8,
                                    paddingLeft: x * 8,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.text,
                                    backgroundColor: color.bg,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x,
                                    paddingLeft: x,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.text,
                                    backgroundColor: color.bg,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x *2,
                                    paddingLeft: x *2,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.text,
                                    backgroundColor: color.bg,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x * 4,
                                    paddingLeft: x * 4,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                                <Box 
                                  key={i} 
                                  style={{
                                    borderRadius: radius,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth,
                                    borderColor: 'inherit',
                                    color: color.text,
                                    backgroundColor: color.bg,
                                    fontSize: fontSize,
                                    margin: 16,
                                    whiteSpace: 'nowrap',
                                    paddingRight: x * 8,
                                    paddingLeft: x * 8,
                                    paddingTop: x,
                                    paddingBottom: x,
                                  }} 
                                  children="Click Here" />
                              </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                  ))}
                </div>
              ))}
            </div>
          ))}
        </Div>
      </div>
    );
  }
}

export default App;
