(() => {
  const menu = document.getElementById('main-menu-dialog');
  const selection = document.getElementById('deck-select-dialog');
  let returnToMenu = false;
  let suppressSelectionMenuReturn = false;

  function openChild(dialog) {
    returnToMenu = true;
    menu.close();
    dialog.showModal();
  }
  window.requirePeppermintSignIn = function () {
    if (window.peppermintCurrentUser) return true;
    returnToMenu = false;
    if (selection.open) { suppressSelectionMenuReturn = true; selection.close(); }
    if (!menu.open) menu.showModal();
    openChild(document.getElementById('account-dialog'));
    window.peppermintAccount?.promptSignIn?.();
    return false;
  };
  function returnHome(dialog) {
    returnToMenu = false;
    if (dialog.open) dialog.close();
    if (!menu.open) menu.showModal();
  }
  function toMenuAfterClose(dialog) {
    dialog.addEventListener('close', () => {
      if (dialog === selection) {
        if (suppressSelectionMenuReturn) { suppressSelectionMenuReturn = false; return; }
        if (selection.returnValue === 'versus') { selection.returnValue = ''; return; }
        returnHome(selection);
        return;
      }
      if (returnToMenu && !menu.open) {
        returnToMenu = false;
        menu.showModal();
      }
    });
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  document.getElementById('menu-battle').addEventListener('click', () => openChild(selection));
  document.getElementById('menu-editor').addEventListener('click', () => {
    if (!window.requirePeppermintSignIn()) return;
    window.peppermintCollection?.renderDeckEditor();
    openChild(document.getElementById('deck-editor-dialog'));
  });
  document.getElementById('menu-featured-booster').addEventListener('click', () => { if (!window.requirePeppermintSignIn()) return; returnToMenu = true; menu.close(); window.peppermintCollection?.openBoosterDisplay('toxic-sewer'); });   document.getElementById('menu-boosters').addEventListener('click', () => {
    if (!window.requirePeppermintSignIn()) return;
    window.peppermintCollection?.renderBoosterDisplay();
    openChild(document.getElementById('booster-dialog'));
  });
  document.getElementById('menu-library').addEventListener('click', () => {
    returnToMenu = true; menu.close(); window.showCardLibrary?.();
    if (!document.getElementById('card-library-dialog').open) document.getElementById('card-library-button').click();
  });
  document.getElementById('menu-rules').addEventListener('click', () => openChild(document.getElementById('rules-dialog')));
  const openAccountSettings = () => openChild(document.getElementById('account-dialog'));
  document.getElementById('menu-account').addEventListener('click', openAccountSettings);
  document.getElementById('main-menu-profile').addEventListener('click', openAccountSettings);
  document.getElementById('menu-logout').addEventListener('click', () => window.peppermintAccount?.signOut());
  document.getElementById('menu-logout').classList.toggle('hidden', !window.peppermintCurrentUser);
  window.peppermintSyncPlayerIdentity?.(window.peppermintCurrentUser);
  window.addEventListener('peppermint-auth-state', (event) => {
    document.getElementById('menu-logout').classList.toggle('hidden', !event.detail?.user);
  });
  const topbar = document.querySelector('.topbar'); const mobileMenuToggle = document.getElementById('mobile-menu-toggle'); const topbarActions = document.getElementById('topbar-actions'); const setMobileMenuOpen = (open) => { topbar.classList.toggle('mobile-menu-open', open); mobileMenuToggle.setAttribute('aria-expanded', String(open)); mobileMenuToggle.setAttribute('aria-label', open ? 'Close battle menu' : 'Open battle menu'); }; mobileMenuToggle.addEventListener('click', () => setMobileMenuOpen(!topbar.classList.contains('mobile-menu-open'))); document.addEventListener('pointerdown', (event) => { if (topbar.classList.contains('mobile-menu-open') && !mobileMenuToggle.contains(event.target) && !topbarActions.contains(event.target)) setMobileMenuOpen(false); }); topbarActions.addEventListener('click', (event) => { if (event.target.closest('button')) setMobileMenuOpen(false); }); window.addEventListener('resize', () => { if (window.innerWidth > 780) setMobileMenuOpen(false); });   document.getElementById('quick-menu-button').addEventListener('click', () => { returnToMenu = false; if (!menu.open) menu.showModal(); });
  document.querySelector('.topbar .brand').addEventListener('click', (event) => { event.preventDefault(); returnToMenu = false; document.querySelectorAll('dialog[open]').forEach((dialog) => { if (dialog !== menu) dialog.close(); }); if (!menu.open) menu.showModal(); });
  document.querySelectorAll('[data-return-menu]').forEach((button) => button.addEventListener('click', () => returnHome(document.getElementById(button.dataset.returnMenu))));
  document.getElementById('close-deck-editor').addEventListener('click', () => document.getElementById('deck-editor-dialog').close());
  document.getElementById('close-boosters').addEventListener('click', () => document.getElementById('booster-dialog').close());
  document.getElementById('close-card-library').addEventListener('click', () => document.getElementById('card-library-dialog').close());
  document.getElementById('close-rules').addEventListener('click', () => document.getElementById('rules-dialog').close());
  document.getElementById('close-account').addEventListener('click', () => document.getElementById('account-dialog').close());
  document.getElementById('close-element-guide').addEventListener('click', () => document.getElementById('element-guide-dialog').close());
  document.getElementById('deck-select-home').addEventListener('click', () => returnHome(selection));
  document.getElementById('result-menu').addEventListener('click', () => {
    document.getElementById('result-dialog').close();
    returnToMenu = false;
    if (!menu.open) menu.showModal();
  });
  document.addEventListener('click', (event) => {
    if (event.target.closest('#versus-start')) returnToMenu = false;
  }, true);

  [selection, document.getElementById('deck-editor-dialog'), document.getElementById('booster-dialog'), document.getElementById('card-library-dialog'), document.getElementById('rules-dialog'), document.getElementById('account-dialog')].forEach(toMenuAfterClose);
  menu.addEventListener('click', (event) => { if (event.target === menu) { event.preventDefault(); event.stopPropagation(); } });
  menu.addEventListener('cancel', (event) => { event.preventDefault(); });
  menu.showModal();
})();


