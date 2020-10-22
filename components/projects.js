import List from "../components/list"
import Paragraph from "../components/paragraph"

const projects = [
  {
    name: "Brain-games",
    description: "Набор из пяти CLI завязанных на математике игр",
    properties: ["Vanilla JS"],
  },
  {
    name: "Gendiff",
    description:
      "CLI-Утилита, позволяющая находить и выводить на экран различия между двумя конфигурационными файлами формата json, yml или ini",
    properties: ["Vanilla JS", "Commander", "Parsers: ini, js-yaml", "Testing: jest"],
  },
]

export default function Projects() {
  return (
    <>
      <span>Проекты:</span>
      <div className="flex flex-wrap md:flex-no-wrap justify-between">
        {projects.map((project, index) => {
          const { name, description, properties } = project
          const imageUrl = `/images/${name}.png`
          const imageAlt = `${name} project representation`

          return (
            <div
              key={index}
              className="mt-5 mx-1 p-2 w-full md:w-10/12 border rounded shadow-sm"
            >
              <span className="font-bold">{name}</span>
              <img
                className="rounded my-4"
                src={imageUrl}
                alt={imageAlt}
              />
              <span>О чём:</span>
              <Paragraph>{description}</Paragraph>
              <span>При помощи чего:</span>
              <List points={properties} />
            </div>
          )
        })}
      </div>
    </>
  )
}
