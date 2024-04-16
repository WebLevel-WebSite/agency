module.exports = {
    theme: {
      extend: {
        backgroundImage:  theme => ({
          'hero-bg': "url('../site/hero-bg.png')",
        })
      },
      plugins: [
        require('./custom.css'), // Import custom CSS file here
    ],
    }
  }