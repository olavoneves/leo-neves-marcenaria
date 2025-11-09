import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Wrench, Palette } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Móveis Planejados",
    description: "Projetos exclusivos e sob medida para cada ambiente."
  },
  {
    icon: Wrench,
    title: "Restauro de Móveis",
    description: "Recuperamos peças com história e valor afetivo."
  },
  {
    icon: Palette,
    title: "Design de Interiores em Madeira",
    description: "Integramos madeira em projetos residenciais e comerciais."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em marcenaria, do planejamento à execução
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-title text-2xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
