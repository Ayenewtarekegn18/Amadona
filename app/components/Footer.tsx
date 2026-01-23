import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-surface text-app py-12 border-t border-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Amadoniyas</h3>
            <p className="text-muted">Discover Ethiopia&apos;s finest gemstones.</p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-muted hover:text-accent transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact Us</h4>
            <p className="text-muted">Bole, Addis Ababa, Ethiopia</p>
            <p className="text-muted">Phone: 0991065599</p>
            <p className="text-muted">Email: amadona@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-subtle text-center">
          <p className="text-muted">&copy; {new Date().getFullYear()} Amadoniyas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

