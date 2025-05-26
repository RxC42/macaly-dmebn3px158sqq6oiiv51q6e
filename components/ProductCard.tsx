"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Star } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number | null;
    image: string;
    category: string;
    isNew?: boolean;
    isSale?: boolean;
    brand?: string;
    rating?: number;
  };
}

export default function ProductCard({ product }: ProductProps) {
  const { toast } = useToast();

  const addToCart = () => {
    console.log("Přidání do košíku:", product);
    toast({
      title: "Přidáno do košíku",
      description: `${product.name} byl přidán do košíku.`,
    });
  };

  return (
    <Card className="overflow-hidden bg-card hover:shadow-lg transition-shadow group h-full flex flex-col">
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
            <Button variant="secondary" size="icon" className="rounded-full" onClick={addToCart}>
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
      
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-1">
          <div className="text-sm text-muted-foreground">{product.category}</div>
          {product.rating && (
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-secondary text-secondary mr-1" />
              <span className="text-xs">{product.rating}</span>
            </div>
          )}
        </div>
        <Link href={`/product/${product.id}`} className="hover:text-accent transition-colors">
          <h3 className="font-semibold font-oswald truncate">{product.name}</h3>
        </Link>
        {product.brand && (
          <div className="text-xs text-muted-foreground mt-1">{product.brand}</div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center mt-auto">
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
        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white" onClick={addToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Koupit
        </Button>
      </CardFooter>
    </Card>
  );
}
