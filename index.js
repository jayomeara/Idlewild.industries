// cloudflare worker for idlewild portfolio

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jay o'meara - idlewild portfolio</title>
    <meta name="description" content="creative film editor">
    <meta property="og:title" content="jay o'meara - idlewild portfolio">
    <meta property="og:description" content="creative film editor">
    <meta property="og:type" content="website">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Inter', sans-serif; }
        
        .glass {
            backdrop-filter: blur(20px) saturate(180%);
            background: rgba(17, 25, 40, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        .video-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .video-hover:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .gradient-text {
            background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .smooth-appear {
            animation: smoothAppear 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
        }
        
        @keyframes smoothAppear {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        
        iframe { border-radius: 12px; }
    </style>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    animation: {
                        'fade-in': 'fadeIn 0.8s ease-out',
                        'slide-up': 'slideUp 0.6s ease-out',
                    },
                    // Example of new Tailwind features (v3.4+)
                    colors: {
                        'brand': '#0ea5e9',
                    },
                    borderRadius: {
                        'xl': '1.25rem',
                        '2xl': '2rem',
                    },
                }
            },
            plugins: [
                // Example: add aspect-ratio and typography plugins
                tailwindcssAspectRatio,
                tailwindcssTypography,
            ]
        }
    </script>
    <!-- Tailwind plugins CDN for demo (remove if using local build) -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/aspect-ratio"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/typography"></script>
</head>

<body class="bg-black text-white antialiased overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <a href="#" class="text-xl font-bold tracking-tight">
                    idlewild portfolio
                </a>
                <div class="hidden md:flex space-x-8 text-sm">
                    <a href="#work" class="hover:text-zinc-300 transition-colors">work</a>
                    <a href="#contact" class="hover:text-zinc-300 transition-colors">contact</a>
                </div>
                <button class="md:hidden w-6 h-6 flex flex-col justify-center space-y-1">
                    <span class="w-6 h-0.5 bg-white transition-all"></span>
                    <span class="w-6 h-0.5 bg-white transition-all"></span>
                    <span class="w-6 h-0.5 bg-white transition-all"></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="min-h-screen flex items-center justify-center px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text smooth-appear tracking-tight">
                jay o'meara
            </h1>
            <p class="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed smooth-appear stagger-1">
                creative film editor
            </p>
            <a href="#work" class="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105 smooth-appear stagger-2">
                view work
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </a>
        </div>
    </section>

    <!-- Work Grid -->
    <section id="work" class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
                selected work
            </h2>
            
            <!-- Primary Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <!-- Featured Video 1 -->
                <div class="video-hover bg-zinc-900 rounded-2xl overflow-hidden smooth-appear stagger-1">
                    <div class="aspect-video">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="broadcast production reel"
                            class="w-full h-full"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">broadcast production</h3>
                        <p class="text-zinc-400 text-sm">live sports coverage and studio productions</p>
                    </div>
                </div>

                <!-- Featured Video 2 -->
                <div class="video-hover bg-zinc-900 rounded-2xl overflow-hidden smooth-appear stagger-2">
                    <div class="aspect-video">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="social media campaign"
                            class="w-full h-full"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">social strategy</h3>
                        <p class="text-zinc-400 text-sm">multi-platform content campaigns</p>
                    </div>
                </div>
            </div>

            <!-- Secondary Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Video 3 -->
                <div class="video-hover bg-zinc-900 rounded-xl overflow-hidden smooth-appear stagger-3">
                    <div class="aspect-video">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="documentary work"
                            class="w-full h-full"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="p-4">
                        <h4 class="font-medium mb-1">documentary</h4>
                        <p class="text-zinc-400 text-xs">long-form storytelling</p>
                    </div>
                </div>

                <!-- Video 4 -->
                <div class="video-hover bg-zinc-900 rounded-xl overflow-hidden smooth-appear stagger-4">
                    <div class="aspect-video">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="commercial work"
                            class="w-full h-full"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="p-4">
                        <h4 class="font-medium mb-1">commercial</h4>
                        <p class="text-zinc-400 text-xs">brand-focused content</p>
                    </div>
                </div>

                <!-- Video 5 -->
                <div class="video-hover bg-zinc-900 rounded-xl overflow-hidden smooth-appear stagger-5">
                    <div class="aspect-video">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="event coverage"
                            class="w-full h-full"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="p-4">
                        <h4 class="font-medium mb-1">events</h4>
                        <p class="text-zinc-400 text-xs">live event production</p>
                    </div>
                </div>
            </div>

            <!-- Additional Work Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                <div class="video-hover bg-zinc-900 rounded-lg overflow-hidden aspect-video smooth-appear">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="project 6"
                        class="w-full h-full"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-hover bg-zinc-900 rounded-lg overflow-hidden aspect-video smooth-appear">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="project 7"
                        class="w-full h-full"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-hover bg-zinc-900 rounded-lg overflow-hidden aspect-video smooth-appear">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="project 8"
                        class="w-full h-full"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-hover bg-zinc-900 rounded-lg overflow-hidden aspect-video smooth-appear">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="project 9"
                        class="w-full h-full"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- About -->
    <section class="py-20 px-6 bg-zinc-900/50">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                creative professional
            </h2>
            <p class="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 max-w-3xl mx-auto">
                specialized in creating compelling visual narratives across broadcast, digital, and strategic content platforms. 
                from live sports production to multi-platform campaigns, i deliver measurable results through creative excellence.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-2xl font-bold mb-2">50+</div>
                    <div class="text-zinc-400 text-sm">projects</div>
                </div>
                <div>
                    <div class="text-2xl font-bold mb-2">5+</div>
                    <div class="text-zinc-400 text-sm">years</div>
                </div>
                <div>
                    <div class="text-2xl font-bold mb-2">10+</div>
                    <div class="text-zinc-400 text-sm">clients</div>
                </div>
                <div>
                    <div class="text-2xl font-bold mb-2">100%</div>
                    <div class="text-zinc-400 text-sm">passion</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20 px-6">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                let's work together
            </h2>
            <p class="text-lg text-zinc-400 mb-12 leading-relaxed">
                ready to create something exceptional? get in touch to discuss your next project.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="mailto:jay@idlewild.portfolio" 
                   class="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    email me
                </a>
                <a href="#" 
                   class="inline-flex items-center justify-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-full hover:bg-zinc-800 transition-all duration-300">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                    </svg>
                    linkedin
                </a>
            </div>
            
            <p class="text-sm text-zinc-500">
                jay@idlewild.portfolio • available for freelance projects
            </p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 border-t border-zinc-800">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="text-sm text-zinc-500 mb-4 md:mb-0">
                © 2025 idlewild portfolio. all rights reserved.
            </div>
            <div class="flex space-x-6">
                <a href="#" class="text-zinc-500 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#" class="text-zinc-500 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                </a>
                <a href="mailto:jay@idlewild.portfolio" class="text-zinc-500 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('smooth-appear');
                }
            });
        }, observerOptions);

        // Observe all elements that should animate
        document.querySelectorAll('.video-hover, h2, p').forEach(el => {
            observer.observe(el);
        });
    </script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // handle different routes
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML_CONTENT, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=86400', // cache for 24 hours
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
        },
      });
    }
    
    // return 404 for other routes
    return new Response('404 not found', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  },
};