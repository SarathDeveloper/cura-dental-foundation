const fs = require('fs');
const path = 'd:/sample/cura-dental/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The functions to remove might not have a double newline at the end.
content = content.replace(/function FloatingCTAs\(\) \{[\s\S]*?\n\}/, '');
content = content.replace(/function Navbar\(\) \{[\s\S]*?\n\}/, '');
content = content.replace(/function Footer\(\) \{[\s\S]*?\n\}/, '');

fs.writeFileSync(path, content);
console.log('Cleaned up page.tsx');
