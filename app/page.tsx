import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center">
          <img
            src="https://www.alfaumuarama.edu.br/fau/images/logop.png"
            alt="UniAlfa Logo"
            width={140}
            height={40}
          />
        </div>

        <nav>
          <ul className="flex gap-x-6 list-none" role="menubar">
            <li>
              <a
                href="#"
                role="menuitem"
                className="text-slate-900 font-semibold hover:text-slate-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#cursos-disponiveis"
                role="menuitem"
                className="text-slate-900 font-semibold hover:text-slate-600 transition-colors"
              >
                Cursos disponíveis
              </a>
            </li>
            <li>
              <a
                href="#contato"
                role="menuitem"
                className="text-slate-900 font-semibold hover:text-slate-600 transition-colors"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                role="menuitem"
                className="text-slate-900 font-semibold hover:text-slate-600 transition-colors"
              >
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HOME */}
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
          href="#cursos-disponiveis"
          className="bg-yellow-400 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition"
        >
          <p className="text-slate-900">Conheça nossos cursos</p>
        </a>
      </main>

      {/* CURSOS DISPONÍVEIS */}
      <section
        id="cursos-disponiveis"
        className="p-12 bg-gray-100 text-slate-900"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Cursos disponíveis
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Sistemas para Internet
            </h3>
            <p>
              Curso focado em desenvolvimento web, mobile e novas tecnologias.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Administração</h3>
            <p>
              Formação em gestão de empresas e inovação para o mercado atual.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Engenharia de Software
            </h3>
            <p>
              Planejamento, desenvolvimento e manutenção de sistemas de grande
              porte.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
