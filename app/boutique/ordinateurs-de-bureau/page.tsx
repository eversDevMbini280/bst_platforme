import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Monitor, Wrench, Printer, ShoppingCart, Users, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function OrdinateursDeBureauPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ordinateurs de Bureau
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Découvrez notre sélection d'ordinateurs de bureau performants, adaptés au travail, aux jeux et à la création.
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
                  src="/desktop-computer-setup.png"
                  alt="Ordinateur de bureau 1"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>PC Gamer Elite</CardTitle>
                <CardDescription>Expérience de jeu immersive avec des composants de pointe.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">1499€</Badge>
                  <a href="/boutique/produit/4">
                    <Button size="sm">Voir plus</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Example Product Card 2 */}
            <Card>
              <CardHeader>
                <img
                  src="/desktop-computer-setup.png"
                  alt="Ordinateur de bureau 2"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Workstation Pro</CardTitle>
                <CardDescription>Conçu pour la productivité et les tâches exigeantes.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">999€</Badge>
                  <a href="/boutique/produit/5">
                    <Button size="sm">Voir plus</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Example Product Card 3 */}
            <Card>
              <CardHeader>
                <img
                  src="/desktop-computer-setup.png"
                  alt="Ordinateur de bureau 3"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Mini PC Compact</CardTitle>
                <CardDescription>Idéal pour les petits espaces sans compromis sur la performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">599€</Badge>
                  <a href="/boutique/produit/6">
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