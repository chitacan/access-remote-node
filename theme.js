export default {
  googleFont: 'https://fonts.googleapis.com/css?family=Noto+Serif+KR&display=swap',
  colors: {
    aaa: '#ff00ff'
  },
  styles: {
    root: {
      wordBreak: 'keep-all'
    },
    code: {
      fontSize: [4]
    },
    inlineCode: {
      color: '#ff00ff'
    },
    pre: {
      ml: '100px',
      mr: '100px',
      lineHeight: '0.6em',
      width: 'inherit',
      overflow: 'scroll',
      code: {
        width: 'fit-content',
        margin: 'auto',
        display: 'block',
        fontSize: '0.5em'
      }
    },
    p: {
      ml: '2em',
      mt: '10px',
      mb: '10px',
      mr: '2em'
    },
    h2: {
      textAlign: 'center'
    },
    ul: {
      li: {
        fontSize: '.8em',
        mt: '10px',
        ml: '2em',
        mr: '2em',
        ul: {
          li: {
            fontSize: '.8em',
            ml: '0',
            mr: '0'
          }
        }
      },
    }
  }
}