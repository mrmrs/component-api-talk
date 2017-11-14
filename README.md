# Component API

I read a book one time called 'Refactoring your wetware'. There was an
interesting part about thinking about a problem as if you were looking at it
from 10 thousand feet up in the air. 

I was driving in Sunday morning traffic one time. I was on my way from San
Francisco to a flea market. The GPS in my car told me there was an exit coming
up I should take and that I should get into one of the two lanes on the right.
About a dozen blinkers turned on at the exact same time and cars started to
merge into the right two lanes. From 10k feet up i bet that looks pretty wild.
You hear an automated voice. All cars put on their blinker at the same time to
break off from the highway to head to the same destination. 


*Two completely different view points*
<img src='https://github.com/mrmrs/component-api-talk/blob/master/slides/fff.jpg?raw=true' />
<img src='https://github.com/mrmrs/component-api-talk/blob/master/slides/ggg.jpg?raw=true' />

So. I'm here to talk about Design systems, Css, Js and of course Css in Js.
And what does that look like if we as a community try to think at 10k feet?
Now when I say 10,000 feet I do mean you should visualize being far above
something. But what is the thing?  One thing I meditate on is looking at a
timeline from very far away. And if we look at a timeline of how humans have
designed and built things throughout history...how do the problems and the process in
which we solve them evolve?

A guy I collaborate with that goes by the name John Otander (@4lpine) is pretty
good at thinking at 10k feet. He comes up with wild ideas. He decided to
download the css for top million websites, in 1 month intervals, dating back to
2005 (If available).

My first thought was - that's pretty neat. We can show people their css graphed
out over time. 

<img src='https://github.com/mrmrs/component-api-talk/blob/master/slides/hhi.jpg?raw=true' />

<img src='https://github.com/mrmrs/component-api-talk/blob/master/slides/hhj.jpg?raw=true' />

*But, again, what does it look like to see this at 10,000 feet?*

- Can analyze values and look for trends
- Find most common property value rules for given components with common class names
- Look at outliers
- Find common mistakes and try to build tools to solve them
- Could overlay other data: Browser usage, timeline of introduction of various technologies (frameworks, addiitons to the spec, etc.)
- We can visualize the history of design systems. We can animate them and watch how they evolve over time! 
- Given an array of urls, you could visualize the intersection of common values
  for things like: type scale, colors, background colors, font-family. This can
  help show ow consistently your brand is implmented across a number of
  different front-end code bases. Most companies have different code bases
  for: their marketing site, their blog, their app, docs, external status
  page, and potentially a number of other micro sites. Having a feedback
  loop of common values can be helpful when trying to standardize an
  existing palette, or creating a feedback loop moving forward o nif you
  are becoming more or less consistent.

[Harley Turan](https://twitter.com/hturan), scraped a bunch of data and did exactly this.
[Style Guide Audit gif/video]

Now those are just a few half-baked ideas of what you can do to analyze static
files. And I'd love to do nothing else then to sit and chat about what we can do with
all of this data but that's a different story for a different time. 

Below is a list of css properties. I often think of css as the styling api for
html. At first glance it's a lot of stuff. Especially if you're a beginner. 

But you can build a lot of pretty neat UI without worrying about a lot of these
properties and how they work. When I am a beginner one of the most difficult
things is figuring out what to worry about and what not to. I can confidently
say, I've never needed to set caption-side when styling a buttonon . Or
counter-increment, or counter-reset for that matter. This doesn't mean you
should never use them, but they aren't common properties attached to button
styles.

It could potentially make front-end code more accessible for new people, if a
set of components, essentially had all of the visual styling properties
exposed, where a designer could configure the values they want to pass in.
Instead of a blank slate, they could discover common things to account for for
different components. The pseudo state :focus would be a tough thing to
intuitively account for. Offering it in configuration can at 
the very least, offer guidance of suggested things to research. 

```
accelerator
azimuth
background
background-attachment
background-color
background-image
background-position
background-position-x
background-position-y
background-repeat
behavior
border
border-bottom
border-bottom-color
border-bottom-style
border-bottom-width
border-collapse
border-color
border-left
border-left-color
border-left-style
border-left-width
border-right
border-right-color
border-right-style
border-right-width
border-spacing
border-style
border-top
border-top-color
border-top-style
border-top-width
border-width
bottom
caption-side
clear
clip
color
content
counter-increment
counter-reset
cue
cue-after
cue-before
cursor
direction
display
elevation
empty-cells
filter
float
font
font-family
font-size
font-size-adjust
font-stretch
font-style
font-variant
font-weight
height
ime-mode
include-source
layer-background-color
layer-background-image
layout-flow
layout-grid
layout-grid-char
layout-grid-char-spacing
layout-grid-line
layout-grid-mode
layout-grid-type
left
letter-spacing
line-break
line-height
list-style
list-style-image
list-style-position
list-style-type
margin
margin-bottom
margin-left
margin-right
margin-top
marker-offset
marks
max-height
max-width
min-height
min-width
orphans
outline
outline-color
outline-style
outline-width
overflow
overflow-X
overflow-Y
padding
padding-bottom
padding-left
padding-right
padding-top
page
page-break-after
page-break-before
page-break-inside
pause
pause-after
pause-before
pitch
pitch-range
play-during
position
quotes
-replace
richness
right
ruby-align
ruby-overhang
ruby-position
-set-link-source
size
speak
speak-header
speak-numeral
speak-punctuation
speech-rate
stress
scrollbar-arrow-color
scrollbar-base-color
scrollbar-dark-shadow-color
scrollbar-face-color
scrollbar-highlight-color
scrollbar-shadow-color
scrollbar-3d-light-color
scrollbar-track-color
table-layout
text-align
text-align-last
text-decoration
text-indent
text-justify
text-overflow
text-shadow
text-transform
text-autospace
text-kashida-space
text-underline-position
top
unicode-bidi
-use-link-source
vertical-align
visibility
voice-family
volume
white-space
widows
width
word-break
word-spacing
word-wrap
writing-mode
z-index
zoom
```

Some people [jxnblk](http://jxnblk.com) have told me that Component API is a horrible name for
this concept and he's likely correct. Regardless, I think the following
descriptions, from a website called wikipedia, are interesting to consider.

*API: Application programming interface*

> "In general terms, it is a set of clearly defined methods of communication between various software components."

> "By abstracting the underlying implementation and only exposing objects or actions the developer needs, an API simplifies programming."

> "Thus, the design of an API attempts to provide only the tools a user would expect."

[https://en.wikipedia.org/wiki/Application_programming_interface](https://en.wikipedia.org/wiki/Application_programming_interface)

When I'm styling a button, I don't expect to use volume. Or page-break. Or a
number of other properties. The goal though is not to eliminate options, it's
to narrow focus on the essential, allowing for expansion and exploration if
necessary. But this idea defining a component API has benefits extending beyond
this. 

The most influential tip on how to think about designing a component I've ever
seen is from Nicole Sullivan's excellent article [The media object saves hundreds of lines of code](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)

> "When I’m building a new object, the first thing I do is to figure out which parts are reusable components, and define what I know and do not know about them."
> "For example: Can be nested, Optional right button, Must clearfix"
- [Nicole Sullivan](http://stubbornella.org)

I can't recommend this process for designing and developing components enough.
One of the things I like about react + css in js, is that it's easy to work
within this mental model. It's helpful to actively think and sketch out what
you know and what you don't know. This can help you build components that are
more flexible and reusable.

So, say we defined some scales, or options to work with for the following
properties. 

#### Typography
- Font-family
- Line-height
- Type-scale
- Measure
- Weights
- Text Transform

#### Layout
-Spacing

#### Theme
- Colors
- Border Widths
- Border Colors
- Border Radii
- Box Shadows
  
#### Motion
- Animation speed
- Easing Functions
- Movement patterns 

Maybe this would look something like this

```
const theme = {
  breakpoints: [
    36, 48, 64
  ],
  fontFamily:[ "Gotham", "Athelas", "'Proxima Nova'" ],
  fontSize: [
    10, 12, 14, 16, 20, 24, 32, 48, 64, 96, 128
  ],
  fontWeight: [ 400, 600, 700 ],
  lineHeight: [1, 1.25, 1.5],
  colors: [
    { text: "#000", bg: "#fff" },
    { text: "#374047", bg: "#f8f9f9" },
    { text: "#7f8a93", bg: "#f8f9f9" },
    { text: "#0077cc", bg: "#f8f9f9" },
    { text: "#005da0", bg: "#f8f9f9" },
    { text: "#00365d", bg: "#f8f9f9" },
    { text: "#00a243", bg: "#fff" },
  ],
  borderStyle: [ 'solid', 'double', 'dotted' ],
  borderWidth: [ 0, 1, 2, 4 ],
  borderDirection: [
    'all', 
    'top',
    'bottom' 
  ],
  radii: [
    0, 2, 4, 8, 16, 9999
  ],
  space: [
    0, 2, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  measure: ['20em', '30em', '34em'],
  boxShadow: [ '0 0 16px rgba(0,0,0,.2)' ],
}

export default theme
```    

Some of you might have already seen a file like this before. Maybe it was a js
file, maybe it was a sass, less, or stylus file. This is pretty boring. It's
just a theme.

Thinking about the previous quote by Nicole Sullivan...  What if I had to
design a button and I wanted it to use values from our design system. We could
define the styling API for a button. People love buttons.  Potentially, we
could define a template for a button styling API.  So we'd need to think about
which properties we always want exposed. I think it's safe to say that people
should be able to set background color on a button. The default color doesn't
cut it.  It's reasonable for a well designed interface to have buttons with
different background colors.  As a section in the button API we'd also want to
declare which properties should be exposed on hover.  I believe it's reasonable
to change the background color on hover. So that should also be apart of the
API. Returning to the base part of the button API, it would be seemingly
reasonable to be able to set the font-weight to something other than the
default. In all my years of browsing the web I've never hovered on a button and
seen the font-weight change and thought "This is nice." My first thought is
generally "well this must be a bug." So here we could leave font-weight out of
the hover, focus, and active sections in the API. 

A generic template for a button styling API might look like this: 

```
import theme from './theme'

const buttonThemeTemplate = {

  // Typography 
  fontFamily: [ ],
  fontSize: [ ],
  fontWeight: [ ],
  textTransform: [ ],

  // Palette
  colors: [ ],
  backgroundColors: [ ],

  // Borders
  borderColors: [ ]
  borderRadius: [ ],
  borderStyle: [ ],
  borderWidth: [ ],
  borderDirections: [ ],

  // Spacing
  paddingTop: [], 
  paddingLeft: [], 
  paddingBottom: [], 
  paddingRight: [], 

  // Hover states
  hoverColor: [ ],
  hoverBg: [ ],
  hoverBoxShadow: [ ],
  hoverBorderColor: [ ],
  hoverSize: [ ],
  
  // Focus states
  focusColor: [ ],
  focusBg: [ ],
  focusBorderColor: [ ],
  focusBoxShadow: [ ],
  focusSize: [ ],

  // Focus states
  activeColor: [ ],
  activeBg: [ ],
  activeBorderColor: [ ],
  activeBoxShadow: [ ],
  activeSize: [ ],

  transitionProperty: [ ],
  transitionDuration: [ ],
  transitionTimingFunction: [ ],
}

export default buttonThemeTemplate
``` 

Then we could define what values we want to pass in. We might pass in an entire
array, declare literal values, pass in a filtered array. We have javascript. We
can do whatever we want!

```
import theme from './theme'

const buttonTheme = {
  radii: theme.radii,
  space: [
    theme.space[3],
    theme.space[4],
  ],
  fontSize: theme.fontSize.slice(0,-8),
  fontFamily: theme.fontFamily[0],
  borderStyle: [
    theme.borderStyle[0],
    theme.borderStyle[1]
  ],
  borderWidth: theme.borderWidth,
  fontWeight: theme.fontWeight,
  colors: theme.colors,
  backgroundColors: theme.colors,

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
  transitionDuration: ['.25s'],
  transitionTimingFunction: ['ease-out'],
}

export default buttonTheme
```

As a design community, we could make boilerplate config files for common ui components. 

This is where I think it gets *really* interesting.

Now this is a system.
We can use combinational logic to generate all possible combinations of buttons
given this input. We could also use this pattern to create a finite state
machine, and visualize transitions between any discrete state a given component can be in.

A simple config file like this generates thousands and thousands of button designs.

https://examples-jchwaftrgo.now.sh

Let's step back and think at 10 thousand feet again. 

- We can show how many options a design system can generate. This can be helpful because some people feel they might be constrained by working with defined scales. This can help show how varied their visual designs can still be. 
- We can find desirable regions, which can help us quickly discover patterns of inputs needed for a desired output. This can expose properties you might want to couple together and set rules for. Sense of proportion can change dramatically at each end of the scale.
- Could a/b test design options with real user metrics 
- Team collaborative voting on which component variations feel most on brand. You could even hook this voting up to a neural network.
- The generated data could help train an image classifier which will in turn help existing UI audits on websites. Imagine being able to input a url and query the design with questions lke: Show me all of the buttons. Show me all of the orange buttons. Show me all link styles. 

This to be is an exciting reality to live in. We can generate lots of design options to
test with real users, instead of shipping designs that haven't been validated
and are essentially stumbling across the finish line.

Also I'm lazy and I don't want to design buttons anymore.
