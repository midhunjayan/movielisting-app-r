function Poster({ poster, title, children }) {
  return (
    <>
      <img src={poster} alt={title} />
      {children}
    </>
  );
}
export default Poster;
