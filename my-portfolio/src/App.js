import Navbar from "./Navbar.js";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-4xl mx-auto px-4">
        <section id="home" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-4">Home</h2>
             <p>Hello!</p>
             <p>I`m Eric!</p>
          <p>Welcome to my portfolio website!</p>
        
        </section>

        <section id="about" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p>I’m a passionate developer building beautiful and functional web apps.</p>
        </section>

        <section id="projects" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Portfolio Website</li>
            <li>React To-Do App</li>
            <li>Node.js API</li>
          </ul>
        </section>

        <section id="contact" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p>Email: mnjoro869@gmail.com</p>
          <p>Phone: 0110850861</p>
        </section>
      </main>
    </>
  );
}

export default App;














