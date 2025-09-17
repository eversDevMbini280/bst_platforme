import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Monitor, Wrench, Printer, ShoppingCart, Users, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Votre partenaire technologique pour la croissance de votre entreprise
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Nous offrons des services technologiques complets, de la vente et la réparation à l'impression personnalisée, pour aider votre entreprise à prospérer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Être rappelé
                </Button>
                <Button size="lg" variant="outline">
                  Demander un devis
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Devis rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Tarifs compétitifs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Suivi personnalisé</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <img
                  src="/acceuil.jpg"
                  alt="photo d'une dame de l'acceuil"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nos Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Une gamme complète de services informatiques pour particuliers et professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/boutique">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Vente en ligne</CardTitle>
                  <CardDescription>Ordinateurs et matériels informatiques d'occasion, reconditionnés.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/reparation">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Maintenance en Informatique</CardTitle>
                  <CardDescription>Réparation pc et accessoires informatiques</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/impression">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Printer className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Sublimation & Impression Grand Format</CardTitle>
                  <CardDescription>Sublimation : Impression sur Objets : T-shirts, casquettes, Tasses, etc. Impression Grand Format affiche publicitaire, Roll up, Kakémono,...</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/impression">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Traitement de textes</CardTitle>
                  <CardDescription>Conception Flyers, Calendrier, Rapports,..</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/impression/badges">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group.hover:bg-primary/20 transition-colors">
                    <Badge className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Impression des Badges plastiques</CardTitle>
                  <CardDescription>Badges plastiques personnalisés pour événements, entreprises, etc.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Informatique de proximité</CardTitle>
                  <CardDescription>Prestation à domicile ou en Entreprise pour particuliers et professionnels.</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Online Shop Section */}
      <section id="boutique" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Boutique en ligne</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez notre sélection d'équipements informatiques neufs et reconditionnés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <img
                  src="/modern-laptop-computer.png"
                  alt="Ordinateurs portables"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Ordinateurs portables</CardTitle>
                <CardDescription>Large gamme de PC portables pour tous les usages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">À partir de 299€</Badge>
                  <a href="/boutique/ordinateurs-portables">
                    <Button variant="outline" size="sm">
                      Voir plus
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <img
                  src="/desktop-computer-setup.png"
                  alt="Ordinateurs de bureau"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Ordinateurs de bureau</CardTitle>
                <CardDescription>PC fixes performants pour le travail et les loisirs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">À partir de 399€</Badge>
                  <a href="/boutique/ordinateurs-de-bureau">
                    <Button variant="outline" size="sm">
                      Voir plus
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <img
                  src="/printer-and-computer-accessories.png"
                  alt="Accessoires informatiques"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Accessoires</CardTitle>
                <CardDescription>Imprimantes, claviers, souris et tous vos accessoires</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">À partir de 19€</Badge>
                  <a href="/boutique/accessoires">
                    <Button variant="outline" size="sm">
                      Voir plus
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contactez-nous</h2>
              <p className="text-xl mb-8 opacity-90">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>+33 6 60 02 42 62</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>contact.bst44@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>69 Bis Rue du Bêle 44300 Nantes - France</span>
                </div>
              </div>
            </div>

            <div className="bg-card text-card-foreground p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Demande de devis</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                />
                <textarea
                  placeholder="Décrivez votre besoin..."
                  rows={4}
                  className="w-full p-3 rounded-lg border border-input bg-input text-foreground resize-none"
                ></textarea>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Envoyer ma demande
                </Button>
              </form>
            </div>
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