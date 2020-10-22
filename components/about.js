import Paragraph from "../components/paragraph"

export default function About() {
  return (
    <>
      <span>О себе:</span>
      <Paragraph>
        19-летний парень, который хочет участвовать в разработке
        крутых сервисов для людей. Закончив школу с золотой медалью и поступивши
        в институт на инженерную специальность, словил экзистенциальный кризис
        от качества образования и решил самостоятельно обучиться профессии,
        которая позволила бы мне в сжатые сроки стать специалистом, который
        сможет планомерно и уверенно развиваться под руководством умных людей и
        не тратить время "на раскачку". Проходил обучение на
        образовательном сервисе "
        <a className="underline" target="_blank" href="https://ru.hexlet.io/u/neandreev">
          Hexlet.io
        </a>
        " (помимо знакомства с различными инструментами и их практикой
        реализовал 2 проекта на чистом JS с рефакторингом под руководством
        ментора), попутно поглядывая в "
        <a
          className="underline"
          target="_blank"
          href="https://github.com/adam-golab/react-developer-roadmap"
        >
          React Roadmap
        </a>
        "
      </Paragraph>
    </>
  )
}
