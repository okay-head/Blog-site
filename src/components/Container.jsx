export default function Container({ children, classVars = '' }) {
  return (
    <div
      className={`aka-container mx-auto max-w-[1920px] px-6 md:px-10 ${classVars}`}
    >
      {children}
    </div>
  )
}
