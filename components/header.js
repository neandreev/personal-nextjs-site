export default function Header() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-4">
        <img className="rounded-full" width="128px" src='/images/Profile-photo-gray.png' alt='My photo' />
      </div>
      <div className="text-left mx-4">
        <h1 className="text-5xl text-accent-1">
          Андреев Данила
        </h1>
        <h2 className="text-3xl">
          Фронтенд-разработчик
        </h2>
      </div>
    </div>
  )
}
