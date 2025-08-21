export default function NewsLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
