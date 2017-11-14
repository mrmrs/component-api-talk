
          <h1>Paragraphs</h1>
          {paragraphTheme.fontSize && paragraphTheme.fontSize.map((fontSize, f) => (
            <article style={{width: '100%'}}>
              {paragraphTheme.fontFamily && paragraphTheme.fontFamily.map((font, f) => (
                <div>
              {paragraphTheme.maxWidth && paragraphTheme.maxWidth.map((maxWidth, m) => (
                <div>
                  <h2>{fontSize}px + {maxWidth}</h2>
              <P
                key={f}
                style={{
                  fontSize: fontSize,
                  fontFamily: font,
                  maxWidth: maxWidth,
                  lineHeight: 1.5,
                }}
              >
                Short Text Example
              </P>
              <P
                key={f}
                style={{
                  fontSize: fontSize,
                  fontFamily: font,
                  maxWidth: maxWidth,
                  lineHeight: 1.5,
                }}
              >
                Medium length text example where it's a few lines of wrapping
                text but not a full paragraph.
              </P>
              <P
                key={f}
                style={{
                  fontSize: fontSize,
                  fontFamily: font,
                  maxWidth: maxWidth,
                  lineHeight: 1.5,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </P>
            </div>
          ))}
            </div>
          ))}
            </article>
          ))}
