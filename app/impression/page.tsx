import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Printer, Shirt, Coffee, Gift, Palette, Users, CheckCircle } from "lucide-react"

export default function ImpressionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold hover:text-accent transition-colors">
                TechServices Pro
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/#services" className="hover:text-accent transition-colors">
                Nos Services
              </a>
              <a href="/#boutique" className="hover:text-accent transition-colors">
                Boutique
              </a>
              <a href="/reparation" className="hover:text-accent transition-colors">
                Réparation
              </a>
              <a href="/impression" className="text-accent font-medium">
                Impression
              </a>
              <a href="/contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>02 85 52 83 62</span>
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
            <div className="mx-auto bg-primary/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-8">
              <Printer className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Impression Personnalisée
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Créez des objets uniques pour vos événements, entreprises ou cadeaux personnalisés. Impression haute
              qualité sur textile, céramique et accessoires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Palette className="mr-2 h-5 w-5" />
                Créer mon design
              </Button>
              <Button size="lg" variant="outline">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Produits personnalisables */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nos Produits Personnalisables</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Large gamme d'objets personnalisables pour tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shirt className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Textile</CardTitle>
                <CardDescription>T-shirts, polos, sweats, casquettes, sacs en tissu</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 12€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Céramique</CardTitle>
                <CardDescription>Mugs, tasses, assiettes, objets décoratifs</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 8€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Accessoires</CardTitle>
                <CardDescription>Porte-clés, magnets, badges, stickers</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 3€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Événementiel</CardTitle>
                <CardDescription>Goodies d'entreprise, cadeaux promotionnels</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Devis sur mesure</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Signalétique</CardTitle>
                <CardDescription>Panneaux, banderoles, affiches grand format</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 25€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Cadeaux personnalisés</CardTitle>
                <CardDescription>Objets uniques pour occasions spéciales</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 15€</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Techniques d'impression */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nos Techniques d'Impression</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Technologies modernes pour un rendu professionnel et durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Printer className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sérigraphie</h3>
              <p className="text-muted-foreground text-sm">Idéale pour les grandes quantités, rendu professionnel</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Printer className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sublimation</h3>
              <p className="text-muted-foreground text-sm">Impression haute définition, couleurs vives et durables</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Printer className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flex/Flock</h3>
              <p className="text-muted-foreground text-sm">Découpe de vinyle, parfait pour textes et logos simples</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Printer className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Broderie</h3>
              <p className="text-muted-foreground text-sm">Finition haut de gamme pour textiles professionnels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de commande */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Comment Commander</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un processus simple en 4 étapes pour vos créations personnalisées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choisir</h3>
              <p className="text-muted-foreground">Sélectionnez vos produits et quantités</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Créer</h3>
              <p className="text-muted-foreground">Envoyez-nous votre design ou créons-le ensemble</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Valider</h3>
              <p className="text-muted-foreground">Validation du BAT et lancement de la production</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Récupérer</h3>
              <p className="text-muted-foreground">Livraison ou retrait en magasin sous 5-7 jours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de devis */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Demande de Devis Impression</h2>
              <p className="text-xl mb-8 opacity-90">Décrivez votre projet et recevez un devis personnalisé sous 24h</p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Devis gratuit et rapide</h3>
                    <p className="opacity-80">Réponse sous 24h maximum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Aide à la création</h3>
                    <p className="opacity-80">Nos graphistes vous accompagnent</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Qualité garantie</h3>
                    <p className="opacity-80">Satisfaction ou remboursement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card text-card-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Votre Projet</h3>
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
                <select className="w-full p-3 rounded-lg border border-input bg-input text-foreground">
                  <option>Type de produit</option>
                  <option>Textile (T-shirts, polos...)</option>
                  <option>Céramique (Mugs, tasses...)</option>
                  <option>Accessoires</option>
                  <option>Signalétique</option>
                  <option>Autre</option>
                </select>
                <input
                  type="number"
                  placeholder="Quantité souhaitée"
                  className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                />
                <textarea
                  placeholder="Décrivez votre projet (couleurs, design, délais...)..."
                  rows={4}
                  className="w-full p-3 rounded-lg border border-input bg-input text-foreground resize-none"
                ></textarea>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Demander mon devis
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
              <h3 className="text-xl font-bold mb-4">TechServices Pro</h3>
              <p className="text-sm opacity-80">
                Votre partenaire informatique de confiance à Nantes depuis plus de 10 ans.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Vente d'équipements</li>
                <li>Réparation</li>
                <li>Impression personnalisée</li>
                <li>Support technique</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>02 85 52 83 62</li>
                <li>contact@techservices-pro.fr</li>
                <li>123 Rue de la Technologie</li>
                <li>44000 Nantes</li>
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
            <p>&copy; 2024 TechServices Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
