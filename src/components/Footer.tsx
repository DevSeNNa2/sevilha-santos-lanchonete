import { Heart, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/c1edb1e0-f3fa-4baa-a39c-e0c6b1db6b17.png" 
              alt="Sevilha Sucos & Lanches" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Há mais de 60 anos levando sabor, qualidade e tradição para sua mesa. 
              O rei das vitaminas que você conhece e confia.
            </p>
          </div>

          {/* Contato Rápido */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90">(13) 3322-5397</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90">Rua Ana Costa, 460 - Gonzaga</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90">Ter-Sáb: 9h às 00:30h
                <br />
                Segunda-feira: 9h às 21h
                <br />
                Domingo: 18h às 00:30h</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Links Rápidos</h3>
            <nav className="space-y-2">
              <a href="#inicio" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Início
              </a>
              <a href="#cardapio" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Cardápio
              </a>
              <a href="#sobre" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Sobre Nós
              </a>
              <a href="#contato" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Sevilha Sucos & Lanches. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>para nossa comunidade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;