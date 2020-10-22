export default function pageContainer({ children }) {
  return (
    <div className="flex flex-wrap justify-center my-8 mx-2">
      <div className="flex flex-wrap flex-col shadow-2xl w-full rounded max-w-screen-lg divide-y">
        {children}
      </div>
    </div>
  )
}