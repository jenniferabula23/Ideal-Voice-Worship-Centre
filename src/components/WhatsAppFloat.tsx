import { churchInfo } from '@/data/content';

/** Floating WhatsApp chat button — red + gold glow */
export function WhatsAppFloat() {
  const href = churchInfo.socials.whatsapp;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ideal Voice on WhatsApp"
      className="whatsapp-float group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[70] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-crimson-700 via-crimson-800 to-crimson-950 text-white border-2 border-gold-400/80 transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
    >
      <span className="whatsapp-float-glow" aria-hidden />
      <span className="whatsapp-float-glow whatsapp-float-glow--gold" aria-hidden />
      <svg
        viewBox="0 0 32 32"
        className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm"
        aria-hidden
      >
        <path d="M16.004 3C9.382 3 4 8.382 4 15.004c0 2.117.553 4.186 1.604 6.01L4 29l8.168-1.57A11.95 11.95 0 0 0 16.004 27C22.626 27 28 21.618 28 15.004 28 8.382 22.626 3 16.004 3zm0 21.867c-1.742 0-3.45-.457-4.95-1.324l-.355-.207-4.844.93.933-4.723-.23-.375A9.82 9.82 0 0 1 6.137 15c0-5.445 4.43-9.875 9.867-9.875S25.87 9.555 25.87 15c0 5.446-4.43 9.867-9.866 9.867zm5.41-7.39c-.297-.148-1.754-.867-2.025-.965-.272-.1-.47-.148-.668.149-.198.296-.767.964-.94 1.163-.173.197-.347.223-.643.075-.297-.149-1.253-.462-2.386-1.473-.882-.787-1.478-1.758-1.652-2.055-.173-.296-.018-.456.13-.603.134-.133.297-.347.445-.52.149-.174.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.205-.241-.579-.486-.5-.668-.51l-.57-.01c-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.478 0 1.461 1.065 2.873 1.213 3.07.149.198 2.095 3.2 5.077 4.487.71.306 1.263.49 1.695.626.712.226 1.36.194 1.872.118.571-.086 1.754-.717 2.002-1.41.248-.693.248-1.287.173-1.41-.074-.124-.272-.198-.57-.347z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden sm:group-hover:flex items-center whitespace-nowrap rounded-xl bg-crimson-950/95 text-gold-200 text-xs font-semibold px-3 py-2 border border-gold-500/40 shadow-lg">
        Chat with us
      </span>
    </a>
  );
}
