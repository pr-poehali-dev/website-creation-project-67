import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(155,135,245,0.3),rgba(255,255,255,0)_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-7xl md:text-8xl font-extrabold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Ваше Имя
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Опишите здесь чем вы занимаетесь
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open('https://t.me/your_telegram', '_blank')}
            >
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary hover:bg-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open('https://github.com/your_github', '_blank')}
            >
              <Icon name="Github" className="mr-2" size={20} />
              GitHub
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent hover:bg-accent/10 hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open('mailto:your@email.com', '_blank')}
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Email
            </Button>
          </div>
          
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-4">Мои навыки</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'TypeScript', 'Design', 'Development'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;
