import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto px-12 py-4">
        <NavBar/>
        <div className="container mt-24 mx-auto"><HeroSection /></div>
      </div>
    </main>
  )
}
