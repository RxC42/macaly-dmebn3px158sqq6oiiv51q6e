import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kontaktní informace */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-oswald">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <address className="text-white not-italic">
                  M1 ARMY SHOP<br />
                  Veletržní 7<br />
                  Praha 7, 170 00<br />
                  (rohový dům s ulicí U Smaltovny)
                </address>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-2" />
                <span className="text-white">224 251 232</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-2" />
                <span className="text-white">721 624 264</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-2" />
                <a href="mailto:m1armyshop@seznam.cz" className="text-white hover:text-secondary transition-colors">
                  m1armyshop@seznam.cz
                </a>
              </div>
            </div>
          </div>

          {/* Otevírací doba */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-oswald">Otevírací doba</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <div className="text-white">
                  <p className="font-semibold">PONDĚLÍ - Monday</p>
                  <p>10:00 - 12:15 | 13:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-2" />
                <div className="text-white">
                  <p className="font-semibold">ÚTERÝ - Tuesday</p>
                  <p>9:00 - 12:15 | 13:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-2" />
                <div className="text-white">
                  <p className="font-semibold">STŘEDA - Wednesday</p>
                  <p>9:00 - 12:15 | 13:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-2" />
                <div className="text-white">
                  <p className="font-semibold">ČTVRTEK - Thursday</p>
                  <p>9:00 - 12:15 | 13:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-2" />
                <div className="text-white">
                  <p className="font-semibold">PÁTEK - Friday</p>
                  <p>9:00 - 12:15 | 13:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigace */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-oswald">Navigace</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-white hover:text-secondary transition-colors">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/novinky" className="text-white hover:text-secondary transition-colors">
                  Novinky
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-white hover:text-secondary transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white hover:text-secondary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white hover:text-secondary transition-colors">
                  Přihlášení
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-white hover:text-secondary transition-colors">
                  Registrace
                </Link>
              </li>
            </ul>
          </div>

          {/* Informace */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-oswald">Informace</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/obchodni-podminky" className="text-white hover:text-secondary transition-colors">
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link href="/ochrana-osobnich-udaju" className="text-white hover:text-secondary transition-colors">
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/doprava-a-platba" className="text-white hover:text-secondary transition-colors">
                  Doprava a platba
                </Link>
              </li>
              <li>
                <Link href="/reklamace" className="text-white hover:text-secondary transition-colors">
                  Reklamace
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-white">
          <p>&copy; {new Date().getFullYear()} M1 Army Shop. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-sm">Testováno na lidech!</p>
        </div>
      </div>
    </footer>
  );
}
