import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <Image
            src="https://www.alfaumuarama.edu.br/fau/images/logop.png"
            alt="UniAlfa Logo"
            width={140}
            height={40}
            priority
          />
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-slate-900 font-semibold hover:text-slate-600"
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center bg-[#4B7099] text-center text-white p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O seu futuro começa na <br />
          <span className="text-5xl md:text-6xl font-extrabold">UniAlfa.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Cursos de graduação e pós-graduação com foco no mercado de trabalho e
          excelência acadêmica.
        </p>

        <a
          href="#cursos"
          className="bg-yellow-400 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition"
        >
          <p className="text-slate-900">Conheça nossos cursos</p>
        </a>
      </main>
    </div>
  );
}
