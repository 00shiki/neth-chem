export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>
        © {new Date().getFullYear()}, Built by <a href="https://github.com/00shiki" className="font-bold">00shiki</a>
      </p>
    </footer>
  );
}