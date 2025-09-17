import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccesoiresJeuxVideoPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Accessoires pour Jeux Vidéo</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Accessoires pour Jeux Vidéo</h2>
          <p className="text-xl text-muted-foreground">Améliorez votre expérience de jeu avec nos accessoires.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Add products here */}
        </div>
      </main>
    </div>
  );
}
