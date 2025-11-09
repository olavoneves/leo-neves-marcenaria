import aboutImg from "@/assets/about-workshop.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={aboutImg} 
              alt="Artesão trabalhando na oficina" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quem Somos
            </h2>
            
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Na <strong className="text-primary">LEO NEVES MARCENARIA</strong>, cada projeto nasce da paixão pela madeira. Criamos móveis sob medida que combinam tradição, estética e funcionalidade, trazendo aconchego e elegância para o seu espaço.
            </p>
            
            <p className="font-body text-lg text-foreground/80 leading-relaxed mt-4">
              Com anos de experiência e dedicação ao artesanato em madeira, transformamos sonhos em realidade através de peças únicas que contam histórias e agregam valor aos ambientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
