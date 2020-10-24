import Paragraph from "../components/paragraph"

export default function About() {
  return (
    <>
      <span>О себе:</span>
      <Paragraph>
        19-летний парень, который хочет участвовать в разработке
        крутых сервисов для людей. Закончив школу с отличием и поступив
        в институт на техническую специальность, словил экзистенциальный кризис
        от качества и методов образования и решил обучаться профессии,
        которая позволила бы в сжатые сроки стать специалистом, способным на
        планомерное и уверенное развивие под руководством крутых разработчиков без
        траты времени "на раскачку". Погружался в профессию и проходил обучение на
        образовательном сервисе "
        <a className="underline" target="_blank" href="https://ru.hexlet.io/u/neandreev">
          Hexlet.io
        </a>
        " (помимо знакомства c различными инструментами и их практикой
        реализовал 2 проекта на чистом JS с рефакторингом под руководством
        ментора), попутно поглядывая в "
        <a
          className="underline"
          target="_blank"
          href="https://github.com/adam-golab/react-developer-roadmap"
        >
          React Roadmap
        </a>
        ". Результаты профориентационного теста от HeadHunder.ru: 
        <a
          className="underline pl-1"
          target="_blank"
          href="https://hh.ru/file/16939957.pdf"
        >PDF</a>
      </Paragraph>
    </>
  )
}
