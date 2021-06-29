module.exports = {
  siteName: 'Стефанија Дурацоска',
  siteDescription: 'Домашна работа - domasna_ONWD.',
  siteUrl: 'https://stefanijAaA.github.io',
  pathPrefix: '/domasna_ONWD',
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
