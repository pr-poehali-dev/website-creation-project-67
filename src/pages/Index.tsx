import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/6591adf9-f863-4ac8-af61-29a766a748cd.jpg)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}>
              Алексей
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light uppercase tracking-widest">Friendly Tag 51</p>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Хожу в зал 💪
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-br from-[#0088cc] to-[#229ED9] hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg py-8 w-full rounded-full flex items-center justify-center gap-3 border-2 border-white/20"
              onClick={() => window.open('https://t.me/your_telegram', '_blank')}
            >
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-br from-[#000000] to-[#fe2c55] hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg py-8 w-full rounded-full text-white flex items-center justify-center gap-3 border-2 border-white/20"
              onClick={() => window.open('https://www.tiktok.com/@wzfff_hook?_r=1&_t=ZP-91HZQi7Wqch', '_blank')}
            >
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-br from-[#0077FF] to-[#4A9EFF] hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg py-8 w-full rounded-full text-white flex items-center justify-center gap-3 border-2 border-white/20"
              onClick={() => window.open('https://vk.com/kwiqsy', '_blank')}
            >
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.08h-1.26c-.54 0-.71-.43-1.67-1.41-0.85-0.83-1.22-0.94-1.43-0.94-0.29 0-0.38 0.09-0.38 0.54v1.29c0 0.35-0.11 0.56-1.03 0.56-1.52 0-3.2-0.92-4.38-2.64-1.78-2.48-2.27-4.35-2.27-4.73 0-0.21 0.09-0.41 0.54-0.41h1.26c0.4 0 0.55 0.19 0.71 0.61 0.75 2.16 2 4.05 2.52 4.05 0.19 0 0.28-0.09 0.28-0.59V9.63c-0.06-1.06-0.62-1.15-0.62-1.53 0-0.17 0.14-0.34 0.37-0.34h1.97c0.33 0 0.45 0.18 0.45 0.56v3.77c0 0.33 0.15 0.45 0.24 0.45 0.19 0 0.35-0.12 0.7-0.47 1.07-1.2 1.84-3.06 1.84-3.06 0.1-0.22 0.29-0.41 0.69-0.41h1.26c0.47 0 0.58 0.24 0.47 0.56-0.17 0.81-1.91 3.47-1.91 3.47-0.16 0.26-0.22 0.38 0 0.68 0.16 0.22 0.69 0.67 1.04 1.08 0.63 0.72 1.12 1.32 1.25 1.74 0.12 0.43-0.07 0.64-0.5 0.64z"/>
              </svg>
            </Button>
          </div>
          
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-black/60 backdrop-blur-xl p-8 rounded-[2rem] max-w-sm mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/10">
              <p className="text-xl font-bold text-white mb-4">💳 Поддержать</p>
              <div className="bg-white p-5 rounded-3xl shadow-inner">
                <img 
                  src="https://cdn.poehali.dev/files/2c926195-b22c-429f-9276-c1a8e590c03d.jpg" 
                  alt="QR код для оплаты" 
                  className="w-56 h-56 mx-auto rounded-2xl"
                />
              </div>
              <p className="text-sm text-gray-300 mt-4 font-medium">Отсканируйте для оплаты</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;