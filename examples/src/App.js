import React, { Component, cloneElement } from 'react';
import logo from './logo.svg';
import './App.css';
import glamorous from 'glamorous'
import theme from './theme'
import buttonTheme from './buttonTheme'
import avatarTheme from './avatarTheme'
import paragraphTheme from './paragraphTheme'

import {liftN} from 'ramda';


const cssThemeMapping = {
  borderRadius: 'radii',
  padding: 'space',
  margin: 'space'
};

const Button = glamorous.button({
  display: 'inline-block',
  fontFamily: theme.fontFamily[0],
  marginBottom: 32,
  marginRight: 32,
  borderColor: 'inherit',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  borderColor: 'inherit',
})

const Avatar = glamorous.img({
  display: 'block',  
  width: '3rem',
  borderColor: 'black'
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
  constructor(props) {
    super();

    this.animationDuration = props.iterationSpeed;

    const properties = props.properties;

    const possibilities = Object.keys(properties).reduce((acc, style) =>
      acc.concat([properties[style].map(v => ({ [style]: v }))])
    , [])


    const themeLift = liftN(Object.keys(properties).length, (...args) =>
      Object.assign({}, ...args)
    )

    this.computedStyles = themeLift.apply(null, possibilities);

    // console.log(possibilities);
    // console.log(this.computedStyles);

    this.state = {
      step: 0
    };
  }

  componentDidMount() {
    const { properties } = this.props;
    

    this.interval = window.setInterval(() => {
      // const { scaleValues } = this.state;

      // const newScaleValues = {
      //   ...scaleValues
      // };

      // const propertyList = Object.keys(this.props.properties).reverse()
      // let shouldContinue = true;
      
      // propertyList.forEach(propertyName => {
      //   if (shouldContinue) {
      //     if (newScaleValues[propertyName] <= properties[propertyName].length - 1) {
      //       newScaleValues[propertyName] = newScaleValues[propertyName] + 1;
      //       shouldContinue = false;
      //     }
      //   }
      // });

      // this.setState({
      //   scaleValues: newScaleValues
      // })

      let step = this.state.step === (this.computedStyles.length - 1) ? 0 : this.state.step + 1;

      this.setState({
        step
      })
    }, this.animationDuration * 2);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  renderStyles() {
    const {scaleValues} = this.state;
    const styles = {};

    Object.keys(scaleValues).forEach(property => {
      styles[property] = this.props.properties[property][scaleValues[property]]
    })

    return styles;
  }

  render() {
    const originalStyles = this.props.children.style || {};
    return (
      // cloneElement(this.props.children, {style: {
      //   ...originalStyles,
      //   ...this.renderStyles(),
      //   transition: `${this.animationDuration}ms all ease-out`
      // }})
      cloneElement(this.props.children, {style: {
        ...originalStyles,
        ...this.computedStyles[this.state.step],
        transition: `${this.animationDuration}ms all ease-out`
      }})
    );
  }
}

TransitionWrapper.defaultProps = {
  iterationSpeed: 100
};


class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <img src={logo} />
          Component API Examples
        </Header>

        <h1 style={{ marginLeft: '1rem'}}>Avatars</h1>


        <div style={{paddingLeft: '1rem', height: '64px'}}>
          <TransitionWrapper
            properties={{
              borderRadius: avatarTheme.radii,
              borderStyle: avatarTheme.borderStyle,
              borderWidth: avatarTheme.borderWidth,
              padding: avatarTheme.space
            }}
          >
            <Avatar src='https://pbs.twimg.com/profile_images/908489471305195521/COgGX_oK_400x400.jpg' />
          </TransitionWrapper>
        </div>

        {/*
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
          */}


          <Div  style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap' }}>
            <h1 style={{ width: '100%' }}>Buttons</h1>

            <div style={{height: '64px'}}>
            <TransitionWrapper
              iterationSpeed={10}
              properties={{
                fontSize: buttonTheme.fontSize,
                fontWeight: buttonTheme.fontWeight,
                borderStyle: buttonTheme.borderStyle,
                borderWidth: buttonTheme.borderWidth,
                borderRadius: buttonTheme.radii,
                padding: buttonTheme.space,
                color: buttonTheme.colors.map(color => color.text),
                backgroundColor: buttonTheme.colors.map(color => color.bg)
              }}
            >
              <Button>Click me</Button>
            </TransitionWrapper>
            <TransitionWrapper
              iterationSpeed={10}
              properties={{
                fontSize: buttonTheme.fontSize,
                fontWeight: buttonTheme.fontWeight,
                borderStyle: buttonTheme.borderStyle,
                borderWidth: buttonTheme.borderWidth,
                borderRadius: buttonTheme.radii,
                padding: buttonTheme.space,
                color: buttonTheme.colors.map(color => color.bg),
                backgroundColor: buttonTheme.colors.map(color => color.text)
              }}
            >
              <Button>Click me</Button>
            </TransitionWrapper>
          </div>

          {/*
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
                                    <Button 
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
                                    <Button 
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
                                    <Button 
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
                                    <Button 
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
                                    <Button 
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
                                    <Button 
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
                                    <Button 
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
                                    <Button 
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
        */}
        </Div>
      </div>
        );
        }
  }

  export default App;
