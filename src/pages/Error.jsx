const Error = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] gap-4 px-10 text-center">
      <span className="text-8xl">🏕️</span>
      <h2 className="text-5xl md:text-7xl text-gradient font-bold">404</h2>
      <p className="text-xl md:text-2xl text-[#054502] font-semibold underline underline-offset-4 decoration-green-500">
        Página no encontrada
      </p>
      <p className="text-[#096a04]/70 text-base max-w-sm">
        Parece que te perdiste en el bosque. Esta página no existe.
      </p>
    </main>
  );
};

export default Error;
