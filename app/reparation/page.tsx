import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Wrench, Monitor, Smartphone, Printer, HardDrive, Cpu, CheckCircle } from "lucide-react"

export default function ReparationPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mx-auto bg-primary/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-8">
              <Wrench className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Service de Réparation Informatique
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Diagnostic gratuit, réparation rapide et garantie sur toutes nos interventions. Plus de 15 ans
              d'expérience dans la réparation d'équipements informatiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Button>
              <Button size="lg" variant="outline">
                Diagnostic gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services de réparation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nos Services de Réparation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nous réparons tous types d'équipements informatiques avec expertise et rapidité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Ordinateurs de bureau</CardTitle>
                <CardDescription>Réparation complète de PC fixes, changement de composants, nettoyage</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 45€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Ordinateurs portables</CardTitle>
                <CardDescription>Écrans cassés, claviers défaillants, problèmes de batterie</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 65€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Printer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Imprimantes</CardTitle>
                <CardDescription>Réparation et maintenance de toutes marques d'imprimantes</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 35€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <HardDrive className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Récupération de données</CardTitle>
                <CardDescription>Sauvegarde et récupération de vos fichiers importants</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 85€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Mise à niveau</CardTitle>
                <CardDescription>Amélioration des performances, ajout de mémoire, SSD</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 55€</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Maintenance préventive</CardTitle>
                <CardDescription>Nettoyage, optimisation et vérification complète</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">À partir de 40€</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de réparation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Notre Processus</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un service transparent et professionnel en 4 étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnostic</h3>
              <p className="text-muted-foreground">Analyse complète et gratuite de votre équipement</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Devis</h3>
              <p className="text-muted-foreground">Proposition détaillée avec tarifs transparents</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Réparation</h3>
              <p className="text-muted-foreground">Intervention rapide par nos techniciens experts</p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison</h3>
              <p className="text-muted-foreground">Récupération avec garantie sur la réparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties et avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Nos Garanties</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Diagnostic gratuit</h3>
                    <p className="text-muted-foreground">Évaluation complète sans engagement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Garantie 6 mois</h3>
                    <p className="text-muted-foreground">Sur toutes nos réparations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Pièces d'origine</h3>
                    <p className="text-muted-foreground">Composants de qualité garantie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Intervention rapide</h3>
                    <p className="text-muted-foreground">Délai moyen de 48h</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Demande de Réparation</CardTitle>
                <CardDescription>Décrivez votre problème pour un diagnostic rapide</CardDescription>
              </CardHeader>
              <CardContent>
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
                    <option>Type d'équipement</option>
                    <option>Ordinateur portable</option>
                    <option>Ordinateur de bureau</option>
                    <option>Imprimante</option>
                    <option>Autre</option>
                  </select>
                  <textarea
                    placeholder="Décrivez le problème rencontré..."
                    rows={4}
                    className="w-full p-3 rounded-lg border border-input bg-input text-foreground resize-none"
                  ></textarea>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Demander un diagnostic
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                Votre partenaire informatique de confiance.
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
