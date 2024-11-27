import Image from "next/image";
import NavBar from "./components/Navbar";



export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-4">
        {/* Responsive Div Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {/* First Div */}
          <div className="bg-blue-500 text-white p-4">First Div</div>

          {/* Remaining Two Divs */}
          <div className="md:col-span-1 lg:col-span-1 bg-green-500 text-white p-4">
            Second Div
          </div>
          <div className="md:col-span-1 lg:col-span-1 bg-red-500 text-white p-4">
            Third Div
          </div>
        </div>
      </main>
    </div>
  );
}

