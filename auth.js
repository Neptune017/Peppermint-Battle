(function () {
  const config = window.PB_SUPABASE_CONFIG || {};
  const button = document.getElementById('account-button');
  const dialog = document.getElementById('account-dialog');
  const close = document.getElementById('close-account');
  const form = document.getElementById('account-form');
  const emailInput = document.getElementById('account-email');
  const passwordInput = document.getElementById('account-password');
  const signupNicknameGroup = document.getElementById('account-nickname-signup-group');
  const signupNickname = document.getElementById('account-nickname-signup');
  const submit = document.getElementById('account-submit');
  const status = document.getElementById('account-status');
  const modeToggle = document.getElementById('account-mode-toggle');
  const signedInPanel = document.getElementById('account-signed-in');
  const emailLabel = document.getElementById('account-email-label');
  const profileForm = document.getElementById('account-profile-form');
  const profileNickname = document.getElementById('account-profile-nickname');
  const avatarChoices = document.getElementById('account-avatar-choices');
  const newPassword = document.getElementById('account-new-password');
  const profileSave = document.getElementById('account-profile-save');
  const signOut = document.getElementById('account-signout');
  let supabaseClient = null;
  let currentSession = null;
  let isSignUp = false;
  let selectedAvatarCardId = '';

  function renderAvatarChoices() {
    if (!avatarChoices || typeof window.peppermintFighterAvatars !== 'function') return;
    avatarChoices.replaceChildren();
    window.peppermintFighterAvatars().forEach((card) => {
      const choice = document.createElement('button');
      choice.type = 'button';
      choice.className = 'account-avatar-choice';
      choice.dataset.avatarCardId = card.id;
      choice.disabled = !window.peppermintOwnsAvatar(card.id);
      choice.setAttribute('aria-label', `${card.name} profile picture`);
      choice.title = choice.disabled
        ? `${card.title} · ${card.name} · Unlock the matching card to use this avatar.`
        : `${card.title} · ${card.name}`;
      const image = document.createElement('img');
      image.src = card.art;
      image.alt = '';
      choice.append(image);
      avatarChoices.append(choice);
    });
  }
  function selectAvatar(cardId) {
    selectedAvatarCardId = cardId || '';
    avatarChoices?.querySelectorAll('.account-avatar-choice').forEach((choice) => {
      const selected = !choice.disabled && choice.dataset.avatarCardId === selectedAvatarCardId;
      choice.classList.toggle('selected', selected);
      choice.setAttribute('aria-pressed', String(selected));
    });
  }

  function setStatus(message, kind) {
    status.textContent = message || '';
    status.dataset.kind = kind || '';
  }
  function setMode(signUp) {
    isSignUp = signUp;
    document.getElementById('account-title').textContent = signUp ? 'Create account' : 'Sign in';
    document.getElementById('account-description').textContent = signUp
      ? 'Create an account to keep your player save with you across devices.'
      : 'Sign in to keep your player profile and save data attached to your account.';
    submit.textContent = signUp ? 'CREATE ACCOUNT' : 'SIGN IN';
    passwordInput.autocomplete = signUp ? 'new-password' : 'current-password';
    signupNicknameGroup.classList.toggle('hidden', !signUp);
    signupNickname.required = signUp;
    document.getElementById('account-profile-form').classList.toggle('hidden', !currentSession?.user);
    modeToggle.textContent = signUp ? 'I already have an account' : 'Create a new account';
  }
  function updateAccountUI(session) {
    currentSession = session || null;
    const user = currentSession?.user;
    window.peppermintCurrentUser = user ? { id: user.id, email: user.email, nickname: user.user_metadata?.nickname || '', avatarCardId: user.user_metadata?.avatarCardId || '' } : null;
    button.textContent = user ? 'ACCOUNT' : 'SIGN IN';
    form.classList.toggle('hidden', Boolean(user));
    modeToggle.classList.toggle('hidden', Boolean(user));
    signedInPanel.classList.toggle('hidden', !user);
    profileForm.classList.toggle('hidden', !user);
    emailLabel.textContent = user?.email || '';
    document.getElementById('account-title').textContent = user ? 'Your profile' : (isSignUp ? 'Create account' : 'Sign in');
    document.getElementById('account-description').textContent = user
      ? 'Update the nickname shown for your player account or change your password.'
      : (isSignUp ? 'Create an account to keep your player save with you across devices.' : 'Sign in to keep your player profile and save data attached to your account.');
    if (user) {
      profileNickname.value = user.user_metadata?.nickname || '';
      renderAvatarChoices();
      selectAvatar(user.user_metadata?.avatarCardId || '');
    }
    if (user) setStatus('You are signed in. Your save is stored under this account.', 'success');
    window.dispatchEvent(new CustomEvent('peppermint-auth-state', { detail: { user: user ? { id: user.id, email: user.email, avatarCardId: user.user_metadata?.avatarCardId || '', nickname: user.user_metadata?.nickname || '' } : null } }));
  }
  async function loadPlayerSave() {
    if (!supabaseClient || !currentSession?.user) return null;
    const { data, error } = await supabaseClient.from('player_profiles').select('save_data').eq('user_id', currentSession.user.id).maybeSingle();
    if (error) throw error;
    return data?.save_data ?? null;
  }
  async function savePlayerSave(saveData, accountId = currentSession?.user?.id) {
    if (!supabaseClient || !accountId || currentSession?.user?.id !== accountId) throw new Error('Sign in before saving player data.');
    const { error } = await supabaseClient.from('player_profiles').upsert({
      user_id: accountId,
      save_data: saveData,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
    if (error) throw error;
    return true;
  }
  window.peppermintPlayerSave = { load: loadPlayerSave, save: savePlayerSave };

  function refreshAvatarChoices() {
    if (!currentSession?.user) return;
    renderAvatarChoices();
    selectAvatar(selectedAvatarCardId);
  }
  window.addEventListener('peppermint-collection-change', refreshAvatarChoices);
  dialog.addEventListener('beforetoggle', (event) => { if (event.newState === 'open') refreshAvatarChoices(); });
  button.addEventListener('click', () => { setStatus('', ''); dialog.showModal(); });
  avatarChoices?.addEventListener('click', (event) => {
    const choice = event.target.closest('.account-avatar-choice');
    if (choice && !choice.disabled && window.peppermintOwnsAvatar(choice.dataset.avatarCardId)) selectAvatar(choice.dataset.avatarCardId);
  });
  close.addEventListener('click', () => dialog.close());
  modeToggle.addEventListener('click', () => { setMode(!isSignUp); setStatus('', ''); });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!supabaseClient) return setStatus('Account sign-in is not connected yet. Add your Supabase project URL and publishable key in auth-config.js.', 'error');
    submit.disabled = true;
    setStatus(isSignUp ? 'Creating your account…' : 'Signing in…');
    try {
      const credentials = { email: emailInput.value.trim(), password: passwordInput.value };
      const result = isSignUp
        ? await supabaseClient.auth.signUp({ ...credentials, options: { data: { nickname: signupNickname.value.trim() } } })
        : await supabaseClient.auth.signInWithPassword(credentials);
      if (result.error) throw result.error;
      if (isSignUp && !result.data.session) {
        setStatus('Account created. Check your email to confirm it, then sign in.', 'success');
      } else {
        updateAccountUI(result.data.session);
      }
    } catch (error) {
      setStatus(error.message || 'Could not sign in. Try again.', 'error');
    } finally {
      submit.disabled = false;
    }
  });
  profileForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!supabaseClient || !currentSession?.user) return setStatus('Sign in to edit your profile.', 'error');
    profileSave.disabled = true;
    setStatus('Saving profile…');
    try {
      const nickname = profileNickname.value.trim();
      if (nickname.length < 2) throw new Error('Nickname must be at least 2 characters.');
      const metadata = currentSession.user.user_metadata;
      const avatarCardId = window.peppermintOwnsAvatar(selectedAvatarCardId) ? selectedAvatarCardId : metadata?.avatarCardId || '';
      const updates = { data: { ...metadata, nickname, avatarCardId } };
      if (newPassword.value) updates.password = newPassword.value;
      const { data, error } = await supabaseClient.auth.updateUser(updates);
      if (error) throw error;
      newPassword.value = '';
      updateAccountUI({ ...currentSession, user: data.user || { ...currentSession.user, user_metadata: updates.data } });
      setStatus('Profile updated.', 'success');
    } catch (error) {
      setStatus(error.message || 'Could not update the profile.', 'error');
    } finally {
      profileSave.disabled = false;
    }
  });
  async function performSignOut() {
    if (!supabaseClient) return;
    const { error } = await supabaseClient.auth.signOut();
    if (error) setStatus(error.message, 'error');
    else { updateAccountUI(null); setMode(false); setStatus('You are signed out.'); }
  }
  window.peppermintAccount = { signOut: performSignOut, promptSignIn() { setMode(false); setStatus(window.peppermintLanguage?.translate('Sign in to use this feature.') || 'Sign in to use this feature.'); } };
  signOut.addEventListener('click', performSignOut);

  setMode(false);
  if (!config.url || !config.anonKey) {
    submit.disabled = true;
    setStatus('Supabase connection needed: add the project URL and publishable key to auth-config.js.', 'setup');
    return;
  }
  if (!window.supabase?.createClient) {
    submit.disabled = true;
    setStatus('The sign-in service could not load. Check your internet connection and reload.', 'error');
    return;
  }
  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
  supabaseClient.auth.getSession().then(({ data, error }) => {
    if (error) setStatus(error.message, 'error');
    updateAccountUI(data?.session);
  });
  supabaseClient.auth.onAuthStateChange((_event, session) => updateAccountUI(session));
})();
