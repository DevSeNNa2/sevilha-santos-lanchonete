import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Fale Conosco
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos sempre prontos para atender você! Entre em contato ou venha nos visitar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <Card className="border-2 hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <MapPin className="w-6 h-6" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg mb-4">
                    Rua das Vitaminas, 123<br />
                    Centro - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver no Mapa
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-2 hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary text-lg">
                      <Phone className="w-5 h-5" />
                      Telefone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">(11) 99999-9999</p>
                    <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary text-lg">
                      <Clock className="w-5 h-5" />
                      Horário
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">8h às 22h</p>
                    <p className="text-sm text-muted-foreground">Segunda a Domingo</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 bg-gradient-hero text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Delivery Disponível! 🚚</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">
                    Peça pelo WhatsApp ou aplicativos de delivery. 
                    Entregamos fresquinho na sua casa!
                  </p>
                  <div className="flex gap-3">
                    <Button variant="accent" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      iFood
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Instagram className="w-6 h-6" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Facebook className="w-6 h-6" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Mail className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Formulário de Contato */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Nome
                    </label>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Telefone
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu.email@exemplo.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Como podemos ajudar você?" 
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="accent" size="lg" className="w-full text-lg">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;