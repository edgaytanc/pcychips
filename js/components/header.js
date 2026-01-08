class SiteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const activePage = this.getAttribute('active') || 'inicio';

        this.innerHTML = `
        <header class="fixed top-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">
                        <img src="assets/images/logo.png" alt="PC & CHIPS" class="h-12 w-auto">
                    <nav class="hidden md:flex items-center gap-6">
                        <a class="text-sm font-medium ${activePage === 'inicio' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="index.html">Inicio</a>
                        <a class="text-sm font-medium ${activePage === 'nosotros' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="nosotros.html">Nosotros</a>
                        <a class="text-sm font-medium ${activePage === 'servicios' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="servicios.html">Servicios</a>
                        <a class="text-sm font-medium ${activePage === 'desarrollo' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="desarrollo.html">Desarrollo</a>
                         <a class="text-sm font-medium ${activePage === 'erp' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="erp.html">ERP</a>
                        <a class="text-sm font-medium ${activePage === 'casos' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="casos.html">Casos</a>
                        <a class="text-sm font-medium ${activePage === 'mapa' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="mapa_del_sitio.html">Mapa</a>
                        <a class="text-sm font-medium ${activePage === 'contacto' ? 'text-primary-600 dark:text-white' : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white'} transition-colors" href="contacto.html">Contacto</a>
                    </nav>
                    <div class="hidden md:flex items-center gap-4">
                        <a href="contacto.html" class="px-6 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-all shadow-md">
                            Solicitar Cotización
                        </a>
                    </div>
                    <button id="mobile-menu-btn" class="md:hidden p-2 text-neutral-600 dark:text-neutral-300">
                        <span class="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);
