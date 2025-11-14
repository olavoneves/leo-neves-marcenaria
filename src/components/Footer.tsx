import logo from "@/assets/Captura_de_tela_2025-11-14_155253-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="Neves Marcenaria" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="font-body text-sm text-background/80">
              Transformando madeira em arte desde sempre. Móveis sob medida com qualidade artesanal.
            </p>
          </div>
          
          <div>
            <h3 className="font-title text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#sobre" className="text-background/80 hover:text-background transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/80 hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-background/80 hover:text-background transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-title text-lg font-bold mb-4">Informações</h3>
            <ul className="space-y-2 font-body text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-background/10 rounded-lg">
              <p className="font-body text-sm text-background/90">
                🚀 <strong>Em breve:</strong> nosso e-commerce exclusivo de móveis sob medida!
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-body text-sm text-background/70">
            © 2025 Neves Marcenaria — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
