"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Chyba",
        description: "Hesla se neshodují",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.agreeTerms) {
      toast({
        title: "Chyba",
        description: "Pro registraci musíte souhlasit s obchodními podmínkami",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    console.log("Registrace uživatele:", { 
      email: formData.email, 
      firstName: formData.firstName, 
      lastName: formData.lastName 
    });
    
    // Simulace registrace
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registrace úspěšná",
        description: "Váš účet byl úspěšně vytvořen. Nyní se můžete přihlásit.",
      });
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-lg mx-auto">
        <Card className="border-secondary/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-oswald">REGISTRACE</CardTitle>
            <CardDescription>
              Vytvořte si účet pro snadnější nakupování a sledování objednávek.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Jméno</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Příjmení</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Heslo</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Potvrzení hesla</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="agreeTerms" 
                  checked={formData.agreeTerms}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="agreeTerms" className="text-sm">
                  Souhlasím s{" "}
                  <Link href="/obchodni-podminky" className="text-accent hover:underline">
                    obchodními podmínkami
                  </Link>{" "}
                  a{" "}
                  <Link href="/ochrana-osobnich-udaju" className="text-accent hover:underline">
                    zásadami ochrany osobních údajů
                  </Link>
                </Label>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Registrace..." : "Vytvořit účet"}
              </Button>
              <div className="text-center text-sm">
                Již máte účet?{" "}
                <Link href="/login" className="text-accent hover:underline">
                  Přihlaste se
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
