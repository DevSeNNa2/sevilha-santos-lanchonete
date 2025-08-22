import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star } from "lucide-react";

const Menu = () => {
  const sucos = [
    { nome: "Suco de Laranja", preco: "R$ 8,50", descricao: "Laranja fresca espremida na hora", popular: true },
    { nome: "Vitamina de Banana", preco: "R$ 12,00", descricao: "Banana, leite, açúcar e canela", popular: true },
    { nome: "Suco de Acerola", preco: "R$ 9,00", descricao: "Rico em vitamina C, super refrescante" },
    { nome: "Vitamina de Morango", preco: "R$ 13,50", descricao: "Morango, leite condensado e leite" },
    { nome: "Suco Verde", preco: "R$ 15,00", descricao: "Couve, maçã, limão e gengibre", popular: true },
    { nome: "Açaí na Tigela", preco: "R$ 18,00", descricao: "Açaí com granola, banana e mel" }
  ];

  const lanches = [
    { nome: "X-Burger Sevilha", preco: "R$ 22,00", descricao: "Pão, hambúrguer, queijo, alface, tomate e molho especial", popular: true },
    { nome: "Misto Quente", preco: "R$ 8,50", descricao: "Pão de forma, presunto e queijo" },
    { nome: "Sanduíche Natural", preco: "R$ 12,00", descricao: "Pão integral, peito de peru, queijo branco e salada" },
    { nome: "X-Salada", preco: "R$ 18,00", descricao: "Hambúrguer, queijo, alface, tomate, milho e batata palha" },
    { nome: "Wrap de Frango", preco: "R$ 16,50", descricao: "Tortilha, frango grelhado, queijo e molho caesar" },
    { nome: "Pão na Chapa", preco: "R$ 6,00", descricao: "Pão francês na chapa com manteiga" }
  ];

  const MenuCard = ({ item, categoria }: { item: any, categoria: string }) => (
    <Card className="hover:shadow-warm transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {item.nome}
              {item.popular && (
                <Badge variant="secondary" className="ml-2 bg-accent text-accent-foreground">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Popular
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              {item.descricao}
            </CardDescription>
          </div>
          <div className="text-right ml-4">
            <div className="text-xl font-bold text-primary">{item.preco}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="cardapio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra sabores únicos em cada suco, lanche e vitamina. 
            Ingredientes frescos e receitas especiais fazem a diferença!
          </p>
        </div>

        <Tabs defaultValue="sucos" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-background">
            <TabsTrigger value="sucos" className="text-lg py-3">
              🥤 Sucos & Vitaminas
            </TabsTrigger>
            <TabsTrigger value="lanches" className="text-lg py-3">
              🍔 Lanches
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sucos" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sucos.map((suco, index) => (
                <MenuCard key={index} item={suco} categoria="sucos" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lanches" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lanches.map((lanche, index) => (
                <MenuCard key={index} item={lanche} categoria="lanches" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" className="text-lg px-8 py-6 h-auto">
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;