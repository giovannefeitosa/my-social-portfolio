module.exports = {

  // Build this project to /docs folder
  // so I can publish it on github pages
  outputDir: 'docs',

  // Relative public path on build
  // because ghpages publish code to a subdomain
  publicPath: process.env.NODE_ENV === 'production' ? '/my-social-portfolio/' : '/',

}
