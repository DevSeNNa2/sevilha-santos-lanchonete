import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background border-b-2 border-accent sticky top-0 z-50 shadow-warm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-muted">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Seg-Dom: 8h às 22h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Rua das Vitaminas, 123 - Centro</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary font-medium">
            <Phone className="w-4 h-4" />
            <span>(11) 99999-9999</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c1edb1e0-f3fa-4baa-a39c-e0c6b1db6b17.png" 
              alt="Sevilha Sucos & Lanches" 
              className="h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('cardapio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Cardápio
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <Button variant="accent" size="lg" className="hidden md:flex">
            Fazer Pedido
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-current mb-1"></span>
              <span className="block w-5 h-0.5 bg-current mb-1"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;