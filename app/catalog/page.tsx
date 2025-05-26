"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ProductCard from "@/components/ProductCard";

// Ukázkové kategorie
const categories = [
  { id: 1, name: "Oblečení", count: 42 },
  { id: 2, name: "Obuv", count: 18 },
  { id: 3, name: "Batohy", count: 23 },
  { id: 4, name: "Vesty", count: 15 },
  { id: 5, name: "Nože", count: 27 },
  { id: 6, name: "Taktické vybavení", count: 31 },
  { id: 7, name: "Outdoor", count: 19 },
  { id: 8, name: "Doplňky", count: 24 },
];

// Ukázkové značky
const brands = [
  { id: 1, name: "Pentagon", count: 12 },
  { id: 2, name: "Helikon-Tex", count: 15 },
  { id: 3, name: "Mil-Tec", count: 18 },
  { id: 4, name: "Rothco", count: 10 },
  { id: 5, name: "M1-Tactical", count: 8 },
];

// Ukázkové produkty
const mockProducts = Array(12).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Vojenský produkt ${index + 1}`,
  price: Math.floor(Math.random() * 3000) + 500,
  oldPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 4000) + 1000 : null,
  image: `/product${(index % 4) + 1}.jpg`,
  category: categories[Math.floor(Math.random() * categories.length)].name,
  brand: brands[Math.floor(Math.random() * brands.length)].name,
  isNew: Math.random() > 0.8,
  isSale: Math.random() > 0.7,
  rating: Math.floor(Math.random() * 5) + 1,
}));

export default function CatalogPage() {
  const [products, setProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState("recommended");

  // Filtrace produktů
  useEffect(() => {
    console.log("Filtrování produktů...");
    console.log("Vyhledávací dotaz:", searchQuery);
    console.log("Vybrané kategorie:", selectedCategories);
    console.log("Vybrané značky:", selectedBrands);
    console.log("Řazení podle:", sortOption);
    
    // V reálné implementaci by zde byla logika pro načtení dat z API
  }, [searchQuery, selectedCategories, selectedBrands, sortOption]);

  const toggleCategory = (categoryId: number) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleBrand = (brandId: number) => {
    setSelectedBrands(prev =>
      prev.includes(brandId)
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 font-oswald">KATALOG PRODUKTŮ</h1>

      {/* Vyhledávací lišta */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Hledat produkty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="sm:hidden"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filtry
          </Button>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-3 py-2 rounded-md border border-input bg-background text-sm"
          >
            <option value="recommended">Doporučené</option>
            <option value="price-asc">Cena: nejnižší</option>
            <option value="price-desc">Cena: nejvyšší</option>
            <option value="newest">Nejnovější</option>
            <option value="rating">Nejlépe hodnocené</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Filtry */}
        <aside className={`w-full sm:w-64 ${isFiltersOpen ? 'block' : 'hidden'} sm:block`}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4 sm:hidden">
                <h3 className="font-semibold">Filtry</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsFiltersOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Kategorie */}
              <Collapsible defaultOpen={true} className="mb-6">
                <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
                  <h3 className="font-semibold">Kategorie</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category.id}`} 
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <Label htmlFor={`category-${category.id}`} className="cursor-pointer">
                          {category.name}
                        </Label>
                      </div>
                      <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Značky */}
              <Collapsible defaultOpen={true} className="mb-6">
                <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
                  <h3 className="font-semibold">Značky</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`brand-${brand.id}`} 
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => toggleBrand(brand.id)}
                        />
                        <Label htmlFor={`brand-${brand.id}`} className="cursor-pointer">
                          {brand.name}
                        </Label>
                      </div>
                      <Badge variant="secondary" className="text-xs">{brand.count}</Badge>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Cena */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Cena</h3>
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="Od" className="w-full" />
                  <span>-</span>
                  <Input type="number" placeholder="Do" className="w-full" />
                </div>
              </div>

              {/* Další filtry */}
              <Collapsible className="mb-6">
                <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
                  <h3 className="font-semibold">Dostupnost</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-stock" />
                    <Label htmlFor="in-stock">Skladem</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sale" />
                    <Label htmlFor="sale">Akce</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="new" />
                    <Label htmlFor="new">Novinka</Label>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Button className="w-full" variant="outline">
                Resetovat filtry
              </Button>
            </CardContent>
          </Card>
        </aside>

        {/* Produkty */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Stránkování */}
          <div className="mt-10 flex justify-center">
            <Button variant="outline" className="mx-1">1</Button>
            <Button variant="ghost" className="mx-1">2</Button>
            <Button variant="ghost" className="mx-1">3</Button>
            <Button variant="ghost" className="mx-1">4</Button>
            <Button variant="ghost" className="mx-1">Další</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
