module.exports = {
  siteName: 'Стефанија Дурацоска',
  siteDescription: 'Домашна работа - domasna_ONWD.',
  siteUrl: 'https://gridsome-starter-resume.loke.dev',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
