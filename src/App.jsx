import React from 'react';

function App() {
  const openWhatsApp = () => {
    const phoneNumber = "919876543210"; // మీ నంబర్ ఇక్కడ మార్చుకోండి
    const message = "Hello! I am interested in joining Elite Gym Pro. Please give me more details.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* 1. Navbar */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black text-yellow-500 tracking-tighter italic">ELITE<span className="text-white">GYM</span></h1>
        <ul className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest text-gray-300">
          <li className="hover:text-yellow-500 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer transition">Facilities</li>
          <li className="hover:text-yellow-500 cursor-pointer transition">Diet Plan</li>
          <li className="hover:text-yellow-500 cursor-pointer transition" onClick={openWhatsApp}>Contact</li>
        </ul>
        <button onClick={openWhatsApp} className="bg-yellow-500 text-black px-5 py-2 rounded-sm font-black text-xs hover:bg-yellow-400 transition">JOIN NOW</button>
      </nav>

      {/* 2. Hero Section (Image 1: Heavy Lifting) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974" 
          alt="Heavy Lifting" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-yellow-500 font-bold tracking-[0.5em] uppercase mb-4">No Excuses</h2>
          <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-none mb-6">Forge Your <br/><span className="text-yellow-500">Legacy</span></h1>
          <button onClick={openWhatsApp} className="bg-yellow-500 text-black px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-all">Start Your Journey</button>
        </div>
      </section>

      {/* 3. New Section: Modern Facilities (Image 2: Gym Interior) */}
      <section className="py-24 bg-zinc-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070" alt="Modern Gym Interior" className="rounded-lg shadow-2xl border border-yellow-500/20" />
          </div>
          <div className="flex-1">
            <h3 className="text-yellow-500 font-black uppercase tracking-widest mb-2">Modern Facilities</h3>
            <h2 className="text-5xl font-black uppercase italic mb-6">World Class <br/> Equipment</h2>
            <p className="text-gray-400 text-lg mb-8">We provide the latest machines and tools to help you reach your goals faster. From dumbbells to advanced cardio tech, we have it all.</p>
            <button onClick={openWhatsApp} className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 font-bold hover:bg-yellow-500 hover:text-black transition">Explore Facility</button>
          </div>
        </div>
      </section>

      {/* 4. New Section: Personal Training (Image 3: Personal Coach) */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-black uppercase italic mb-4">Expert <span className="text-yellow-500">Coaching</span></h2>
          <p className="text-gray-400">Our certified trainers create personalized plans tailored to your specific body type and goals.</p>
        </div>
        <div className="relative h-[600px] max-w-7xl mx-auto rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070" alt="Personal Trainer Coaching" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black flex items-center justify-between px-12">
            <div className="text-left max-w-sm">
              <h4 className="text-3xl font-black uppercase italic">One-on-One Sessions</h4>
              <p className="mt-2 text-gray-300">Dedicated focus on your form, diet, and progress tracking every single day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. New Section: Nutrition (Image 4: Healthy Meal/Supplements) */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070" alt="Healthy Diet Plan" className="rounded-lg border border-yellow-500/20" />
          </div>
          <div className="flex-1">
            <h3 className="text-yellow-500 font-black uppercase mb-2">Nutrition Matters</h3>
            <h2 className="text-5xl font-black uppercase italic mb-6">Personalized <br/> Diet Plans</h2>
            <p className="text-gray-400 text-lg mb-8">Training is only half the battle. Our nutritionists provide free customized meal plans to complement your workout routine.</p>
            <ul className="text-yellow-500 font-bold space-y-4 mb-8 italic">
              <li>✓ High Protein Guides</li>
              <li>✓ Weight Loss Recipes</li>
              <li>✓ Daily Supplement Advice</li>
            </ul>
            <button onClick={openWhatsApp} className="bg-white text-black px-8 py-3 font-black uppercase hover:bg-yellow-500 transition">Get My Diet Plan</button>
          </div>
        </div>
      </section>

      {/* 6. New Section: Group Yoga/Classes (Image 5: Group Workout) */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h3 className="text-yellow-500 font-black uppercase tracking-widest mb-2">Community</h3>
        <h2 className="text-5xl font-black uppercase italic mb-12 text-white">Group Training <br/> & Yoga</h2>
        <div className="relative h-[500px] group">
          <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975" alt="Group Exercise Class" className="w-full h-full object-cover rounded-xl opacity-60 grayscale hover:grayscale-0 transition duration-1000" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <p className="text-2xl font-black uppercase tracking-tighter mb-4 italic">Stronger Together</p>
            <button onClick={openWhatsApp} className="bg-yellow-500 text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-white transition">Join Class</button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-black py-16 px-6 border-t border-yellow-500/20 text-center">
        <h2 className="text-3xl font-black text-yellow-500 mb-6 italic">ELITE GYM PRO</h2>
        <div className="flex justify-center space-x-12 text-gray-500 font-bold uppercase text-xs tracking-widest mb-10">
          <span className="hover:text-yellow-500 cursor-pointer transition">Location</span>
          <span className="hover:text-yellow-500 cursor-pointer transition">Privacy</span>
          <span className="hover:text-yellow-500 cursor-pointer transition" onClick={openWhatsApp}>WhatsApp Support</span>
        </div>
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.8em]">&copy; 2026 Elite Gym. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;