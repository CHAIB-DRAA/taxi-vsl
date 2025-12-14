import { Phone, MessageCircle } from 'lucide-react';
export default function StickyMobileNav() {
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden bg-white border-t p-3 flex gap-3">
      <a className="flex-1 bg-blue-900 text-white py-3 rounded flex items-center justify-center gap-2" href="tel:0600000000">
        <Phone/> Appeler
      </a>
      <a className="flex-1 bg-green-500 text-white py-3 rounded flex items-center justify-center gap-2" href="https://wa.me/33600000000">
        <MessageCircle/> WhatsApp
      </a>
    </div>
  );
}
