import Header from "~/components/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />

      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
