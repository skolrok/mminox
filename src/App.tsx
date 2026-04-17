import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Check, 
  Shield, 
  Hammer, 
  Ruler, 
  Mail, 
  MapPin, 
  ArrowRight,
  ArrowUp,
  ChevronRight,
  ChevronLeft,
  Construction,
  PaintBucket,
  Warehouse,
  ZoomIn,
  Instagram,
  Facebook,
  LayoutGrid,
  Layers,
  PanelRight,
  Network,
  Home,
  Tent,
  PenTool,
  Droplet,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './components/SEO';
import ContactForm from './components/ContactForm';

const SolimatPromo = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group">
        
        {/* Background Image */}
        <img 
          src="https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1772640105/referenca-gorenjska-hisa-gore-vecerna-pergola-led_o40wsr.webp" 
          alt="Moderne bioklimatske pergole Solimat po meri" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/70 to-transparent"></div>

        {/* Content Container */}
        <div className="relative z-10 p-10 md:p-16 lg:p-20 max-w-2xl">
          <h3 className="text-lime-500 font-bold tracking-wider uppercase text-sm mb-4">
            Naše sestrsko podjetje
          </h3>
          
          {/* New Direct & Architectural Copywriting */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ustvarite teraso svojih sanj.
          </h2>
          <p className="text-gray-300 font-medium text-xl md:text-2xl mb-6">
            Moderne bioklimatske pergole po vaši meri.
          </p>
          
          <p className="text-gray-400 text-lg mb-8">
            Poleg vrhunskih ograj in nadstreškov MM INOKS vam preko našega podjetja SOLIMAT nudimo tudi celovite rešitve za senčenje in udobno bivanje na prostem.
          </p>
          
          {/* External Link Button */}
          <a 
            href="https://www.solimat.si" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-zinc-950 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:-translate-y-1"
          >
            Obiščite SOLIMAT
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("vse");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<'pravno' | 'zasebnost' | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hasScrolledPast500, setHasScrolledPast500] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setHasScrolledPast500(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    const footerElement = document.getElementById('kontakt');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (selectedService || lightboxImage || activeLegalModal || lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService, lightboxImage, activeLegalModal, lightboxIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && selectedService?.galleryImages) {
      setLightboxIndex((prev) => prev !== null ? (prev + 1) % selectedService.galleryImages.length : null);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && selectedService?.galleryImages) {
      setLightboxIndex((prev) => prev !== null ? (prev === 0 ? selectedService.galleryImages.length - 1 : prev - 1) : null);
    }
  };

  const galleryData = [
    // --- OGRAJE ---
    {
      id: 1,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028814/notranja-stopniscna-ograja-34.webp",
      category: "ograje",
      alt: "Moderna notranja stopniščna ograja"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028772/notranja-stopniscna-ograja-127.webp",
      category: "ograje",
      alt: "Notranja inox stopniščna ograja"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028229/zunanja-steklena-ograja-24.webp",
      category: "ograje",
      alt: "Zunanja steklena ograja visoke kakovosti"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028854/prasno-lakirana-kovinska-ograja-32.webp",
      category: "ograje",
      alt: "Prašno lakirana kovinska ograja za dvorišče"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028100/moderna-aluminijasta-ograja-7.webp",
      category: "ograje",
      alt: "Moderna aluminijasta ograja"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775029062/prasno-lakirana-kovinska-ograja-115.webp",
      category: "ograje",
      alt: "Antracit prašno lakirana dvoriščna ograja"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028260/ograja-iz-perforirane-plocevine-11.webp",
      category: "ograje",
      alt: "Moderna ograja iz perforirane pločevine"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028242/laserski-razrez-ograja-10.webp",
      category: "ograje",
      alt: "Ograja z vzorcem laserskega razreza"
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028233/laserski-razrez-ograja-2.webp",
      category: "ograje",
      alt: "Unikatna ograja - laserski razrez kovine"
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028279/ograja-iz-perforirane-plocevine-17.webp",
      category: "ograje",
      alt: "Zunanja ograja iz perforirane pločevine"
    },

    // --- NADSTREŠKI ---
    {
      id: 11,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028146/inox-nadstresek-terasa-18.webp",
      category: "nadstreski",
      alt: "Inox nadstrešek za teraso po meri"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028135/inox-nadstresek-terasa-8.webp",
      category: "nadstreski",
      alt: "Moderen inox nadstrešek za zaščito terase"
    },

    // --- BALKONI ---
    {
      id: 13,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028359/moderni-francoski-balkon-10.webp",
      category: "balkoni",
      alt: "Eleganten in moderni francoski balkon"
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028364/moderni-francoski-balkon-14.webp",
      category: "balkoni",
      alt: "Minimalistični francoski balkon za zaščito oken"
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028248/ograja-iz-perforirane-plocevine-1.webp", 
      category: "ograje",
      alt: "Moderna zunanja dvoriščna ograja in celovita ureditev"
    }
  ];

  const filteredImages = activeFilter === "vse" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter);

  const services = [
    {
      id: "perforirane-ograje",
      title: "Ograje iz perforirane pločevine",
      shortDesc: "Moderne ograje iz lasersko izrezane pločevine z unikatnimi vzorci, ki nudijo zasebnost in vrhunski dizajn.",
      fullDesc: "Perforirane ograje predstavljajo vrhunec modernega dizajna in arhitekture. Izdelane so iz kakovostne pločevine z lasersko izrezanimi vzorci po vaši meri. Ponujajo odlično razmerje med zasebnostjo in zračnostjo, hkrati pa vašemu objektu dajo edinstven, prepoznaven videz. Vse perforirane ograje so strokovno prašno lakirane za maksimalno odpornost proti vremenskim vplivom.",
      icon: LayoutGrid,
      anchorId: "perforirane-ograje",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028260/ograja-iz-perforirane-plocevine-11.webp",
      galleryImages: [
        ...Array.from({ length: 21 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028303/ograja-iz-perforirane-plocevine-${i + 1}.webp`),
        ...Array.from({ length: 14 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028238/laserski-razrez-ograja-${i + 1}.webp`)
      ]
    },
    {
      id: "prasno-lakirane-ograje",
      title: "Prašno lakirane ograje",
      shortDesc: "Sodobne ograje v barvi po vaši izbiri. Prašno barvanje zagotavlja izjemno odpornost proti praskam.",
      fullDesc: "Prašno lakiranje predstavlja najboljšo zaščito in estetsko nadgradnjo kovinskih elementov. Izbirate lahko med široko paleto RAL barv, z različnimi strukturami (gladko, mat, hrapavo). Ograje so tako maksimalno zaščitene pred korozijo in mehanskimi poškodbami.",
      icon: Droplet,
      anchorId: "prasno-lakirane-ograje",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028854/prasno-lakirana-kovinska-ograja-32.webp",
      galleryImages: Array.from({ length: 120 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028092/prasno-lakirana-kovinska-ograja-${i + 1}.webp`)
    },
    {
      id: "notranje-in-zunanje-inox-ograje",
      title: "Notranje in zunanje Inox ograje",
      shortDesc: "Visokokakovostne ograje iz nerjavečega jekla, odporne na vremenske vplive in enostavne za vzdrževanje.",
      fullDesc: "Naše inox ograje so sinonim za trajnost in eleganco. Uporabljamo le najkakovostnejše nerjaveče jeklo (AISI 304 in AISI 316), ki zagotavlja dolgo življenjsko dobo brez rjavenja. Nudimo celovito storitev od izmere do strokovne montaže.",
      icon: Shield,
      anchorId: "notranje-in-zunanje-inox-ograje",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028814/notranja-stopniscna-ograja-34.webp",
      galleryImages: [
        ...Array.from({ length: 130 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028412/notranja-stopniscna-ograja-${i + 1}.webp`),
        ...Array.from({ length: 39 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028092/moderna-zunanja-dvoriscna-ograja-${i + 1}.webp`)
      ]
    },
    {
      id: "francoski-balkoni",
      title: "Francoski balkoni",
      shortDesc: "Elegantne rešitve za zaščito oken in balkonskih vrat. Minimalističen dizajn, ki ne zastira pogleda.",
      fullDesc: "Francoski balkoni so popolna rešitev za objekte s velikimi oknami od tal do stropa. Zagotavljajo popolno varnost pred padci, hkrati pa ohranjajo maksimalen pretok naravne svetlobe. Na voljo so v izvedbah iz inoxa, prašno lakirane kovine ali v kombinaciji z varnostnim kaljenim steklom.",
      icon: Home,
      anchorId: "francoski-balkoni",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028359/moderni-francoski-balkon-10.webp",
      galleryImages: Array.from({ length: 14 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028365/moderni-francoski-balkon-${i + 1}.webp`)
    },
    {
      id: "steklene-ograje",
      title: "Steklene ograje",
      shortDesc: "Vrhunska estetika in maksimalna prepustnost svetlobe. Izdelano iz certificiranega varnostno kaljenega stekla.",
      fullDesc: "Steklene ograje so prva izbira za sodobne arhitekturne rešitve. Ustvarjajo občutek odprtosti, prostornosti in luksuza. Za izdelavo uporabljamo izključno visoko kakovostno, lepljeno in kaljeno varnostno steklo, ki zagotavlja najvišje standarde varnosti ob brezhibnem estetskem videzu.",
      icon: PanelRight,
      anchorId: "steklene-ograje",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028229/zunanja-steklena-ograja-24.webp",
      galleryImages: [
        ...Array.from({ length: 25 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028230/zunanja-steklena-ograja-${i + 1}.webp`),
        ...Array.from({ length: 22 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028189/notranja-steklena-ograja-${i + 1}.webp`)
      ]
    },
    {
      id: "alu-ograje",
      title: "Alu ograje",
      shortDesc: "Lahke, izjemno obstojne in popolnoma neobčutljive na rjo. Minimalno vzdrževanje in maksimalna estetika.",
      fullDesc: "Aluminijaste ograje so idealna izbira za tiste, ki si želijo trajno in estetsko dovršeno rešitev brez potrebe po vzdrževanju. Aluminij je lahek, a izjemno trden material, ki nikoli ne rjavi. Ponujamo širok spekter profilov in barv (prašno lakiranje), vključno z imitacijami lesa, kar omogoča popolno prilagoditev videzu vašega doma ali poslovnega objekta.",
      icon: Layers,
      anchorId: "alu-ograje",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028100/moderna-aluminijasta-ograja-7.webp",
      galleryImages: Array.from({ length: 14 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028108/moderna-aluminijasta-ograja-${i + 1}.webp`)
    },
    {
      id: "nadstreski",
      title: "Nadstreški",
      shortDesc: "Zaščitite svoj vhod, teraso ali avtomobil. Izdelujemo robustne in estetske kovinske konstrukcije.",
      fullDesc: "Vrhunski kovinski in inox nadstreški, ki kljubujejo vsem vremenskim razmeram. Nudimo rešitve po meri za pokritje vaših teras, balkonov ali parkirnih mest, vključno z možnostjo integracije steklene strehe za optimalno osvetlitev.",
      icon: Tent,
      anchorId: "nadstreski",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028146/inox-nadstresek-terasa-18.webp",
      galleryImages: Array.from({ length: 25 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028154/inox-nadstresek-terasa-${i + 1}.webp`)
    },
    {
      id: "kovinski-izdelki-po-meri",
      title: "Kovinski izdelki po meri",
      shortDesc: "Imate specifično željo? Izdelamo unikatne kovinske elemente, pohištvo in druge dodatke.",
      fullDesc: "Od unikatnega industrijskega pohištva do kompleksnih nosilnih konstrukcij. Naše inženirsko in varilsko znanje nam omogoča, da uresničimo tudi najbolj specifične in zahtevne vizije naših strank. Vsak izdelek je narejen z mislijo na popolnost.",
      icon: PenTool,
      anchorId: "kovinski-izdelki-po-meri",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775029072/unikatni-kovinski-izdelki-4.webp",
      galleryImages: Array.from({ length: 31 }, (_, i) => i + 1)
        .filter(num => num !== 8 && num !== 9)
        .map(num => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775029072/unikatni-kovinski-izdelki-${num}.webp`)
    },
    {
      id: "xtend-ograje",
      title: "X-Tend ograje",
      shortDesc: "Fleksibilne mrežaste ograje iz nerjavečih jeklenic. Inovativna in visoko estetska zaščita pred padci.",
      fullDesc: "Sistem X-Tend ponuja inovativno rešitev iz prepletenih nerjavečih jeklenic (mrež). Je izjemno lahek, zračen in transparenten, a hkrati neverjetno močan. Odlično se obnese na stopniščih, galerijah ter kot opora za vertikalne ozelenitve oziroma zelene fasade.",
      icon: Network,
      anchorId: "xtend-ograje",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028127/x-tend-mrezna-ograja-inox-16.webp",
      galleryImages: Array.from({ length: 16 }, (_, i) => `https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1775028127/x-tend-mrezna-ograja-inox-${i + 1}.webp`)
    },
    {
      id: "varjenje-vseh-vrst-kovin",
      title: "Varjenje vseh vrst kovin",
      shortDesc: "Strokovno TIG, MIG/MAG varjenje, natančna obdelava in laserski razrez za vse vrste kovin.",
      fullDesc: "Specializirani smo za celovito obdelavo kovin na najvišjem nivoju. Nudimo strokovno TIG, MIG in MAG varjenje nerjavečega jekla (inox), aluminija in konstrukcijskih jekel. Za popolne in čiste linije skrbimo z integracijo najsodobnejšega laserskega razreza vseh vrst kovin. Od popravil do zahtevnih industrijskih konstrukcij – zagotavljamo estetske brezhiben zvar in mikronsko natančnost.",
      icon: Hammer,
      anchorId: "varjenje-vseh-vrst-kovin",
      bgImage: "https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1772806087/kakovostne-inox-ograje-izdelava_g3cuql.webp",
      galleryImages: []
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Storitve', href: '#storitve' },
    { name: 'Reference', href: '#reference' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-lime-500 selection:text-white">
      <SEO />
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1772708956/mm-inoks-ograje-logo_ydpa9i.png" 
                alt="Logotip MM Inoks - Specialist za inox in alu ograje ter kovinske konstrukcije" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-lime-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wide cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:040541954" 
                className="hidden md:flex items-center text-white hover:text-lime-400 transition-colors group"
              >
                <div className="bg-lime-500 p-2 rounded-full mr-3 group-hover:bg-lime-400 transition-colors">
                  <Phone size={18} className="text-white" />
                </div>
                <span className="font-bold">040 541 954</span>
              </a>

              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={28} className="text-lime-500" /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-zinc-800 border-l-4 border-transparent hover:border-lime-500 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="tel:040541954"
                  className="block px-3 py-3 rounded-md text-lg font-medium text-lime-400 font-bold mt-4 border-t border-white/10 pt-6"
                >
                  <Phone size={20} className="inline mr-3" />
                  040 541 954
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Proizvodnja MM INOKS: Pogled na delavca, ki vari kovinski profil v specializirani delavnici s kovanimi elementi"
            poster="https://res.cloudinary.com/ddl75cyhk/video/upload/so_0/v1772708506/HeroVideo_wg71j5.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source
              src="https://res.cloudinary.com/ddl75cyhk/video/upload/v1772708506/HeroVideo_wg71j5.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pb-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Moderne Inox in Prašno Barvane Ograje, <span className="text-lime-400">Narejene za Generacije.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                Od idejne zasnove do brezhibne montaže. Izdelujemo notranje in zunanje ograje, francoske balkone ter nadstreške, ki z eleganco popolnoma dopolnijo vaš dom.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center text-gray-200">
                  <Check size={20} className="text-lime-500 mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">Odpornost in prilagodljivost</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <Check size={20} className="text-lime-500 mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">Varjenje vseh vrst kovin</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <Check size={20} className="text-lime-500 mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">Brezplačno svetovanje na objektu</span>
                </div>
              </div>

              <a 
                href="#kontakt" 
                onClick={(e) => handleNavClick(e, '#kontakt')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-lime-500 hover:bg-lime-400 rounded-lg transition-all duration-300 shadow-lg shadow-lime-900/20 hover:shadow-lime-500/30 transform hover:-translate-y-1 group"
              >
                NAROČITE BREZPLAČNE MERITVE
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Right Side - Device/Frame Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div className="relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Shield size={80} className="text-lime-500 mb-6" />
                <h3 className="text-white font-bold text-2xl mb-2">100% GARANCIJA KAKOVOSTI</h3>
                <p className="text-gray-300 text-sm font-medium">Vrhunski materiali in natančna slovenska izdelava.</p>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="o-nas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] lg:min-h-[500px]">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/ddl75cyhk/image/upload/f_auto,q_auto/v1772806087/kakovostne-inox-ograje-izdelava_g3cuql.webp"
                  alt="Kakovostne inox in prašno lakirane ograje - MM Inoks izdelava"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                />
                {/* Subtle gradient overlay to enhance the premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Več kot le kovina. <br/>
                <span className="text-lime-600">Ustvarjamo rešitve, ki trajajo.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                V podjetju MM INOKS združujemo tradicionalno obrtniško znanje z najsodobnejšimi tehnologijami obdelave kovin. Vsak projekt je za nas unikatna zgodba, kjer prisluhnemo vašim željam in jih prelijemo v trajno, estetsko in funkcionalno rešitev. Naša zaveza kakovosti pomeni, da ne sprejemamo kompromisov pri izbiri materialov in natančnosti izdelave.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                {[
                  { number: "10+", label: "Let izkušenj" },
                  { number: "500+", label: "Zaključenih projektov" },
                  { number: "100%", label: "Zadovoljnih strank" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-zinc-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="storitve" className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naša ponudba</h2>
            <div className="h-1 w-20 bg-lime-500 mx-auto rounded-full"></div>
            <h2 className="mt-4 text-gray-400 max-w-2xl mx-auto text-base font-normal">
              Specializirani smo za celovite rešitve na področju kovinskih konstrukcij.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="relative p-6 sm:p-8 rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-lime-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-lime-900/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col bg-zinc-950"
              >
                {/* Background Image - Always visible but dimmed, brightens and scales on hover */}
                <img
                  loading="lazy"
                  src={service.bgImage}
                  alt={service.id === 'perforirane-ograje' ? 'Primer balkonske ograje iz lasersko izrezane perforirane pločevine z unikatnim vzorcem' : service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Heavy gradient overlay to guarantee text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none"></div>

                {/* Content Container - z-10 keeps it above the image */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-zinc-800/80 group-hover:bg-lime-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-lime-500 group-hover:text-zinc-950 transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  
                  {/* Action Button/Link */}
                  <div className="mt-auto flex items-center text-sm font-bold tracking-wider text-zinc-500 group-hover:text-lime-500 transition-colors">
                    VEČ INFORMACIJ <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90dvh] bg-zinc-900 rounded-2xl flex flex-col overflow-hidden border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)} 
                className="absolute top-4 right-4 z-10 p-2 bg-zinc-800/80 hover:bg-lime-500 text-white hover:text-zinc-950 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* SCROLLABLE CONTENT AREA */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="flex flex-col gap-6 mt-8 md:mt-0">
                  {/* Title Area */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-lime-500/10 text-lime-500 rounded-xl">
                      <selectedService.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                  </div>
                  
                  {/* Text Content */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedService.fullDesc}
                  </p>

                  {/* Gallery */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-6">
                    {selectedService.galleryImages?.map((imgUrl: string, index: number) => (
                      <div 
                        key={index} 
                        onClick={() => setLightboxIndex(index)}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-black"
                      >
                        <img loading="lazy" src={imgUrl} alt={`${selectedService.title} ${index + 1}`} className="w-full h-full object-cover object-center transition-all duration-300 opacity-95 group-hover:opacity-100 group-hover:scale-110" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/95" 
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Lightbox */}
            <button className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>

            {/* Prev Button */}
            <button onClick={handlePrev} className="absolute left-4 md:left-10 p-3 bg-zinc-900/50 hover:bg-lime-500 text-white hover:text-zinc-950 rounded-full transition-all">
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Current Image */}
            <motion.img 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedService.galleryImages[lightboxIndex]} 
              alt="Povečana slika" 
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />

            {/* Next Button */}
            <button onClick={handleNext} className="absolute right-4 md:right-10 p-3 bg-zinc-900/50 hover:bg-lime-500 text-white hover:text-zinc-950 rounded-full transition-all">
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 font-medium tracking-widest">
              {lightboxIndex + 1} / {selectedService.galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GALLERY SECTION (Interactive) */}
      <section id="reference" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Naše Reference</h2>
            <div className="h-1 w-20 bg-lime-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">Oglejte si nekaj naših nedavnih izdelkov.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["vse", "ograje", "balkoni", "nadstreski"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full border transition-colors cursor-pointer capitalize ${
                  activeFilter === filter
                    ? "border-lime-500 bg-lime-500 text-zinc-950 font-semibold"
                    : "border-zinc-300 bg-transparent text-gray-500 hover:text-lime-600 hover:border-lime-500"
                }`}
              >
                {filter === "vse" ? "Vse" : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((item) => (
              <div 
                key={item.id}
                onClick={() => setLightboxImage(item.src)}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-800"
              >
                <img 
                  loading="lazy"
                  src={item.src} 
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-lime-500" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-lime-500 cursor-pointer p-2 z-[110]"
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                loading="lazy"
                src={lightboxImage} 
                alt="Enlarged view" 
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl" 
                onClick={(e) => e.stopPropagation()} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SOLIMAT PROMO BANNER */}
      <SolimatPromo />

      {/* FOOTER & CONTACT SECTION */}
      <section id="kontakt" className="bg-zinc-900 pt-20 pb-10 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Stopite v stik z nami</h2>
              <p className="text-gray-400 mb-10 text-lg">
                Z veseljem vam svetujemo in pripravimo neobvezujočo ponudbo za vaš projekt.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                    <Phone className="text-lime-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Telefon</p>
                    <a href="tel:040541954" className="text-xl font-bold hover:text-lime-400 transition-colors">
                      040 541 954
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                    <Mail className="text-lime-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">E-pošta</p>
                    <a href="mailto:info@mm-inox.si" className="text-xl font-bold hover:text-lime-400 transition-colors">
                      info@mm-inox.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                    <MapPin className="text-lime-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Lokacija</p>
                    <p className="text-xl font-bold text-gray-200">
                      Gorenji vrh pri Dobrniču 7
                    </p>
                    <p className="text-gray-400">8211 Dobrnič, Slovenija</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-4">Sledite nam</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/mm_inox.si?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-lime-500 transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/mminoks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-lime-500 transition-colors duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
          
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} MM INOKS. Vse pravice pridržane.</p>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex space-x-6">
                <span 
                  onClick={() => setActiveLegalModal('pravno')}
                  className="hover:text-white transition-colors cursor-pointer hover:text-lime-500"
                >
                  Pravno obvestilo
                </span>
                <span 
                  onClick={() => setActiveLegalModal('zasebnost')}
                  className="hover:text-white transition-colors cursor-pointer hover:text-lime-500"
                >
                  Zasebnost
                </span>
              </div>
              <div className="hidden md:block w-px h-4 bg-zinc-800"></div>
              <p>
                Zasnova in izdelava: <a href="https://skolailab.com" target="_blank" rel="noopener noreferrer"><span className="text-lime-500 font-bold tracking-wide">SKOL AI</span></a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL MODAL */}
      <AnimatePresence>
        {activeLegalModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActiveLegalModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[80vh] bg-zinc-900 border border-zinc-800 rounded-2xl p-8 overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveLegalModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-lime-500 transition-colors"
              >
                <X size={24} />
              </button>

              {activeLegalModal === 'pravno' && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Pravno obvestilo</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>Vse vsebine, objavljene na spletni strani mm-inox.si, so last podjetja MM INOKS, Matej Markovič s.p., in so v zakonsko dovoljenem okviru predmet avtorske zaščite ali drugih oblik zaščite intelektualne lastnine.</p>
                    <p>Dokumenti, slike in besedila, objavljeni na teh spletnih straneh, se lahko reproducirajo le v nekomercialne namene, pri čemer morajo ohraniti vsa navedena opozorila o avtorskih ali drugih pravicah. Brez pisnega dovoljenja podjetja MM INOKS jih ni dovoljeno prepisovati, razmnoževati ali kako drugače razširjati v komercialne namene.</p>
                    <p>Podjetje se bo trudilo za točnost in ažurnost podatkov na spletni strani, vendar ne prevzema nikakršne odgovornosti za morebitne napake v vsebini ali za posledice, ki bi izvirale iz uporabe teh informacij.</p>
                  </div>
                </>
              )}

              {activeLegalModal === 'zasebnost' && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Politika zasebnosti</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>V podjetju MM INOKS, Matej Markovič s.p., cenimo vašo zasebnost in se zavezujemo k skrbnemu varovanju vaših osebnih podatkov v skladu s Splošno uredbo o varstvu podatkov (GDPR) in veljavno slovensko zakonodajo.</p>
                    <p><strong>Zbiranje in uporaba podatkov:</strong> Osebne podatke (ime, e-poštni naslov, telefonska številka), ki nam jih prostovoljno posredujete preko kontaktnega obrazca, zbiramo in obdelujemo izključno z namenom odgovora na vaše povpraševanje, priprave ponudbe in poslovne komunikacije.</p>
                    <p><strong>Hramba podatkov:</strong> Vaše podatke hranimo le toliko časa, kot je nujno potrebno za izpolnitev namena, za katerega so bili zbrani, oziroma do vašega preklica privolitve.</p>
                    <p><strong>Vaše pravice:</strong> Vaše osebne podatke varujemo pred nepooblaščenim dostopom in jih v nobenem primeru ne posredujemo tretjim osebam. Kadarkoli imate pravico zahtevati vpogled, popravek, omejitev obdelave ali izbris vaših osebnih podatkov iz naše baze, in sicer s pisnim zahtevkom na naš e-poštni naslov.</p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING CTA BUTTON */}
      <AnimatePresence>
        {hasScrolledPast500 && !isFooterVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-24 right-8 z-50"
          >
            <button
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-lime-500 hover:bg-lime-400 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              Naročite brezplačne meritve &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-3 bg-lime-500 hover:bg-lime-400 text-white rounded-full shadow-lg shadow-lime-900/20 hover:shadow-lime-500/30 transition-all duration-300"
            aria-label="Na vrh strani"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
