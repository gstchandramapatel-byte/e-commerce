import Header from "../components/Navbar"
import Footer from "../components/Footer.jsx"

export default function PublicLayout({ children }) {
  return (
    <div>
        <main>
          <Header />
            <main className="main-content">{children}</main>
          <Footer />
        </main>
    </div>
  )
}