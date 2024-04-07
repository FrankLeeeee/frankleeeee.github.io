import NavBar from "../NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-8 px-8 md:px-16 md:pt-12 lg:px-36">
        {children}
      </div>
    </>
  );
}
