import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Cozinha Planejada",
    description: "Móveis sob medida em madeira nobre"
  },
  {
    image: portfolio2,
    title: "Estante Personalizada",
    description: "Design exclusivo com iluminação integrada"
  },
  {
    image: portfolio3,
    title: "Mesa de Jantar",
    description: "Acabamento artesanal premium"
  }
];

const Portfolio = () => {
  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfólio
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que já transformaram espaços
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-title text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
