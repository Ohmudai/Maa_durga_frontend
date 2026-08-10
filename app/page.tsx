import Home from "./(public)/home/page";
import NavBar from "./components/globals/navbar/nav_bar";
import Footer from "./components/globals/footer/footer";
export default function Page() {
  return (
    <div>
      <NavBar/>
      <Home />
      <Footer/>
    </div>
  );
}
