import Image from 'next/image';
import React from 'react';
import List from './list';
import Link from './link';
import Paragraph from './paragraph';

const projects = [
  {
    name: 'Brain-games',
    description: 'Набор из пяти command-line игр, завязанных на математике',
    properties: ['Vanilla JS'],
    gifUrl: '/images/Brain-games.gif',
    githubUrl: 'https://github.com/neandreev/Brain-games',
  },
  {
    name: 'Gendiff',
    description:
      'CLI-Утилита, позволяющая находить и выводить на экран различия между двумя конфигурационными файлами формата json, yml или ini',
    properties: ['Vanilla JS', 'Commander', 'Parsers: ini, js-yaml', 'Testing: jest'],
    gifUrl: '/images/Gendiff.gif',
    githubUrl: 'https://github.com/neandreev/Gendiff',
  },
  {
    name: 'RSS-Agregator',
    description:
      'Агрегатор RSS фидов, производящий парсинг RSS по приведённым вами ссылкам и выводящий в простой форме посты',
    properties: ['Vanilla JS', 'Webpack', 'Validation: yup', 'Internationalization: i18next'],
    liveDemonstrationUrl: 'https://rss.neandreev.ru',
    gifUrl: '/images/RSS-Agregator.gif',
    githubUrl: 'https://github.com/neandreev/RSS-Agregator',
  },
  {
    name: 'Personal-site',
    description:
      'Личный сайт-визитка, содержащий в себе мои контакты, немного информации обо мне и выполненные мною проекты',
    properties: ['NextJS', 'React', 'Styling: Tailwind CSS'],
    liveDemonstrationUrl: 'https://neandreev.ru',
    githubUrl: 'https://github.com/neandreev/personal-nextjs-site',
  },
  {
    name: 'Slack-chat',
    description:
      'Real-time чат с авторизацией/аутентификацией, возможностью добавлять/изменять/удалять каналы',
    properties: ['React w/Hooks', 'Redux-Toolkit', 'Routes: react-router', 'Styling: react-bootstrap', 'Validation: yup', 'Forms: Formik', 'Internationalization: i18next'],
    liveDemonstrationUrl: 'https://neandreev-chat.herokuapp.com/',
    githubUrl: 'https://github.com/neandreev/slack-chat',
  },
];

const renderLinks = (project) => {
  const { gifUrl, liveDemonstrationUrl, githubUrl } = project;
  const links = [];

  const githubLink = <Link href={githubUrl} text='GitHub' />;
  links.push(githubLink);

  if (gifUrl) {
    const gifLink = <Link href={gifUrl} text="GIF Demonstration" />;
    links.push(gifLink);
  }

  if (liveDemonstrationUrl) {
    const liveDemonstrationLink = <Link href={liveDemonstrationUrl} text="Live Demonstration" />;
    links.push(liveDemonstrationLink);
  }

  return <ul>
    {links.map((link, index) => <li key={index} className="inline pr-2">{link}</li>)}
  </ul>;
};

const renderProject = (project, index) => {
  const { name, description, properties } = project;
  const imageUrl = `/images/${name}.webp`;
  const imageAlt = `${name} project representation`;

  return (
    <div key={index} className="flex-grow mt-2 box-border w-full md:w-1/2">
      <div className="bg-gray-100 box-border m-1 p-3 h-full border rounded shadow-sm">
        <div>
          <p><span className="font-bold">{name}:</span></p>
          {renderLinks(project, index)}
        </div>
        <div><Image width="1800" height="800" className="border rounded my-2" src={imageUrl} alt={imageAlt} /></div>
        <div>
          <span>О чём:</span>
          <Paragraph>{description}</Paragraph>
          <span>При помощи чего:</span>
          <List points={properties} />
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <div>
    <span>Проекты:</span>
    <div className="flex flex-wrap">
      {projects.map(renderProject)}
    </div>
  </div>
);

export default Projects;
