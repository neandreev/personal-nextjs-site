import List from './list';
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

export default function Projects() {
  return (
    <div>
      <span>Проекты:</span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => {
          const {
            name, description, properties, liveDemonstrationUrl,
          } = project;
          const githubLink = `https://github.com/neandreev/frontend-project-lvl${index + 1}`;
          const imageUrl = `/images/${name}.png`;
          const demonstrationUrl = `/images/${name}.gif`;
          const imageAlt = `${name} project representation`;

          return (
            <div
              key={index}
              className="flex-grow mt-2 box-border w-full md:w-1/2"
            >
              <div className="bg-gray-100 box-border m-1 p-3 h-full border rounded shadow-sm">
                <span className="font-bold">{name}:</span>
                <span> </span>
                <span>
                  <a href={githubLink} target="_blank" className="underline" rel="noreferrer">GitHub</a>
                </span>
                <span>, </span>
                <span>
                  <a href={demonstrationUrl} target="_blank" className="underline" rel="noreferrer">Gif Demonstration</a>
                </span>
                {liveDemonstrationUrl
                  ? <span>
                      , <a href={liveDemonstrationUrl} target="_blank" className="underline" rel="noreferrer">Live Demonstration</a>
                    </span>
                  : null}
                <div>
                  <img
                    className="border rounded my-4"
                    src={imageUrl}
                    alt={imageAlt}
                  />
                </div>
                <span>О чём:</span>
                <Paragraph>{description}</Paragraph>
                <span>При помощи чего:</span>
                <List points={properties} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
