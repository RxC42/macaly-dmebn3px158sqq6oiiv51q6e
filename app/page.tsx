import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, PackageCheck } from "lucide-react";
import Link from "next/link";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-20 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-oswald mb-6 tracking-wider">
              TESTOVÁNO NA LIDECH !
            </h1>
            <p className="text-xl text-white mb-8">
              Vojenské vybavení, oblečení a doplňky pro armádu a military nadšence.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/catalog">
                <Button className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-6">
                  Prohlédnout katalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/novinky">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Novinky
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-md">
              <Shield className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-oswald">Kvalitní vybavení</h3>
              <p className="text-muted-foreground">Veškeré zboží prochází přísnou kontrolou kvality.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-md">
              <Truck className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-oswald">Rychlé doručení</h3>
              <p className="text-muted-foreground">Expedujeme do 24 hodin od objednání.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-md">
              <PackageCheck className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-oswald">Ověřené produkty</h3>
              <p className="text-muted-foreground">Produkty testované v reálných podmínkách.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-oswald">
            DOPORUČENÉ PRODUKTY
          </h2>
          <FeaturedProducts />
          <div className="text-center mt-10">
            <Link href="/catalog">
              <Button className="bg-primary hover:bg-primary/90">
                Zobrazit všechny produkty
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white font-oswald">
            TESTOVÁNO NA LIDECH!
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Naše produkty využívají profesionálové i nadšenci po celé České republice. Připojte se k nim a získejte vybavení, na které se můžete spolehnout.
          </p>
          <Link href="/register">
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-6">
              Vytvořit účet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
