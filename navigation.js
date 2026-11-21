(() => {
  const menu = document.getElementById('main-menu-dialog');
  const selection = document.getElementById('deck-select-dialog');
  let returnToMenu = false;

  function openChild(dialog) {
    returnToMenu = true;
    menu.close();
    dialog.showModal();
  }
  function returnHome(dialog) {
    returnToMenu = false;
    if (dialog.open) dialog.close();
    if (!menu.open) menu.showModal();
  }
  function toMenuAfterClose(dialog) {
    dialog.addEventListener('close', () => {
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
    window.peppermintCollection?.renderDeckEditor();
    openChild(document.getElementById('deck-editor-dialog'));
  });
  document.getElementById('menu-boosters').addEventListener('click', () => {
    window.peppermintCollection?.renderBoosterDisplay();
    openChild(document.getElementById('booster-dialog'));
  });
  document.getElementById('menu-library').addEventListener('click', () => {
    returnToMenu = true; menu.close(); window.showCardLibrary?.();
    if (!document.getElementById('card-library-dialog').open) document.getElementById('card-library-button').click();
  });
  document.getElementById('menu-rules').addEventListener('click', () => openChild(document.getElementById('rules-dialog')));
  document.getElementById('menu-account').addEventListener('click', () => openChild(document.getElementById('account-dialog')));
  document.getElementById('menu-logout').addEventListener('click', () => window.peppermintAccount?.signOut());
  document.getElementById('menu-logout').classList.toggle('hidden', !window.peppermintCurrentUser);
  window.addEventListener('peppermint-auth-state', (event) => {
    document.getElementById('menu-logout').classList.toggle('hidden', !event.detail?.user);
  });
  document.getElementById('quick-menu-button').addEventListener('click', () => { returnToMenu = false; if (!menu.open) menu.showModal(); });
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
    if (event.target.closest('#start-battle')) returnToMenu = false;
  }, true);

  [selection, document.getElementById('deck-editor-dialog'), document.getElementById('booster-dialog'), document.getElementById('card-library-dialog'), document.getElementById('rules-dialog'), document.getElementById('account-dialog')].forEach(toMenuAfterClose);
  menu.addEventListener('click', (event) => { if (event.target === menu) menu.close(); });
  menu.addEventListener('cancel', (event) => { event.preventDefault(); });
  menu.showModal();
})();
