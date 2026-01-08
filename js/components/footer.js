class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16 mb-16">
                    <div class="col-span-2 lg:col-span-2 space-y-6">
                        <img src="assets/images/logo.png" alt="PC & CHIPS" class="h-12 w-auto mb-4">
                        <p class="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-sm">
                            Expertos en llevar tu empresa al siguiente nivel tecnológico. Consultoría especializada y desarrollo a medida.
                        </p>
                    </div>
                    <div class="flex flex-col gap-5">
                        <h4 class="text-neutral-900 dark:text-white font-bold text-base">Empresa</h4>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="nosotros.html">Sobre Nosotros</a>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="#">Carreras</a>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="#">Blog</a>
                    </div>
                    <div class="flex flex-col gap-5">
                        <h4 class="text-neutral-900 dark:text-white font-bold text-base">Servicios</h4>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="desarrollo.html">Desarrollo Web</a>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="erp.html">Sistemas ERP</a>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="servicios.html">Tecnología</a>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="servicios.html">Consultoría IT</a>
                    </div>
                    <div class="flex flex-col gap-5">
                        <h4 class="text-neutral-900 dark:text-white font-bold text-base">Legal</h4>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="politica.html">Privacidad</a>
                        <a class="text-neutral-500 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors" href="#">Términos</a>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 dark:border-neutral-800 pt-8 gap-6">
                    <p class="text-neutral-400 text-sm">© 2023 PC&amp;CHIPS. Todos los derechos reservados.</p>
                    <div class="flex gap-6">
                        <a class="text-neutral-400 hover:text-primary-600 transition-colors" href="#">
                            <span class="sr-only">Twitter</span>
                            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                        <a class="text-neutral-400 hover:text-primary-600 transition-colors" href="#">
                            <span class="sr-only">LinkedIn</span>
                            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
