import List from './list';
import Link from './link';
import Paragraph from './paragraph';
import React from 'react';

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
  }
];

const renderLinks = (project) => {
  const { gifUrl, liveDemonstrationUrl, githubUrl } = project;
  const links = [];

  const githubLink = <Link href={githubUrl} text='GitHub' />;
  console.log(githubLink);
  links.push(githubLink);

  if (gifUrl) {
    const gifLink = <Link href={gifUrl} text="GIF Demonstration" />;
    links.push(gifLink);
  }

  if (liveDemonstrationUrl) {
    const liveDemonstrationLink = <Link href={liveDemonstrationUrl} text="Live demonstration" />;
    links.push(liveDemonstrationLink);
  }

  return <ul>
    {links.map(link => <li className="inline pr-2">{link}</li>)}
  </ul>
};

const renderProject = (project, index) => {
  const { name, description, properties } = project;
  const imageUrl = `/images/${name}.png`;
  const imageAlt = `${name} project representation`;

  return (
    <div key={index} className="flex-grow mt-2 box-border w-full md:w-1/2">
      <div className="bg-gray-100 box-border m-1 p-3 h-full border rounded shadow-sm">
        <div>
          <p><span className="font-bold">{name}:</span></p>
          {renderLinks(project, index)}
        </div>
        <div><img className="border rounded my-2" src={imageUrl} alt={imageAlt} /></div>
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
