export default async function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto text-center">
      <p> codeSerg &copy; {year} </p>
    </div>
  );
}
