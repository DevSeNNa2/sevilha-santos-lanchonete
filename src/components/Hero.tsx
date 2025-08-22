import { Button } from "@/components/ui/button";
import { Star, Heart, Coffee } from "lucide-react";

const Hero = () => {
  const scrollToCardapio = () => {
    const element = document.getElementById('cardapio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="bg-gradient-hero text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🥤</div>
        <div className="absolute top-32 right-20 text-4xl">🍔</div>
        <div className="absolute bottom-20 left-32 text-5xl">🍊</div>
        <div className="absolute bottom-32 right-10 text-3xl">🥪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Rei das Vitaminas desde 1995</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Sabor que <span className="text-accent">Conquista</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Sucos frescos, lanches deliciosos e vitaminas nutritivas feitos com muito carinho e ingredientes selecionados
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="accent" 
              size="lg" 
              onClick={scrollToCardapio}
              className="text-lg px-8 py-6 h-auto"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Ver Cardápio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Heart className="w-5 h-5 mr-2" />
              Delivery
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm opacity-80">Anos de tradição</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm opacity-80">Sabores únicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm opacity-80">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;