class MobileMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="mobile-menu" class="hidden fixed inset-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-300 opacity-0 pointer-events-none">
            <nav class="flex flex-col items-center gap-6 text-xl font-medium">
                <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="index.html">Inicio</a>
                <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="nosotros.html">Nosotros</a>
                <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="servicios.html">Servicios</a>
                <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="desarrollo.html">Desarrollo</a>
             <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="erp.html">ERP</a>
            <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="casos.html">Casos</a>
                <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="mapa_del_sitio.html">Mapa</a>
                <a class="text-neutral-900 dark:text-white hover:text-primary-600 transition-colors" href="contacto.html">Contacto</a>
            </nav>
            <button id="close-menu-btn" class="absolute top-6 right-6 p-2 text-neutral-600 dark:text-neutral-300">
                <span class="material-symbols-outlined text-3xl">close</span>
            </button>
        </div>
        `;
    }
}

customElements.define('mobile-menu', MobileMenu);
