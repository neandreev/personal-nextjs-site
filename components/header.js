import Link from './link';

const Header = () => (
  <div className="flex flex-col items-center md:items-start justify-between leading-tight">
    <div className="flex justify-center">
      <div className="hidden relative md:bg-gray-100 rounded-full border border-r-0 rounded-r-none h-full md:block w-32">
        <img className="rounded-full border-2" src="/images/photo.png" alt="photo"/>
      </div>
      <div className="md:border md:border-l-0 pr-6 p-3 pt-1 md:rounded-full md:bg-gray-100 md:rounded-full md:rounded-l-none flex flex-col justify-center">
        <h2 className="text-5xl text-center md:text-left">
          Андреев Данила
        </h2>
        <h2 className="text-3xl text-center md:text-left">
          Фронтенд-разработчик
        </h2>
      </div>
    </div>
    <div className="text-xl mt-3 text-center md:text-left">
        | <Link href="/mail" text="Mail" /> | <Link href="/telegram" text="Telegram" /> | <Link href="/github" text="Github" /> | <Link href="resume.pdf" text="PDF Resume" /> |
    </div>
  </div>
);

export default Header;
