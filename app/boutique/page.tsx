import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BoutiquePage() {
  return (
    <div className="min-h-screen bg-background">

         <div className="mt-4 container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#002F6F]">Boutique en ligne</h1>
        </div>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Produits</h2>
          <p className="text-xl text-muted-foreground">Découvrez notre sélection d'équipements informatiques.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/boutique/ordinateurs-portables">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <img
                  src="/modern-laptop-computer.png"
                  alt="Ordinateurs portables"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Ordinateurs portables</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Voir la sélection</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/boutique/ordinateurs-de-bureau">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <img
                  src="/desktop-computer-setup.png"
                  alt="Ordinateurs de bureau"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Ordinateurs de bureau</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Voir la sélection</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/boutique/accessoires">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <img
                  src="/printer-and-computer-accessories.png"
                  alt="Accessoires informatiques"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Accessoires</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Voir la sélection</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/boutique/accessoires-pc-portable">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  alt="Accessoires PC portable"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Accessoires PC portable</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Voir la sélection</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/boutique/accessoires-telephone">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  alt="Accessoires téléphone"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Accessoires téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Voir la sélection</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/boutique/accessoires-jeux-video">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  alt="Accessoires jeux vidéo"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Accessoires jeux vidéo</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Voir la sélection</Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
}
