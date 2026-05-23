const fs = require('fs');
const path = require('path');

const files = [
  'FloatingWhatsApp.tsx',
  'Navbar.tsx',
  'Footer.tsx',
  'HeroSection.tsx',
  'EventsSection.tsx',
  'MenuModal.tsx',
  'ReservationSection.tsx'
].map(f => path.join('src', 'components', f));

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('https://booking.resdiary.com/widget/Standard/TuskBali/1945')) {
    // Add import if not exists
    if (!content.includes('useBooking')) {
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLine + 1) + 'import { useBooking } from "@/context/BookingContext";\n' + content.slice(endOfLine + 1);
      } else {
        content = 'import { useBooking } from "@/context/BookingContext";\n' + content;
      }
    }

    // Add const { openBooking } = useBooking();
    // Case 1: export default function Component() {
    content = content.replace(/export default function (\w+)\([^)]*\)\s*\{/g, (match) => {
      if (content.includes(`const { openBooking } = useBooking();`)) return match; // Avoid duplicates
      return match + '\n  const { openBooking } = useBooking();';
    });
    
    // Case 2: export function Component() {
    content = content.replace(/export function (\w+)\([^)]*\)\s*\{/g, (match) => {
      if (content.includes(`const { openBooking } = useBooking();`)) return match;
      return match + '\n  const { openBooking } = useBooking();';
    });

    // Replace href
    content = content.replace(/href="https:\/\/booking\.resdiary\.com\/widget\/Standard\/TuskBali\/1945"/g, 'href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}');
    content = content.replace(/href=\{`https:\/\/booking\.resdiary\.com\/widget\/Standard\/TuskBali\/1945`\}/g, 'href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}');
    
    // Remove target and rel
    content = content.replace(/target="_blank"\s*rel="noopener noreferrer"/g, '');
    
    fs.writeFileSync(file, content);
    console.log(`Refactored ${file}`);
  }
});
