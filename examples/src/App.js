import React, { Component, cloneElement } from 'react';
import logo from './logo.svg';
import './App.css';
import glamorous from 'glamorous'
import { ThemeProvider } from 'glamorous' 
import {space, width, fontSize, color} from 'styled-system' 
import theme from './theme'
import buttonTheme from './buttonTheme'
import avatarTheme from './avatarTheme'
import moduleWrapperTheme from './moduleWrapperTheme'
import moduleActionsTheme from './moduleActionsTheme'
import moduleContentTheme from './moduleContentTheme'
import cardTitleTheme from './cardTitleTheme'
import cardSubtitleTheme from './cardSubtitleTheme'
import paragraphTheme from './paragraphTheme'

import {liftN} from 'ramda';

const cssThemeMapping = {
  borderRadius: 'radii',
  padding: 'space',
  margin: 'space'
};

const ModuleWrapper = glamorous.div(space, width, fontSize, color, {
  display: 'flex',
  overflow: 'hidden',
  maxWidth: '64em'
})

const Button = glamorous.button( space, color, width, fontSize, {
  display: 'inline-block',
  fontFamily: theme.fontFamily[0],
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

const Div = glamorous.div(space, width, color, fontSize)
const H2 = glamorous.h2(space, width, color, fontSize)
const H3 = glamorous.h3(space, width, color, fontSize)

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
        transition: `${this.animationDuration}ms all ease-in`
      }})
    );
  }
}

TransitionWrapper.defaultProps = {
  iterationSpeed: 250
};


class App extends Component {
  render() {
    return (
      <Div style={{fontFamily: "'Open sans', 'Helvetica Neue', helvetica, sans-serif"}}>
      <ThemeProvider theme={theme}>
      <div>
        <Header>
          <img src={logo} />
          Component API Examples
        </Header>
        <h1 style={{ marginLeft: '1rem'}}>Card</h1>
          <Div px={4}>
            <TransitionWrapper
              iterationSpeed={500}
              properties={{
                borderRadius: moduleWrapperTheme.radii,
                borderStyle: moduleWrapperTheme.borderStyle,
                borderWidth: moduleWrapperTheme.borderWidth,
                borderColor: moduleWrapperTheme.borderColor,
              }}
            >
              <ModuleWrapper mx='auto'>

                  <TransitionWrapper
                    properties={{
                      backgroundColor: moduleContentTheme.backgroundColor,
                      padding: moduleContentTheme.space
                    }}>
                    <Div w={2/3}>
                    <TransitionWrapper
                      properties={{
                        fontSize: cardTitleTheme.fontSize,
                        fontWeight: cardTitleTheme.fontWeight,
                      }}>
                        <H2 my={0} children="Standard Card Title" />
                      </TransitionWrapper>
                      <TransitionWrapper
                        properties={{
                          fontSize: cardSubtitleTheme.fontSize,
                          fontWeight: cardSubtitleTheme.fontWeight,
                        }}>
                        <H3 mt={2} children="Random Subtitle for Card" />
                      </TransitionWrapper>
                      <P>
                        Clear cached files to force Cloudflare to fetch a fresh version of those files from your web server. You can purge files selectively or all at once.
                      </P>
                      <P>
                        <b>Note:</b> Purging the cache may temporarily degrade performance for your website.
                      </P>
                    </Div>
                  </TransitionWrapper>
                  <TransitionWrapper
                    properties={{
                      backgroundColor: moduleActionsTheme.backgroundColor,
                      padding: moduleActionsTheme.space
                    }}>
                <Div w={1/3} style={{ display: 'flex', alignItems: 'center', height: '100%', borderLeftWidth: '1px', borderLeftStyle: 'solid'  }}>
                    <Div w={1}  style={{height: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Div w={1}>
                        <TransitionWrapper
                          iterationSpeed={125}
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
                          <Button w={1} my={3}>Click me</Button>
                        </TransitionWrapper>
                        <TransitionWrapper
                          iterationSpeed={125}
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
                          <Button w={1} my={3}>Click me</Button>
                        </TransitionWrapper>
                      </Div>
                    </Div>
                </Div>
                  </TransitionWrapper>
              </ModuleWrapper>
            </TransitionWrapper>
          </Div>

          <Div  style={{ padding: '1rem', display: 'none', flexWrap: 'wrap' }}>
            <h1 style={{ width: '100%' }}>Buttons</h1>

            <div style={{height: '64px'}}>
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
        </Div>
      </div>
      </ThemeProvider>
    </Div>
    );
  }
}

export default App;

