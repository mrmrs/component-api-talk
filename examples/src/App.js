import React, { Component, cloneElement } from 'react';
import logo from './logo.svg';
import './App.css';
import glamorous from 'glamorous'
import theme from './theme'
import buttonTheme from './buttonTheme'
import avatarTheme from './avatarTheme'
import paragraphTheme from './paragraphTheme'

const Box = glamorous.button({
  display: 'inline-block',
  fontFamily: theme.fontFamily[0],
  marginBottom: 32,
  marginRight: 32,
})

const Avatar = glamorous.img({
  display: 'block',  
  width: '3rem'
})

const P = glamorous.p({
  marginBottom: 32,
  marginRight: 32,
  display: 'inline-block',
  verticalAlign: 'top',
})



const Header = glamorous.div({
  borderBottom: '1px solid black',
  padding: '.5rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const Div = glamorous.div({})

const randomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)]
};

class TransitionWrapper extends Component {
  constructor() {
    super();

    this.animationDuration = 250;

    this.state = {
      style: {
        transition: `${this.animationDuration}ms all ease-out`
      }
    };
  }

  componentDidMount() {
    const { properties } = this.props;

    this.interval = window.setInterval(() => {
      const properties = {};

      Object.keys(this.props.properties).forEach(propertyName => {
        if (Array.isArray(this.props.properties[propertyName])) {
          properties[propertyName] = randomValue(this.props.properties[propertyName])
        } else {
          properties[propertyName] = this.props.properties[propertyName]
        }
      });

      this.setState({
        style: {
          ...this.state.style,
          ...properties
        }
      })
    }, this.animationDuration * 2);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      cloneElement(this.props.children, {style: this.state.style})
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <img src={logo} />
          Component API Examples
        </Header>


        <div style={{ padding: '1rem'}}>
          <h1>Avatars</h1>
          <TransitionWrapper
            properties={{
              borderRadius: avatarTheme.radii,
              padding: avatarTheme.space,
              borderWidth: avatarTheme.borderWidth,
              borderStyle: avatarTheme.borderStyle,
              borderColor: 'black'
            }}
          >
            <Avatar src='https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg' />
          </TransitionWrapper>
        </div>

        <div style={{ padding: '1rem'}}>
          <h1>Buttons</h1>
          <TransitionWrapper
            properties={{
              borderRadius: buttonTheme.radii,
              borderStyle: buttonTheme.borderStyle,
              borderWidth: buttonTheme.borderWidth,
              borderColor: 'inherit',
              color: buttonTheme.colors.map(color => color.bg),
              backgroundColor: buttonTheme.colors.map(color => color.text),
              fontSize: buttonTheme.fontSize,
              fontWeight: buttonTheme.fontWeight,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              padding: buttonTheme.space
            }}
          >
            <Box>Click here</Box>
          </TransitionWrapper>
        </div>

        {/*

        <h1 style={{ marginLeft: '1rem'}}>Avatars</h1>

        <Div style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap' }}>
        {avatarTheme.radii && avatarTheme.radii.map((radius, r) => (
              <div style={{display: 'flex' }} >
                {avatarTheme.borderStyle && avatarTheme.borderStyle.map((borderStyle, b) => (
          <div style={{display: 'flex'}}>
                {avatarTheme.borderWidth && avatarTheme.borderWidth.map((borderWidth, b) => (
              <div>
            {avatarTheme.space && avatarTheme.space.map((x, s) => (
                <Avatar 
                  key={10 * 2/3 + x + r}
                  src='https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg'
                  style={{
                    borderRadius: radius,
                    padding: x,
                    borderWidth: borderWidth,
                    borderColor: 'black',
                    borderStyle: borderStyle,
                    marginRight: 16,
                    marginBottom: 16

                  }} />
              ))}
            </div>
              ))}
            </div>
              ))}
            </div>
          ))}
          </Div>
          <Div  style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap' }}>
            <h1 style={{ width: '100%' }}>Buttons</h1>

          {buttonTheme.fontSize && buttonTheme.fontSize.map((fontSize, f) => (
            <div>
              <h2>{fontSize}</h2>
            {buttonTheme.fontWeight && buttonTheme.fontWeight.map((fontWeight, w) => (
              <div>
                {buttonTheme.borderStyle && buttonTheme.borderStyle.map((borderStyle, b) => (
                  <div>
                    {buttonTheme.borderWidth && buttonTheme.borderWidth.map((borderWidth, w) => (
                      <div>
                        {buttonTheme.radii && buttonTheme.radii.map((radius, r) => (
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
                                        fontWeight: fontWeight,
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
                                        fontWeight: fontWeight,
                                        color: color.bg,
                                        backgroundColor: color.text,
                                        fontSize: fontSize,
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
                                        fontWeight: fontWeight,
                                        color: color.bg,
                                        backgroundColor: color.text,
                                        fontSize: fontSize,
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
                                        fontWeight: fontWeight,
                                        backgroundColor: color.text,
                                        fontSize: fontSize,
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
                                        fontWeight: fontWeight,
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
                                        fontWeight: fontWeight,
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
                                        fontWeight: fontWeight,
                                        fontSize: fontSize,
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
                                        fontWeight: fontWeight,
                                        fontSize: fontSize,
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
          </div>
          ))}
        </Div>
        */}
      </div>
        );
        }
  }

  export default App;
