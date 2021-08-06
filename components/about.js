import Paragraph from './paragraph';

export default function About() {
  return (
    <div>
      <span>О себе:</span>
      <Paragraph>
        20-летний парень, который хочет участвовать в разработке
        крутых сервисов для людей. Закончив школу с отличием и поступив
        в институт на техническую специальность, словил экзистенциальный кризис
        от качества и методов образования и решил обучаться профессии,
        которая позволила бы в сжатые сроки стать специалистом, способным на
        планомерное и уверенное развивие под руководством крутых разработчиков без
        траты времени &quot;на раскачку&quot;. Погружался в профессию и проходил обучение на
        образовательном сервисе &quot;
        <a className="underline" target="_blank" href="https://ru.hexlet.io/u/neandreev" rel="noreferrer">
          Hexlet.io
        </a>
        &quot; (здесь, помимо знакомства c различными инструментами и их практикой
        реализовал 3 проекта (два из которых с рефакторингом под руководством
        ментора)), попутно поглядывая в &quot;
        <a
          className="underline"
          target="_blank"
          href="https://github.com/adam-golab/react-developer-roadmap" rel="noreferrer"
        >
          React Roadmap
        </a>
        &quot;.
      </Paragraph>
    </div>
  );
}
