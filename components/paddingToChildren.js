export default function PaddingToChildren({ children }) {
  return (
    <>
      {children.map((child, index) => (
        <div key={index} className="p-8">
          {child}
        </div>
      ))}
    </>
  )
}
