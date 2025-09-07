import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Car, MessageCircle, Users, Award } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold hover:text-accent transition-colors">
                Business Services Technology
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
              <a href="/impression" className="hover:text-accent transition-colors">
                Impression
              </a>
              <a href="/contact" className="text-accent font-medium">
                Contact
              </a>
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
            <div className="mx-auto bg-primary/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-8">
              <MessageCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Contactez-nous</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner
              dans vos projets informatiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Nous appeler
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Nous écrire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mb-4">Téléphone</CardTitle>
              <CardDescription className="text-lg mb-4">
                Appelez-nous directement pour un conseil immédiat
              </CardDescription>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">+33 6 60 02 42 62</p>
                <p className="text-sm text-muted-foreground">Lun-Ven: 9h-18h | Sam: 9h-17h</p>
              </div>
            </Card>

            <Card className="text-center p-8">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mb-4">Email</CardTitle>
              <CardDescription className="text-lg mb-4">Écrivez-nous pour un devis détaillé</CardDescription>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-primary">contact.bst44@gmail.com</p>
                <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
              </div>
            </Card>

            <Card className="text-center p-8">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mb-4">Adresse</CardTitle>
              <CardDescription className="text-lg mb-4">Venez nous rendre visite en magasin</CardDescription>
              <div className="space-y-2">
                <p className="font-semibold">69 Bis Rue du Bêle</p>
                <p className="font-semibold">44300 Nantes - France</p>
                <p className="text-sm text-muted-foreground">Parking gratuit disponible</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulaire de contact et carte */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>Remplissez ce formulaire et nous vous recontacterons rapidement</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom *</label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Prénom *</label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 rounded-lg border border-input bg-input text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <input type="tel" className="w-full p-3 rounded-lg border border-input bg-input text-foreground" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet *</label>
                    <select required className="w-full p-3 rounded-lg border border-input bg-input text-foreground">
                      <option value="">Choisissez un sujet</option>
                      <option value="reparation">Réparation informatique</option>
                      <option value="achat">Achat d'équipement</option>
                      <option value="impression">Impression personnalisée</option>
                      <option value="support">Support technique</option>
                      <option value="devis">Demande de devis</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Décrivez votre demande en détail..."
                      className="w-full p-3 rounded-lg border border-input bg-input text-foreground resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="mt-1" required />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      J'accepte d'être recontacté(e) concernant ma demande *
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informations pratiques */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle>Horaires d'ouverture</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold">9h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">* Intervention d'urgence possible sur rendez-vous</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Car className="h-6 w-6 text-primary" />
                    <CardTitle>Accès et parking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    <strong>En voiture :</strong> Parking gratuit devant le magasin
                  </p>
                  <p className="text-sm">
                    <strong>En transport :</strong> Arrêt de tram "Technologie" à 2 min
                  </p>
                  <p className="text-sm">
                    <strong>À pied :</strong> Centre-ville accessible en 10 min
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>Notre équipe</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    3 techniciens certifiés à votre service pour tous vos besoins informatiques.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">Plus de 15 ans d'expérience</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ rapide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardTitle className="mb-3">Combien coûte un diagnostic ?</CardTitle>
              <CardDescription>
                Le diagnostic est entièrement gratuit et sans engagement. Nous analysons votre équipement et vous
                proposons un devis détaillé.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="mb-3">Quels sont vos délais de réparation ?</CardTitle>
              <CardDescription>
                En moyenne 48h pour les réparations courantes. Les interventions complexes peuvent prendre 3-5 jours
                selon la disponibilité des pièces.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="mb-3">Proposez-vous un service à domicile ?</CardTitle>
              <CardDescription>
                Oui, nous nous déplaçons chez vous pour les dépannages urgents et l'installation d'équipements. Tarif
                déplacement : 25€.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="mb-3">Acceptez-vous les paiements en plusieurs fois ?</CardTitle>
              <CardDescription>
                Oui, nous proposons le paiement en 3 fois sans frais pour les achats supérieurs à 300€. Autres solutions
                de financement disponibles.
              </CardDescription>
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
                <li>+33 6 60 02 42 62</li>
                <li>contact.bst44@gmail.com</li>
                <li>69 Bis Rue du Bêle</li>
                <li>44300 Nantes - France</li>
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
