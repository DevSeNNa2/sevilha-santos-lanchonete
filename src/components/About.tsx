import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Clock, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada suco e lanche é preparado com carinho e dedicação, usando receitas tradicionais da família."
    },
    {
      icon: Users,
      title: "Tradição Familiar",
      description: "Três gerações dedicadas a servir os melhores sucos e lanches da região com o mesmo padrão de qualidade."
    },
    {
      icon: Clock,
      title: "Sempre Frescos",
      description: "Ingredientes selecionados diariamente e preparados na hora para garantir máximo sabor e qualidade."
    },
    {
      icon: Award,
      title: "Rei das Vitaminas",
      description: "Reconhecidos pela qualidade excepcional dos nossos sucos naturais e vitaminas nutritivas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Nossa História
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde 1962, a Sevilha é sinônimo de qualidade, sabor e tradição em sucos naturais e lanches deliciosos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Uma Jornada de Sabores
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundada com o sonho de levar sabores únicos e naturais para nossa comunidade, 
                a Sevilha Sucos & Lanches nasceu da paixão pela culinária saudável e saborosa.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ao longo dos anos, nos tornamos referência em sucos naturais, vitaminas nutritivas 
                e lanches preparados com ingredientes frescos e selecionados. Nosso compromisso é 
                com a qualidade e satisfação de cada cliente.
              </p>
              <div className="bg-gradient-accent p-6 rounded-lg">
                <p className="text-accent-foreground font-medium text-lg">
                  "Nosso segredo é simples: ingredientes frescos, receitas especiais e muito amor em cada preparo."
                </p>
                <p className="text-accent-foreground/80 mt-2">
                  - Família Sevilha
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">60+</div>
                    <div className="text-sm opacity-90">Anos de experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">50k+</div>
                    <div className="text-sm opacity-90">Sucos servidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm opacity-90">Ingredientes naturais</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">⭐⭐⭐⭐⭐</div>
                    <div className="text-sm opacity-90">Avaliação dos clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:shadow-warm transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;