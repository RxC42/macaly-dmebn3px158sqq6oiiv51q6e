"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MinusCircle, PlusCircle, ShoppingCart, Heart, Share2, Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Ukázková data produktu
const product = {
  id: 1,
  name: "Taktická vesta M95 Army",
  price: 2490,
  oldPrice: 2990,
  description: "Kvalitní taktická vesta vyrobená z odolného materiálu. Vhodná pro vojenské účely i outdoorové aktivity. Mnoho kapes a upevnění pro maximální flexibilitu.",
  features: [
    "Vysoce odolný materiál",
    "Nastavitelná velikost",
    "6 taktických kapes",
    "MOLLE systém pro připojení dalšího vybavení",
    "Vodně odolná úprava",
    "Testováno v těžkých podmínkách"
  ],
  specifications: {
    "Materiál": "1000D Cordura nylon",
    "Hmotnost": "1,2 kg",
    "Rozměry": "Nastavitelné (M-XXL)",
    "Barva": "Army green",
    "Způsob uzavírání": "Zip a suchý zip",
    "Vodní sloupec": "2000 mm"
  },
  rating: 4.7,
  reviews: 23,
  availability: "Skladem",
  sku: "TV-M95-01",
  categories: ["Vesty", "Taktické vybavení"],
  images: ["/product1.jpg", "/product1.jpg", "/product1.jpg"],
  isNew: false,
  isSale: true,
  sizes: ["M", "L", "XL", "XXL"],
  colors: ["green", "black", "desert"],
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Vyberte velikost",
        description: "Před přidáním do košíku musíte vybrat velikost.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedColor) {
      toast({
        title: "Vyberte barvu",
        description: "Před přidáním do košíku musíte vybrat barvu.",
        variant: "destructive"
      });
      return;
    }

    console.log("Přidávám do košíku:", {
      productId: params.id,
      quantity,
      size: selectedSize,
      color: selectedColor
    });

    toast({
      title: "Přidáno do košíku",
      description: `${product.name} (${selectedSize}, ${selectedColor}) byl přidán do košíku.`
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-6">
        <Link href="/catalog" className="inline-flex items-center text-sm hover:text-accent transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Zpět do katalogu
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Obrázky produktu */}
        <div className="space-y-4">
          {/* Hlavní obrázek */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
            {/* Simulace obrázku produktu */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-3xl font-semibold text-secondary font-oswald">{product.name.split(" ")[0]}</span>
            </div>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-accent text-white">Novinka</Badge>
              )}
              {product.isSale && (
                <Badge className="bg-secondary text-black">Akce</Badge>
              )}
            </div>
          </div>

          {/* Miniatury */}
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`w-20 h-20 bg-muted rounded-md overflow-hidden flex items-center justify-center
                  ${activeImage === index ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <span className="text-sm font-medium text-secondary">{index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detaily produktu */}
        <div>
          <h1 className="text-3xl font-bold mb-2 font-oswald">{product.name}</h1>

          {/* Hodnocení */}
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">{product.reviews} recenzí</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Kód: {product.sku}</span>
          </div>

          {/* Cena */}
          <div className="mb-6">
            {product.oldPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{product.price} Kč</span>
                <span className="line-through text-muted-foreground">{product.oldPrice} Kč</span>
                <Badge className="bg-accent text-white ml-2">
                  {Math.round((1 - product.price / product.oldPrice) * 100)}% sleva
                </Badge>
              </div>
            ) : (
              <span className="text-2xl font-bold">{product.price} Kč</span>
            )}
          </div>

          <Separator className="my-6" />

          {/* Krátký popis */}
          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Dostupnost */}
          <div className="flex items-center mb-6">
            <span className="font-medium mr-2">Dostupnost:</span>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {product.availability}
            </Badge>
          </div>

          {/* Výběr velikosti */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Velikost:</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className={selectedSize === size ? "bg-primary" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Výběr barvy */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Barva:</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "outline"}
                  className={selectedColor === color ? "bg-primary" : ""}
                  onClick={() => setSelectedColor(color)}
                >
                  {color === "green" ? "Zelená" : 
                   color === "black" ? "Černá" : 
                   color === "desert" ? "Poustňová" : color}
                </Button>
              ))}
            </div>
          </div>

          {/* Množství a tlačítka */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-input rounded-md overflow-hidden max-w-[140px]">
              <button
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                onClick={decreaseQuantity}
              >
                <MinusCircle className="h-5 w-5" />
              </button>
              <span className="flex-1 text-center font-medium">{quantity}</span>
              <button
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                onClick={increaseQuantity}
              >
                <PlusCircle className="h-5 w-5" />
              </button>
            </div>

            <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Přidat do košíku
            </Button>

            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Doplňující informace */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <Truck className="h-5 w-5 text-secondary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Doprava zdarma</h4>
                <p className="text-sm text-muted-foreground">Při objednávce nad 2000 Kč</p>
              </div>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="h-5 w-5 text-secondary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Testováno na lidech</h4>
                <p className="text-sm text-muted-foreground">Všechny produkty jsou důkladně testovány</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Záložky s detaily */}
      <Tabs defaultValue="details" className="mt-12">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="details" className="flex-1 sm:flex-none">Detaily produktu</TabsTrigger>
          <TabsTrigger value="specs" className="flex-1 sm:flex-none">Specifikace</TabsTrigger>
          <TabsTrigger value="reviews" className="flex-1 sm:flex-none">Recenze ({product.reviews})</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-6">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 font-oswald">DETAILY PRODUKTU</h3>
            <p className="mb-4">{product.description}</p>
            <h4 className="font-semibold mb-2">Klíčové vlastnosti:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specs" className="mt-6">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 font-oswald">SPECIFIKACE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="py-2 border-b border-muted last:border-0">
                  <span className="font-medium">{key}: </span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 font-oswald">RECENZE</h3>
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                V této ukázkové verzi nejsou recenze k dispozici.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
