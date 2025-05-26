"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Ukázkové položky košíku
const initialCartItems = [
  {
    id: 1,
    name: "Taktická vesta M95",
    price: 2490,
    quantity: 1,
    image: "/product1.jpg",
  },
  {
    id: 2,
    name: "Armádní boty DESERT",
    price: 1890,
    quantity: 1,
    image: "/product2.jpg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log(`Aktualizace množství pro produkt ID ${id}: ${newQuantity}`);
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    console.log(`Odstranění produktu ID ${id} z košíku`);
  };

  const applyCoupon = () => {
    if (!couponCode) return;
    
    setIsCouponApplied(true);
    console.log(`Aplikace slevového kódu: ${couponCode}`);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 129;
  const discount = isCouponApplied ? 200 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 font-oswald">NÁKUPNÍ KOŠÍK</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seznam položek */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex items-center py-4">
                      {/* Obrázek produktu */}
                      <div className="w-20 h-20 bg-muted rounded flex-shrink-0 mr-4 flex items-center justify-center">
                        <span className="text-sm font-medium text-secondary">{item.name.split(" ")[0]}</span>
                      </div>
                      
                      {/* Informace o produktu */}
                      <div className="flex-grow">
                        <Link href={`/product/${item.id}`} className="font-medium hover:text-accent transition-colors">
                          {item.name}
                        </Link>
                      </div>
                      
                      {/* Množství */}
                      <div className="flex items-center mx-4">
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-input rounded-l-md"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center border-t border-b border-input">
                          {item.quantity}
                        </span>
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-input rounded-r-md"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Cena */}
                      <div className="text-right min-w-24">
                        <div className="font-semibold">{item.price * item.quantity} Kč</div>
                        <div className="text-sm text-muted-foreground">{item.price} Kč/ks</div>
                      </div>
                      
                      {/* Odstranit */}
                      <button
                        className="ml-4 text-muted-foreground hover:text-accent transition-colors"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {index < cartItems.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <Link href="/catalog">
                  <Button variant="outline">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Pokračovat v nákupu
                  </Button>
                </Link>
                <Button variant="destructive" onClick={() => setCartItems([])}>Vyprázdnit košík</Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Souhrn objednávky */}
          <div>
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Souhrn objednávky</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Mezisoučet</span>
                    <span>{subtotal} Kč</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Doprava</span>
                    <span>{shipping} Kč</span>
                  </div>
                  
                  {isCouponApplied && (
                    <div className="flex justify-between text-accent">
                      <span>Sleva (kód: {couponCode})</span>
                      <span>-{discount} Kč</span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Celkem</span>
                    <span>{total} Kč</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Včetně DPH
                  </div>
                </div>
                
                {/* Slevový kód */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Slevový kód</h3>
                  <div className="flex">
                    <Input
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Zadejte kód"
                      className="rounded-r-none"
                      disabled={isCouponApplied}
                    />
                    <Button
                      onClick={applyCoupon}
                      className="rounded-l-none"
                      disabled={!couponCode || isCouponApplied}
                    >
                      Použít
                    </Button>
                  </div>
                  {isCouponApplied && (
                    <div className="text-sm text-accent mt-1">
                      Slevový kód byl úspěšně aplikován.
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="/checkout" className="w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Pokračovat k pokladně
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mb-2">Váš košík je prázdný</h2>
          <p className="text-muted-foreground mb-6">Vypadá to, že jste ještě nepřidali žádné produkty do košíku.</p>
          <Link href="/catalog">
            <Button>
              Přejít do katalogu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
