module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/neandreev/personal-nextjs-site',
        permanent: true,
      },
    ]
  },
}