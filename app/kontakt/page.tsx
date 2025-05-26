import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 font-oswald">KONTAKT</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Kontaktní údaje */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 font-oswald">M1 ARMY SHOP</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                  <address className="not-italic">
                    Veletržní 7<br />
                    Praha 7<br />
                    170 00<br />
                    (rohový dům s ulicí U Smaltovny)
                  </address>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3" />
                  <span>224 251 232</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3" />
                  <span>721 624 264</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-3" />
                  <a href="mailto:m1armyshop@seznam.cz" className="hover:text-accent transition-colors">
                    m1armyshop@seznam.cz
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 font-oswald">Otevírací doba</h2>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold">PONDĚLÍ - Monday</p>
                    <p>10:00 - 12:15 | 13:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">ÚTERÝ - Tuesday</p>
                    <p>9:00 - 12:15 | 13:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">STŘEDA - Wednesday</p>
                    <p>9:00 - 12:15 | 13:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">ČTVRTEK - Thursday</p>
                    <p>9:00 - 12:15 | 13:00 - 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">PÁTEK - Friday</p>
                    <p>9:00 - 12:15 | 13:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Mapa a kontaktní formulář */}
        <div className="lg:col-span-3 space-y-6">
          {/* Mapa - placeholder */}
          <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-lg font-semibold mb-2">Mapa</h3>
              <p className="text-muted-foreground">
                Zde by byla interaktivní mapa s umístěním obchodu.
                V reálné implementaci by se použil Google Maps nebo jiná mapová služba.
              </p>
            </div>
          </div>
          
          {/* Kontaktní formulář */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 font-oswald">Napište nám</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Jméno</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-2 border border-input rounded-md bg-background"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border border-input rounded-md bg-background"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Předmět</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-2 border border-input rounded-md bg-background"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Zpráva</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border border-input rounded-md bg-background resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Odeslat zprávu
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
