export default function Header() {
  return (
    <div className="flex space-x-4 justify-between leading-tight">
      <div className="flex justify-center">
        <div className="hidden relative h-full md:block w-32">
          <img className="rounded-3xl rounded-r-none" src="/images/photo.jpg" alt="photo"/>
        </div>
        <div className="md:border pr-6 p-3 pt-1 md:rounded-full md:bg-gray-100 md:rounded-full md:rounded-l-none flex flex-col justify-center">
          <h2 className="text-5xl text-center md:text-left">
            Андреев Данила
          </h2>
          <h2 className="text-3xl text-center md:text-left">
            Фронтенд-разработчик
          </h2>
        </div>
      </div>
    </div>
  );
}
