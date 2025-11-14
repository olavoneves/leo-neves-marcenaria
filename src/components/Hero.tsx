import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/Captura_de_tela_2025-11-14_160826-removebg-preview.png";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511955502307?text=Olá, gostaria de solicitar um orçamento', '_blank');
  };

  const handleContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-3xl">
          <img 
            src={logo} 
            alt="LEO NEVES MARCENARIA" 
            className="h-20 md:h-24 mb-8 drop-shadow-2xl"
          />
          
          <h1 className="font-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos madeira em arte para o seu lar
          </h1>
          
          <p className="font-body text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Soluções sob medida em marcenaria, com acabamento artesanal e design exclusivo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-secondary hover:bg-secondary/90 text-white font-body font-semibold text-lg px-8 py-6 shadow-2xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale conosco no WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleContact}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-body font-semibold text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicite um orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
