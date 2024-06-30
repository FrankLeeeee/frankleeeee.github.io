import NavBar from "../NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container mx-auto py-8 px-8 md:px-16 lg:px-36">
        {children}
      </div>
    </>
  );
}
