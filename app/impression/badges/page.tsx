import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function BadgePrintingPage() {
  return (
    <div className="min-h-screen bg-background">
        <div className="mt-4 container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary">Impression de Badges Plastiques</h1>
        </div>

      <main className="container mx-auto px-4 py-12">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Badges personnalisés de haute qualité</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nous créons des badges plastiques durables et professionnels pour vos événements, votre entreprise ou toute autre occasion. Personnalisation complète avec votre logo, vos couleurs et les informations de votre choix.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-green-500" />
                <span className="text-lg">Impression couleur haute résolution</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-green-500" />
                <span className="text-lg">Matériau PVC durable et résistant à l'eau</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-green-500" />
                <span className="text-lg">Options de finition : brillant, mat, etc.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-green-500" />
                <span className="text-lg">Intégration de codes-barres ou QR codes</span>
              </div>
            </div>
            <Button size="lg">Demander un devis</Button>
          </div>
          <div>
            <Card className="shadow-lg border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <img 
                  src="/placeholder.svg" 
                  alt="Exemples de badges plastiques" 
                  className="w-full h-auto rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">Exemples de badges que nous pouvons réaliser</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Tarifs</h2>
            <p className="text-lg text-muted-foreground">Des prix compétitifs pour une qualité professionnelle</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Standard</CardTitle>
                <p className="text-4xl font-bold">1,50€</p>
                <p className="text-muted-foreground">par badge</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>Impression une face</li>
                  <li>Finition brillante</li>
                  <li>Minimum 50 badges</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center border-primary shadow-lg border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <p className="text-4xl font-bold">2,50€</p>
                <p className="text-muted-foreground">par badge</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>Impression recto-verso</li>
                  <li>Finition au choix</li>
                  <li>Perforation incluse</li>
                  <li>Minimum 20 badges</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Sur Mesure</CardTitle>
                <p className="text-4xl font-bold">Devis</p>
                <p className="text-muted-foreground">personnalisé</p>
              </CardHeader>
              <CardContent>
                <p>Contactez-nous pour des options avancées : puces RFID, formats spéciaux, etc.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
