"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Monitor, Wrench, Printer, ShoppingCart, Users, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function ProductDetailPage() {
  // In a real application, you would fetch product data based on the ID
  // For now, we'll just display the ID
  const params = useParams();
  const { id } = params;

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

      {/* Product Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Détails du Produit #{id}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Ceci est une page de détails pour le produit avec l'ID {id}. Plus d'informations à venir...
            </p>
            <Link href="/boutique">
              <Button>Retour à la boutique</Button>
            </Link>
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
