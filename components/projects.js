import List from './list';
import Link from './link';
import Paragraph from './paragraph';

const projects = [
  {
    name: 'Brain-games',
    description: 'Набор из пяти command-line игр, завязанных на математике',
    properties: ['Vanilla JS'],
  },
  {
    name: 'Gendiff',
    description:
      'CLI-Утилита, позволяющая находить и выводить на экран различия между двумя конфигурационными файлами формата json, yml или ini',
    properties: ['Vanilla JS', 'Commander', 'Parsers: ini, js-yaml', 'Testing: jest'],
  },
  {
    name: 'RSS-Agregator',
    description:
      'Агрегатор RSS фидов, производящий парсинг RSS по приведённым вами ссылкам и выводящий в простой форме посты',
    properties: ['Vanilla JS', 'Webpack', 'Validation: yup', 'Internationalization: i18next'],
    liveDemonstrationUrl: 'https://rss.neandreev.ru',
  },
];

const renderLinks = (project, index) => {
  const { name, liveDemonstrationUrl } = project;
  const githubUrl = `https://github.com/neandreev/frontend-project-lvl${index + 1}`;
  const gifUrl = `/images/${name}.gif`;

  const githubLink = <Link href={githubUrl} text='GitHub' />;
  const gifLink = <Link href={gifUrl} text="GIF Demonstration" />;

  if (!liveDemonstrationUrl) {
    return <p>{githubLink}, {gifLink}</p>;
  }

  const demonstrationLink = <Link href={liveDemonstrationUrl} text="Live Demonstration" />;
  return <p>{githubLink}, {gifLink}, {demonstrationLink}</p>;
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

export default function Projects() {
  return (
    <div>
      <span>Проекты:</span>
      <div className="flex flex-wrap">
        {projects.map(renderProject)}
      </div>
    </div>
  );
}
