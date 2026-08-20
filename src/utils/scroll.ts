export function scrollToSection(hrefOrId: string) {
  const cleanId = hrefOrId.replace(/^#/, '');
  if (!cleanId || cleanId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }

  const target = document.getElementById(cleanId);
  if (target) {
    // Offset is 0 so the section background completely covers the viewport
    // The navbar will sit elegantly over the section's top padding (py-24 or py-32)
    const offset = 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    });
  }
}
