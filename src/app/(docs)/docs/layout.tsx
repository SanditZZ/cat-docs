export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose p-10 w-full prose-lg max-w-screen-lg">{children}</div>
  );
}
