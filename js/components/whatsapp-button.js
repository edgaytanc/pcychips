class WhatsAppButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <a href="https://api.whatsapp.com/send?phone=50255117730&text=Hola,%20PC&CHIPS" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
           aria-label="Chat en WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.996 4.301 4.739-1.634zm12.39-4.88c-.131-.22-.482-.353-.984-.604-.509-.251-3.006-1.488-3.472-1.657-.464-.17-.803-.255-1.144.254-.339.511-1.326 1.658-1.625 2.001-.297.339-.594.382-1.096.129-.502-.254-2.122-.78-4.04-2.492-1.503-1.341-2.518-3.001-2.813-3.507-.297-.508-.032-.783.222-1.036.228-.228.511-.594.764-.891.254-.297.339-.508.509-.848.169-.339.085-.636-.043-.891-.127-.255-1.144-2.76-1.567-3.776-.411-.989-.838-.854-1.144-.87-.306-.016-.653-.019-1.002-.019-.348 0-.916.129-1.396.657-.48.528-1.832 1.792-1.832 4.373 0 2.581 1.88 5.074 2.142 5.424.264.35 3.702 5.655 8.969 7.928 3.535 1.527 4.256 1.222 5.019 1.144.764-.078 2.454-1.004 2.8-1.973.344-.969.344-1.8.241-1.973zm-9.053 4.279l-.004.004h.004v-.004z"/>
            </svg>
            <span class="absolute right-full mr-4 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Contáctanos
            </span>
        </a>
        `;
    }
}

customElements.define('whatsapp-button', WhatsAppButton);
