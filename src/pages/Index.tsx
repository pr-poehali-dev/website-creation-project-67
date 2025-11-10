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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg py-8 w-full"
              onClick={() => window.open('https://t.me/your_telegram', '_blank')}
            >
              <Icon name="Send" className="mr-2" size={24} />
              Telegram
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg py-8 w-full text-white"
              onClick={() => window.open('https://www.tiktok.com/@wzfff_hook?_r=1&_t=ZP-91HZQi7Wqch', '_blank')}
            >
              <Icon name="Music" className="mr-2" size={24} />
              TikTok
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg py-8 w-full text-white"
              onClick={() => window.open('https://vk.com/kwiqsy', '_blank')}
            >
              <Icon name="Share2" className="mr-2" size={24} />
              VK
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;