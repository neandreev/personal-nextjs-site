module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/neandreev/',
        permanent: true,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/neandreev',
        permanent: true,
      },
      {
        source: '/mail',
        destination: 'mailto:mail@neandreev.ru',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      }
    ];
  },
};
