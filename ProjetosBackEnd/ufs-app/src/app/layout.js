import "./globals.css";

export const metadata = {
  title: "Lista de UF",
  description: "Teste de consumo de API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
