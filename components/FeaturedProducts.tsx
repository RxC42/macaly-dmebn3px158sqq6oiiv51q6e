"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

// Ukázkové produkty
const mockProducts = [
  {
    id: 1,
    name: "Taktická vesta M95",
    price: 2490,
    image: "/product1.jpg",
    category: "Vesty",
    isNew: true,
    isSale: false
  },
  {
    id: 2,
    name: "Armádní boty DESERT",
    price: 1890,
    oldPrice: 2290,
    image: "/product2.jpg",
    category: "Obuv",
    isNew: false,
    isSale: true
  },
  {
    id: 3,
    name: "Batoh 35L vodotěsný",
    price: 1290,
    image: "/product3.jpg",
    category: "Batohy",
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: "Multifunkční nůž M1-Tactical",
    price: 890,
    oldPrice: 1190,
    image: "/product4.jpg",
    category: "Vybavení",
    isNew: false,
    isSale: true
  }
];

export default function FeaturedProducts() {
  const [products, setProducts] = useState(mockProducts);

  // Zde by byla logika pro načtení dat z API v reálném případě
  useEffect(() => {
    console.log("Načítání doporučených produktů...");
    // V reálné implementaci by zde byl API call
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden bg-card hover:shadow-lg transition-shadow group">
          <div className="relative aspect-square bg-muted overflow-hidden">
            {/* Placeholder obrázku - v reálném projektu zde bude skutečný obrázek */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-xl font-semibold text-secondary">{product.name.split(" ")[0]}</span>
            </div>
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-accent text-white">Novinka</Badge>
              )}
              {product.isSale && (
                <Badge className="bg-secondary text-black">Akce</Badge>
              )}
            </div>
            
            {/* Quick actions */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex space-x-2">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Link href={`/product/${product.id}`}>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
            <Link href={`/product/${product.id}`} className="hover:text-accent transition-colors">
              <h3 className="font-semibold font-oswald truncate">{product.name}</h3>
            </Link>
          </CardContent>
          
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <div>
              {product.oldPrice ? (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{product.price} Kč</span>
                  <span className="line-through text-muted-foreground text-sm">{product.oldPrice} Kč</span>
                </div>
              ) : (
                <span className="font-semibold">{product.price} Kč</span>
              )}
            </div>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Koupit
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
