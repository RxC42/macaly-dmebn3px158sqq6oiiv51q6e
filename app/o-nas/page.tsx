import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 font-oswald">O NÁS</h1>
      
      {/* Hero sekce */}
      <div className="bg-primary rounded-lg p-8 mb-12 relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4 font-oswald">VÍTEJTE V M1 ARMY SHOP</h2>
          <p className="text-white/90 mb-6">
            Specializujeme se na prodávej vojenského a taktického vybavení s důrazem na kvalitu a funkčnost. 
            Naše produkty jsou testovány v náročných podmínkách, abychom zajistili, že dostáváte to nejlepší.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/catalog">
              <Button className="bg-white text-primary hover:bg-white/90">Prohlédnout katalog</Button>
            </Link>
            <Link href="/kontakt">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Kontaktujte nás</Button>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent opacity-30"></div>
      </div>
      
      {/* Naše hodnoty */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center font-oswald">NAŠE HODNOTY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-oswald">KVALITA</h3>
              <p className="text-muted-foreground">
                Všechny naše produkty jsou pečlivě vybrány a testovány, abychom zajistili, že dostáváte pouze to nejlepší.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-oswald">ODBORNOST</h3>
              <p className="text-muted-foreground">
                Naši zaměstnanci jsou nadšenci a experti v oblasti vojenského vybavení, kteří vám rádi poradí.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-oswald">KOMUNITA</h3>
              <p className="text-muted-foreground">
                Vytváříme silnou komunitu lidí, kteří sdílejí vaši vášeň pro military styl a outdoor aktivity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Naše historie */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 font-oswald">NAŠE HISTORIE</h2>
        <div className="bg-card rounded-lg p-6">
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              M1 Army Shop byl založen v roce 2005 s jediným cílem - poskytovat kvalitní vojenské a taktické vybavení pro profesionály i nadšence. Začínali jsme jako malý obchod v centru Prahy, ale díky našemu závazku ke kvalitě a spokojenosti zákazníků jsme rychle rostli.
            </p>
            <p className="mb-4">
              V roce 2010 jsme otevřeli naši současnou provozovnu na adrese Veletržní 7, Praha 7, kde nás můžete navštívit i dnes. V roce 2015 jsme spustili náš e-shop, abychom mohli naše produkty nabídnout zákazníkům po celé České republice.
            </p>
            <p>
              Naším heslem je "Testováno na lidech!" a to není jen prázdné marketingové tvzení. Všechny produkty, které nabízíme, jsou důkladně testovány v reálných podmínkách, abychom zajistili, že splňují náročné požadavky našich zákazníků.
            </p>
          </div>
        </div>
      </div>
      
      {/* Tým */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center font-oswald">NÁŠ TÝM</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Tým by zde byl v reálné implementaci */}
          {[1, 2, 3, 4].map((member) => (
            <Card key={member} className="overflow-hidden">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <span className="text-secondary font-medium">Foto člena týmu</span>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Jméno Příjmení</h3>
                <p className="text-sm text-muted-foreground mb-2">Pozice</p>
                <p className="text-sm">
                  Krátký popis a zkušenosti daného člena týmu.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Výzva k akci */}
      <div className="bg-secondary/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 font-oswald">PŘIPOJTE SE K NÁM</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Navštivte nás v naší prodejně nebo nakupujte online. 
          Jsme tu, abychom vám pomohli najít ideální vybavení pro vaše potřeby.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/catalog">
            <Button className="bg-primary hover:bg-primary/90">Prohlédnout produkty</Button>
          </Link>
          <Link href="/kontakt">
            <Button variant="outline">Kontaktujte nás</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
