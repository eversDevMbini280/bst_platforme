import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Monitor, Wrench, Printer, ShoppingCart, Users, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function OrdinateursPortablesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold hover:text-accent transition-colors">
                Business Services Technology
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/#services" className="hover:text-accent transition-colors">
                Nos Services
              </Link>
              <Link href="/#boutique" className="hover:text-accent transition-colors">
                Boutique
              </Link>
              <Link href="/reparation" className="hover:text-accent transition-colors">
                Réparation
              </Link>
              <Link href="/impression" className="hover:text-accent transition-colors">
                Impression
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+33 6 60 02 42 62</span>
              </div>
              <Button variant="secondary" size="sm">
                Devis Gratuit
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ordinateurs Portables
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Découvrez notre sélection d'ordinateurs portables neufs et reconditionnés, adaptés à tous les besoins et budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Product Card 1 */}
            <Card>
              <CardHeader>
                <img
                  src="/modern-laptop-computer.png"
                  alt="Ordinateur portable 1"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Laptop Pro X1</CardTitle>
                <CardDescription>Performances exceptionnelles pour les professionnels exigeants.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">899€</Badge>
                  <a href="/boutique/produit/1">
                    <Button size="sm">Voir plus</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Example Product Card 2 */}
            <Card>
              <CardHeader>
                <img
                  src="/modern-laptop-computer.png"
                  alt="Ordinateur portable 2"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>UltraBook Air</CardTitle>
                <CardDescription>Léger et puissant, idéal pour la mobilité.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">699€</Badge>
                  <a href="/boutique/produit/2">
                    <Button size="sm">Voir plus</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Example Product Card 3 */}
            <Card>
              <CardHeader>
                <img
                  src="/modern-laptop-computer.png"
                  alt="Ordinateur portable 3"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Gaming Beast</CardTitle>
                <CardDescription>Conçu pour les gamers, avec des graphismes époustouflants.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">1299€</Badge>
                  <a href="/boutique/produit/3">
                    <Button size="sm">Voir plus</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Add more product cards as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Business Services Technology</h3>
              <p className="text-sm opacity-80">
                Votre partenaire technologique de confiance pour la croissance de votre entreprise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Vente en ligne</li>
                <li>Maintenance en Informatique</li>
                <li>Sublimation & Impression Grand Format</li>
                <li>Traitement de textes</li>
                <li>Impression des Badges plastiques</li>
                <li>Informatique de proximité</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+33 6 60 02 42 62</li>
                <li>contact.bst44@gmail.com</li>
                <li>69 Bis Rue du Bêle 44300 Nantes - France</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Lun-Ven: 9h-18h</li>
                <li>Samedi: 9h-17h</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Business Services Technology. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}