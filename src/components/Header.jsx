export const Header = () => {
  return (
    <header className="flex flex-col items-center bg-transparent p-6 md:p-12 lg:p-24 w-layout">
      <div className="flex items-center justify-center w-40 md:w-72 lg:w-96 h-40 md:h-72 lg:h-96 border-8 border-double border-black rounded-full">
        <span className="text-7xl md:text-9xl lg:text-logo font-thin font-serif">NT</span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mt-7 mb-7 font-serif text-white text-center">Nazareno Tarrili</h1>
      <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-center italic">Ability and experience on software development</h2>
    </header>
  )
}
