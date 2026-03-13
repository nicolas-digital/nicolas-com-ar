export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Nicolas Valenzuela. Strategy, AI and Digital Commerce.</p>
      </div>
    </footer>
  );
}