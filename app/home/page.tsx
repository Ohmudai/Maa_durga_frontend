import Container from '../components/globals/container'
import '../globals.css'
export default function Home() {
  return (
    <Container>
      <div className=" flex flex-col items-center justify-center flex-2 ">
      <h1 className="text-4xl font-bold text-primary ">welcome to the Home page</h1>
      <img src="/maa_durga_logo.png" width="200" height="200" alt="Maa Durga Logo" />
    </div>
      </Container>
  );
}
