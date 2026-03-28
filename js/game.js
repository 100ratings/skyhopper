(function () {
  'use strict';

  // --- Translations (EN, NL, DE, FR, ES) ---
  var TRANSLATIONS = {
    en: {
      menuCharacterSelection: 'Character selection',
      menuPlayerName: 'NICKNAME',
      menuPlayerNamePlaceholder: 'For the leaderboard — use .name to join host session',
      leaderboardDefaultName: 'Player',
      menuPlay: 'Play',
      pairingResolveFailed: 'Could not pair. Check the nickname or host registration.',
      pairingSectionHeading: 'Pairing nickname',
      pairingSectionHint: 'Register a unique name here (starts with .). Guests enter the same in Nickname on the normal site (no /?k=) — the dot is removed when linked; they can edit the name freely after that (leaderboard name).',
      pairingRegisterFieldLabel: 'Your pairing name',
      pairingRegisterBtn: 'Save pairing',
      pairingRegisterPlaceholder: 'xxxx',
      pairingRegisterInvalid: 'Use .name (e.g. .sven). Allowed: letters, numbers, _ -',
      pairingRegisterNeedApi: 'Need your API key first — enable API mode and activate license.',
      pairingRegisterOk: 'Pairing saved.',
      pairingRegisterError: 'Could not save.',
      pairingRegisterTaken: 'That name is already taken.',
      pairingRegisterFullOnly: 'Pairing nickname is only available with a full license (not trial).',
      pairingFullLicenseModalTitle: 'Full license required',
      pairingFullLicenseModalBody: 'Pairing nickname is only available with a full license. Buy a full license to unlock this feature.',
      pairingFullLicenseModalClose: 'Close',
      pairingRegisterLockAriaLabel: 'Locked — full license required to use pairing',
      settingsTitle: 'Settings',
      settingsSoundOn: 'Sound on (SFX)',
      settingsSfxVolume: 'SFX volume',
      settingsMusicVolume: 'Music volume',
      settingsLqMode: 'LQ mode (lighter: no flap SFX, puff FX, end confetti)',
      settingsClose: 'Close',
      secretSettingsClose: 'Close & save',
      secretCloseSaveHint: 'Your settings are saved when you close this menu.',
      secretTitle: 'Secret modes',
      secretLicenseLabel: 'License (secret modes):',
      secretLicensePlaceholder: 'Key',
      secretActivate: 'Activate',
      secretLicenseRequired: 'License required. Enter a valid key above.',
      secretCurrentKeyLabel: 'Key:',
      registerKeyTitle: 'Register your key (name and email)',
      registerNameLabel: 'Name:',
      registerEmailLabel: 'Email:',
      registerNamePlaceholder: 'Your name',
      registerEmailPlaceholder: 'you@email.com',
      resetDeviceEmailPlaceholder: 'you@email.com',
      licenseStatusActivated: 'Activated',
      licenseStatusNotActivated: 'Not activated',
      licenseStatusSpectator: 'Spectator (host API)',
      licenseStatusDev: 'Activated (dev)',
      licenseEnterKey: 'Enter a key.',
      licenseChecking: 'Checking…',
      licenseInvalid: 'Invalid license',
      licenseApiUnreachable: 'Cannot reach license API. Try /api/ping on your domain.',
      registerNameEmailRequired: 'Enter name and email.',
      registerBusy: '…',
      registerApiHint: ' Check that /api/ works on your host.',
      resetBusy: '…',
      apiModeSectionHeading: 'API mode',
      apiModeCheckboxLabel: 'API mode on (live read/write)',
      apiKeyRowLabel: 'Your API key (bound to license)',
      spectatorModeSectionHeading: 'Spectator mode',
      spectatorModeHint: 'Another phone can open the link below — no license needed there. The app loads your session from the server.',
      registerKeyBtn: 'Register',
      registerSuccess: 'Registered.',
      registerError: 'Could not register.',
      resetDeviceTitle: 'Link this device again',
      resetDeviceHelp: 'Enter your license key above and the same email you used when you registered. Tap Reset device, then Activate.',
      resetDeviceEmailLabel: 'Email (as registered):',
      resetDeviceBtn: 'Reset device',
      resetDeviceSuccess: 'Done. Now tap Activate.',
      resetDeviceErrorInvalid: 'Invalid key or email.',
      resetDeviceErrorNoReg: 'No registration email on file for this key. Email help@premiummagic.nl.',
      resetDeviceFooter: 'Lost that email? Write to',
      licenseAlreadyUsed: 'Key already linked elsewhere. Use Reset device below with your registration email.',
      licenseTrialExpired: 'This trial key has expired.',
      gracePurchaseTitle: 'Trial period ended',
      gracePurchaseBody: 'Your 5-day active period after activation is over. Sky Hopper is only sold on Premium Magic — the official store.',
      gracePurchaseButton: 'Buy now at Premium Magic',
      gracePurchaseClose: 'Close',
      licenseBuyKeyLink: 'Buy a license key',
      resetDeviceMissing: 'Enter your key and email.',
      secretModeLabel: 'Mode:',
      secretModeNone: 'None (default)',
      secretModeForcing: 'Forcing',
      secretModeMultiple: 'Multiple force',
      secretModeLeaderboardForce: 'Leaderboard force',
      forcedLeaderboardRankLabel: 'End at rank:',
      forcedLbAboveGroup: 'Names above (closest first)',
      forcedLbBelowGroup: 'Names below (closest first)',
      forcedLbNeighborNamePlaceholder: 'Name',
      secretScoreTimePerRun: 'Score + time (sec) per run:',
      secretPerRunLabel: 'time:',
      secretAdd: 'Add',
      secretForcedScore: 'Forced score:',
      secretForcedTime: 'Forced time (sec):',
      secretDelay: 'Delay (replays):',
      secretAfter: 'After:',
      secretAfterOff: 'Switch off',
      secretAfterRepeat: 'Repeat',
      secretAfterNext: 'Go to mode',
      secretAfterModeLabel: 'Next mode',
      secretScore: 'Score:',
      secretTime: 'Time:',
      gameOverTitle: 'Game Over',
      gameOverTime: 'Time:',
      gameOverRestartIn: 'In',
      gameOverRestartSuffix: ' sec...',
      gameOverRestart: 'Play again',
      gameOverMenu: 'Menu',
      menuLanguage: 'Language',
      pauseTitle: 'Paused',
      pauseResume: 'Back to game',
      secondChanceTitle: 'Second chance',
      secondChanceMessage: 'You were actually out...',
      secondChanceContinue: 'Continue',
      leaderboardTitle: 'Leaderboard',
      leaderboardYourRank: 'Your rank: #{rank}',
      leaderboardBack: 'Back',
      leaderboardShow: 'To leaderboard',
      leaderboardTopScores: 'Top scores',
      ordinals: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th'],
      secretTutorialTitle: 'Secret modes – how it works',
      secretTutorialBtn: 'TUTORIAL',
      secretTutorialClose: 'Got it',
      secretClearCache: 'Hard reload',
      secretClearCacheHint: 'Reloads with a fresh URL so the browser fetches HTML, JS and CSS again.',
      secretTutorialBody: 'Welcome! Here is how everything works, step by step.\n\n{{H:Logo}}\n\nAfter you pick a secret mode in this menu (not "None"), tap the Sky Hopper logo to turn that mode ON or OFF. When ON, that mode is armed; when OFF, you play a normal game.\n\n{{IMG:tutorial-logo-gear.png}}\n\n{{H:Gear (settings)}}\n\nOne tap = normal settings (sound, LQ). Double tap quickly = this secret menu.\n\n{{H:Indicators}}\n\n• In play: a small colored dot at the top-left. The color matches the mode you selected.\n• Yellow and white = Forcing (yellow = not yet in the active forcing phase, white = active forcing run).\n• Green = Multiple force.\n• Purple = Leaderboard force.\n• In the menu or pause: a colored strip at the bottom; same color meaning.\n\n{{IMG:tutorial-mode-indicators.png}}\n\n{{H:Forcing — second chance and force tube}}\n\nDuring an active forcing run you can still hit a pipe. Before your target score, that is not instant game over — you get a second chance. After you reach the target, extra gravity applies around the special narrow force tube to finish the round.\n\n{{H:Mode: None (normal)}}\n\nNormal Flappy-style game. No secret rules. Choose "None" at the top or turn the logo off.\n\n{{H:Mode: Forcing}}\n\nOne target score and time limit. Set forced score, time (seconds), optional delay (warmup rounds before the active forcing phase). Use "After" to repeat or switch to another mode when done.\n\n{{H:Mode: Multiple force}}\n\nSeveral runs in a row. Each row has its own score and time. When the list ends, "After" decides what happens next.\n\n{{H:Mode: Leaderboard force}}\n\nThe game ends so it looks like you placed at a certain rank on the leaderboard. You set the rank to show.\n\n{{H:Leaderboard force — names around you (Rainman effect)}}\n\nBesides forcing your nickname to that rank, you can enter custom names for the three rows above you and three below (closest to you first). The scores shown next to those names are stepped from your final score so the order looks believable — a “Rainman” moment: it feels like those exact names sit beside you on the board. In this menu, fill “Names above” and “Names below”, turn the mode ON with the logo, play to game over, then open the leaderboard. • Idea: Saad Jennane.\n\n{{H:After (repeat / next)}}\n\nWhat happens after a forced round: turn off, repeat the same mode, or jump to another secret mode.\n\n{{H:API mode}}\n\nTurn on in this menu. Your device sends live score and state to the server. Each 5-digit API key has its own session — PeekSmith and other tools only see data for the key in the URL.\n\nExample URLs for PeekSmith or testing (CCvzDfV4n3pA.com and your 5-digit API key are filled in automatically):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/peek?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/line?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/score?apiKey={{TUTORIAL_API_KEY}}}}\n\nJSON (full state):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/state?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{H:Spectator link (no license on that phone)}}\n\nShare this so someone can play with your forcing config from the server, without activating a license on their device:\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/?k={{TUTORIAL_API_KEY}}}}\n\nAfter a forced game on spectator, that link has a cooldown (about 60 minutes of normal play) before forcing applies again.\n\n{{H:On the spectator\'s phone}}\n\nThey open the shared link — no license. The app reads the 5-digit key from the URL and enables API mode automatically. Forcing rules (mode, scores, times, etc.) are fetched from the server for that key; they follow the host\'s session, not anything saved on the spectator\'s phone.\n\nThe spectator cannot change secret modes: tapping the logo does nothing, and the gear only opens normal settings (sound, music, LQ). A double tap does not open the secret menu — the server config stays in charge.\n\nScore and state are still sent to the same API session so PeekSmith can follow along.\n\n{{H:Tips}}\n\nIf PeekSmith does not update, try plain-text URLs (peek / peeksmith) instead of raw JSON. On some hosts, exclude /api/ from caching in the hosting panel.'
    },
    nl: {
      menuCharacterSelection: 'Character selection',
      menuPlayerName: 'NICKNAME',
      menuPlayerNamePlaceholder: 'Voor het leaderboard — typ .naam om bij host-sessie aan te sluiten',
      leaderboardDefaultName: 'Speler',
      menuPlay: 'Play',
      pairingResolveFailed: 'Koppelen mislukt. Controleer de naam of host-registratie.',
      pairingSectionHeading: 'Koppelnaam (pairing)',
      pairingSectionHint: 'Registreer hier een unieke naam (begint met .). Gasten vullen hetzelfde in bij Nickname op de normale site (zonder /?k=) — de punt verdwijnt na koppelen; daarna gewoon aanpasbaar (naam op leaderboard).',
      pairingRegisterFieldLabel: 'Jouw koppelnaam',
      pairingRegisterBtn: 'Koppeling opslaan',
      pairingRegisterPlaceholder: 'xxxx',
      pairingRegisterInvalid: 'Gebruik .naam (bijv. .sven). Toegestaan: letters, cijfers, _ -',
      pairingRegisterNeedApi: 'Eerst je API-sleutel nodig — zet API-modus aan en activeer licentie.',
      pairingRegisterOk: 'Koppeling opgeslagen.',
      pairingRegisterError: 'Opslaan mislukt.',
      pairingRegisterTaken: 'Die naam is al in gebruik.',
      pairingRegisterFullOnly: 'Koppelnaam (pairing) is alleen beschikbaar met een volledige licentie, niet met trial.',
      pairingFullLicenseModalTitle: 'Volledige licentie nodig',
      pairingFullLicenseModalBody: 'Koppelnaam (pairing) is alleen beschikbaar met een volledige licentie. Koop een volledige licentie om dit te gebruiken.',
      pairingFullLicenseModalClose: 'Sluiten',
      pairingRegisterLockAriaLabel: 'Vergrendeld — volledige licentie nodig voor koppeling',
      settingsTitle: 'Instellingen',
      settingsSoundOn: 'Geluid aan (SFX)',
      settingsSfxVolume: 'SFX volume',
      settingsMusicVolume: 'Muziek volume',
      settingsLqMode: 'LQ-modus (lichter: geen flap-geluid, puff-sprites, confetti)',
      settingsClose: 'Sluiten',
      secretSettingsClose: 'Sluiten & opslaan',
      secretCloseSaveHint: 'Je instellingen worden opgeslagen als je dit menu sluit.',
      secretTitle: 'Secret modi',
      secretLicenseLabel: 'Licentie (secret modes):',
      secretLicensePlaceholder: 'Sleutel',
      secretActivate: 'Activeren',
      secretLicenseRequired: 'Licentie vereist. Vul hierboven een geldige sleutel in.',
      secretCurrentKeyLabel: 'Key:',
      registerKeyTitle: 'Registreer je key (naam en e-mail)',
      registerNameLabel: 'Naam:',
      registerEmailLabel: 'E-mail:',
      registerNamePlaceholder: 'Je naam',
      registerEmailPlaceholder: 'je@email.nl',
      resetDeviceEmailPlaceholder: 'je@email.nl',
      licenseStatusActivated: 'Geactiveerd',
      licenseStatusNotActivated: 'Niet geactiveerd',
      licenseStatusSpectator: 'Toeschouwer (host-API)',
      licenseStatusDev: 'Geactiveerd (dev)',
      licenseEnterKey: 'Voer een sleutel in.',
      licenseChecking: 'Controleren…',
      licenseInvalid: 'Ongeldige licentie',
      licenseApiUnreachable: 'Geen verbinding met licentie-API. Test in de browser: /api/ping op je domein.',
      registerNameEmailRequired: 'Vul naam en e-mail in.',
      registerBusy: 'Bezig…',
      registerApiHint: ' Controleer of /api/ op je hosting werkt.',
      resetBusy: 'Bezig…',
      apiModeSectionHeading: 'API-modus',
      apiModeCheckboxLabel: 'API-modus aan (realtime uitlezen/instellen)',
      apiKeyRowLabel: 'Jouw API-sleutel (vast aan licentie)',
      spectatorModeSectionHeading: 'Spectator-modus',
      spectatorModeHint: 'Een andere telefoon kan de onderstaande link openen — daar is geen licentie voor nodig. De app haalt je sessie van de server.',
      registerKeyBtn: 'Registreren',
      registerSuccess: 'Geregistreerd.',
      registerError: 'Registreren mislukt.',
      resetDeviceTitle: 'Apparaat opnieuw koppelen',
      resetDeviceHelp: 'Vul hierboven je licentiesleutel in en hieronder hetzelfde e-mailadres als bij registratie. Tik op Apparaat resetten en daarna op Activeren.',
      resetDeviceEmailLabel: 'E-mail (zoals bij registratie):',
      resetDeviceBtn: 'Apparaat resetten',
      resetDeviceSuccess: 'Gelukt. Tik nu op Activeren.',
      resetDeviceErrorInvalid: 'Ongeldige sleutel of e-mail.',
      resetDeviceErrorNoReg: 'Er staat geen registratie-e-mail bij deze sleutel. Mail naar help@premiummagic.nl.',
      resetDeviceFooter: 'E-mailadres kwijt? Mail naar',
      licenseAlreadyUsed: 'Key al gekoppeld. Gebruik hieronder Apparaat resetten met je e-mail van de registratie.',
      licenseTrialExpired: 'Deze trial-sleutel is verlopen.',
      gracePurchaseTitle: 'Proefperiode voorbij',
      gracePurchaseBody: 'Je 5 dagen actieve versie na activatie zijn om. Sky Hopper koop je alleen op Premium Magic — de officiële shop.',
      gracePurchaseButton: 'Koop nu op Premium Magic',
      gracePurchaseClose: 'Sluiten',
      licenseBuyKeyLink: 'Licentiesleutel kopen',
      resetDeviceMissing: 'Vul sleutel en e-mail in.',
      secretModeLabel: 'Modus:',
      secretModeNone: 'Geen (standaard)',
      secretModeForcing: 'Forcing',
      secretModeMultiple: 'Multiple force',
      secretModeLeaderboardForce: 'Leaderboard force',
      forcedLeaderboardRankLabel: 'Eindig op plaats:',
      forcedLbAboveGroup: 'Namen boven je (dichtstbij eerst)',
      forcedLbBelowGroup: 'Namen onder je (dichtstbij eerst)',
      forcedLbNeighborNamePlaceholder: 'Naam',
      secretScoreTimePerRun: 'Score + tijd (sec) per keer:',
      secretPerRunLabel: 'keer:',
      secretAdd: 'Toevoegen',
      secretForcedScore: 'Geforceerde score:',
      secretForcedTime: 'Geforceerde tijd (sec):',
      secretDelay: 'Delay (replays):',
      secretAfter: 'Na:',
      secretAfterOff: 'Uit',
      secretAfterRepeat: 'Herhaal',
      secretAfterNext: 'Ga naar modus',
      secretAfterModeLabel: 'Volgende modus',
      secretScore: 'Score:',
      secretTime: 'Tijd:',
      gameOverTitle: 'Game Over',
      gameOverTime: 'Tijd:',
      gameOverRestartIn: 'Over',
      gameOverRestartSuffix: ' sec...',
      gameOverRestart: 'Opnieuw spelen',
      gameOverMenu: 'Menu',
      menuLanguage: 'Taal',
      pauseTitle: 'Pauze',
      pauseResume: 'Terug naar spel',
      secondChanceTitle: 'Second chance',
      secondChanceMessage: 'Je was eigenlijk af...',
      secondChanceContinue: 'Doorgaan',
      leaderboardTitle: 'Leaderboard',
      leaderboardYourRank: 'Je staat op plaats #{rank}',
      leaderboardBack: 'Terug',
      leaderboardShow: 'Naar leaderboard',
      leaderboardTopScores: 'Top scores',
      ordinals: ['1e', '2e', '3e', '4e', '5e', '6e', '7e', '8e', '9e', '10e', '11e', '12e', '13e', '14e', '15e', '16e', '17e', '18e', '19e', '20e'],
      secretTutorialTitle: 'Secret menu – uitleg',
      secretTutorialBtn: 'TUTORIAL',
      secretTutorialClose: 'Begrepen',
      secretClearCache: 'Harde herladen',
      secretClearCacheHint: 'Herlaadt met een nieuwe URL; de browser haalt HTML, JS en CSS opnieuw op.',
      secretTutorialBody: 'Welkom! Zo werkt het, met duidelijke kopjes.\n\n{{H:Logo}}\n\nAls je hierboven een secret modus hebt gekozen (niet "Geen"), zet je met een tik op het Sky Hopper-logo die modus aan of uit. Aan = die modus staat klaar; uit = je speelt gewoon normaal.\n\n{{IMG:tutorial-logo-gear.png}}\n\n{{H:Tandwiel (instellingen)}}\n\nEén tik = gewone instellingen (geluid, LQ). Twee keer snel tikken (dubbelklik) = dit secret menu.\n\n{{H:Indicatoren}}\n\n• Tijdens het spel: linksboven een klein gekleurd bolletje; de kleur hoort bij je gekozen modus.\n• Geel en wit = Forcing (geel = nog niet in het actieve forcing-deel, wit = actieve forcing-run).\n• Groen = Multiple force.\n• Paars = Leaderboard force.\n• In het menu of bij pauze: onderaan een gekleurde balk; dezelfde kleur-betekenis.\n\n{{IMG:tutorial-mode-indicators.png}}\n\n{{H:Forcing — second chance en force-buis}}\n\nIn een actieve forcing-run kun je nog tegen een buis vliegen. Zolang je je doelscore niet hebt, krijg je second chance (geen meteen game over). Na je doelscore zet het spel bij de smalle force-buis extra zwaartekracht om de ronde af te sluiten.\n\n{{H:Modus: Geen (normaal)}}\n\nGewoon Flappy-spel. Kies "Geen" of zet het logo uit.\n\n{{H:Modus: Forcing}}\n\nEén doelscore en tijdslimiet. Stel score, tijd (sec) en eventuele delay in (oefen-rondjes vóór het actieve forcing-deel). "Na" = herhalen of naar een andere modus.\n\n{{H:Modus: Multiple force}}\n\nMeerdere rondjes achter elkaar, elk met eigen score en tijd. Als de lijst op is, bepaalt "Na" wat er gebeurt.\n\n{{H:Modus: Leaderboard force}}\n\nHet spel eindigt zo dat het lijkt alsof je op een bepaalde plek in het klassement staat. Je stelt die plek in.\n\n{{H:Leaderboard force — namen om je heen (Rainman-effect)}}\n\nJe kunt ook zelf drie namen invullen boven je en drie onder je (dichtstbij eerst). De bijbehorende scores worden automatisch afgestemd op jouw eindscore zodat de volgorde klopt — een sterk Rainman-effect: alsof die namen echt naast je in het klassement staan. Vul de velden in dit menu in, zet de modus aan via het logo, speel tot game over en open het leaderboard. • Idee: Saad Jennane.\n\n{{H:Na (herhalen / volgende modus)}}\n\nWat er gebeurt na een geforceerde ronde: uitzetten, dezelfde modus herhalen, of naar een andere secret modus springen.\n\n{{H:API-modus}}\n\nZet dit hier aan. Je telefoon stuurt live score en status naar de server. Elke 5-cijferige API-sleutel heeft een eigen sessie — PeekSmith en andere tools zien alleen de data van de sleutel in de URL.\n\nVoorbeeld-URL\'s voor PeekSmith of testen (CCvzDfV4n3pA.com en je 5-cijferige API-sleutel worden automatisch ingevuld):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/peek?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/line?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/score?apiKey={{TUTORIAL_API_KEY}}}}\n\nJSON (volledige state):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/state?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{H:Toeschouwer-link (geen licentie op die telefoon)}}\n\nDeel dit zodat iemand met jouw forcing-config van de server kan spelen zonder licentie te activeren:\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/?k={{TUTORIAL_API_KEY}}}}\n\nNa een geforceerd potje als toeschouwer volgt een cooldown (ongeveer 60 minuten normaal spelen) voordat forcing weer mee doet.\n\n{{H:Op de telefoon van de toeschouwer}}\n\nDie opent de gedeelde link — geen licentie nodig. De app leest de 5-cijferige sleutel uit de URL en zet API-modus automatisch aan. De forcing-regels (modus, scores, tijden, enz.) komen van de server voor die sleutel: de sessie van de host, niet wat er op de telefoon van de toeschouwer staat opgeslagen.\n\nDe toeschouwer kan geen secret modi aanpassen: tikken op het logo doet niets, en het tandwiel opent alleen gewone instellingen (geluid, muziek, LQ). Dubbel tikken opent geen secret menu — de serverconfig bepaalt.\n\nLive score en status gaan nog steeds naar dezelfde API-sessie, zodat PeekSmith kan meekijken.\n\n{{H:Tips}}\n\nWerkt PeekSmith niet goed? Probeer platte-tekst-URL\'s (peek / peeksmith) i.p.v. ruwe JSON. Bij sommige hosts moet je /api/ uitsluiten van cache in het hostingpaneel.'
    },
    de: {
      menuCharacterSelection: 'Charakterauswahl',
      menuPlayerName: 'NICKNAME',
      menuPlayerNamePlaceholder: 'Für die Bestenliste — .name zum Host beitreten',
      leaderboardDefaultName: 'Spieler',
      menuPlay: 'Spielen',
      pairingResolveFailed: 'Koppeln fehlgeschlagen. Name oder Host-Registrierung prüfen.',
      pairingSectionHeading: 'Kopplungsname',
      pairingSectionHint: 'Hier einen eindeutigen Namen registrieren (beginnt mit .). Gäste tragen denselben Namen bei Nickname auf der normalen Seite ein (ohne /?k=) — der Punkt verschwindet nach der Kopplung; danach frei editierbar (Name in der Bestenliste).',
      pairingRegisterFieldLabel: 'Dein Kopplungsname',
      pairingRegisterBtn: 'Kopplung speichern',
      pairingRegisterPlaceholder: 'xxxx',
      pairingRegisterInvalid: '.name verwenden (z. B. .sven). Erlaubt: Buchstaben, Ziffern, _ -',
      pairingRegisterNeedApi: 'Zuerst API-Schlüssel — API-Modus an und Lizenz aktivieren.',
      pairingRegisterOk: 'Kopplung gespeichert.',
      pairingRegisterError: 'Speichern fehlgeschlagen.',
      pairingRegisterTaken: 'Name bereits vergeben.',
      pairingRegisterFullOnly: 'Kopplungsname nur mit Voll-Lizenz, nicht mit Trial.',
      pairingFullLicenseModalTitle: 'Voll-Lizenz erforderlich',
      pairingFullLicenseModalBody: 'Der Kopplungsname ist nur mit einer Voll-Lizenz verfügbar. Kaufe eine Voll-Lizenz, um diese Funktion zu nutzen.',
      pairingFullLicenseModalClose: 'Schließen',
      pairingRegisterLockAriaLabel: 'Gesperrt — Voll-Lizenz für Kopplung erforderlich',
      settingsTitle: 'Einstellungen',
      settingsSoundOn: 'Sound an (SFX)',
      settingsSfxVolume: 'SFX-Lautstärke',
      settingsMusicVolume: 'Musik-Lautstärke',
      settingsLqMode: 'LQ-Modus (leichter: kein Flap-SFX, Puffs, Konfetti)',
      settingsClose: 'Schließen',
      secretSettingsClose: 'Schließen & speichern',
      secretCloseSaveHint: 'Beim Schließen werden deine Einstellungen gespeichert.',
      secretTitle: 'Geheimmodi',
      secretLicenseLabel: 'Lizenz (Geheimmodi):',
      secretLicensePlaceholder: 'Schlüssel',
      secretActivate: 'Aktivieren',
      secretLicenseRequired: 'Lizenz erforderlich. Gültigen Schlüssel oben eingeben.',
      secretCurrentKeyLabel: 'Schlüssel:',
      registerKeyTitle: 'Key registrieren (Name und E-Mail)',
      registerNameLabel: 'Name:',
      registerEmailLabel: 'E-Mail:',
      registerNamePlaceholder: 'Dein Name',
      registerEmailPlaceholder: 'du@email.de',
      resetDeviceEmailPlaceholder: 'du@email.de',
      licenseStatusActivated: 'Aktiviert',
      licenseStatusNotActivated: 'Nicht aktiviert',
      licenseStatusSpectator: 'Zuschauer (Host-API)',
      licenseStatusDev: 'Aktiviert (Dev)',
      licenseEnterKey: 'Schlüssel eingeben.',
      licenseChecking: 'Prüfen…',
      licenseInvalid: 'Ungültige Lizenz',
      licenseApiUnreachable: 'Lizenz-API nicht erreichbar. Teste /api/ping in deiner Domain.',
      registerNameEmailRequired: 'Name und E-Mail eingeben.',
      registerBusy: '…',
      registerApiHint: ' Prüfe, ob /api/ auf deinem Hosting läuft.',
      resetBusy: '…',
      apiModeSectionHeading: 'API-Modus',
      apiModeCheckboxLabel: 'API-Modus an (Live lesen/schreiben)',
      apiKeyRowLabel: 'Dein API-Schlüssel (an Lizenz gebunden)',
      spectatorModeSectionHeading: 'Zuschauer-Modus',
      spectatorModeHint: 'Ein anderes Gerät kann den Link unten öffnen — dort ist keine Lizenz nötig. Die App lädt deine Session vom Server.',
      registerKeyBtn: 'Registrieren',
      registerSuccess: 'Registriert.',
      registerError: 'Registrierung fehlgeschlagen.',
      resetDeviceTitle: 'Gerät neu verknüpfen',
      resetDeviceHelp: 'Schlüssel oben und dieselbe E-Mail wie bei der Registrierung eintragen. Auf Gerät zurücksetzen tippen, dann Aktivieren.',
      resetDeviceEmailLabel: 'E-Mail (wie bei Registrierung):',
      resetDeviceBtn: 'Gerät zurücksetzen',
      resetDeviceSuccess: 'Fertig. Jetzt Aktivieren tippen.',
      resetDeviceErrorInvalid: 'Ungültiger Schlüssel oder E-Mail.',
      resetDeviceErrorNoReg: 'Keine Registrierungs-E-Mail zu diesem Schlüssel. Mail an help@premiummagic.nl.',
      resetDeviceFooter: 'E-Mail vergessen? Schreib an',
      licenseAlreadyUsed: 'Schlüssel schon verknüpft. Unten Gerät zurücksetzen mit Registrierungs-E-Mail nutzen.',
      licenseTrialExpired: 'Dieser Trial-Schlüssel ist abgelaufen.',
      gracePurchaseTitle: 'Testphase beendet',
      gracePurchaseBody: 'Deine 5 Tage aktive Version nach Aktivierung sind vorbei. Sky Hopper gibt es nur bei Premium Magic — offizieller Shop.',
      gracePurchaseButton: 'Jetzt bei Premium Magic kaufen',
      gracePurchaseClose: 'Schließen',
      licenseBuyKeyLink: 'Lizenzschlüssel kaufen',
      resetDeviceMissing: 'Schlüssel und E-Mail eingeben.',
      secretModeLabel: 'Modus:',
      secretModeNone: 'Keiner (Standard)',
      secretModeForcing: 'Forcing',
      secretModeMultiple: 'Multiple Force',
      secretModeLeaderboardForce: 'Leaderboard-Force',
      forcedLeaderboardRankLabel: 'Platz beenden:',
      forcedLbAboveGroup: 'Namen darüber (nächste zuerst)',
      forcedLbBelowGroup: 'Namen darunter (nächste zuerst)',
      forcedLbNeighborNamePlaceholder: 'Name',
      secretScoreTimePerRun: 'Punkt + Zeit (Sek) pro Runde:',
      secretPerRunLabel: 'Mal:',
      secretAdd: 'Hinzufügen',
      secretForcedScore: 'Erzwungene Punktzahl:',
      secretForcedTime: 'Erzwungene Zeit (Sek):',
      secretDelay: 'Verzögerung (Wiederholungen):',
      secretAfter: 'Danach:',
      secretAfterOff: 'Aus',
      secretAfterRepeat: 'Wiederholen',
      secretAfterNext: 'Wechsel zu Modus',
      secretAfterModeLabel: 'Nächster Modus',
      secretScore: 'Punkt:',
      secretTime: 'Zeit:',
      gameOverTitle: 'Game Over',
      gameOverTime: 'Zeit:',
      gameOverRestartIn: 'Noch',
      gameOverRestartSuffix: ' Sek...',
      gameOverRestart: 'Nochmal spielen',
      gameOverMenu: 'Menü',
      menuLanguage: 'Sprache',
      pauseTitle: 'Pause',
      pauseResume: 'Zurück zum Spiel',
      secondChanceTitle: 'Zweite Chance',
      secondChanceMessage: 'Du warst eigentlich raus...',
      secondChanceContinue: 'Weiter',
      leaderboardTitle: 'Bestenliste',
      leaderboardYourRank: 'Dein Rang: #{rank}',
      leaderboardBack: 'Zurück',
      leaderboardShow: 'Zur Bestenliste',
      leaderboardTopScores: 'Top-Scores',
      ordinals: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.', '13.', '14.', '15.', '16.', '17.', '18.', '19.', '20.'],
      secretTutorialTitle: 'Geheimmodi – Erklärung',
      secretTutorialBtn: 'TUTORIAL',
      secretTutorialClose: 'Verstanden',
      secretClearCache: 'Hard reload',
      secretClearCacheHint: 'Neu laden mit neuer URL; Browser holt HTML, JS und CSS erneut.',
      secretTutorialBody: 'Willkommen! So funktioniert es — mit Überschriften.\n\n{{H:Logo}}\n\nWenn du einen Geheimmodus wählst (nicht „Keiner“), schaltest du ihn per Tipp auf das Logo ein oder aus. An = Modus bereit; aus = normales Spiel.\n\n{{IMG:tutorial-logo-gear.png}}\n\n{{H:Zahnrad (Einstellungen)}}\n\nEin Tipp = normale Einstellungen. Doppeltipp = dieses Geheimmenü.\n\n{{H:Anzeigen}}\n\n• Im Spiel: oben links ein farbiger Punkt = gewählter Modus.\n• Gelb und Weiß = Forcing (gelb = noch nicht aktiv, weiß = aktive Forcing-Runde).\n• Grün = Multiple force.\n• Lila = Leaderboard force.\n• Im Menü / Pause: unten ein farbiger Streifen; gleiche Farb-Bedeutung.\n\n{{IMG:tutorial-mode-indicators.png}}\n\n{{H:Forcing — zweite Chance und Force-Röhre}}\n\nIn der aktiven Runde kannst du noch eine Röhre treffen. Vor der Zielpunktzahl: zweite Chance statt sofort Game Over. Danach: extra Schwerkraft an der schmalen Force-Röhre.\n\n{{H:Modus: Keiner (normal)}}\n\nNormales Spiel. Wähle „Keiner“ oder schalte das Logo aus.\n\n{{H:Modus: Forcing}}\n\nEine Zielpunktzahl und Zeitlimit. Score, Zeit, optional Delay. „Danach“ = wiederholen oder Modus wechseln.\n\n{{H:Modus: Multiple force}}\n\nMehrere Runden hintereinander, jede mit eigenem Score und Zeit. „Danach“ regelt das Ende der Liste.\n\n{{H:Modus: Leaderboard force}}\n\nDas Spiel endet so, als hättest du einen bestimmten Rang in der Bestenliste. Du stellst den Rang ein.\n\n{{H:Leaderboard force — Namen um dich (Rainman-Effekt)}}\n\nZusätzlich kannst du drei Namen über dir und drei unter dir eintragen (nächste Zeile zuerst). Die angezeigten Punkte werden an deine Endpunktzahl angepasst, damit die Reihenfolge stimmig wirkt — ein „Rainman“-Effekt: als stünden genau diese Namen um dich in der Liste. Trage die Namen hier ein, schalte den Modus per Logo ein, spiele bis Game Over und öffne die Bestenliste. • Idee: Saad Jennane.\n\n{{H:Danach (Wiederholen / Nächster Modus)}}\n\nWas nach einer erzwungenen Runde passiert.\n\n{{H:API-Modus}}\n\nHier einschalten. Dein Gerät sendet Live-Daten. Jeder 5-stellige API-Schlüssel hat eine eigene Session — PeekSmith sieht nur die Daten für den Schlüssel in der URL.\n\nBeispiel-URLs (CCvzDfV4n3pA.com und dein 5-stelliger API-Schlüssel werden automatisch eingetragen):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/peek?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/line?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/score?apiKey={{TUTORIAL_API_KEY}}}}\n\nJSON:\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/state?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{H:Zuschauer-Link (keine Lizenz auf dem Handy)}}\n\nZum Teilen — andere spielen mit deiner Forcing-Config vom Server, ohne Lizenz:\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/?k={{TUTORIAL_API_KEY}}}}\n\nNach einem Forcing-Spiel als Zuschauer: etwa 60 Minuten Cooldown mit normalem Spiel.\n\n{{H:Auf dem Handy des Zuschauers}}\n\nEr öffnet den geteilten Link — keine Lizenz nötig. Die App liest den 5-stelligen Schlüssel aus der URL und schaltet den API-Modus automatisch ein. Die Forcing-Regeln (Modus, Punkte, Zeiten usw.) kommen vom Server für diesen Schlüssel — die Session des Hosts, nicht der lokale Speicher des Zuschauers.\n\nDer Zuschauer kann keine Geheimmodi ändern: Logo-Tipp tut nichts, und das Zahnrad öffnet nur normale Einstellungen (Ton, Musik, LQ). Doppeltipp öffnet kein Geheimmenü — die Server-Konfiguration gilt.\n\nPunktzahl und Status gehen weiterhin an dieselbe API-Session, damit PeekSmith mitlesen kann.\n\n{{H:Tipps}}\n\nPeekSmith: lieber Plain-Text-URLs (peek/peeksmith) als rohes JSON. Bei manchen Hosts /api/ vom Cache ausschließen.'
    },
    fr: {
      menuCharacterSelection: 'Sélection du personnage',
      menuPlayerName: 'NICKNAME',
      menuPlayerNamePlaceholder: 'Pour le classement — .nom pour rejoindre l’hôte',
      leaderboardDefaultName: 'Joueur',
      menuPlay: 'Jouer',
      pairingResolveFailed: 'Échec du couplage. Vérifie le pseudo ou l’enregistrement hôte.',
      pairingSectionHeading: 'Pseudo de couplage',
      pairingSectionHint: 'Enregistre ici un nom unique (commence par .). Les invités saisissent le même au champ Pseudo sur le site normal (sans /?k=) — le point disparaît après couplage ; le nom est ensuite libre (classement).',
      pairingRegisterFieldLabel: 'Ton nom de couplage',
      pairingRegisterBtn: 'Enregistrer le couplage',
      pairingRegisterPlaceholder: 'xxxx',
      pairingRegisterInvalid: 'Utilise .nom (ex. .sven). Autorisé : lettres, chiffres, _ -',
      pairingRegisterNeedApi: 'Clé API requise — active le mode API et la licence.',
      pairingRegisterOk: 'Couplage enregistré.',
      pairingRegisterError: 'Enregistrement impossible.',
      pairingRegisterTaken: 'Ce nom est déjà pris.',
      pairingRegisterFullOnly: 'Le pseudo de couplage est réservé à la licence complète (pas l’essai).',
      pairingFullLicenseModalTitle: 'Licence complète requise',
      pairingFullLicenseModalBody: 'Le pseudo de couplage n’est disponible qu’avec une licence complète. Achète une licence complète pour débloquer cette fonction.',
      pairingFullLicenseModalClose: 'Fermer',
      pairingRegisterLockAriaLabel: 'Verrouillé — licence complète requise pour le couplage',
      settingsTitle: 'Paramètres',
      settingsSoundOn: 'Son (SFX)',
      settingsSfxVolume: 'Volume SFX',
      settingsMusicVolume: 'Volume musique',
      settingsLqMode: 'Mode LQ (plus léger : pas de SFX flap, puffs, confettis)',
      settingsClose: 'Fermer',
      secretSettingsClose: 'Fermer et enregistrer',
      secretCloseSaveHint: 'Vos réglages sont enregistrés à la fermeture de ce menu.',
      secretTitle: 'Modes secrets',
      secretLicenseLabel: 'Licence (modes secrets):',
      secretLicensePlaceholder: 'Clé',
      secretActivate: 'Activer',
      secretLicenseRequired: 'Licence requise. Entrez une clé valide ci-dessus.',
      secretCurrentKeyLabel: 'Clé:',
      registerKeyTitle: 'Enregistrer ta clé (nom et e-mail)',
      registerNameLabel: 'Nom:',
      registerEmailLabel: 'E-mail:',
      registerNamePlaceholder: 'Ton nom',
      registerEmailPlaceholder: 'toi@email.fr',
      resetDeviceEmailPlaceholder: 'toi@email.fr',
      licenseStatusActivated: 'Activé',
      licenseStatusNotActivated: 'Non activé',
      licenseStatusSpectator: 'Spectateur (API hôte)',
      licenseStatusDev: 'Activé (dev)',
      licenseEnterKey: 'Entre une clé.',
      licenseChecking: 'Vérification…',
      licenseInvalid: 'Licence invalide',
      licenseApiUnreachable: 'Impossible de joindre l’API licence. Essaie /api/ping sur ton domaine.',
      registerNameEmailRequired: 'Renseigne nom et e-mail.',
      registerBusy: '…',
      registerApiHint: ' Vérifie que /api/ fonctionne sur ton hébergement.',
      resetBusy: '…',
      apiModeSectionHeading: 'Mode API',
      apiModeCheckboxLabel: 'Mode API activé (lecture/écriture en direct)',
      apiKeyRowLabel: 'Ta clé API (liée à la licence)',
      spectatorModeSectionHeading: 'Mode spectateur',
      spectatorModeHint: 'Un autre téléphone peut ouvrir le lien ci-dessous — pas de licence nécessaire. L’app charge ta session depuis le serveur.',
      registerKeyBtn: 'Enregistrer',
      registerSuccess: 'Enregistré.',
      registerError: 'Enregistrement échoué.',
      resetDeviceTitle: 'Relier cet appareil',
      resetDeviceHelp: 'Entre ta clé ci-dessus et la même adresse e-mail qu’à l’enregistrement. Touche Réinitialiser l’appareil, puis Activer.',
      resetDeviceEmailLabel: 'E-mail (comme à l’enregistrement):',
      resetDeviceBtn: 'Réinitialiser l’appareil',
      resetDeviceSuccess: 'OK. Touche maintenant Activer.',
      resetDeviceErrorInvalid: 'Clé ou e-mail invalide.',
      resetDeviceErrorNoReg: 'Aucun e-mail d’enregistrement pour cette clé. Écris à help@premiummagic.nl.',
      resetDeviceFooter: 'Tu n’as plus cet e-mail ? Écris à',
      licenseAlreadyUsed: 'Clé déjà liée. Utilise Réinitialiser l’appareil ci-dessous avec ton e-mail d’enregistrement.',
      licenseTrialExpired: 'Cette clé d’essai a expiré.',
      gracePurchaseTitle: 'Période d’essai terminée',
      gracePurchaseBody: 'Tes 5 jours de version active après activation sont écoulés. Sky Hopper se vend uniquement sur Premium Magic — la boutique officielle.',
      gracePurchaseButton: 'Acheter sur Premium Magic',
      gracePurchaseClose: 'Fermer',
      licenseBuyKeyLink: 'Acheter une clé de licence',
      resetDeviceMissing: 'Entre la clé et l’e-mail.',
      secretModeLabel: 'Mode:',
      secretModeNone: 'Aucun (défaut)',
      secretModeForcing: 'Forcing',
      secretModeMultiple: 'Multiple force',
      secretModeLeaderboardForce: 'Leaderboard force',
      forcedLeaderboardRankLabel: 'Terminer au rang :',
      forcedLbAboveGroup: 'Noms au-dessus (le plus proche en premier)',
      forcedLbBelowGroup: 'Noms en dessous (le plus proche en premier)',
      forcedLbNeighborNamePlaceholder: 'Nom',
      secretScoreTimePerRun: 'Score + temps (sec) par run:',
      secretPerRunLabel: 'fois:',
      secretAdd: 'Ajouter',
      secretForcedScore: 'Score forcé:',
      secretForcedTime: 'Temps forcé (sec):',
      secretDelay: 'Délai (reprises):',
      secretAfter: 'Après:',
      secretAfterOff: 'Désactiver',
      secretAfterRepeat: 'Répéter',
      secretAfterNext: 'Passer au mode',
      secretAfterModeLabel: 'Mode suivant',
      secretScore: 'Score:',
      secretTime: 'Temps:',
      gameOverTitle: 'Game Over',
      gameOverTime: 'Temps:',
      gameOverRestartIn: 'Dans',
      gameOverRestartSuffix: ' sec...',
      gameOverRestart: 'Rejouer',
      gameOverMenu: 'Menu',
      menuLanguage: 'Langue',
      pauseTitle: 'Pause',
      pauseResume: 'Retour au jeu',
      secondChanceTitle: 'Seconde chance',
      secondChanceMessage: 'Tu étais en fait éliminé...',
      secondChanceContinue: 'Continuer',
      leaderboardTitle: 'Classement',
      leaderboardYourRank: 'Ton rang : #{rank}',
      leaderboardBack: 'Retour',
      leaderboardShow: 'Voir le classement',
      leaderboardTopScores: 'Meilleurs scores',
      ordinals: ['1ère', '2e', '3e', '4e', '5e', '6e', '7e', '8e', '9e', '10e', '11e', '12e', '13e', '14e', '15e', '16e', '17e', '18e', '19e', '20e'],
      secretTutorialTitle: 'Modes secrets – explication',
      secretTutorialBtn: 'TUTORIAL',
      secretTutorialClose: 'Compris',
      secretClearCache: 'Rechargement forcé',
      secretClearCacheHint: 'Recharge avec une nouvelle URL pour retélécharger HTML, JS et CSS.',
      secretTutorialBody: 'Bienvenue ! Voici le guide avec des titres.\n\n{{H:Logo}}\n\nAprès avoir choisi un mode secret (pas « Aucun »), tape sur le logo pour activer ou désactiver. Activé = le mode est prêt ; désactivé = jeu normal.\n\n{{IMG:tutorial-logo-gear.png}}\n\n{{H:Roue dentée (réglages)}}\n\nUn tap = réglages normaux. Double tap = ce menu secret.\n\n{{H:Indicateurs}}\n\n• En jeu : en haut à gauche, un point coloré = mode choisi.\n• Jaune et blanc = Forcing (jaune = pas encore actif, blanc = manche Forcing active).\n• Vert = Multiple force.\n• Violet = Leaderboard force.\n• Menu / pause : bandeau coloré en bas ; même sens des couleurs.\n\n{{IMG:tutorial-mode-indicators.png}}\n\n{{H:Forcing — seconde chance et tuyau de force}}\n\nEn manche active tu peux encore toucher un tuyau. Avant le score cible : seconde chance au lieu du game over direct. Après le score cible : gravité renforcée au tuyau de force étroit.\n\n{{H:Mode : Aucun (normal)}}\n\nJeu normal. Choisis « Aucun » ou désactive le logo.\n\n{{H:Mode : Forcing}}\n\nUn score cible et une limite de temps. Score, temps, délai optionnel. « Après » = répéter ou changer de mode.\n\n{{H:Mode : Multiple force}}\n\nPlusieurs tours d\'affilée, chacun avec score et temps. « Après » gère la fin de la liste.\n\n{{H:Mode : Leaderboard force}}\n\nLe jeu se termine comme si tu avais un certain rang. Tu règles ce rang.\n\n{{H:Leaderboard force — noms autour de toi (effet Rainman)}}\n\nEn plus du rang, tu peux saisir trois noms au-dessus de toi et trois en dessous (le plus proche en premier). Les scores affichés sont calés sur ton score final pour que le classement paraisse cohérent — un effet « Rainman » : on croit voir ces personnes juste autour de toi. Remplis les champs dans ce menu, active le mode avec le logo, joue jusqu\'au game over puis ouvre le classement. • Idée : Saad Jennane.\n\n{{H:Après (répéter / mode suivant)}}\n\nCe qui se passe après une manche forcée.\n\n{{H:Mode API}}\n\nActive-le ici. Ton appareil envoie l\'état en direct. Chaque clé API à 5 chiffres a sa propre session — PeekSmith ne voit que la clé dans l\'URL.\n\nExemples d\'URL (CCvzDfV4n3pA.com et ta clé API à 5 chiffres sont remplis automatiquement) :\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/peek?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/line?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/score?apiKey={{TUTORIAL_API_KEY}}}}\n\nJSON :\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/state?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{H:Lien spectateur (pas de licence sur ce téléphone)}}\n\nÀ partager : jouer avec ta config de forcing depuis le serveur, sans activer de licence :\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/?k={{TUTORIAL_API_KEY}}}}\n\nAprès une partie forcée en spectateur : environ 60 minutes de cooldown en jeu normal.\n\n{{H:Sur le téléphone du spectateur}}\n\nIl ouvre le lien partagé — pas de licence. L\'app lit la clé à 5 chiffres dans l\'URL et active le mode API automatiquement. Les règles de forcing (mode, scores, temps, etc.) viennent du serveur pour cette clé — la session de l\'hôte, pas ce qui est stocké sur le téléphone du spectateur.\n\nLe spectateur ne peut pas modifier les modes secrets : le logo ne fait rien, et la roue dentée n\'ouvre que les réglages normaux (son, musique, LQ). Un double tap n\'ouvre pas ce menu secret — la config serveur commande.\n\nScore et état partent toujours vers la même session API pour que PeekSmith suive.\n\n{{H:Conseils}}\n\nPeekSmith : préfère les URL texte brut (peek/peeksmith) au JSON brut. Sur certains hébergeurs, exclure /api/ du cache.'
    },
    pt: {
      menuCharacterSelection: 'Seleção de personagem',
      menuPlayerName: 'APELIDO',
      menuPlayerNamePlaceholder: 'Para o ranking — use .nome para entrar na sessão do host',
      leaderboardDefaultName: 'Jogador',
      menuPlay: 'Jogar',
      pairingResolveFailed: 'Não foi possível parear. Verifique o apelido ou registro do host.',
      pairingSectionHeading: 'Apelido de pareamento',
      pairingSectionHint: 'Registre um nome único aqui (começa com .). Os convidados inserem o mesmo em Apelido no site normal (sem /?k=) — o ponto é removido quando vinculado; eles podem editar o nome livremente depois (nome no ranking).',
      pairingRegisterFieldLabel: 'Seu apelido de pareamento',
      pairingRegisterBtn: 'Salvar pareamento',
      pairingRegisterPlaceholder: 'xxxx',
      pairingRegisterInvalid: 'Use .nome (ex: .sven). Permitido: letras, números, _ -',
      pairingRegisterNeedApi: 'Você precisa da chave API primeiro — ative o modo API e a licença.',
      pairingRegisterOk: 'Pareamento salvo.',
      pairingRegisterError: 'Não foi possível salvar.',
      pairingRegisterTaken: 'Esse nome já está em uso.',
      pairingRegisterFullOnly: 'O apelido de pareamento só está disponível com licença completa (não trial).',
      pairingFullLicenseModalTitle: 'Licença completa necessária',
      pairingFullLicenseModalBody: 'O apelido de pareamento só está disponível com licença completa. Compre uma licença completa para desbloquear este recurso.',
      pairingFullLicenseModalClose: 'Fechar',
      pairingRegisterLockAriaLabel: 'Bloqueado — licença completa necessária para pareamento',
      settingsTitle: 'Configurações',
      settingsSoundOn: 'Som (SFX)',
      settingsSfxVolume: 'Volume SFX',
      settingsMusicVolume: 'Volume música',
      settingsLqMode: 'Modo LQ (mais leve: sem SFX de batida, efeitos puff, confete)',
      settingsClose: 'Fechar',
      secretSettingsClose: 'Fechar e salvar',
      secretCloseSaveHint: 'Suas configurações são salvas quando você fecha este menu.',
      secretTitle: 'Modos secretos',
      secretLicenseLabel: 'Licença (modos secretos):',
      secretLicensePlaceholder: 'Chave',
      secretActivate: 'Ativar',
      secretLicenseRequired: 'Licença necessária. Digite uma chave válida acima.',
      secretCurrentKeyLabel: 'Chave:',
      registerKeyTitle: 'Registre sua chave (nome e email)',
      registerNameLabel: 'Nome:',
      registerEmailLabel: 'Email:',
      registerNamePlaceholder: 'Seu nome',
      registerEmailPlaceholder: 'voce@email.com',
      resetDeviceEmailPlaceholder: 'voce@email.com',
      licenseStatusActivated: 'Ativada',
      licenseStatusNotActivated: 'Não ativada',
      licenseStatusSpectator: 'Espectador (API do host)',
      licenseStatusDev: 'Ativada (dev)',
      licenseEnterKey: 'Digite uma chave.',
      licenseChecking: 'Verificando…',
      licenseInvalid: 'Licença inválida',
      licenseApiUnreachable: 'Não foi possível acessar a API de licença. Tente /api/ping no seu domínio.',
      registerNameEmailRequired: 'Digite nome e email.',
      registerBusy: '…',
      registerApiHint: ' Verifique se /api/ funciona no seu host.',
      resetBusy: '…',
      apiModeSectionHeading: 'Modo API',
      apiModeCheckboxLabel: 'Modo API ativado (leitura/escrita ao vivo)',
      apiKeyRowLabel: 'Sua chave API (vinculada à licença)',
      spectatorModeSectionHeading: 'Modo espectador',
      spectatorModeHint: 'Outro celular pode abrir o link abaixo — nenhuma licença necessária lá. O app carrega sua sessão do servidor.',
      registerKeyBtn: 'Registrar',
      registerSuccess: 'Registrado.',
      registerError: 'Não foi possível registrar.',
      resetDeviceTitle: 'Vincular este dispositivo novamente',
      resetDeviceHelp: 'Digite sua chave de licença acima e o mesmo email que você usou ao registrar. Toque em Redefinir dispositivo e depois em Ativar.',
      resetDeviceEmailLabel: 'Email (como registrado):',
      resetDeviceBtn: 'Redefinir dispositivo',
      resetDeviceSuccess: 'Pronto. Agora toque em Ativar.',
      resetDeviceErrorInvalid: 'Chave ou email inválidos.',
      resetDeviceErrorNoReg: 'Nenhum email de registro para esta chave. Envie um email para help@premiummagic.nl.',
      resetDeviceFooter: 'Perdeu esse email? Escreva para',
      licenseAlreadyUsed: 'Chave já vinculada em outro lugar. Use Redefinir dispositivo abaixo com seu email de registro.',
      licenseTrialExpired: 'Esta chave de trial expirou.',
      gracePurchaseTitle: 'Período de trial encerrado',
      gracePurchaseBody: 'Seu período ativo de 5 dias após a ativação terminou. Sky Hopper só é vendido na Premium Magic — a loja oficial.',
      gracePurchaseButton: 'Comprar na Premium Magic',
      gracePurchaseClose: 'Fechar',
      licenseBuyKeyLink: 'Comprar uma chave de licença',
      resetDeviceMissing: 'Digite sua chave e email.',
      secretModeLabel: 'Modo:',
      secretModeNone: 'Nenhum (padrão)',
      secretModeForcing: 'Forcing',
      secretModeMultiple: 'Multiple force',
      secretModeLeaderboardForce: 'Leaderboard force',
      forcedLeaderboardRankLabel: 'Terminar no rank:',
      forcedLbAboveGroup: 'Nomes acima (mais próximos primeiro)',
      forcedLbBelowGroup: 'Nomes abaixo (mais próximos primeiro)',
      forcedLbNeighborNamePlaceholder: 'Nome',
      secretScoreTimePerRun: 'Pontuação + tempo (seg) por rodada:',
      secretPerRunLabel: 'tempo:',
      secretAdd: 'Adicionar',
      secretForcedScore: 'Pontuação forçada:',
      secretForcedTime: 'Tempo forçado (seg):',
      secretDelay: 'Atraso (replays):',
      secretAfter: 'Depois:',
      secretAfterOff: 'Desligar',
      secretAfterRepeat: 'Repetir',
      secretAfterNext: 'Ir para modo',
      secretAfterModeLabel: 'Próximo modo',
      secretScore: 'Pontuação:',
      secretTime: 'Tempo:',
      gameOverTitle: 'Game Over',
      gameOverTime: 'Tempo:',
      gameOverRestartIn: 'Em',
      gameOverRestartSuffix: ' seg...',
      gameOverRestart: 'Jogar novamente',
      gameOverMenu: 'Menu',
      menuLanguage: 'Idioma',
      pauseTitle: 'Pausado',
      pauseResume: 'Voltar ao jogo',
      secondChanceTitle: 'Segunda chance',
      secondChanceMessage: 'Você estava realmente fora...',
      secondChanceContinue: 'Continuar',
      leaderboardTitle: 'Ranking',
      leaderboardYourRank: 'Seu rank: #{rank}',
      leaderboardBack: 'Voltar',
      leaderboardShow: 'Ver ranking',
      leaderboardTopScores: 'Melhores pontuações',
      ordinals: ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º', '11º', '12º', '13º', '14º', '15º', '16º', '17º', '18º', '19º', '20º'],
      secretTutorialTitle: 'Modos secretos – como funciona',
      secretTutorialBtn: 'TUTORIAL',
      secretTutorialClose: 'Entendi',
      secretClearCache: 'Recarga forçada',
      secretClearCacheHint: 'Recarrega com uma URL nova para que o navegador busque HTML, JS e CSS novamente.',
      secretTutorialBody: 'Bem-vindo! Aqui está como tudo funciona, passo a passo.\n\n{{H:Logo}}\n\nDepois de escolher um modo secreto neste menu (não "Nenhum"), toque no logo do Sky Hopper para ativar ou desativar esse modo. Quando ativado, o modo está armado; quando desativado, você joga um jogo normal.\n\n{{IMG:tutorial-logo-gear.png}}\n\n{{H:Engrenagem (configurações)}}\n\nUm toque = configurações normais (som, LQ). Duplo toque rápido = este menu secreto.\n\n{{H:Indicadores}}\n\n• Em jogo: um pequeno ponto colorido no canto superior esquerdo. A cor corresponde ao modo que você selecionou.\n• Amarelo e branco = Forcing (amarelo = ainda não na fase de forcing ativa, branco = rodada de forcing ativa).\n• Verde = Multiple force.\n• Roxo = Leaderboard force.\n• No menu ou pausa: uma faixa colorida na parte inferior; mesmo significado de cor.\n\n{{IMG:tutorial-mode-indicators.png}}\n\n{{H:Forcing — segunda chance e tubo de força}}\n\nDurante uma rodada de forcing ativa, você ainda pode bater em um cano. Antes de sua pontuação alvo, isso não é game over instantâneo — você recebe uma segunda chance. Depois de atingir o alvo, gravidade extra se aplica ao redor do tubo de força estreito especial para terminar a rodada.\n\n{{H:Modo: Nenhum (normal)}}\n\nJogo normal estilo Flappy. Sem regras secretas. Escolha "Nenhum" no topo ou desative o logo.\n\n{{H:Modo: Forcing}}\n\nUma pontuação alvo e limite de tempo. Defina pontuação forçada, tempo (segundos), atraso opcional (rodadas de aquecimento antes da fase de forcing ativa). Use "Depois" para repetir ou mudar para outro modo quando terminar.\n\n{{H:Modo: Multiple force}}\n\nVárias rodadas seguidas. Cada linha tem sua própria pontuação e tempo. Quando a lista termina, "Depois" decide o que acontece a seguir.\n\n{{H:Modo: Leaderboard force}}\n\nO jogo termina para parecer que você se colocou em um certo rank no ranking. Você define o rank a mostrar.\n\n{{H:Leaderboard force — nomes ao seu redor (efeito Rainman)}}\n\nAlém de forçar seu apelido para esse rank, você pode inserir nomes personalizados para as três linhas acima e três abaixo de você (mais próximas primeiro). As pontuações mostradas ao lado desses nomes são escalonadas a partir de sua pontuação final para que a ordem pareça credível — um momento "Rainman": parece que essas pessoas exatas estão ao seu lado no ranking. Neste menu, preencha "Nomes acima" e "Nomes abaixo", ative o modo com o logo, jogue até o game over e abra o ranking. • Ideia: Saad Jennane.\n\n{{H:Depois (repetir / próximo)}}\n\nO que acontece após uma rodada forçada: desligar, repetir o mesmo modo ou pular para outro modo secreto.\n\n{{H:Modo API}}\n\nAtive neste menu. Seu dispositivo envia pontuação e estado ao vivo para o servidor. Cada chave API de 5 dígitos tem sua própria sessão — PeekSmith e outras ferramentas só veem dados da chave na URL.\n\nURLs de exemplo para PeekSmith ou teste (CCvzDfV4n3pA.com e sua chave API de 5 dígitos são preenchidas automaticamente):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/peek?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/line?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/score?apiKey={{TUTORIAL_API_KEY}}}}\n\nJSON (estado completo):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/state?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{H:Link de espectador (sem licença naquele telefone)}}\n\nCompartilhe isso para que alguém possa jogar com sua configuração de forcing do servidor, sem ativar uma licença no dispositivo deles:\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/?k={{TUTORIAL_API_KEY}}}}\n\nDepois de um jogo forçado como espectador, esse link tem um cooldown (cerca de 60 minutos de jogo normal) antes de o forcing se aplicar novamente.\n\n{{H:No telefone do espectador}}\n\nEles abrem o link compartilhado — sem licença. O app lê a chave de 5 dígitos da URL e ativa o modo API automaticamente. As regras de forcing (modo, pontuações, tempos, etc.) são buscadas do servidor para essa chave; eles seguem a sessão do host, não nada salvo no telefone do espectador.\n\nO espectador não pode mudar modos secretos: tocar no logo não faz nada, e a engrenagem só abre configurações normais (som, música, LQ). Um duplo toque não abre o menu secreto — a configuração do servidor fica no comando.\n\nPontuação e estado ainda são enviados para a mesma sessão API para que PeekSmith possa acompanhar.\n\n{{H:Dicas}}\n\nSe PeekSmith não atualizar, tente URLs em texto simples (peek / peeksmith) em vez de JSON bruto. Em alguns hosts, exclua /api/ do cache no painel de hospedagem.'
    },
    es: {
      menuCharacterSelection: 'Selección de personaje',
      menuPlayerName: 'NICKNAME',
      menuPlayerNamePlaceholder: 'Para la clasificación — .nombre para unirte al anfitrión',
      leaderboardDefaultName: 'Jugador',
      menuPlay: 'Jugar',
      pairingResolveFailed: 'No se pudo enlazar. Revisa el nombre o el registro del anfitrión.',
      pairingSectionHeading: 'Apodo de emparejamiento',
      pairingSectionHint: 'Registra aquí un nombre único (empieza por .). Los invitados escriben el mismo en Apodo en el sitio normal (sin /?k=) — el punto desaparece al enlazar; luego puedes editar el nombre (ranking).',
      pairingRegisterFieldLabel: 'Tu nombre de emparejamiento',
      pairingRegisterBtn: 'Guardar emparejamiento',
      pairingRegisterPlaceholder: 'xxxx',
      pairingRegisterInvalid: 'Usa .nombre (ej. .sven). Permitido: letras, números, _ -',
      pairingRegisterNeedApi: 'Necesitas la clave API — activa el modo API y la licencia.',
      pairingRegisterOk: 'Emparejamiento guardado.',
      pairingRegisterError: 'No se pudo guardar.',
      pairingRegisterTaken: 'Ese nombre ya está en uso.',
      pairingRegisterFullOnly: 'El apodo de emparejamiento solo está disponible con licencia completa (no prueba).',
      pairingFullLicenseModalTitle: 'Se necesita licencia completa',
      pairingFullLicenseModalBody: 'El apodo de emparejamiento solo está disponible con licencia completa. Compra una licencia completa para usar esta función.',
      pairingFullLicenseModalClose: 'Cerrar',
      pairingRegisterLockAriaLabel: 'Bloqueado — se requiere licencia completa para el emparejamiento',
      settingsTitle: 'Ajustes',
      settingsSoundOn: 'Sonido (SFX)',
      settingsSfxVolume: 'Volumen SFX',
      settingsMusicVolume: 'Volumen música',
      settingsLqMode: 'Modo LQ (más ligero: sin SFX de flap, puffs, confeti)',
      settingsClose: 'Cerrar',
      secretSettingsClose: 'Cerrar y guardar',
      secretCloseSaveHint: 'Tu configuración se guarda al cerrar este menú.',
      secretTitle: 'Modos secretos',
      secretLicenseLabel: 'Licencia (modos secretos):',
      secretLicensePlaceholder: 'Clave',
      secretActivate: 'Activar',
      secretLicenseRequired: 'Licencia requerida. Introduce una clave válida arriba.',
      secretCurrentKeyLabel: 'Clave:',
      registerKeyTitle: 'Registra tu clave (nombre y correo)',
      registerNameLabel: 'Nombre:',
      registerEmailLabel: 'Correo:',
      registerNamePlaceholder: 'Tu nombre',
      registerEmailPlaceholder: 'tu@email.com',
      resetDeviceEmailPlaceholder: 'tu@email.com',
      licenseStatusActivated: 'Activada',
      licenseStatusNotActivated: 'No activada',
      licenseStatusSpectator: 'Espectador (API del anfitrión)',
      licenseStatusDev: 'Activada (dev)',
      licenseEnterKey: 'Introduce una clave.',
      licenseChecking: 'Comprobando…',
      licenseInvalid: 'Licencia no válida',
      licenseApiUnreachable: 'No hay conexión con la API de licencias. Prueba /api/ping en tu dominio.',
      registerNameEmailRequired: 'Introduce nombre y correo.',
      registerBusy: '…',
      registerApiHint: ' Comprueba que /api/ funciona en tu hosting.',
      resetBusy: '…',
      apiModeSectionHeading: 'Modo API',
      apiModeCheckboxLabel: 'Modo API activado (lectura/escritura en vivo)',
      apiKeyRowLabel: 'Tu clave API (vinculada a la licencia)',
      spectatorModeSectionHeading: 'Modo espectador',
      spectatorModeHint: 'Otro móvil puede abrir el enlace de abajo — no hace falta licencia allí. La app carga tu sesión del servidor.',
      registerKeyBtn: 'Registrar',
      registerSuccess: 'Registrado.',
      registerError: 'Error al registrar.',
      resetDeviceTitle: 'Volver a vincular el dispositivo',
      resetDeviceHelp: 'Introduce arriba tu clave y el mismo correo que al registrar. Toca Restablecer dispositivo y luego Activar.',
      resetDeviceEmailLabel: 'Correo (como al registrar):',
      resetDeviceBtn: 'Restablecer dispositivo',
      resetDeviceSuccess: 'Listo. Ahora toca Activar.',
      resetDeviceErrorInvalid: 'Clave o correo no válidos.',
      resetDeviceErrorNoReg: 'No hay correo de registro para esta clave. Escribe a help@premiummagic.nl.',
      resetDeviceFooter: '¿Sin ese correo? Escribe a',
      licenseAlreadyUsed: 'Clave ya vinculada. Usa Restablecer dispositivo abajo con tu correo de registro.',
      licenseTrialExpired: 'Esta clave de prueba ha caducado.',
      gracePurchaseTitle: 'Periodo de prueba terminado',
      gracePurchaseBody: 'Tus 5 días de versión activa tras activar han terminado. Sky Hopper solo se vende en Premium Magic — la tienda oficial.',
      gracePurchaseButton: 'Comprar en Premium Magic',
      gracePurchaseClose: 'Cerrar',
      licenseBuyKeyLink: 'Comprar clave de licencia',
      resetDeviceMissing: 'Introduce clave y correo.',
      secretModeLabel: 'Modo:',
      secretModeNone: 'Ninguno (por defecto)',
      secretModeForcing: 'Forcing',
      secretModeMultiple: 'Multiple force',
      secretModeLeaderboardForce: 'Leaderboard force',
      forcedLeaderboardRankLabel: 'Terminar en puesto:',
      forcedLbAboveGroup: 'Nombres arriba (el más cercano primero)',
      forcedLbBelowGroup: 'Nombres abajo (el más cercano primero)',
      forcedLbNeighborNamePlaceholder: 'Nombre',
      secretScoreTimePerRun: 'Puntuación + tiempo (seg) por partida:',
      secretPerRunLabel: 'vez:',
      secretAdd: 'Añadir',
      secretForcedScore: 'Puntuación forzada:',
      secretForcedTime: 'Tiempo forzado (seg):',
      secretDelay: 'Retraso (repeticiones):',
      secretAfter: 'Después:',
      secretAfterOff: 'Apagar',
      secretAfterRepeat: 'Repetir',
      secretAfterNext: 'Ir a modo',
      secretAfterModeLabel: 'Modo siguiente',
      secretScore: 'Puntuación:',
      secretTime: 'Tiempo:',
      gameOverTitle: 'Game Over',
      gameOverTime: 'Tiempo:',
      gameOverRestartIn: 'En',
      gameOverRestartSuffix: ' seg...',
      gameOverRestart: 'Jugar de nuevo',
      gameOverMenu: 'Menú',
      menuLanguage: 'Idioma',
      pauseTitle: 'Pausa',
      pauseResume: 'Volver al juego',
      secondChanceTitle: 'Segunda oportunidad',
      secondChanceMessage: 'En realidad habías perdido...',
      secondChanceContinue: 'Continuar',
      leaderboardTitle: 'Clasificación',
      leaderboardYourRank: 'Tu puesto: #{rank}',
      leaderboardBack: 'Atrás',
      leaderboardShow: 'Ver clasificación',
      leaderboardTopScores: 'Mejores puntuaciones',
      ordinals: ['1.ª', '2.ª', '3.ª', '4.ª', '5.ª', '6.ª', '7.ª', '8.ª', '9.ª', '10.ª', '11.ª', '12.ª', '13.ª', '14.ª', '15.ª', '16.ª', '17.ª', '18.ª', '19.ª', '20.ª'],
      secretTutorialTitle: 'Modos secretos – guía',
      secretTutorialBtn: 'TUTORIAL',
      secretTutorialClose: 'Entendido',
      secretClearCache: 'Recarga forzada',
      secretClearCacheHint: 'Recarga con URL nueva para volver a obtener HTML, JS y CSS.',
      secretTutorialBody: '¡Bienvenido! Guía con apartados.\n\n{{H:Logo}}\n\nSi eliges un modo secreto (no « Ninguno »), toca el logo para activarlo o desactivarlo. Activado = listo; desactivado = juego normal.\n\n{{IMG:tutorial-logo-gear.png}}\n\n{{H:Engranaje (ajustes)}}\n\nUn toque = ajustes normales. Doble toque = este menú secreto.\n\n{{H:Indicadores}}\n\n• En juego: arriba a la izquierda, punto de color = modo elegido.\n• Amarillo y blanco = Forcing (amarillo = aún no activo, blanco = ronda Forcing activa).\n• Verde = Multiple force.\n• Morado = Leaderboard force.\n• Menú / pausa: franja inferior; mismo significado del color.\n\n{{IMG:tutorial-mode-indicators.png}}\n\n{{H:Forcing — segunda oportunidad y tubo de fuerza}}\n\nEn ronda activa aún puedes chocar. Antes del objetivo: segunda oportunidad. Después: gravedad extra en el tubo estrecho.\n\n{{H:Modo: Ninguno (normal)}}\n\nJuego normal. Elige « Ninguno » o desactiva el logo.\n\n{{H:Modo: Forcing}}\n\nUna puntuación objetivo y límite de tiempo. Puntuación, tiempo, retraso opcional. « Después » = repetir o cambiar de modo.\n\n{{H:Modo: Multiple force}}\n\nVarias rondas seguidas, cada una con puntuación y tiempo. « Después » al terminar la lista.\n\n{{H:Modo: Leaderboard force}}\n\nEl juego termina como si tuvieras un puesto en el ranking. Tú eliges el puesto.\n\n{{H:Leaderboard force — nombres a tu alrededor (efecto Rainman)}}\n\nAdemás puedes escribir tres nombres por encima y tres por debajo de tu fila (el más cercano primero). Las puntuaciones se ajustan a tu resultado final para que el orden sea creíble — un efecto « Rainman »: parece que esas personas están justo junto a ti en la tabla. Rellena los campos en este menú, activa el modo con el logo, juega hasta el game over y abre el ranking. • Idea: Saad Jennane.\n\n{{H:Después (repetir / siguiente modo)}}\n\nQué pasa tras una ronda forzada.\n\n{{H:Modo API}}\n\nActívalo aquí. Tu dispositivo envía estado en vivo. Cada clave API de 5 dígitos tiene su propia sesión — PeekSmith solo ve la clave de la URL.\n\nEjemplos de URL (CCvzDfV4n3pA.com y tu clave API de 5 dígitos se rellenan solas):\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/peek?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/line?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/peeksmith/score?apiKey={{TUTORIAL_API_KEY}}}}\n\nJSON:\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/api/session/state?apiKey={{TUTORIAL_API_KEY}}}}\n\n{{H:Enlace espectador (sin licencia en ese móvil)}}\n\nPara compartir: juegan con tu config de forcing desde el servidor, sin activar licencia:\n\n{{CODE:{{TUTORIAL_API_ORIGIN}}/?k={{TUTORIAL_API_KEY}}}}\n\nTras una partida forzada como espectador: unos 60 minutos de cooldown en modo normal.\n\n{{H:En el móvil del espectador}}\n\nAbre el enlace compartido — sin licencia. La app lee la clave de 5 dígitos en la URL y activa el modo API automáticamente. Las reglas de forcing (modo, puntuaciones, tiempos, etc.) las trae el servidor para esa clave — la sesión del presentador, no lo guardado en el móvil del espectador.\n\nEl espectador no puede cambiar los modos secretos: el logo no hace nada, y el engranaje solo abre ajustes normales (sonido, música, LQ). El doble toque no abre el menú secreto — manda la config del servidor.\n\nLa puntuación y el estado siguen yendo a la misma sesión API para que PeekSmith pueda seguir.\n\n{{H:Consejos}}\n\nPeekSmith: mejor URL de texto plano (peek/peeksmith) que JSON crudo. En algunos hosts, excluye /api/ de la caché.'
    }
  };

  var currentLang = 'en';
  try {
    var saved = localStorage.getItem('skyHopperLang');
    if (saved && TRANSLATIONS[saved]) currentLang = saved;
  } catch (e) {}

  function t(key) {
    var tr = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    return tr[key] != null ? tr[key] : (TRANSLATIONS.en[key] || key);
  }

  function ordinal(i) {
    var arr = (TRANSLATIONS[currentLang] || TRANSLATIONS.en).ordinals;
    return (arr && arr[i]) ? arr[i] : (i + 1) + '.';
  }

  var CACHE_BUST_PARAM = '_skyhop';

  function maybeStripCacheBustParam() {
    if (typeof location === 'undefined' || !location.search) return;
    var params = new URLSearchParams(location.search);
    if (!params.has(CACHE_BUST_PARAM)) return;
    params.delete(CACHE_BUST_PARAM);
    var qs = params.toString();
    var newUrl = location.pathname + (qs ? '?' + qs : '') + location.hash;
    try {
      history.replaceState(null, '', newUrl);
    } catch (e) {}
  }

  function clearCacheAndReload() {
    var params = new URLSearchParams(location.search);
    params.set(CACHE_BUST_PARAM, String(Date.now()));
    location.href = location.pathname + '?' + params.toString() + location.hash;
  }

  function applyUITranslations() {
    try {
      document.documentElement.lang = currentLang === 'en' ? 'en' : currentLang === 'de' ? 'de' : currentLang === 'fr' ? 'fr' : currentLang === 'es' ? 'es' : 'nl';
      var el;
      if (el = getEl('menuCharacterSelection')) el.textContent = t('menuCharacterSelection');
      if (el = getEl('playerNameLabel')) el.textContent = t('menuPlayerName');
      if (el = getEl('playerNameInput')) el.placeholder = t('menuPlayerNamePlaceholder');
      if (el = getEl('menuPlay')) el.textContent = t('menuPlay');
      if (el = getEl('settingsTitle')) el.textContent = t('settingsTitle');
      if (el = getEl('settingsSoundOn')) el.textContent = t('settingsSoundOn');
      if (el = getEl('settingsSfxVolume')) el.textContent = t('settingsSfxVolume');
      if (el = getEl('settingsMusicVolume')) el.textContent = t('settingsMusicVolume');
      try {
        var lqLbls = document.querySelectorAll('.settings-lq-mode-label');
        for (var li = 0; li < lqLbls.length; li++) lqLbls[li].textContent = t('settingsLqMode');
      } catch (e) {}
      if (el = getEl('normalSettingsCloseBtn')) el.textContent = t('settingsClose');
      if (el = getEl('secretTitle')) el.textContent = t('secretTitle');
      if (el = getEl('secretLicenseLabel')) el.textContent = t('secretLicenseLabel');
      if (el = getEl('licenseInput')) el.placeholder = t('secretLicensePlaceholder');
      if (el = getEl('licenseActivateBtn')) el.textContent = t('secretActivate');
      if (el = getEl('licenseBuyKeyLink')) {
        el.textContent = t('licenseBuyKeyLink');
        el.href = getPurchaseUrl();
      }
      if (el = getEl('forcingLicenseRequired')) el.textContent = t('secretLicenseRequired');
      if (el = getEl('currentKeyLabel')) el.textContent = t('secretCurrentKeyLabel');
      if (el = getEl('registerKeyTitle')) el.textContent = t('registerKeyTitle');
      if (el = getEl('registerNameLabel')) el.textContent = t('registerNameLabel');
      if (el = getEl('registerEmailLabel')) el.textContent = t('registerEmailLabel');
      if (el = getEl('registerNameInput')) el.placeholder = t('registerNamePlaceholder');
      if (el = getEl('registerEmailInput')) el.placeholder = t('registerEmailPlaceholder');
      if (el = getEl('registerKeyBtn')) el.textContent = t('registerKeyBtn');
      if (el = getEl('resetDeviceTitle')) el.textContent = t('resetDeviceTitle');
      if (el = getEl('resetDeviceHelp')) el.textContent = t('resetDeviceHelp');
      if (el = getEl('resetDeviceEmailLabel')) el.textContent = t('resetDeviceEmailLabel');
      if (el = getEl('resetDeviceEmailInput')) el.placeholder = t('resetDeviceEmailPlaceholder');
      if (el = getEl('resetDeviceBtn')) el.textContent = t('resetDeviceBtn');
      if (el = getEl('resetDeviceFooterText')) el.textContent = t('resetDeviceFooter');
      if (el = getEl('secretModeLabel')) el.textContent = t('secretModeLabel');
      if (el = getEl('languagePopupTitle')) el.textContent = t('menuLanguage');
      if (el = getEl('languagePopupClose')) el.textContent = t('settingsClose');
      if (el = getEl('langTriggerBtnLabel')) el.textContent = t('menuLanguage');
      if (el = getEl('settingsBtnLabel')) el.textContent = t('settingsTitle');
      if (el = getEl('pauseTitle')) el.textContent = t('pauseTitle');
      if (el = getEl('pauseResumeBtn')) el.textContent = t('pauseResume');
      if (el = getEl('pauseMenuBtn')) el.textContent = t('gameOverMenu');
      if (el = getEl('pauseSettingsBtn')) el.innerHTML = '&#9881; ' + t('settingsTitle');
      if (el = getEl('pauseLangBtn')) { var em = FLAG_EMOJI[currentLang] || '🇬🇧'; el.innerHTML = em + ' ' + t('menuLanguage'); }
      if (el = getEl('gameModeSelect')) {
        var sel = getEl('gameModeSelect');
        if (sel && sel.options[0]) sel.options[0].textContent = t('secretModeNone');
        if (sel && sel.options[1]) sel.options[1].textContent = t('secretModeForcing');
        if (sel && sel.options[2]) sel.options[2].textContent = t('secretModeMultiple');
        if (sel && sel.options[3]) sel.options[3].textContent = t('secretModeLeaderboardForce');
      }
      if (el = getEl('forcedLeaderboardRankLabel')) el.textContent = t('forcedLeaderboardRankLabel');
      if (el = getEl('forcedLbAboveGroup')) el.textContent = t('forcedLbAboveGroup');
      if (el = getEl('forcedLbBelowGroup')) el.textContent = t('forcedLbBelowGroup');
      if (el = getEl('addLeaderboardForceNameAboveBtn')) el.textContent = '+' + t('secretAdd');
      if (el = getEl('addLeaderboardForceNameBelowBtn')) el.textContent = '+' + t('secretAdd');
      if (el = getEl('multipleForceTitle')) el.textContent = t('secretScoreTimePerRun');
      if (el = getEl('addMultipleForceBtn')) el.textContent = '+' + t('secretAdd');
      if (el = getEl('forcedScoreLabel')) el.textContent = t('secretForcedScore');
      if (el = getEl('forcedTimeLabel')) el.textContent = t('secretForcedTime');
      if (el = getEl('forcedDelayLabel')) el.textContent = t('secretDelay');
      if (el = getEl('secretAfterLabel')) el.textContent = t('secretAfter');
      if (el = getEl('forcingAfterModeLabel')) el.textContent = t('secretAfterModeLabel');
      var afterSel = getEl('forcingAfterSelect');
      if (afterSel && afterSel.options.length >= 3) {
        afterSel.options[0].textContent = t('secretAfterOff');
        afterSel.options[1].textContent = t('secretAfterRepeat');
        afterSel.options[2].textContent = t('secretAfterNext');
      }
      var afterModeSel = getEl('forcingAfterModeSelect');
      if (afterModeSel && afterModeSel.options.length >= 4) {
        afterModeSel.options[0].textContent = t('secretModeNone');
        afterModeSel.options[1].textContent = t('secretModeForcing');
        afterModeSel.options[2].textContent = t('secretModeMultiple');
        afterModeSel.options[3].textContent = t('secretModeLeaderboardForce');
      }
      if (el = getEl('clearCacheBtn')) el.textContent = t('secretClearCache');
      if (el = getEl('clearCacheHint')) el.textContent = t('secretClearCacheHint');
      if (el = getEl('secretCloseSaveHint')) el.textContent = t('secretCloseSaveHint');
      if (el = getEl('settingsCloseBtn')) el.textContent = t('secretSettingsClose');
      if (el = getEl('apiModeSectionHeading')) el.textContent = t('apiModeSectionHeading');
      if (el = getEl('apiModeCheckboxLabel')) el.textContent = t('apiModeCheckboxLabel');
      if (el = getEl('apiKeyRowLabel')) el.textContent = t('apiKeyRowLabel');
      if (el = getEl('spectatorModeSectionHeading')) el.textContent = t('spectatorModeSectionHeading');
      if (el = getEl('pairingSectionHeading')) el.textContent = t('pairingSectionHeading');
      if (el = getEl('pairingSectionHint')) el.textContent = t('pairingSectionHint');
      if (el = getEl('pairingRegisterFieldLabel')) el.textContent = t('pairingRegisterFieldLabel');
      if (el = getEl('pairingRegisterBtn')) el.textContent = t('pairingRegisterBtn');
      if (el = getEl('pairingRegisterInput')) el.placeholder = t('pairingRegisterPlaceholder');
      if (el = getEl('pairingFullLicenseTitle')) el.textContent = t('pairingFullLicenseModalTitle');
      if (el = getEl('pairingFullLicenseBody')) el.textContent = t('pairingFullLicenseModalBody');
      var pflLink = getEl('pairingFullLicenseLink');
      if (pflLink) {
        pflLink.href = getPurchaseUrl();
        pflLink.textContent = t('gracePurchaseButton');
      }
      if (el = getEl('pairingFullLicenseCloseBtn')) el.textContent = t('pairingFullLicenseModalClose');
      var lockPairBtn = getEl('pairingRegisterLockBtn');
      if (lockPairBtn) lockPairBtn.setAttribute('aria-label', t('pairingRegisterLockAriaLabel'));
      updateSpectatorModeSection();
      updatePairingRegisterVisibility();
      if (el = getEl('gameOverTitle')) el.textContent = t('gameOverTitle');
      if (el = getEl('gameOverTimeLabel')) el.textContent = t('gameOverTime');
      if (el = getEl('restartCountdownPrefix')) el.textContent = t('gameOverRestartIn') + ' ';
      if (el = getEl('restartCountdownSuffix')) el.textContent = ' ' + t('gameOverRestartSuffix');
      if (el = getEl('restartBtn')) el.textContent = t('gameOverRestart');
      if (el = getEl('leaderboardTitle')) el.textContent = t('leaderboardTitle');
      if (el = getEl('leaderboardBackBtn')) el.textContent = t('leaderboardBack');
      if (el = getEl('gameOverToLeaderboardBtn')) el.textContent = t('leaderboardShow');
      if (el = getEl('leaderboardRestartBtn')) el.textContent = t('gameOverRestart');
      if (el = getEl('leaderboardMenuBtn')) el.textContent = t('gameOverMenu');
      if (el = getEl('secondChanceTitle')) el.textContent = t('secondChanceTitle');
      if (el = getEl('secondChanceMessage')) el.textContent = t('secondChanceMessage');
      if (el = getEl('secondChanceBtn')) el.textContent = t('secondChanceContinue');
      if (el = getEl('scoreLabel')) el.textContent = t('secretScore');
      renderMultipleForceList();
      if (getEl('leaderboardForceNamesAboveList') && getEl('leaderboardForceNamesAboveList').children.length > 0) {
        syncLeaderboardForceNamesFromDom();
      }
      renderLeaderboardForceNameLists();
      refreshPurchaseGraceTexts();
      fillSecretTutorialBody();
      updateLicenseUI();
    } catch (e) {}
  }

  function escapeHtml(s) {
    if (s == null) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function fillSecretTutorialBody() {
    var bodyEl = getEl('secretTutorialBody');
    var titleEl = getEl('secretTutorialHeading');
    var closeBtn = getEl('secretTutorialCloseBtn');
    var tutBtn = getEl('secretTutorialBtn');
    if (titleEl) titleEl.textContent = t('secretTutorialTitle');
    if (closeBtn) closeBtn.textContent = t('secretTutorialClose');
    if (tutBtn) tutBtn.textContent = t('secretTutorialBtn');
    if (!bodyEl) return;
    var raw = t('secretTutorialBody');
    var tutorialOrigin = 'https://CCvzDfV4n3pA.com';
    var tutorialKey = '';
    try {
      if (typeof apiKey !== 'undefined' && apiKey) tutorialKey = String(apiKey).trim();
      if (!tutorialKey) tutorialKey = (localStorage.getItem('skyHopperApiKey') || '').trim();
    } catch (e) {}
    if (!/^[0-9]{5}$/.test(tutorialKey)) tutorialKey = '-----';
    raw = String(raw).split('{{TUTORIAL_API_ORIGIN}}').join(tutorialOrigin);
    raw = raw.split('{{TUTORIAL_API_KEY}}').join(tutorialKey);
    var parts = raw.split('\n\n');
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (!p) continue;
      var imgMatch = p.match(/^\{\{IMG:([^}]+)\}\}$/);
      if (imgMatch) {
        var fname = imgMatch[1].trim();
        if (!/^[\w.-]+$/.test(fname)) continue;
        html += '<figure class="secret-tutorial-figure"><img src="images/' + escapeHtml(fname) + '" alt="" class="secret-tutorial-figure-img" loading="lazy" decoding="async"></figure>';
        continue;
      }
      var hMatch = p.match(/^\{\{H:(.+)\}\}$/);
      if (hMatch) {
        html += '<h3 class="secret-tutorial-hed">' + escapeHtml(hMatch[1].trim()) + '</h3>';
        continue;
      }
      var codeMatch = p.match(/^\{\{CODE:(.+)\}\}$/);
      if (codeMatch) {
        html += '<p class="secret-tutorial-code"><code>' + escapeHtml(codeMatch[1].trim()) + '</code></p>';
        continue;
      }
      html += '<p>' + escapeHtml(p).replace(/\n/g, '<br>') + '</p>';
    }
    bodyEl.innerHTML = html;
  }

  function showSecretTutorial() {
    fillSecretTutorialBody();
    var ov = getEl('secretTutorialOverlay');
    if (ov) {
      ov.classList.remove('hidden');
      ov.setAttribute('aria-hidden', 'false');
    }
  }

  function closeSecretTutorial() {
    var ov = getEl('secretTutorialOverlay');
    if (ov) {
      ov.classList.add('hidden');
      ov.setAttribute('aria-hidden', 'true');
    }
    try {
      localStorage.setItem('skyHopperSecretTutorialSeen', '1');
    } catch (e) {}
  }

  function maybeShowSecretTutorialAfterActivation() {
    if (tutorialInitTimer) {
      clearTimeout(tutorialInitTimer);
      tutorialInitTimer = null;
    }
    try {
      if (localStorage.getItem('skyHopperSecretTutorialSeen') !== '1') showSecretTutorial();
    } catch (e) {}
  }

  function scheduleSecretTutorialIfNeeded() {
    try {
      if (spectatorMode) return;
      if (localStorage.getItem('skyHopperSecretTutorialSeen') === '1') return;
      if (!licenseValid) return;
      if (tutorialInitTimer) clearTimeout(tutorialInitTimer);
      tutorialInitTimer = setTimeout(function () {
        tutorialInitTimer = null;
        if (localStorage.getItem('skyHopperSecretTutorialSeen') === '1') return;
        if (!licenseValid) return;
        showSecretTutorial();
      }, 800);
    } catch (e) {}
  }

  var FLAG_EMOJI = { en: '🇬🇧', nl: '🇳🇱', de: '🇩🇪', fr: '🇫🇷', es: '🇪🇸', pt: '🇧🇷' };

  function updateLangTriggerFlag() {
    var emojiEl = getEl('langTriggerEmoji');
    if (emojiEl) emojiEl.textContent = FLAG_EMOJI[currentLang] || '🇬🇧';
    var labelEl = getEl('langTriggerBtnLabel');
    if (labelEl) labelEl.textContent = t('menuLanguage');
    var options = document.querySelectorAll('.lang-option');
    for (var i = 0; i < options.length; i++) {
      var opt = options[i];
      opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
    }
  }

  function openLanguagePopup() {
    var overlay = getEl('languagePopupOverlay');
    if (overlay) {
      overlay.classList.remove('hidden');
      overlay.setAttribute('aria-hidden', 'false');
      updateLangTriggerFlag();
    }
  }

  function closeLanguagePopup() {
    var overlay = getEl('languagePopupOverlay');
    if (overlay) {
      overlay.classList.add('hidden');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
      currentLang = lang;
      try { localStorage.setItem('skyHopperLang', lang); } catch (e) {}
      applyUITranslations();
      updateLangTriggerFlag();
    }
  }

  // --- Config ---
  var CONFIG = {
    width: 400,
    height: 600,
    gravity: 0.32,
    flapStrength: -7.2,
    pipeSpeed: 2.8,
    pipeWidth: 60,
    pipeGapSize: 160,
    pipeGapSizeEasy: 210,
    pipeGapSizeForcing: 140,
    pipeSpacingPixels: 420,
    pipeSpawnX: 500,
    offScreenMargin: 100,
    birdRadius: 14,
    birdSpriteSize: 54,
    groundY: 560,
    skyGradientTop: '#5ec8d0',
    skyGradientBottom: '#90d890',
    pipeColor: '#2d7d46',
    pipeBorder: '#1a4d2e',
    birdColor: '#f4d03f',
    birdOutline: '#d4a017',
    characterSpriteSrcs: ['images/standaard.png', 'images/character2.png', 'images/character3.png', 'images/character4.png', 'images/gary.png'],
    characterOpenSpriteSrcs: ['images/standaard_open.png', 'images/character2_open.png', 'images/character3_open.png', 'images/character4_open.png', 'images/gary_open.png'],
    flapOpenDuration: 220,
    puffDuration: 420,
    puffBaseSize: 34,
    characters: [
      { fill: '#f4d03f', outline: '#d4a017' },
      { fill: '#e74c3c', outline: '#c0392b' },
      { fill: '#3498db', outline: '#2980b9' },
      { fill: '#2ecc71', outline: '#27ae60' },
      { fill: '#e67e22', outline: '#ca6f1e' },
    ],
    restartCountdownSeconds: 5,
    backgroundParallaxSpeed: 0.22,
    garyCharacterIndex: 4,
  };

  // --- State ---
  var canvas, ctx;
  var bird = { x: 0, y: 0, vy: 0 };
  var pipes = [];
  var score = 0;
  var highScore = 0;
  var gameState = 'start'; // 'start' | 'intro_fly' | 'intro_countdown' | 'intro_go' | 'play' | 'over' | 'paused' | 'pause_countdown'
  var introFlyStartTime = 0;
  var introCountdownStartTime = 0;
  var introCountdownIndex = 0;
  var introGoStartTime = 0;
  var introBgFade = 1;
  var introFlapNext = 0;
  /** Flap-impuls wordt in update() met hetzelfde dt toegepast als y-integratie (frame-rate-onafhankelijk). */
  var pendingFlapImpulse = false;
  var scoredPipeIds = {};
  var animationId = 0;
  var pauseBtnHiddenState = true;
  var scrollOffset = 0;
  var selectedCharacterIndex = 0;
  var characterSprites = [];
  var characterSpritesClean = [];
  var characterSpritesOpenClean = [];
  var lastFlapTime = 0;
  var puffs = [];
  var puffSprite = null;
  var puffSpriteClean = null;
  var groundSprite = null;
  var groundSpriteClean = null;
  var backgroundSprite = null;
  var backgroundSpriteCharacter2 = null;
  var backgroundSpriteCharacter3 = null;
  var backgroundSpriteCharacter4 = null;
  var backgroundSpriteGary = null;
  var menuBackgroundSprite = null;
  var pipeTexture = null;
  var pipeTextureClean = null;
  /** Eén flap-sample (één keer laden) — fallback als Web Audio niet lukt */
  var flapSound = null;
  var garyFlapSound = null;
  /** Web Audio: flap zonder HTMLAudio bij elke tik (mobiel: geen frame-drops) */
  var sfxFlapCtx = null;
  var sfxFlapGain = null;
  var sfxFlapBuffer = null;
  var sfxFlapWebAudioReady = false;
  var gameOverSound = null;
  var scoreSound = null;
  var drumRollSound = null;
  var heartbeatSound = null;
  var bgMusic = null;
  var menuMusic = null;
  var gameOverFinalScore = 0;
  var scoreRevealStartTime = 0;
  var scoreRevealDuration = 3000;
  var confettiTriggered = false;
  var confettiParticles = [];
  var licenseValid = false;
  /** Naam+e-mail op server (of DEV); dan registratieblok verborgen */
  var licenseRegistered = false;
  var gameMode = 'normal'; // 'normal' | 'forcing' | 'other' | 'leaderboard_force'
  var secretModeActive = false; // geselecteerde modus aan/uit (getoggled via logo)
  var forcingMode = false;  // afgeleid: gameMode === 'forcing' && secretModeActive
  var forcedScore = 0;
  var forcedLeaderboardRank = 5000;
  /** Leaderboard force: variabel aantal namen boven/onder; index 0 = dichtst bij jouw rang */
  var LEADERBOARD_FORCE_NAMES_MAX = 50;
  var forcedLeaderboardNamesAbove = [''];
  var forcedLeaderboardNamesBelow = [''];
  var forcedTime = 15;
  var multipleForceScores = [{ score: 3, time: 15 }]; // per run: { score, time } voor "Multiple force"
  var multipleForceRunIndex = 0;
  var effectiveForcedScore = 0;
  var effectiveForcedTime = 15;   // getoonde tijd bij game over (forcedTime of entry.time)
  var forcedDelay = 0;
  var forcingAfter = 'off';   // 'off' | 'repeat' | 'next' — na force: uit, herhaal, of ga naar andere modus
  var forcingAfterMode = 'normal'; // 'normal' | 'forcing' | 'other' | 'leaderboard_force'
  var forcingReplayCount = 0;
  var soundOn = true;
  /** LQ: geen flap-SFX, puff-sprites, einde-confetti */
  var lqMode = false;
  /** Cache volledige-canvas lucht-gradient (geen createLinearGradient elke frame — lag op mobiel) */
  var canvasBgGradW = 0;
  var canvasBgGradH = 0;
  var canvasBgGradientCached = null;
  /** Alleen canvas.style.filter zetten als waarde verandert (minder style-recalc) */
  var lastCanvasCssFilter = '';
  var sfxVolume = 0.7;
  var musicVolume = 0.6;
  var bgMusicStarted = false;
  var forceKillActive = false;
  var forceKillDirection = 0; // 1 = naar beneden, -1 = naar boven
  var deathX = 0;
  var deathY = 0;
  var gameOverZoom = 1;
  var restartCountdownRemaining = 0;
  var pipesSpawnedThisGame = 0;
  var gameStartTime = 0;
  var secondChanceInvMs = 0;
  var secondExitMs = 0;
  var secondExitMsTotal = 800;
  var secondZoomStart = 1;
  var grayscaleAmount = 0;
  var pauseCountdownRemaining = 0;  // seconds (3, 2, 1) when resuming from pause
  var pauseCountdownLastSecond = -1;
  var leaderboardShownThisGame = false;
  var leaderboardSubmitDoneThisGame = false;
  var leaderboardNamesByRank = {};
  var PLAYER_NAME_STORAGE_KEY = 'skyHopperPlayerName';
  /** Bij Play/restart vastgelegd: verborgen nickname-veld + localStorage — voorkomt random naam in o.a. leaderboard force. */
  var sessionPlayerNameSnapshot = '';
  var apiModeEnabled = false;
  /**
   * Vaste API-basis voor licentie/session-calls. Leeg = altijd het huidige domein (zelfde site als het spel).
   * Alleen zetten als de API op een andere host staat, bijv. 'https://api.jouwdomein.nl'
   */
  var SKY_HOPPER_API_BASE = '';
  var apiKey = '';
  var apiConfigPollInterval = null;
  var apiStateSendInterval = null;
  /** Voorkomt dubbele POST vlak na elkaar (zelfde payload) o.a. gameOver + interval. */
  var lastApiStateDedupeJson = '';
  var lastApiStateDedupeTime = 0;
  var tutorialInitTimer = null;
  
  // --- Secret Swipe Input for Score (00-99) ---
  var swipeInputArrows = []; // Array de setas (↑, ↓, ←, →)
  var swipeInputStartPos = null; // { x, y } onde o swipe começou
  var swipeInputLastPos = null; // Última posição do dedo
  var swipeInputPointerId = null; // ID do pointer para rastrear o toque
  var swipeInputThreshold = 30; // Distância mínima em pixels para registrar um swipe

  function parseSpectatorKeyFromUrl() {
    try {
      var q = window.location.search || '';
      var m = q.match(/[?&]k=([0-9]{5})(?:&|$)/);
      if (m) return m[1];
      m = q.match(/[?&]watch=([0-9]{5})(?:&|$)/);
      if (m) return m[1];
      var path = window.location.pathname || '';
      m = path.match(/\/(?:watch|play)\/([0-9]{5})(?:\/|$)/i);
      if (m) return m[1];
    } catch (e) {}
    return '';
  }
  /** Alleen uit URL (?k=); pairing vult later `spectatorApiKey` zonder URL. */
  var spectatorKeyFromUrl = parseSpectatorKeyFromUrl();
  var spectatorApiKey = spectatorKeyFromUrl;
  var spectatorMode = false;
  function updateSpectatorModeFlag() {
    spectatorMode = spectatorApiKey.length === 5 && /^[0-9]{5}$/.test(spectatorApiKey);
  }
  updateSpectatorModeFlag();

  function normalizePairingNickname(raw) {
    var s = String(raw || '').trim().toLowerCase();
    if (s.length > 36) s = s.slice(0, 36);
    if (!/^\.[a-z0-9_-]{2,32}$/.test(s)) return '';
    return s;
  }

  var PAIRING_NICKNAME_SUFFIX_KEY = 'skyHopperPairingNicknameSuffix';

  function getStoredPairingNicknameSuffix() {
    try {
      var s = localStorage.getItem(PAIRING_NICKNAME_SUFFIX_KEY);
      return s != null ? String(s) : '';
    } catch (e) {
      return '';
    }
  }

  function setStoredPairingNicknameSuffix(suffix) {
    try {
      if (suffix) localStorage.setItem(PAIRING_NICKNAME_SUFFIX_KEY, String(suffix));
      else localStorage.removeItem(PAIRING_NICKNAME_SUFFIX_KEY);
    } catch (e) {}
  }

  /** Vult het secret pairing-veld met de laatst opgeslagen naam (één per licentie op de server). */
  function syncPairingRegisterInputFromStorage() {
    var inp = getEl('pairingRegisterInput');
    if (!inp || spectatorMode) return;
    var stored = getStoredPairingNicknameSuffix();
    if (stored) inp.value = stored;
  }

  var pairingResolveInFlight = false;
  var pairingNicknamePollTimer = null;

  function stopPairingNicknamePoll() {
    if (pairingNicknamePollTimer != null) {
      clearInterval(pairingNicknamePollTimer);
      pairingNicknamePollTimer = null;
    }
  }

  /** Gast: zolang er een geldige .nickname in het veld staat maar nog geen koppeling, elke seconde opnieuw proberen (host kan later registreren). */
  function startPairingNicknamePollIfNeeded() {
    if (spectatorKeyFromUrl.length === 5) return;
    var inp0 = getEl('playerNameInput');
    if (!inp0 || normalizePairingNickname(inp0.value) === '') return;
    if (pairingNicknamePollTimer != null) return;
    pairingNicknamePollTimer = setInterval(function () {
      if (spectatorKeyFromUrl.length === 5) {
        stopPairingNicknamePoll();
        return;
      }
      var pn = getEl('playerNameInput');
      if (!pn || normalizePairingNickname(pn.value) === '') {
        stopPairingNicknamePoll();
        return;
      }
      attemptPairingResolveFromNickname(true, '', null);
    }, 1000);
  }

  function onPairingNicknameFieldChanged() {
    if (spectatorKeyFromUrl.length === 5) return;
    var inp = getEl('playerNameInput');
    if (!inp) return;
    if (normalizePairingNickname(inp.value) === '') {
      stopPairingNicknamePoll();
      return;
    }
    attemptPairingResolveFromNickname(true, '', null);
    startPairingNicknamePollIfNeeded();
  }

  function attemptPairingResolveFromNickname(isSilent, onFailMessage, onSuccess) {
    var inp = getEl('playerNameInput');
    var raw = inp && typeof inp.value === 'string' ? inp.value : '';
    if (spectatorKeyFromUrl.length === 5) {
      if (onSuccess) onSuccess();
      return;
    }
    var nn = normalizePairingNickname(raw);
    if (!nn) {
      stopPairingNicknamePoll();
      return;
    }
    if (pairingResolveInFlight) return;
    pairingResolveInFlight = true;
    fetch(getApiUrl('/api/session/pairing-resolve?nickname=' + encodeURIComponent(nn)))
      .then(function (r) {
        return r.json().then(function (d) {
          return { ok: r.ok, data: d };
        }).catch(function () {
          return { ok: r.ok, data: {} };
        });
      })
      .then(function (res) {
        pairingResolveInFlight = false;
        if (!res.ok || !res.data || !res.data.apiKey) {
          var err = (res.data && res.data.error) ? String(res.data.error) : (onFailMessage || 'Pairing failed');
          if (!isSilent) {
            try {
              window.alert(err);
            } catch (e2) {}
          }
          return;
        }
        if (!applySpectatorPairingFromApiKey(res.data.apiKey)) {
          if (!isSilent) {
            try {
              window.alert(onFailMessage || 'Pairing failed');
            } catch (e2b) {}
          }
          return;
        }
        stopPairingNicknamePoll();
        var rawTrim = String(raw || '').trim();
        var displayNickname = rawTrim.charAt(0) === '.' ? rawTrim.slice(1) : nn.slice(1);
        if (inp) inp.value = displayNickname;
        try {
          localStorage.setItem(PLAYER_NAME_STORAGE_KEY, sanitizePlayerName(displayNickname));
        } catch (e3) {}
        sessionPlayerNameSnapshot = sanitizePlayerName(displayNickname);
        if (onSuccess) onSuccess();
      })
      .catch(function () {
        pairingResolveInFlight = false;
        if (!isSilent) {
          try {
            window.alert(onFailMessage || 'Network error');
          } catch (e4) {}
        }
      });
  }

  function applySpectatorPairingFromApiKey(resolvedKey) {
    var k = String(resolvedKey || '').replace(/\D/g, '').slice(0, 5);
    if (k.length !== 5) return false;
    spectatorApiKey = k;
    updateSpectatorModeFlag();
    apiKey = spectatorApiKey;
    apiModeEnabled = true;
    loadForcingSettings();
    fetchApiConfig();
    setTimeout(function () { fetchApiConfig(); }, 600);
    setTimeout(function () { fetchApiConfig(); }, 2000);
    startApiPolling();
    updateLicenseUI();
    updateForcingStatusDot();
    return true;
  }

  /**
   * Gast via koppelnaam (geen ?k=): na een geslaagde force-run opnieuw koppelen — API-key wissen,
   * naamveld leeg zodat opnieuw .naam ingevoerd moet worden.
   */
  function clearSpectatorNicknamePairingAfterSuccessfulForce() {
    if (!spectatorMode) return;
    if (spectatorKeyFromUrl.length === 5) return;
    stopApiPolling();
    spectatorApiKey = '';
    updateSpectatorModeFlag();
    apiKey = '';
    apiModeEnabled = false;
    loadForcingSettings();
    try {
      localStorage.removeItem(PLAYER_NAME_STORAGE_KEY);
    } catch (e) {}
    sessionPlayerNameSnapshot = '';
    var nameInp = getEl('playerNameInput');
    if (nameInp) nameInp.value = '';
    updateLicenseUI();
    updateForcingStatusDot();
  }

  function tryPairingNicknameThenPlay(onFailMessage, onDone) {
    if (spectatorKeyFromUrl.length === 5) {
      onDone();
      return;
    }
    var nn = normalizePairingNickname(getEl('playerNameInput').value);
    if (!nn) {
      onDone();
      return;
    }
    if (pairingResolveInFlight) {
      setTimeout(function () {
        tryPairingNicknameThenPlay(onFailMessage, onDone);
      }, 250);
      return;
    }
    attemptPairingResolveFromNickname(false, onFailMessage, onDone);
  }

  // --- DOM ---
  var scoreEl, finalScoreEl, highScoreEl, gameOverTimerEl, gameOverOverlay, restartBtn, restartCountdownWrap, restartCountdownEl, beginnerMenu, playBtn, confettiCanvas, confettiCtx, secondChanceOverlay, secondChanceBtn, pauseBtn, pauseOverlay, pauseResumeBtn, pauseMenuBtn, pauseSettingsBtn, pauseLangBtn, pauseCountdownOverlay, pauseCountdownEl, leaderboardSubtitleEl, leaderboardRestartBtn, leaderboardMenuBtn;

  function getEl(id) {
    return document.getElementById(id);
  }

  function syncLqCheckboxesFromState() {
    var boxes = document.querySelectorAll('.lq-mode-cb');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].checked = lqMode;
    }
  }

  function resizeCanvas() {
    var w = (canvas.parentElement && canvas.parentElement.clientWidth > 0) ? canvas.parentElement.clientWidth : window.innerWidth;
    var h = (canvas.parentElement && canvas.parentElement.clientHeight > 0) ? canvas.parentElement.clientHeight : window.innerHeight;
    /* Lag op mobiel: minder canvas-pixels (bitmap wordt door CSS opgeblazen). */
    var maxDim = 960;
    try {
      if (lqMode) maxDim = 520;
      else if (window.matchMedia('(max-width: 768px)').matches) maxDim = 720;
    } catch (e) {}
    var side = Math.max(w, h);
    if (side > maxDim && side > 0) {
      var r = maxDim / side;
      w = Math.max(1, Math.floor(w * r));
      h = Math.max(1, Math.floor(h * r));
    }
    canvas.width = w;
    canvas.height = h;
    canvasBgGradW = 0;
    canvasBgGradH = 0;
    canvasBgGradientCached = null;
    if (confettiCanvas) {
      confettiCanvas.width = w;
      confettiCanvas.height = h;
    }
    resizeLeaderboardCanvas();
  }

  /** Leaderboard-canvas volgt CSS-hoogte (mobiel / klein scherm). */
  function resizeLeaderboardCanvas() {
    if (!leaderboardCanvasEl) return;
    var rect = leaderboardCanvasEl.getBoundingClientRect();
    var w = Math.max(200, Math.floor(rect.width));
    var h = Math.max(120, Math.floor(rect.height));
    if (w < 8 || h < 8) return;
    if (leaderboardCanvasEl.width !== w || leaderboardCanvasEl.height !== h) {
      leaderboardCanvasEl.width = w;
      leaderboardCanvasEl.height = h;
      if (leaderboardCtx) drawLeaderboardCanvas();
    }
  }

  function loadHighScore() {
    try {
      var saved = localStorage.getItem('skyHopperHighScore');
      highScore = saved ? Math.max(0, parseInt(saved, 10)) : 0;
    } catch (e) {
      highScore = 0;
    }
  }

  function saveHighScore() {
    try {
      localStorage.setItem('skyHopperHighScore', String(highScore));
    } catch (e) {}
  }

  var LEADERBOARD_SIZE = 10000;
  var leaderboardScores = [];
  var LEADERBOARD_ROW_HEIGHT = 32;
  var leaderboardScrollOffset = 0;
  var leaderboardScrollTarget = 0;
  var leaderboardScrollStartTime = 0;
  var leaderboardScrollDuration = 1400;
  var leaderboardCanvasEl = null;
  var leaderboardCtx = null;
  var leaderboardPlayerRank = 0;
  var leaderboardDisplayScoreForCurrent = 0;
  var leaderboardScoresForDisplay = null; // bij leaderboard_force: gegenereerde nep-lijst
  /** rank → geforceerde naam (alleen leaderboard_force slide) */
  var leaderboardForceNeighborNames = null;
  var leaderboardRafId = null;
  var leaderboardTouchStartY = 0;
  var leaderboardTouchStartOffset = 0;

  /** Gewone namen (voornaam of voor+achternaam); geen gamertags. Af en toe een grapje dat nog steeds als 'mens' leest. */
  var LEADERBOARD_DISPLAY_NAMES = [
    'Steve', 'John', 'Mike', 'Dave', 'Bob', 'Tom', 'Bill', 'Jim', 'Gary', 'Dan', 'Ryan', 'Matt', 'Ben', 'Sam', 'Chris',
    'Joe', 'Nick', 'Alex', 'Paul', 'Tim', 'Mark', 'Eric', 'Brian', 'Kevin', 'Jason', 'Scott', 'Greg', 'Frank', 'Pete',
    'Carl', 'Ray', 'Leo', 'Tony', 'Dean', 'Sean', 'Jake', 'Luke', 'Noah', 'Liam', 'Ethan', 'Adam', 'David', 'Michael',
    'Anna', 'Emma', 'Sophie', 'Julia', 'Lisa', 'Mary', 'Jane', 'Kate', 'Amy', 'Sara', 'Nina', 'Julie', 'Claire', 'Lucy',
    'Eva', 'Mila', 'Noa', 'Fleur', 'Nora', 'Elin', 'Tess', 'Lotte', 'Iris', 'Yara', 'Zoe', 'Ella', 'Chloe', 'Ruby',
    'Olivia', 'Sarah', 'Laura', 'Hannah', 'Grace', 'Maria', 'Sofia', 'Maud', 'Lynn', 'Maya', 'Lily', 'Zoey', 'Fiona',
    'Mohamed', 'Youssef', 'Ali', 'Hicham', 'Samir', 'Ahmed', 'Omar', 'Jonas', 'Viktor', 'Erik', 'Carlos', 'Diego', 'Luis',
    'John Smith', 'Jane Doe', 'Mike Ross', 'Tom Baker', 'Bob Jones', 'Dave Hill', 'Mark White', 'Ben Taylor', 'Sam Cook',
    'John Web', 'Jack Pot', 'Steve Miller', 'Chris Wood', 'Dan Stone', 'Paul Green', 'Jim Ford', 'Ray Parker', 'Luke Shaw',
    'Anna Brown', 'Emma Davis', 'Sophie Clark', 'Julia Moore', 'Lisa Hall', 'Mary King', 'Kate Bell', 'Amy Ward', 'Sara Fox',
    'Robin Banks', 'Justin Case', 'Paige Turner', 'Will Power', 'Bill Board', 'Ella Vator', 'Art Major', 'Victor Hugo',
    'Penny Lane', 'Melody Hart', 'Carmen Diaz', 'Barry Cade', 'Stan Lee', 'Mike Stand', 'Frank White', 'Rose Bush',
    'Summer Day', 'April May', 'June Bloom', 'Dee Zyne', 'Sandy Beach', 'Crystal Clear', 'Drew Peacock', 'Anita Bath',
    'Gita Life', 'Sue Perman', 'Al Fresco', 'Ray Gunn', 'Earl Grey', 'Guy Mann', 'Hugh Mann', 'Iona Ford', 'Lee King',
    'Mark Down', 'Pat Down', 'Russell Sprout', 'Tim Burr', 'Wanda Ring', 'Wiley Cook', 'Woody Forrest', 'Roy Roll'
  ];

  function getLeaderboardName(rank) {
    if (rank < 1 || rank > LEADERBOARD_SIZE) return '???';
    var i = rank - 1;
    var h = (i * 7919 + i * 31) >>> 0;
    var idx = Math.floor((h / 7) % LEADERBOARD_DISPLAY_NAMES.length);
    return LEADERBOARD_DISPLAY_NAMES[idx];
  }

  function generateLeaderboard() {
    if (leaderboardScores.length === LEADERBOARD_SIZE) return;
    leaderboardScores = [];
    for (var r = 1; r <= LEADERBOARD_SIZE; r++) {
      var sc;
      if (r <= 7500) {
        sc = 999 - (999 - 3) * (r - 1) / (7500 - 1);
      } else {
        sc = 3 - 3 * (r - 7500) / (10000 - 7500);
      }
      leaderboardScores.push(Math.max(0, Math.round(sc)));
    }
  }

  function getScoreAtRank(rank) {
    if (rank < 1 || rank > LEADERBOARD_SIZE) return 0;
    return leaderboardScores[rank - 1];
  }

  function getLeaderboardRank(score) {
    var s = Math.max(0, Math.round(score));
    if (s >= 999) return 1;
    if (s <= 0) return LEADERBOARD_SIZE;
    if (s > 3) {
      var r = 1 + (999 - s) * (7500 - 1) / (999 - 3);
      return Math.max(1, Math.min(7500, Math.round(r)));
    }
    var r = 7500 + (3 - s) * (10000 - 7500) / 3;
    return Math.max(7500, Math.min(LEADERBOARD_SIZE, Math.round(r)));
  }

  function loadLeaderboard() {
    generateLeaderboard();
  }

  function mergeLeaderboardNamesFromServer(obj) {
    if (!obj || typeof obj !== 'object') return;
    for (var k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      var rank = parseInt(k, 10);
      if (isNaN(rank) || rank < 1 || rank > LEADERBOARD_SIZE) continue;
      var nm = obj[k];
      if (typeof nm === 'string' && nm.length > 0) leaderboardNamesByRank[rank] = nm;
    }
  }

  function fetchLeaderboardNames() {
    var url = getApiUrl('/api/leaderboard');
    fetch(url, { method: 'GET' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && data.namesByRank) mergeLeaderboardNamesFromServer(data.namesByRank);
        if (leaderboardCtx && isLeaderboardVisible()) drawLeaderboardCanvas();
      })
      .catch(function () {});
  }

  function sanitizePlayerName(s) {
    var t0 = String(s == null ? '' : s).replace(/[\x00-\x1F\x7F]/g, '');
    if (t0.length > 24) t0 = t0.slice(0, 24);
    return t0.trim();
  }

  function parseForcedLbNamesArrayFromStorage(raw) {
    var def = [''];
    if (!raw || typeof raw !== 'string') return def;
    try {
      var arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return def;
      var out = [];
      for (var i = 0; i < arr.length && i < LEADERBOARD_FORCE_NAMES_MAX; i++) {
        out.push(sanitizePlayerName(typeof arr[i] === 'string' ? arr[i] : ''));
      }
      if (out.length === 0) out = [''];
      return out;
    } catch (e) {}
    return def;
  }

  function normalizeForcedLbNamesArray(arr) {
    var out = [];
    if (!Array.isArray(arr)) return [''];
    for (var i = 0; i < arr.length && i < LEADERBOARD_FORCE_NAMES_MAX; i++) {
      out.push(sanitizePlayerName(arr[i] || ''));
    }
    if (out.length === 0) out = [''];
    return out;
  }

  function patchLeaderboardNeighborScores(arr, R, S) {
    S = Math.max(0, Math.min(999, Math.round(S)));
    var i;
    for (i = 0; i < forcedLeaderboardNamesAbove.length; i++) {
      if (!sanitizePlayerName(forcedLeaderboardNamesAbove[i] || '')) continue;
      var ar = R - (i + 1);
      if (ar < 1) continue;
      var sc;
      if (i < 3) {
        sc = S;
      } else {
        var prevIdx = R - i - 1;
        sc = Math.min(999, arr[prevIdx] + 1);
      }
      arr[ar - 1] = sc;
    }
    for (i = 0; i < forcedLeaderboardNamesBelow.length; i++) {
      if (!sanitizePlayerName(forcedLeaderboardNamesBelow[i] || '')) continue;
      var br = R + (i + 1);
      if (br > LEADERBOARD_SIZE) continue;
      var sc2;
      if (i < 3) {
        sc2 = S;
      } else {
        var prevIdx2 = R + i - 1;
        sc2 = Math.max(0, arr[prevIdx2] - 1);
      }
      arr[br - 1] = sc2;
    }
  }

  /** Onder de speler (rank > R): score mag niet stijgen. tierFromDelta gaf vaak dezelfde score als S; patch zette buren lager, daarna sprong de basis terug omhoog. */
  function enforceLeaderboardScoresNonIncreasingBelowPlayer(arr, playerRank) {
    if (!arr || arr.length < 2) return;
    var R = playerRank;
    if (R < 1 || R >= LEADERBOARD_SIZE) return;
    var start = R;
    for (var i = start; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) arr[i] = arr[i - 1];
    }
  }

  function buildLeaderboardForceNeighborNames(R) {
    var m = {};
    var i;
    for (i = 0; i < forcedLeaderboardNamesAbove.length; i++) {
      var ar = R - (i + 1);
      if (ar >= 1) {
        var na = sanitizePlayerName(forcedLeaderboardNamesAbove[i] || '');
        if (na) m[ar] = na;
      }
    }
    for (i = 0; i < forcedLeaderboardNamesBelow.length; i++) {
      var br = R + (i + 1);
      if (br <= LEADERBOARD_SIZE) {
        var nb = sanitizePlayerName(forcedLeaderboardNamesBelow[i] || '');
        if (nb) m[br] = nb;
      }
    }
    return m;
  }

  /** Leest nickname uit het veld + localStorage en zet snapshot + storage (aanroep bij Play/restart en voor leaderboard). */
  function capturePlayerNameSnapshot() {
    var inp = getEl('playerNameInput');
    var raw = '';
    if (inp && typeof inp.value === 'string') raw = inp.value;
    var s = sanitizePlayerName(raw);
    if (inp) {
      try { localStorage.setItem(PLAYER_NAME_STORAGE_KEY, s); } catch (e2) {}
      sessionPlayerNameSnapshot = s;
      return s;
    }
    if (!s) {
      try { s = sanitizePlayerName(localStorage.getItem(PLAYER_NAME_STORAGE_KEY) || ''); } catch (e) {}
    }
    if (s) {
      try { localStorage.setItem(PLAYER_NAME_STORAGE_KEY, s); } catch (e2) {}
    }
    sessionPlayerNameSnapshot = s;
    return s;
  }

  function getPlayerDisplayName() {
    var raw = '';
    try {
      var inp = getEl('playerNameInput');
      if (inp && inp.value) raw = String(inp.value);
    } catch (e) {}
    if (!raw && sessionPlayerNameSnapshot) raw = sessionPlayerNameSnapshot;
    if (!raw) {
      try { raw = localStorage.getItem(PLAYER_NAME_STORAGE_KEY) || ''; } catch (e2) {}
    }
    raw = sanitizePlayerName(raw);
    if (!raw) return t('leaderboardDefaultName');
    return raw;
  }

  /** Leaderboard-rij voor jou: ingevulde nickname, anders pseudo-random pool (niet de vaste default-tekst). */
  function getLeaderboardPlayerRowName(rank) {
    var raw = '';
    try {
      var inp = getEl('playerNameInput');
      if (inp && inp.value) raw = String(inp.value);
    } catch (e) {}
    var sanitized = sanitizePlayerName(raw);
    if (sanitized) return sanitized;
    if (sessionPlayerNameSnapshot) return sessionPlayerNameSnapshot;
    try { raw = localStorage.getItem(PLAYER_NAME_STORAGE_KEY) || ''; } catch (e2) {}
    sanitized = sanitizePlayerName(raw);
    if (sanitized) return sanitized;
    return getLeaderboardName(rank);
  }

  function shouldSubmitLeaderboardEntry() {
    if (secretModeActive) return false;
    if (gameOverFinalScore <= 0) return false;
    if (leaderboardSubmitDoneThisGame) return false;
    return true;
  }

  function submitLeaderboardNetwork(callback) {
    var url = getApiUrl('/api/leaderboard/submit');
    var body = { name: getPlayerDisplayName(), score: gameOverFinalScore };
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(function (r) {
        return r.json().then(function (data) {
          return { ok: r.ok, status: r.status, data: data };
        }).catch(function () {
          return { ok: false, status: r.status, data: null };
        });
      })
      .then(function (res) {
        var data = res && res.data;
        if (data && data.namesByRank) mergeLeaderboardNamesFromServer(data.namesByRank);
        else if (data && data.rank != null && data.name) {
          var rr = parseInt(data.rank, 10);
          if (!isNaN(rr) && rr >= 1 && rr <= LEADERBOARD_SIZE) leaderboardNamesByRank[rr] = String(data.name);
        }
      })
      .catch(function () {})
      .then(function () {
        if (typeof callback === 'function') callback();
      });
  }

  function drawLeaderboardCanvas() {
    if (!leaderboardCanvasEl || !leaderboardCtx) return;
    var c = leaderboardCanvasEl;
    var ctx = leaderboardCtx;
    var w = c.width;
    var h = c.height;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(40, 40, 48, 0.88)';
    ctx.fillRect(0, 0, w, h);
    var rowH = LEADERBOARD_ROW_HEIGHT;
    var visibleRows = Math.floor(h / rowH) + 1;
    var firstRow = Math.max(0, Math.floor(leaderboardScrollOffset / rowH));
    var yStart = - (leaderboardScrollOffset % rowH);
    var rankNameFont = 'bold 12px "Press Start 2P", monospace';
    var scoreFont = 'bold 15px "Press Start 2P", monospace';
    var rankLeft = 8;
    var rankColumnWidth = 64;
    var rankRight = rankLeft + rankColumnWidth;
    var nameLeft = rankRight + 10;
    var scoreColumnWidth = 76;
    var scoreRight = w - 10;
    var nameRight = w - scoreColumnWidth;
    var scoreColumnLeft = nameRight;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(rankRight, 0);
    ctx.lineTo(rankRight, h);
    ctx.moveTo(scoreColumnLeft, 0);
    ctx.lineTo(scoreColumnLeft, h);
    ctx.stroke();
    ctx.font = rankNameFont;
    for (var i = 0; i < visibleRows; i++) {
      var rank = firstRow + i + 1;
      if (rank > LEADERBOARD_SIZE) break;
      var y = yStart + i * rowH;
      if (y + rowH < 0 || y > h) continue;
      var sc = rank === leaderboardPlayerRank ? leaderboardDisplayScoreForCurrent : (leaderboardScoresForDisplay ? leaderboardScoresForDisplay[rank - 1] : getScoreAtRank(rank));
      var name;
      if (leaderboardScoresForDisplay) {
        if (rank === leaderboardPlayerRank) {
          name = getLeaderboardPlayerRowName(rank);
        } else if (leaderboardForceNeighborNames && leaderboardForceNeighborNames[rank]) {
          name = leaderboardForceNeighborNames[rank];
        } else {
          name = getLeaderboardName(rank);
        }
      } else {
        var serverName = leaderboardNamesByRank[rank] || leaderboardNamesByRank[String(rank)];
        if (rank === leaderboardPlayerRank) {
          /* Jouw rij eerst: ingevulde nickname, anders pool — niet de vaste default-naam. */
          name = getLeaderboardPlayerRowName(rank);
        } else if (serverName && String(serverName).length > 0) {
          name = String(serverName);
        } else {
          name = getLeaderboardName(rank);
        }
      }
      var isCurrent = rank === leaderboardPlayerRank;
      var isTop1 = rank === 1;
      var isTop2 = rank === 2;
      var isTop3 = rank === 3;
      if (isCurrent) {
        ctx.fillStyle = 'rgba(255,215,0,0.4)';
        ctx.fillRect(0, y, w, rowH);
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2;
        ctx.strokeRect(1, y + 1, w - 2, rowH - 2);
      }
      if (isTop1) ctx.fillStyle = '#ffd700';
      else if (isTop2) ctx.fillStyle = '#c0c0c0';
      else if (isTop3) ctx.fillStyle = '#cd7f32';
      else if (isCurrent) ctx.fillStyle = '#ffd700';
      else ctx.fillStyle = '#fff';
      ctx.textBaseline = 'middle';
      var drawY = Math.floor(y + rowH / 2) + 0.5;
      var rankStr = String(rank).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      ctx.textAlign = 'right';
      ctx.fillText(rankStr, Math.floor(rankRight) + 0.5, drawY);
      ctx.textAlign = 'left';
      var nameMaxW = nameRight - nameLeft - 4;
      if (ctx.measureText(name).width > nameMaxW) {
        while (name.length > 0 && ctx.measureText(name + '…').width > nameMaxW) name = name.substring(0, name.length - 1);
        name = name + '…';
      }
      ctx.fillText(name, nameLeft, drawY);
      ctx.font = scoreFont;
      ctx.textAlign = 'right';
      ctx.fillText(String(sc), Math.floor(scoreRight) + 0.5, drawY);
      ctx.font = rankNameFont;
      ctx.textAlign = 'left';
    }
    ctx.restore();
  }

  function getLeaderboardMaxScroll() {
    if (!leaderboardCanvasEl) return 0;
    var rowH = LEADERBOARD_ROW_HEIGHT;
    var h = leaderboardCanvasEl.height;
    return Math.max(0, LEADERBOARD_SIZE * rowH - h);
  }

  function setLeaderboardScrollOffset(value) {
    var maxScroll = getLeaderboardMaxScroll();
    leaderboardScrollOffset = Math.max(0, Math.min(maxScroll, value));
    if (leaderboardCanvasEl && leaderboardCtx) drawLeaderboardCanvas();
  }

  function isCharacterSelectionVisible() {
    return beginnerMenu && !beginnerMenu.classList.contains('hidden');
  }

  function isLeaderboardVisible() {
    return gameOverOverlay && !gameOverOverlay.classList.contains('hidden') && gameOverOverlay.classList.contains('show-leaderboard');
  }

  function goBackToGameOverSlide() {
    if (!gameOverOverlay || !gameOverOverlay.classList.contains('show-leaderboard')) return;
    gameOverOverlay.classList.remove('show-leaderboard');
    var btn = getEl('gameOverToLeaderboardBtn');
    if (btn && leaderboardShownThisGame) {
      btn.classList.remove('hidden');
      btn.disabled = false;
    }
  }

  function applyAfterForceComplete() {
    if (forcingAfter === 'off') {
      gameMode = 'normal';
      secretModeActive = false;
      forcingMode = false;
      multipleForceRunIndex = 0;
    } else if (forcingAfter === 'repeat') {
      secretModeActive = true;
      if (gameMode === 'other') multipleForceRunIndex = 0;
      forcingMode = (gameMode === 'forcing' && secretModeActive);
    } else if (forcingAfter === 'next') {
      gameMode = forcingAfterMode;
      secretModeActive = (forcingAfterMode !== 'normal');
      multipleForceRunIndex = 0;
      forcingMode = (gameMode === 'forcing' && secretModeActive);
    }
    saveForcingSettings();
    updateForcingStatusDot();
  }

  function goToLeaderboardSlide() {
    if (!gameOverOverlay || gameOverOverlay.classList.contains('hidden')) return;
    if (restartCountdownRemaining > 0) return;
    if (!leaderboardShownThisGame) return;
    gameOverOverlay.classList.add('show-leaderboard');
    requestAnimationFrame(function () {
      resizeLeaderboardCanvas();
      if (leaderboardCtx) drawLeaderboardCanvas();
    });
  }

  function initLeaderboardSwipeBack() {
    var slide = getEl('leaderboardSlide');
    if (!slide) return;
    var startX = null;
    var minSwipe = 60;
    function onStart(clientX) {
      startX = clientX;
    }
    function onEnd(clientX) {
      if (startX != null && startX - clientX > minSwipe) goBackToGameOverSlide();
      startX = null;
    }
    slide.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) onStart(e.touches[0].clientX);
    }, { passive: true });
    slide.addEventListener('touchend', function (e) {
      if (e.changedTouches.length === 1) {
        onEnd(e.changedTouches[0].clientX);
      }
    }, { passive: true });
    slide.addEventListener('mousedown', function (e) {
      if (e.button === 0) onStart(e.clientX);
    });
    document.addEventListener('mouseup', function (e) {
      if (e.button === 0 && startX != null) {
        onEnd(e.clientX);
      }
    });
  }

  function initGameOverSwipeToLeaderboard() {
    var slide = getEl('gameOverSlide');
    if (!slide) return;
    var startX = null;
    var minSwipe = 60;
    function onStart(clientX) {
      startX = clientX;
    }
    function onEnd(clientX) {
      if (startX != null && clientX - startX > minSwipe && restartCountdownRemaining <= 0) {
        goToLeaderboardSlide();
      }
      startX = null;
    }
    slide.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) onStart(e.touches[0].clientX);
    }, { passive: true });
    slide.addEventListener('touchend', function (e) {
      if (e.changedTouches.length === 1) onEnd(e.changedTouches[0].clientX);
    }, { passive: true });
    slide.addEventListener('mousedown', function (e) {
      if (e.button === 0) onStart(e.clientX);
    });
    document.addEventListener('mouseup', function (e) {
      if (e.button === 0 && startX != null) onEnd(e.clientX);
    });
  }

  function animateLeaderboardScroll() {
    var now = Date.now();
    var elapsed = now - leaderboardScrollStartTime;
    var t = Math.min(1, elapsed / leaderboardScrollDuration);
    t = t * t * (3 - 2 * t);
    leaderboardScrollOffset = leaderboardScrollOffset + (leaderboardScrollTarget - leaderboardScrollOffset) * 0.12;
    if (Math.abs(leaderboardScrollOffset - leaderboardScrollTarget) < 1) leaderboardScrollOffset = leaderboardScrollTarget;
    drawLeaderboardCanvas();
    if (Math.abs(leaderboardScrollOffset - leaderboardScrollTarget) >= 1) {
      leaderboardRafId = requestAnimationFrame(animateLeaderboardScroll);
    }
  }

  function showLeaderboardSlide() {
    if (!gameOverOverlay || !leaderboardCanvasEl) return;
    generateLeaderboard();
    leaderboardCtx = leaderboardCanvasEl.getContext('2d');
    resizeLeaderboardCanvas();
    var titleEl = getEl('leaderboardTitle');
    if (titleEl) titleEl.textContent = t('leaderboardTitle');

    function beginLeaderboardSlideContent() {
      capturePlayerNameSnapshot();
      gameOverOverlay.classList.add('show-leaderboard');
      leaderboardScoresForDisplay = null;
      leaderboardForceNeighborNames = null;
      if (gameMode === 'leaderboard_force' && secretModeActive) {
        leaderboardPlayerRank = Math.max(1, Math.min(LEADERBOARD_SIZE, forcedLeaderboardRank));
        var R = leaderboardPlayerRank;
        var S = gameOverFinalScore;
        function tierFromDelta(delta) {
          var tier = 0;
          var cum = 0;
          var step;
          while (cum < delta) {
            step = 20 + (tier % 11);
            cum += step;
            if (cum < delta) tier++;
          }
          return tier;
        }
        leaderboardScoresForDisplay = [];
        for (var r = 1; r <= LEADERBOARD_SIZE; r++) {
          if (r >= 1 && r <= 10) {
            leaderboardScoresForDisplay.push(999);
          } else if (r >= 11 && r <= 17) {
            leaderboardScoresForDisplay.push(998);
          } else if (r >= 18 && r <= 35) {
            leaderboardScoresForDisplay.push(997);
          } else if (r < R) {
            var tier = tierFromDelta(R - r);
            leaderboardScoresForDisplay.push(Math.min(999, S + tier));
          } else if (r === R) {
            leaderboardScoresForDisplay.push(S);
          } else {
            var tierBelow = tierFromDelta(r - R);
            leaderboardScoresForDisplay.push(Math.max(0, S - tierBelow));
          }
        }
        patchLeaderboardNeighborScores(leaderboardScoresForDisplay, R, S);
        enforceLeaderboardScoresNonIncreasingBelowPlayer(leaderboardScoresForDisplay, R);
        leaderboardForceNeighborNames = buildLeaderboardForceNeighborNames(R);
      } else {
        leaderboardPlayerRank = getLeaderboardRank(gameOverFinalScore);
      }
      leaderboardDisplayScoreForCurrent = gameOverFinalScore;
      if (leaderboardSubtitleEl) {
        leaderboardSubtitleEl.textContent = t('leaderboardYourRank').replace(/#\{rank\}/g, String(leaderboardPlayerRank).replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
      }
      leaderboardScrollOffset = 0;
      var rowH = LEADERBOARD_ROW_HEIGHT;
      var canvasH = leaderboardCanvasEl.height;
      var visibleCount = Math.floor(canvasH / rowH);
      leaderboardScrollTarget = Math.max(0, (leaderboardPlayerRank - 2) * rowH);
      if (leaderboardScrollTarget > (LEADERBOARD_SIZE - visibleCount) * rowH) {
        leaderboardScrollTarget = Math.max(0, (LEADERBOARD_SIZE - visibleCount) * rowH);
      }
      drawLeaderboardCanvas();
      if (leaderboardRafId) cancelAnimationFrame(leaderboardRafId);
      setTimeout(function () {
        leaderboardScrollStartTime = Date.now();
        animateLeaderboardScroll();
      }, 3000);
    }

    if (shouldSubmitLeaderboardEntry()) {
      leaderboardSubmitDoneThisGame = true;
      submitLeaderboardNetwork(beginLeaderboardSlideContent);
    } else {
      beginLeaderboardSlideContent();
    }
  }

  function getDisplayScore() {
    return score;
  }

  // Alleen donkere pixels die aan de rand grenzen transparant (achtergrond), niet zwarte details zoals ogen
  function makeDarkBackgroundTransparent(d, w, h, threshold) {
    var len = w * h;
    var dark = [];
    for (var i = 0; i < len; i++) {
      dark.push(d[i * 4] < threshold && d[i * 4 + 1] < threshold && d[i * 4 + 2] < threshold);
    }
    var transparent = [];
    for (var t = 0; t < len; t++) transparent.push(false);
    var stack = [];
    for (var x = 0; x < w; x++) {
      if (dark[x]) { stack.push(x); transparent[x] = true; }
      if (dark[(h - 1) * w + x]) { stack.push((h - 1) * w + x); transparent[(h - 1) * w + x] = true; }
    }
    for (var y = 0; y < h; y++) {
      if (dark[y * w]) { stack.push(y * w); transparent[y * w] = true; }
      if (dark[y * w + w - 1]) { stack.push(y * w + w - 1); transparent[y * w + w - 1] = true; }
    }
    while (stack.length > 0) {
      var p = stack.pop();
      var px = p % w;
      var py = (p / w) | 0;
      var neighbors = [p - 1, p + 1, p - w, p + w];
      for (var n = 0; n < 4; n++) {
        var q = neighbors[n];
        if (q >= 0 && q < len && dark[q] && !transparent[q]) {
          transparent[q] = true;
          stack.push(q);
        }
      }
    }
    for (var j = 0; j < len; j++) {
      if (transparent[j]) d[j * 4 + 3] = 0;
    }
  }

  function loadForcingSettings() {
    try {
      if (spectatorMode) {
        licenseValid = true;
        licenseRegistered = false;
        apiKey = spectatorApiKey;
        apiModeEnabled = true;
        gameMode = 'normal';
        secretModeActive = false;
        forcingMode = false;
        forcedScore = 0;
        forcedTime = 15;
        forcedDelay = 0;
        forcingAfter = 'off';
        forcingAfterMode = 'normal';
        forcedLeaderboardRank = 5000;
        multipleForceScores = [{ score: 3, time: 15 }];
        multipleForceRunIndex = 0;
        effectiveForcedScore = 0;
        effectiveForcedTime = 15;
        soundOn = localStorage.getItem('skyHopperSoundOn') !== '0';
        var storedSfxSp = localStorage.getItem('skyHopperSfxVolume');
        var storedMusicSp = localStorage.getItem('skyHopperMusicVolume');
        sfxVolume = storedSfxSp !== null ? Math.min(1, Math.max(0, parseFloat(storedSfxSp) || 0.7)) : 0.7;
        musicVolume = storedMusicSp !== null ? Math.min(1, Math.max(0, parseFloat(storedMusicSp) || 0.6)) : 0.6;
        lqMode = localStorage.getItem('skyHopperLqMode') === '1';
        return;
      }
      // Licenca sempre valida no clone
      licenseValid = true;
      licenseRegistered = true;
      try {
        localStorage.setItem('skyHopperLicenseValid', '1');
        localStorage.setItem('skyHopperLicenseRegistered', '1');
        localStorage.setItem('skyHopperLicenseTrial', '0');
        if (!localStorage.getItem('skyHopperLicenseKey')) {
          localStorage.setItem('skyHopperLicenseKey', 'DEV');
        }
      } catch (e) {}
      var mode = localStorage.getItem('skyHopperGameMode');
      if (mode === 'forcing' || mode === 'other' || mode === 'leaderboard_force') {
        gameMode = mode;
      } else if (localStorage.getItem('skyHopperForcingMode') === '1') {
        gameMode = 'forcing'; // migratie van oude checkbox
      } else {
        gameMode = 'normal';
      }
      if (!licenseValid) gameMode = 'normal';
      secretModeActive = localStorage.getItem('skyHopperSecretModeActive') === '1';
      forcingMode = (gameMode === 'forcing' && secretModeActive);
      var s = localStorage.getItem('skyHopperForcedScore');
      forcedScore = s !== null ? Math.min(99, Math.max(0, parseInt(s, 10) || 0)) : 0;
      var lbRank = localStorage.getItem('skyHopperForcedLeaderboardRank');
      forcedLeaderboardRank = lbRank !== null ? Math.min(LEADERBOARD_SIZE, Math.max(1, parseInt(lbRank, 10) || 5000)) : 5000;
      var t = localStorage.getItem('skyHopperForcedTime');
      forcedTime = t !== null ? Math.min(599, Math.max(0, parseInt(t, 10) || 0)) : 15;
      var d = localStorage.getItem('skyHopperForcedDelay');
      forcedDelay = d !== null ? Math.min(20, Math.max(0, parseInt(d, 10) || 0)) : 0;
      var after = localStorage.getItem('skyHopperForcingAfter');
      forcingAfter = (after === 'repeat' || after === 'next') ? after : 'off';
      var afterMode = localStorage.getItem('skyHopperForcingAfterMode');
      forcingAfterMode = (afterMode === 'forcing' || afterMode === 'other' || afterMode === 'leaderboard_force') ? afterMode : 'normal';
      var mf = localStorage.getItem('skyHopperMultipleForceScores');
      if (mf) {
        try {
          var arr = JSON.parse(mf);
          if (Array.isArray(arr) && arr.length > 0) {
            multipleForceScores = arr.map(function (item) {
              if (item && typeof item === 'object' && 'score' in item) {
                return { score: Math.min(99, Math.max(0, parseInt(item.score, 10) || 0)), time: Math.min(599, Math.max(0, parseInt(item.time, 10) || 15)) };
              }
              var n = parseInt(item, 10);
              return { score: isNaN(n) ? 0 : Math.min(99, Math.max(0, n)), time: 15 };
            });
          } else { multipleForceScores = [{ score: 3, time: 15 }]; }
        } catch (e) { multipleForceScores = [{ score: 3, time: 15 }]; }
      } else { multipleForceScores = [{ score: 3, time: 15 }]; }
      forcedLeaderboardNamesAbove = parseForcedLbNamesArrayFromStorage(localStorage.getItem('skyHopperForcedLbNamesAbove'));
      forcedLeaderboardNamesBelow = parseForcedLbNamesArrayFromStorage(localStorage.getItem('skyHopperForcedLbNamesBelow'));
      soundOn = localStorage.getItem('skyHopperSoundOn') !== '0';
      var storedSfx = localStorage.getItem('skyHopperSfxVolume');
      var storedMusic = localStorage.getItem('skyHopperMusicVolume');
      sfxVolume = storedSfx !== null ? Math.min(1, Math.max(0, parseFloat(storedSfx) || 0.7)) : 0.7;
      musicVolume = storedMusic !== null ? Math.min(1, Math.max(0, parseFloat(storedMusic) || 0.6)) : 0.6;
      apiModeEnabled = localStorage.getItem('skyHopperApiMode') === '1';
      apiKey = (localStorage.getItem('skyHopperApiKey') || '').trim();
      lqMode = localStorage.getItem('skyHopperLqMode') === '1';
    } catch (e) {
      licenseValid = false;
      licenseRegistered = false;
      gameMode = 'normal';
      secretModeActive = false;
      forcingMode = false;
      forcedScore = 0;
      forcedTime = 15;
      forcedDelay = 0;
      forcingAfter = 'off';
      forcingAfterMode = 'normal';
      forcedLeaderboardRank = 5000;
      forcedLeaderboardNamesAbove = [''];
      forcedLeaderboardNamesBelow = [''];
      multipleForceScores = [{ score: 3, time: 15 }];
      multipleForceRunIndex = 0;
      effectiveForcedScore = 0;
      effectiveForcedTime = 15;
      soundOn = true;
      sfxVolume = 0.7;
      musicVolume = 0.6;
      lqMode = false;
    }
  }

  var pushSessionConfigTimer = null;

  function pushSessionConfigToServer() {
    if (spectatorMode || !apiModeEnabled || !apiKey) return;
    var body = {
      gameMode: gameMode,
      forcedScore: forcedScore,
      forcedLeaderboardRank: forcedLeaderboardRank,
      forcedLeaderboardNamesAbove: forcedLeaderboardNamesAbove,
      forcedLeaderboardNamesBelow: forcedLeaderboardNamesBelow,
      forcedTime: forcedTime,
      forcedDelay: forcedDelay,
      multipleForceScores: multipleForceScores,
      secretModeActive: secretModeActive,
      forcingAfter: forcingAfter,
      forcingAfterMode: forcingAfterMode
    };
    fetch(getApiUrl('/api/session/config'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': apiKey },
      body: JSON.stringify(body)
    }).catch(function () {});
  }

  /** Zet de actuele secret-mode config op de server zodat ?k= / toeschouwers dezelfde modus krijgen. */
  function schedulePushSessionConfig() {
    if (spectatorMode || !apiModeEnabled || !apiKey) return;
    if (pushSessionConfigTimer) clearTimeout(pushSessionConfigTimer);
    pushSessionConfigTimer = setTimeout(function () {
      pushSessionConfigTimer = null;
      pushSessionConfigToServer();
    }, 400);
  }

  /** Direct pushen (bijv. na sluiten secret menu); wist pending debounce zodat er geen dubbele POST volgt. */
  function pushSessionConfigImmediate() {
    if (spectatorMode || !apiModeEnabled || !apiKey) return;
    if (pushSessionConfigTimer) {
      clearTimeout(pushSessionConfigTimer);
      pushSessionConfigTimer = null;
    }
    pushSessionConfigToServer();
  }

  function saveForcingSettings() {
    // Funcao reforçada para garantir que TODAS as configurações sejam salvas
    try {
      if (spectatorMode) {
        localStorage.setItem('skyHopperSoundOn', soundOn ? '1' : '0');
        localStorage.setItem('skyHopperSfxVolume', String(sfxVolume));
        localStorage.setItem('skyHopperMusicVolume', String(musicVolume));
        localStorage.setItem('skyHopperLqMode', lqMode ? '1' : '0');
        return;
      }
      localStorage.setItem('skyHopperGameMode', gameMode);
      localStorage.setItem('skyHopperSecretModeActive', secretModeActive ? '1' : '0');
      localStorage.setItem('skyHopperForcedScore', String(forcedScore));
      localStorage.setItem('skyHopperForcedTime', String(forcedTime));
      localStorage.setItem('skyHopperForcedDelay', String(forcedDelay));
      localStorage.setItem('skyHopperForcingAfter', forcingAfter);
      localStorage.setItem('skyHopperForcingAfterMode', forcingAfterMode);
      localStorage.setItem('skyHopperForcedLeaderboardRank', String(forcedLeaderboardRank));
      try {
        localStorage.setItem('skyHopperForcedLbNamesAbove', JSON.stringify(forcedLeaderboardNamesAbove));
        localStorage.setItem('skyHopperForcedLbNamesBelow', JSON.stringify(forcedLeaderboardNamesBelow));
      } catch (e) {}
      localStorage.setItem('skyHopperMultipleForceScores', JSON.stringify(multipleForceScores));
      localStorage.setItem('skyHopperSoundOn', soundOn ? '1' : '0');
      localStorage.setItem('skyHopperSfxVolume', String(sfxVolume));
      localStorage.setItem('skyHopperMusicVolume', String(musicVolume));
      localStorage.setItem('skyHopperApiMode', apiModeEnabled ? '1' : '0');
      localStorage.setItem('skyHopperApiKey', apiKey);
      localStorage.setItem('skyHopperLqMode', lqMode ? '1' : '0');
      schedulePushSessionConfig();
    } catch (e) {}
  }

  function getApiUrl(path) {
    var fixed = (SKY_HOPPER_API_BASE && String(SKY_HOPPER_API_BASE).trim())
      ? String(SKY_HOPPER_API_BASE).trim().replace(/\/+$/, '')
      : '';
    var base = fixed || (typeof window !== 'undefined' && window.location && window.location.origin);
    return (base + path).replace(/([^:]\/)\/+/g, '$1');
  }

  function applyApiConfig(data) {
    if (!data || typeof data !== 'object') return;
    /* Alleen toeschouwers: GET-config toepassen. Als host dit ook doet, wint een snelle GET-race vaak
       vóór de POST na sluiten menu en springen score/tijd terug naar oude serverwaarden. */
    if (!spectatorMode) return;
    if (data.gameMode !== undefined) gameMode = (data.gameMode === 'forcing' || data.gameMode === 'other' || data.gameMode === 'leaderboard_force') ? data.gameMode : 'normal';
    if (data.forcedScore !== undefined) forcedScore = Math.min(99, Math.max(0, parseInt(data.forcedScore, 10) || 0));
    if (data.forcedLeaderboardRank !== undefined) forcedLeaderboardRank = Math.min(10000, Math.max(1, parseInt(data.forcedLeaderboardRank, 10) || 5000));
    if (data.forcedLeaderboardNamesAbove !== undefined && Array.isArray(data.forcedLeaderboardNamesAbove)) {
      forcedLeaderboardNamesAbove = normalizeForcedLbNamesArray(data.forcedLeaderboardNamesAbove);
    }
    if (data.forcedLeaderboardNamesBelow !== undefined && Array.isArray(data.forcedLeaderboardNamesBelow)) {
      forcedLeaderboardNamesBelow = normalizeForcedLbNamesArray(data.forcedLeaderboardNamesBelow);
    }
    if (data.forcedTime !== undefined) forcedTime = Math.min(599, Math.max(0, parseInt(data.forcedTime, 10) || 15));
    if (data.forcedDelay !== undefined) forcedDelay = Math.min(20, Math.max(0, parseInt(data.forcedDelay, 10) || 0));
    if (data.forcingAfter === 'off' || data.forcingAfter === 'repeat' || data.forcingAfter === 'next') forcingAfter = data.forcingAfter;
    if (data.forcingAfterMode === 'forcing' || data.forcingAfterMode === 'other' || data.forcingAfterMode === 'leaderboard_force' || data.forcingAfterMode === 'normal') forcingAfterMode = data.forcingAfterMode;
    if (data.multipleForceScores !== undefined && Array.isArray(data.multipleForceScores)) multipleForceScores = data.multipleForceScores.map(function (e) { return { score: Math.min(99, Math.max(0, parseInt(e && e.score, 10) || 0)), time: Math.min(599, Math.max(0, parseInt(e && e.time, 10) || 15)) }; });
    if (data.secretModeActive !== undefined) secretModeActive = !!data.secretModeActive;
    forcingMode = (gameMode === 'forcing' && secretModeActive);
    if (typeof updateForcingStatusDot === 'function') updateForcingStatusDot();
  }

  function fetchAndStoreApiKey() {
    var licenseKey = getStoredLicenseKey();
    if (!licenseKey) return;
    var url = getApiUrl('/api/session/my-key');
    fetch(url, { method: 'GET', headers: { 'X-License-Key': licenseKey } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && data.apiKey) {
          apiKey = String(data.apiKey).trim();
          try { localStorage.setItem('skyHopperApiKey', apiKey); } catch (e) {}
          var el = getEl('apiKeyDisplay');
          if (el) el.textContent = apiKey;
          var tutOv = getEl('secretTutorialOverlay');
          if (tutOv && !tutOv.classList.contains('hidden')) fillSecretTutorialBody();
          schedulePushSessionConfig();
          updateSpectatorModeSection();
        }
      })
      .catch(function () {});
  }

  function fetchApiConfig() {
    if (!apiModeEnabled || !apiKey) return;
    var url = getApiUrl('/api/session/config');
    if (spectatorMode) {
      var sep = url.indexOf('?') >= 0 ? '&' : '?';
      url += sep + 'spectator=1&deviceId=' + encodeURIComponent(getDeviceId());
    }
    var headers = { 'X-API-Key': apiKey };
    if (spectatorMode) {
      headers['X-Spectator'] = '1';
      headers['X-Spectator-Device-Id'] = getDeviceId();
    }
    fetch(url, { method: 'GET', headers: headers })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) { if (data) applyApiConfig(data); })
      .catch(function () {});
  }

  function sendApiState() {
    /* Toeschouwers gebruiken dezelfde API-key; state gaat naar /api/session/update voor PeekSmith. */
    if (!apiModeEnabled || !apiKey) return;
    var url = getApiUrl('/api/session/update');
    var payload = {
      score: score,
      gameState: gameState,
      highScore: highScore,
      gameTimeMs: gameState === 'play' || gameState === 'over' || gameState === 'second' || gameState === 'second_out'
        ? (Date.now() - gameStartTime)
        : 0
    };
    if (gameState === 'over' && gameOverFinalScore > 0) {
      payload.leaderboardRank = getLeaderboardRank(gameOverFinalScore);
      payload.finalScore = gameOverFinalScore;
    } else if (gameState === 'play' || gameState === 'second' || gameState === 'second_out' || gameState === 'intro_fly' || gameState === 'intro_countdown' || gameState === 'intro_go' || gameState === 'start') {
      payload.leaderboardRank = getLeaderboardRank(score);
    }
    var body = JSON.stringify(payload);
    var now = Date.now();
    if (body === lastApiStateDedupeJson && now - lastApiStateDedupeTime < 180) return;
    lastApiStateDedupeJson = body;
    lastApiStateDedupeTime = now;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': apiKey },
      body: body
    }).catch(function () {});
  }

  function shouldSendApiStateOnTick() {
    return gameState === 'play' || gameState === 'over' || gameState === 'second' || gameState === 'second_out'
      || gameState === 'intro_fly' || gameState === 'intro_countdown' || gameState === 'intro_go' || gameState === 'start';
  }

  function startApiPolling() {
    if (apiConfigPollInterval) clearInterval(apiConfigPollInterval);
    if (apiStateSendInterval) clearInterval(apiStateSendInterval);
    if (!apiModeEnabled || !apiKey) return;
    fetchApiConfig();
    apiConfigPollInterval = setInterval(fetchApiConfig, 10000);
    apiStateSendInterval = setInterval(function () {
      if (shouldSendApiStateOnTick()) sendApiState();
    }, 2000);
  }

  function stopApiPolling() {
    if (apiConfigPollInterval) { clearInterval(apiConfigPollInterval); apiConfigPollInterval = null; }
    if (apiStateSendInterval) { clearInterval(apiStateSendInterval); apiStateSendInterval = null; }
  }

  function applyAudioVolumes() {
    try {
      var sfxLevel = soundOn ? sfxVolume : 0;
      var flapLevel = soundOn && !lqMode ? sfxVolume : 0;
      if (sfxFlapGain) sfxFlapGain.gain.value = flapLevel;
      if (flapSound) flapSound.volume = flapLevel;
      if (garyFlapSound) garyFlapSound.volume = flapLevel;
      if (gameOverSound) gameOverSound.volume = sfxLevel;
      if (scoreSound) scoreSound.volume = sfxLevel;
      if (drumRollSound) drumRollSound.volume = sfxLevel;
      if (heartbeatSound) heartbeatSound.volume = sfxLevel;
      if (bgMusic) bgMusic.volume = musicVolume;
      if (menuMusic) menuMusic.volume = musicVolume;
    } catch (e) {}
  }

  function ensureBackgroundMusicPlaying() {
    applyAudioVolumes();
    if (!bgMusic || musicVolume <= 0) return;
    try {
      if (menuMusic) {
        menuMusic.pause();
      }
      bgMusic.loop = true;
      bgMusic.volume = musicVolume;
      var playPromise = bgMusic.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(function () {
          // ignore autoplay restrictions
        });
      }
    } catch (e) {}
  }

  function ensureMenuMusicPlaying() {
    applyAudioVolumes();
    if (!menuMusic || musicVolume <= 0) return;
    // Alleen in menu/voor start spelen
    if (gameState === 'play') return;
    try {
      if (bgMusic) {
        bgMusic.pause();
      }
      menuMusic.loop = true;
      menuMusic.volume = musicVolume;
      var playPromise = menuMusic.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(function () {
          // ignore autoplay restrictions
        });
      }
    } catch (e) {}
  }

  /** Stop loop-muziek en heartbeat wanneer tab/app op achtergrond of bij sluiten (Page Visibility + pagehide). */
  function pauseAllPageAudio() {
    try {
      if (bgMusic) bgMusic.pause();
      if (menuMusic) menuMusic.pause();
      if (heartbeatSound) heartbeatSound.pause();
    } catch (e) {}
  }

  /** Hervat geluid passend bij huidige gameState wanneer de pagina weer zichtbaar is. */
  function resumeMusicIfPageVisible() {
    if (typeof document !== 'undefined' && document.hidden) return;
    applyAudioVolumes();
    if (!soundOn || musicVolume <= 0) return;
    if (gameState === 'paused' || gameState === 'pause_countdown') return;
    if (gameState === 'second') {
      try {
        if (heartbeatSound) heartbeatSound.play();
      } catch (e) {}
      return;
    }
    if (gameState === 'over') return;
    if (gameState === 'play' || gameState === 'intro_fly' || gameState === 'intro_countdown' || gameState === 'intro_go' || gameState === 'second_out') {
      ensureBackgroundMusicPlaying();
      return;
    }
    ensureMenuMusicPlaying();
  }

  function onDocumentVisibilityChange() {
    if (typeof document === 'undefined') return;
    if (document.hidden) {
      pauseAllPageAudio();
    } else {
      resumeMusicIfPageVisible();
    }
  }

  function makeLogoBackgroundTransparent(img) {
    if (!img || !img.naturalWidth) return;
    if (img.src && img.src.indexOf('data:') === 0) return;
    var w = img.naturalWidth;
    var h = img.naturalHeight;
    var tmp = document.createElement('canvas');
    tmp.width = w;
    tmp.height = h;
    var tctx = tmp.getContext('2d');
    tctx.drawImage(img, 0, 0);
    var data = tctx.getImageData(0, 0, w, h);
    var d = data.data;
    var threshold = 35;
    for (var i = 0; i < d.length; i += 4) {
      if (d[i] <= threshold && d[i + 1] <= threshold && d[i + 2] <= threshold) d[i + 3] = 0;
    }
    tctx.putImageData(data, 0, 0);
    img.src = tmp.toDataURL('image/png');
  }

  function updateHighScoreDisplay() {
    if (highScoreEl) highScoreEl.textContent = highScore;
    var topEl = getEl('highScoreDisplayTop');
    if (topEl) topEl.textContent = highScore;
  }

  function getForcingVersionString() {
    if (gameMode === 'forcing') {
      var s = 'version: ' + forcedScore + '.' + forcedTime + '.' + forcedDelay;
      s += ' (0/' + forcedDelay + ')';
      return s;
    }
    if (gameMode === 'other' && multipleForceScores && multipleForceScores.length > 0) {
      var parts = ['version: ' + multipleForceScores.length];
      for (var i = 0; i < multipleForceScores.length; i++) {
        var e = multipleForceScores[i];
        parts.push((e.score || 0) + '.' + (e.time || 15));
      }
      return parts.join('\u00B7');
    }
    if (gameMode === 'leaderboard_force') return 'rank: ' + forcedLeaderboardRank;
    return 'version: 0.0.0 (0/0)';
  }

  function updateForcingStatusDot() {
    var dot = getEl('forcingStatusDot');
    var valueEl = getEl('forcingStatusValue');
    if (!dot) return;
    dot.classList.remove('mode-forcing', 'mode-other', 'mode-leaderboard-force', 'active', 'has-value');
    if (valueEl) valueEl.textContent = '';
    dot.classList.remove('hidden');
    var versionStr = getForcingVersionString();
    if (valueEl && versionStr) {
      valueEl.textContent = versionStr;
      dot.classList.add('has-value');
    }
    if (gameMode === 'forcing') {
      dot.classList.add('mode-forcing');
      dot.classList.toggle('active', isForcingRun());
    } else if (gameMode === 'other') {
      dot.classList.add('mode-other');
    } else if (gameMode === 'leaderboard_force') {
      dot.classList.add('mode-leaderboard-force');
    }
  }

  function getStoredLicenseKey() {
    try { return localStorage.getItem('skyHopperLicenseKey') || ''; } catch (e) { return ''; }
  }

  function checkLicenseRegistrationStatus() {
    // Sempre registrado no clone
    licenseRegistered = true;
    updateLicenseUI();
  }

  function updateSpectatorModeSection() {
    var wrap = getEl('spectatorModeSection');
    var hintEl = getEl('spectatorModeHint');
    var urlLine = getEl('spectatorModeUrlLine');
    var urlEl = getEl('spectatorModeUrl');
    if (!wrap) return;
    if (spectatorMode) {
      wrap.classList.add('hidden');
      return;
    }
    wrap.classList.remove('hidden');
    if (hintEl) hintEl.textContent = t('spectatorModeHint');
    if (urlEl && urlLine) {
      var key = (apiKey && String(apiKey).trim()) || '';
      if (key.length === 5) {
        var base = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : '';
        urlEl.textContent = base + '/?k=' + key;
        urlLine.classList.remove('hidden');
      } else {
        urlEl.textContent = '';
        urlLine.classList.add('hidden');
      }
    }
  }

  /** Pairing: alleen trial expliciet ('1'); ontbreekt of '0' = volledige licentie (oude clients hadden geen key). */
  function isFullLicenseForPairing() {
    if (!licenseValid || spectatorMode) return false;
    try {
      return localStorage.getItem('skyHopperLicenseTrial') !== '1';
    } catch (e) {
      return true;
    }
  }

  function updatePairingRegisterLockedState() {
    var sec = getEl('pairingRegisterSection');
    var overlay = getEl('pairingRegisterLockOverlay');
    var inp = getEl('pairingRegisterInput');
    var btn = getEl('pairingRegisterBtn');
    if (!sec || !overlay) return;
    if (sec.classList.contains('hidden')) return;
    var locked = !isFullLicenseForPairing();
    if (locked) {
      sec.classList.add('pairing-register-section--locked');
      overlay.classList.remove('hidden');
      overlay.setAttribute('aria-hidden', 'false');
      if (inp) inp.disabled = true;
      if (btn) btn.disabled = true;
    } else {
      sec.classList.remove('pairing-register-section--locked');
      overlay.classList.add('hidden');
      overlay.setAttribute('aria-hidden', 'true');
      if (inp) inp.disabled = false;
      if (btn) btn.disabled = false;
    }
  }

  function updatePairingRegisterVisibility() {
    var sec = getEl('pairingRegisterSection');
    if (!sec) return;
    if (spectatorMode || !licenseValid) {
      sec.classList.add('hidden');
    } else {
      sec.classList.remove('hidden');
    }
    updatePairingRegisterLockedState();
  }

  function openPairingFullLicenseModal() {
    var ov = getEl('pairingFullLicenseOverlay');
    if (!ov) return;
    var el;
    if (el = getEl('pairingFullLicenseTitle')) el.textContent = t('pairingFullLicenseModalTitle');
    if (el = getEl('pairingFullLicenseBody')) el.textContent = t('pairingFullLicenseModalBody');
    var link = getEl('pairingFullLicenseLink');
    if (link) {
      link.href = getPurchaseUrl();
      link.textContent = t('gracePurchaseButton');
    }
    if (el = getEl('pairingFullLicenseCloseBtn')) el.textContent = t('pairingFullLicenseModalClose');
    ov.classList.remove('hidden');
    ov.setAttribute('aria-hidden', 'false');
  }

  function closePairingFullLicenseModal() {
    var ov = getEl('pairingFullLicenseOverlay');
    if (ov) {
      ov.classList.add('hidden');
      ov.setAttribute('aria-hidden', 'true');
    }
  }

  /** Vaste '.' staat buiten het veld; suffix mag geen punt bevatten (voorkomt ..name). */
  function onPairingRegisterInputSanitize() {
    var inp = getEl('pairingRegisterInput');
    if (!inp) return;
    var v = String(inp.value || '').replace(/\./g, '');
    if (v !== inp.value) inp.value = v;
  }

  function onPairingRegisterSubmit() {
    var inp = getEl('pairingRegisterInput');
    var statusEl = getEl('pairingRegisterStatus');
    if (!isFullLicenseForPairing()) {
      if (statusEl) statusEl.textContent = t('pairingRegisterFullOnly');
      return;
    }
    var suffix = inp && typeof inp.value === 'string' ? inp.value.trim() : '';
    var raw = '.' + suffix;
    var nn = normalizePairingNickname(raw);
    if (!nn) {
      if (statusEl) statusEl.textContent = t('pairingRegisterInvalid');
      return;
    }
    var k = (apiKey && String(apiKey).trim()) || '';
    if (!/^[0-9]{5}$/.test(k)) {
      if (statusEl) statusEl.textContent = t('pairingRegisterNeedApi');
      return;
    }
    if (statusEl) statusEl.textContent = '…';
    fetch(getApiUrl('/api/session/pairing-register'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': k },
      body: JSON.stringify({ pairing: nn })
    })
      .then(function (r) {
        return r.json().then(function (d) {
          return { status: r.status, data: d };
        }).catch(function () {
          return { status: r.status, data: {} };
        });
      })
      .then(function (res) {
        if (res.status === 200 && res.data && res.data.ok) {
          if (statusEl) statusEl.textContent = t('pairingRegisterOk');
          var pn = res.data.pairing;
          var suffix = '';
          if (typeof pn === 'string' && pn.charAt(0) === '.') suffix = pn.slice(1);
          setStoredPairingNicknameSuffix(suffix);
          if (inp) inp.value = suffix;
          return;
        }
        if (res.status === 403) {
          if (statusEl) statusEl.textContent = t('pairingRegisterFullOnly');
          return;
        }
        if (res.status === 409) {
          if (statusEl) statusEl.textContent = t('pairingRegisterTaken');
          return;
        }
        if (statusEl) statusEl.textContent = t('pairingRegisterError');
      })
      .catch(function () {
        if (statusEl) statusEl.textContent = t('pairingRegisterError');
      });
  }

  function updateLicenseUI() {
    var statusEl = getEl('licenseStatus');
    if (spectatorMode) {
      var buyWrap0 = getEl('licenseBuyWrap');
      if (buyWrap0) buyWrap0.classList.add('hidden');
      if (statusEl) statusEl.textContent = t('licenseStatusSpectator');
      if (statusEl) statusEl.classList.remove('not-activated');
      var reqEl0 = getEl('forcingLicenseRequired');
      var optEl0 = getEl('forcingOptions');
      if (reqEl0) reqEl0.classList.add('hidden');
      if (optEl0) optEl0.style.display = '';
      var keyRow0 = getEl('currentKeyRow');
      var regSection0 = getEl('registerKeySection');
      if (keyRow0) keyRow0.classList.add('hidden');
      if (regSection0) regSection0.classList.add('hidden');
      var tutBtn0 = getEl('secretTutorialBtn');
      if (tutBtn0) tutBtn0.hidden = true;
      syncResetDeviceSectionVisibility();
      updateSpectatorModeSection();
      updatePairingRegisterVisibility();
      return;
    }
    if (statusEl) statusEl.textContent = licenseValid ? t('licenseStatusActivated') : t('licenseStatusNotActivated');
    if (statusEl) statusEl.classList.toggle('not-activated', !licenseValid);
    var reqEl = getEl('forcingLicenseRequired');
    var optEl = getEl('forcingOptions');
    if (reqEl) reqEl.classList.toggle('hidden', licenseValid);
    if (optEl) optEl.style.display = licenseValid ? '' : 'none';
    var keyRow = getEl('currentKeyRow');
    var keyDisplay = getEl('currentKeyDisplay');
    var regSection = getEl('registerKeySection');
    var storedKey = getStoredLicenseKey();
    if (keyRow) keyRow.classList.toggle('hidden', !licenseValid || !storedKey);
    if (keyDisplay && storedKey) keyDisplay.textContent = storedKey;
    if (regSection) regSection.classList.toggle('hidden', !licenseValid || licenseRegistered);
    var tutBtn = getEl('secretTutorialBtn');
    if (tutBtn) tutBtn.hidden = !licenseValid;
    var buyWrap = getEl('licenseBuyWrap');
    if (buyWrap) {
      buyWrap.classList.toggle('hidden', licenseValid);
      var buyLink = getEl('licenseBuyKeyLink');
      if (buyLink) {
        buyLink.href = getPurchaseUrl();
        buyLink.textContent = t('licenseBuyKeyLink');
      }
    }
    syncResetDeviceSectionVisibility();
    updateSpectatorModeSection();
    updatePairingRegisterVisibility();
  }

  /** Productpagina High Score op Premium Magic, taal via game-ui. */
  function getPurchaseUrl() {
    var lang = currentLang || 'en';
    if (lang === 'nl') return 'https://www.premiummagic.nl/product/high-score/?bm=magic';
    if (lang === 'de') return 'https://www.premiummagic.nl/de/product/high-score/?bm=magic';
    if (lang === 'fr') return 'https://www.premiummagic.nl/fr/product/high-score/?bm=magic';
    if (lang === 'es') return 'https://www.premiummagic.nl/es/product/high-score/?bm=magic';
    return 'https://www.premiummagic.nl/en/product/high-score/?bm=magic';
  }

  function refreshPurchaseGraceTexts() {
    var el;
    if (el = getEl('purchaseGraceTitle')) el.textContent = t('gracePurchaseTitle');
    if (el = getEl('purchaseGraceBody')) el.textContent = t('gracePurchaseBody');
    if (el = getEl('purchaseGraceCloseBtn')) el.textContent = t('gracePurchaseClose');
    var link = getEl('purchaseGraceLink');
    if (link) {
      link.href = getPurchaseUrl();
      link.textContent = t('gracePurchaseButton');
    }
  }

  function closePurchaseGraceModal() {
    var ov = getEl('purchaseGraceOverlay');
    if (ov) {
      ov.classList.add('hidden');
      ov.setAttribute('aria-hidden', 'true');
    }
  }

  function showPurchaseGraceModal() {
    refreshPurchaseGraceTexts();
    var link = getEl('purchaseGraceLink');
    if (link) link.href = getPurchaseUrl();
    var ov = getEl('purchaseGraceOverlay');
    if (ov) {
      ov.classList.remove('hidden');
      ov.setAttribute('aria-hidden', 'false');
    }
  }

  function applyGraceExpiredAndShowModal() {
    if (spectatorMode) return;
    try {
      localStorage.setItem('skyHopperLicenseValid', '0');
      localStorage.removeItem('skyHopperLicenseRegistered');
      localStorage.removeItem('skyHopperLicenseKey');
      localStorage.removeItem('skyHopperApiKey');
      localStorage.removeItem('skyHopperLicenseTrial');
    } catch (e) {}
    apiKey = '';
    var li = getEl('licenseInput');
    if (li) li.value = '';
    loadForcingSettings();
    setPendingResetDeviceSection(false);
    showPurchaseGraceModal();
    updateLicenseUI();
    updateForcingStatusDot();
  }

  function revalidateLicenseIfStored() {
    if (spectatorMode) return;
    var key = getStoredLicenseKey();
    if (!key) return;
    // Sem revalidacao remota no clone
    return;
  }

  function initDom() {
    canvas = document.getElementById('gameCanvas');
    /* geen desynchronized: op Samsung/Android vaak tearing/flikkering + blauwe randen (compositor vs canvas) */
    try {
      ctx = canvas.getContext('2d', { alpha: false });
    } catch (e) {
      ctx = null;
    }
    if (!ctx) ctx = canvas.getContext('2d');
    try {
      ctx.imageSmoothingEnabled = false;
    } catch (e) {}
    scoreEl = getEl('scoreDisplay');
    finalScoreEl = getEl('finalScore');
    highScoreEl = getEl('highScoreDisplay');
    gameOverTimerEl = getEl('gameOverTimer');
    gameOverOverlay = getEl('gameOverOverlay');
    restartBtn = getEl('restartBtn');
    restartCountdownWrap = getEl('restartCountdownWrap');
    restartCountdownEl = getEl('restartCountdown');
    beginnerMenu = getEl('beginnerMenu');
    playBtn = getEl('playBtn');
    confettiCanvas = getEl('confettiCanvas');
    if (confettiCanvas) confettiCtx = confettiCanvas.getContext('2d');
    secondChanceOverlay = getEl('secondChanceOverlay');
    secondChanceBtn = getEl('secondChanceBtn');
    pauseBtn = getEl('pauseBtn');
    pauseOverlay = getEl('pauseOverlay');
    pauseResumeBtn = getEl('pauseResumeBtn');
    pauseMenuBtn = getEl('pauseMenuBtn');
    pauseSettingsBtn = getEl('pauseSettingsBtn');
    pauseLangBtn = getEl('pauseLangBtn');
    pauseCountdownOverlay = getEl('pauseCountdownOverlay');
    pauseCountdownEl = getEl('pauseCountdownNumber');
    leaderboardCanvasEl = getEl('leaderboardCanvas');
    leaderboardSubtitleEl = getEl('leaderboardSubtitle');
    leaderboardRestartBtn = getEl('leaderboardRestartBtn');
    leaderboardMenuBtn = getEl('leaderboardMenuBtn');

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 0);
    requestAnimationFrame(function () { resizeCanvas(); });

    loadHighScore();
    loadLeaderboard();
    try {
      var pn = getEl('playerNameInput');
      if (pn) {
        var storedName = localStorage.getItem(PLAYER_NAME_STORAGE_KEY);
        if (storedName) pn.value = storedName;
        function syncNameFromField() {
          try { capturePlayerNameSnapshot(); } catch (e) {}
          onPairingNicknameFieldChanged();
        }
        pn.addEventListener('input', syncNameFromField);
        pn.addEventListener('change', syncNameFromField);
        pn.addEventListener('blur', syncNameFromField);
        syncNameFromField();
      }
    } catch (e) {}
    fetchLeaderboardNames();
    loadForcingSettings();
    schedulePushSessionConfig();
    resizeCanvas();
    fetchApiConfig();
    startApiPolling();
    updateHighScoreDisplay();
    updateForcingStatusDot();
    updateLicenseUI();
    if (licenseValid && !spectatorMode) checkLicenseRegistrationStatus();
    revalidateLicenseIfStored();
    try {
      flapSound = new Audio('sfx-flap.wav');
      try {
        flapSound.preload = 'auto';
      } catch (e) {}
      garyFlapSound = new Audio('sounds/gary_meow.mp3');
      try {
        garyFlapSound.preload = 'auto';
      } catch (e) {}
      gameOverSound = new Audio('sfx-gameover.wav');
      scoreSound = new Audio('sfx-score.wav');
      drumRollSound = new Audio('sfx-drumroll.wav');
      heartbeatSound = new Audio('sfx-heartbeat.wav');
      heartbeatSound.loop = true;
      bgMusic = new Audio('music-bg.wav');
      bgMusic.loop = true;
      menuMusic = new Audio('music-menu.wav');
      menuMusic.loop = true;
    } catch (e) {}
    loadSfxFlapBuffer();
    applyAudioVolumes();
    // Realtime audio UI events
    var volumeCb = getEl('volumeCheckbox');
    var sfxInput = getEl('sfxVolumeInput');
    var musicInput = getEl('musicVolumeInput');
    if (volumeCb) {
      volumeCb.addEventListener('change', function () {
        soundOn = volumeCb.checked;
        applyAudioVolumes();
      });
    }
    if (sfxInput) {
      sfxInput.addEventListener('input', function () {
        var v = parseInt(sfxInput.value, 10);
        if (!isNaN(v)) {
          sfxVolume = Math.min(1, Math.max(0, v / 100));
          applyAudioVolumes();
        }
      });
    }
    if (musicInput) {
      musicInput.addEventListener('input', function () {
        var v = parseInt(musicInput.value, 10);
        if (!isNaN(v)) {
          musicVolume = Math.min(1, Math.max(0, v / 100));
          applyAudioVolumes();
        }
      });
    }
    (function wireLqCheckboxSync() {
      var boxes = document.querySelectorAll('.lq-mode-cb');
      function applyLqFromCheckboxes(v) {
        var wasLq = lqMode;
        lqMode = v;
        for (var j = 0; j < boxes.length; j++) boxes[j].checked = v;
        if (lqMode && !wasLq) {
          puffs = [];
          confettiParticles = [];
        }
        try {
          localStorage.setItem('skyHopperLqMode', lqMode ? '1' : '0');
        } catch (e) {}
        applyAudioVolumes();
        resizeCanvas();
      }
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('change', function (e) {
          applyLqFromCheckboxes(e.target.checked);
        });
      }
    })();
    syncLqCheckboxesFromState();
    var srcs = CONFIG.characterSpriteSrcs;
    var loaded = 0;
    for (var i = 0; i < srcs.length; i++) {
      characterSprites[i] = new Image();
      characterSprites[i].onload = (function (idx) {
        return function () {
          var img = characterSprites[idx];
          var w = img.naturalWidth;
          var h = img.naturalHeight;
          var tmp = document.createElement('canvas');
          tmp.width = w;
          tmp.height = h;
          var tctx = tmp.getContext('2d');
          tctx.drawImage(img, 0, 0);
          var data = tctx.getImageData(0, 0, w, h);
          var d = data.data;
          makeDarkBackgroundTransparent(d, w, h, 30);
          tctx.putImageData(data, 0, 0);
          characterSpritesClean[idx] = document.createElement('canvas');
          characterSpritesClean[idx].width = w;
          characterSpritesClean[idx].height = h;
          characterSpritesClean[idx].getContext('2d').drawImage(tmp, 0, 0);
          loaded++;
          if (loaded === srcs.length) drawMenuSprites();
        };
      })(i);
      characterSprites[i].src = srcs[i];
    }
    var openSrcs = CONFIG.characterOpenSpriteSrcs || [];
    var openLoaded = 0;
    var openToLoad = 0;
    for (var o = 0; o < openSrcs.length; o++) {
      if (openSrcs[o]) openToLoad++;
    }
    function maybeDrawMenuAfterOpen() {
      openLoaded++;
      if (openLoaded >= openToLoad) drawMenuSprites();
    }
    for (var oi = 0; oi < openSrcs.length; oi++) {
      if (!openSrcs[oi]) {
        characterSpritesOpenClean[oi] = null;
        continue;
      }
      (function (idx) {
        var openImg = new Image();
        openImg.onload = function () {
          var w = openImg.naturalWidth;
          var h = openImg.naturalHeight;
          var tmp = document.createElement('canvas');
          tmp.width = w;
          tmp.height = h;
          var tctx = tmp.getContext('2d');
          tctx.drawImage(openImg, 0, 0);
          var data = tctx.getImageData(0, 0, w, h);
          var d = data.data;
          makeDarkBackgroundTransparent(d, w, h, 30);
          tctx.putImageData(data, 0, 0);
          characterSpritesOpenClean[idx] = document.createElement('canvas');
          characterSpritesOpenClean[idx].width = w;
          characterSpritesOpenClean[idx].height = h;
          characterSpritesOpenClean[idx].getContext('2d').drawImage(tmp, 0, 0);
          maybeDrawMenuAfterOpen();
        };
        openImg.onerror = maybeDrawMenuAfterOpen;
        openImg.src = openSrcs[idx];
      })(oi);
    }
    puffSprite = new Image();
    puffSprite.onload = function () {
      var w = puffSprite.naturalWidth;
      var h = puffSprite.naturalHeight;
      var tmp = document.createElement('canvas');
      tmp.width = w;
      tmp.height = h;
      var tctx = tmp.getContext('2d');
      tctx.drawImage(puffSprite, 0, 0);
      var data = tctx.getImageData(0, 0, w, h);
      var d = data.data;
      for (var j = 0; j < d.length; j += 4) {
        if (d[j] < 30 && d[j + 1] < 30 && d[j + 2] < 30) d[j + 3] = 0;
        if (d[j] > 248 && d[j + 1] > 248 && d[j + 2] > 248) d[j + 3] = 0;
      }
      tctx.putImageData(data, 0, 0);
      puffSpriteClean = document.createElement('canvas');
      puffSpriteClean.width = w;
      puffSpriteClean.height = h;
      puffSpriteClean.getContext('2d').drawImage(tmp, 0, 0);
    };
    puffSprite.src = 'images/puff.png';
    groundSprite = new Image();
    groundSprite.onload = function () {
      var w = groundSprite.naturalWidth;
      var h = groundSprite.naturalHeight;
      var tmp = document.createElement('canvas');
      tmp.width = w;
      tmp.height = h;
      var tctx = tmp.getContext('2d');
      tctx.drawImage(groundSprite, 0, 0);
      var data = tctx.getImageData(0, 0, w, h);
      var d = data.data;
      for (var j = 0; j < d.length; j += 4) {
        if (d[j] > 250 && d[j + 1] > 250 && d[j + 2] > 250) d[j + 3] = 0;
      }
      tctx.putImageData(data, 0, 0);
      groundSpriteClean = document.createElement('canvas');
      groundSpriteClean.width = w;
      groundSpriteClean.height = h;
      groundSpriteClean.getContext('2d').drawImage(tmp, 0, 0);
    };
    groundSprite.src = 'images/ground.png';
    backgroundSprite = new Image();
    backgroundSprite.src = 'images/background.png';
    backgroundSpriteCharacter2 = new Image();
    backgroundSpriteCharacter2.src = 'images/background-character2.png';
    backgroundSpriteCharacter3 = new Image();
    backgroundSpriteCharacter3.src = 'images/background-character3.png';
    backgroundSpriteCharacter4 = new Image();
    backgroundSpriteCharacter4.src = 'images/background-character4.png';
    backgroundSpriteGary = new Image();
    backgroundSpriteGary.src = 'images/background-gary.png';
    menuBackgroundSprite = new Image();
    menuBackgroundSprite.src = 'images/menu-background.png';
    pipeTexture = new Image();
    pipeTexture.onload = function () {
      var img = pipeTexture;
      var w = img.naturalWidth;
      var h = img.naturalHeight;
      var tmp = document.createElement('canvas');
      tmp.width = w;
      tmp.height = h;
      var tctx = tmp.getContext('2d');
      tctx.drawImage(img, 0, 0);
      var data = tctx.getImageData(0, 0, w, h);
      var d = data.data;
      var threshold = 45;
      for (var i = 0; i < d.length; i += 4) {
        if (d[i] <= threshold && d[i + 1] <= threshold && d[i + 2] <= threshold) d[i + 3] = 0;
      }
      tctx.putImageData(data, 0, 0);
      pipeTextureClean = document.createElement('canvas');
      pipeTextureClean.width = w;
      pipeTextureClean.height = h;
      pipeTextureClean.getContext('2d').drawImage(tmp, 0, 0);
    };
    pipeTexture.src = 'images/pipe.png';
    var logoImg = document.querySelector('.beginner-menu-logo');
    if (logoImg) {
      if (logoImg.complete && logoImg.naturalWidth) makeLogoBackgroundTransparent(logoImg);
      else logoImg.addEventListener('load', function () { makeLogoBackgroundTransparent(logoImg); });
      logoImg.addEventListener('click', onLogoClick);
    }
  }

  function onLogoClick() {
    if (spectatorMode) return;
    if (!licenseValid) {
      openForcingSettings();
      return;
    }
    // Logo alleen voor secret modi: bij Normaal doet klikken niets
    if (gameMode === 'normal') return;
    // Toggle geselecteerde secret modus aan/uit
    secretModeActive = !secretModeActive;
    forcingMode = (gameMode === 'forcing' && secretModeActive);
    if (!secretModeActive) {
      forcingReplayCount = 0;
      forceKillActive = false;
      forceKillDirection = 0;
      if (gameMode === 'other') multipleForceRunIndex = 0;
    }
    saveForcingSettings();
    updateForcingStatusDot();
  }

  function drawSpriteWithAspect(ctx, src, boxSize) {
    var sw = src.width;
    var sh = src.height;
    var maxDim = Math.max(sw, sh);
    var scale = boxSize / maxDim;
    var drawW = sw * scale;
    var drawH = sh * scale;
    var x = (boxSize - drawW) / 2;
    var y = (boxSize - drawH) / 2;
    ctx.drawImage(src, 0, 0, sw, sh, x, y, drawW, drawH);
  }

  function drawMenuSprites() {
    var big = getEl('birdPreviewCanvas');
    if (big && characterSpritesClean[selectedCharacterIndex]) {
      var size = 88;
      big.width = size;
      big.height = size;
      var bctx = big.getContext('2d');
      bctx.clearRect(0, 0, size, size);
      drawSpriteWithAspect(bctx, characterSpritesClean[selectedCharacterIndex], size);
    }
  }

  function resetBird() {
    bird.x = CONFIG.width * 0.3;
    bird.y = CONFIG.height / 2;
    bird.vy = 0;
    pendingFlapImpulse = false;
  }

  /** Iets zachtere flap op touch / smal scherm (optioneel bovenop dt-normalisatie). */
  function shouldUseMobileFlapSoftening() {
    try {
      if (typeof window === 'undefined' || !window.matchMedia) return false;
      if (window.matchMedia('(pointer: coarse)').matches) return true;
      if (window.matchMedia('(max-width: 768px)').matches) return true;
    } catch (e) {}
    return false;
  }

  function getFlapStrength() {
    var s = CONFIG.flapStrength;
    if (shouldUseMobileFlapSoftening()) {
      s *= 0.93;
    }
    return s;
  }

  function resetGame() {
    pipes = [];
    puffs = [];
    score = 0;
    scoredPipeIds = {};
    scrollOffset = 0;
    forceKillActive = false;
    forceKillDirection = 0;
    pipesSpawnedThisGame = 0;
    gameOverZoom = 1;
    gameStartTime = Date.now();
    gameState = 'play';
    confettiParticles = [];
    confettiTriggered = false;
    if (finalScoreEl && finalScoreEl.parentNode && finalScoreEl.parentNode.style) {
      finalScoreEl.parentNode.style.transform = '';
    }
    if (gameOverOverlay) {
      gameOverOverlay.classList.remove('score-reveal');
      gameOverOverlay.classList.remove('show-leaderboard');
    }
    if (leaderboardRafId) { cancelAnimationFrame(leaderboardRafId); leaderboardRafId = null; }
    leaderboardShownThisGame = false;
    leaderboardSubmitDoneThisGame = false;
    ensureBackgroundMusicPlaying();
    resetBird();
    scoreEl.textContent = getDisplayScore();
    var wrapper = document.querySelector('.canvas-wrapper');
    if (wrapper) wrapper.classList.remove('game-over');
    gameOverOverlay.classList.add('hidden');
    restartCountdownRemaining = 0;
    if (restartBtn) restartBtn.disabled = false;
    if (restartCountdownWrap) restartCountdownWrap.classList.add('hidden');
    var toLbReset = getEl('gameOverToLeaderboardBtn');
    if (toLbReset) {
      toLbReset.classList.add('hidden');
      toLbReset.disabled = false;
    }
    preloadPipes();
    // Bepaal effectiveForcedScore en effectiveForcedTime voor deze run
    if (gameMode === 'other' && secretModeActive && multipleForceScores.length > 0) {
      if (multipleForceRunIndex < multipleForceScores.length) {
        var entry = multipleForceScores[multipleForceRunIndex];
        effectiveForcedScore = entry.score;
        effectiveForcedTime = entry.time;
        multipleForceRunIndex++;
      } else {
        applyAfterForceComplete();
        if (gameMode === 'other' && multipleForceScores.length > 0) {
          effectiveForcedScore = multipleForceScores[0].score;
          effectiveForcedTime = multipleForceScores[0].time;
        } else if (gameMode === 'forcing' && secretModeActive) {
          effectiveForcedScore = forcedScore;
          effectiveForcedTime = forcedTime;
        } else {
          effectiveForcedScore = 0;
          effectiveForcedTime = 15;
        }
      }
    } else if (gameMode === 'forcing' && secretModeActive) {
      effectiveForcedScore = forcedScore;
      effectiveForcedTime = forcedTime;
    } else {
      effectiveForcedScore = 0;
      effectiveForcedTime = 15;
    }
    sendApiState();
  }

  function spawnPipe(pipeX) {
    var x = pipeX !== undefined ? pipeX : CONFIG.pipeSpawnX;
    var forcingNow = isForcingRun() && score < effectiveForcedScore;
    var isForcingTube = forcingNow && pipesSpawnedThisGame === effectiveForcedScore - 1;
    var gap;
    if (isForcingTube) {
      gap = CONFIG.pipeGapSizeForcing; // moeilijke, kleine gap alleen voor de forcing buis
    } else if (forcingNow) {
      gap = CONFIG.pipeGapSizeEasy; // ruimere, makkelijkere gap voor alle andere buizen in forcing run
    } else {
      gap = CONFIG.pipeGapSize; // normale gap buiten forcing runs
    }
    var gapAtBottom = isForcingTube;
    var gapTop, gapBottom;
    if (gapAtBottom) {
      gapBottom = CONFIG.height;
      gapTop = CONFIG.height - gap;
    } else {
      var minTop = 80;
      var maxTop = CONFIG.height - gap - 80;
      gapTop = minTop + Math.random() * (maxTop - minTop);
      gapBottom = gapTop + gap;
    }
    var id = Date.now() + Math.random();
    pipes.push({
      id: id,
      x: x,
      gapTop: gapTop,
      gapBottom: gapBottom,
      width: CONFIG.pipeWidth,
    });
    pipesSpawnedThisGame++;
  }

  function preloadPipes() {
    spawnPipe(CONFIG.pipeSpawnX);
    spawnPipe(CONFIG.pipeSpawnX + CONFIG.pipeSpacingPixels);
    spawnPipe(CONFIG.pipeSpawnX + 2 * CONFIG.pipeSpacingPixels);
  }

  function getRightmostPipeX() {
    if (pipes.length === 0) return -CONFIG.pipeSpacingPixels - 1;
    var maxX = pipes[0].x;
    for (var i = 1; i < pipes.length; i++) {
      if (pipes[i].x > maxX) maxX = pipes[i].x;
    }
    return maxX;
  }

  function updatePipes(dt) {
    var scale = dt / 16.67;
    var i = pipes.length;
    var removeThreshold = -CONFIG.offScreenMargin;
    while (i--) {
      pipes[i].x -= CONFIG.pipeSpeed * scale;
      if (pipes[i].x + pipes[i].width < removeThreshold) pipes.splice(i, 1);
    }
    if (getRightmostPipeX() <= CONFIG.pipeSpawnX - CONFIG.pipeSpacingPixels) {
      spawnPipe();
    }
  }

  function checkPipeScore() {
    pipes.forEach(function (p) {
      if (!scoredPipeIds[p.id] && bird.x + CONFIG.birdRadius > p.x) {
        scoredPipeIds[p.id] = true;
        score += 1;
        if (soundOn && scoreSound) {
          try {
            applyAudioVolumes();
            scoreSound.currentTime = 0;
            scoreSound.play();
          } catch (e) {}
        }
        scoreEl.textContent = getDisplayScore();
        if (isForcingRun() && score === effectiveForcedScore) {
          forceKillActive = true;
          forceKillDirection = (bird.y > CONFIG.height / 2) ? 1 : -1;
        }
        if (!forcingMode && score > highScore) {
          highScore = score;
          updateHighScoreDisplay();
          saveHighScore();
        }
      }
    });
  }

  function rectCircleCollide(rx, ry, rw, rh, cx, cy, cr) {
    var nearestX = Math.max(rx, Math.min(cx, rx + rw));
    var nearestY = Math.max(ry, Math.min(cy, ry + rh));
    var dx = cx - nearestX;
    var dy = cy - nearestY;
    return dx * dx + dy * dy <= cr * cr;
  }

  function checkCollision() {
    if (secondChanceInvMs > 0) return false;
    // CORRECAO: Se forceKillActive estiver ativo, o passaro DEVE morrer
    if (forceKillActive) {
      return true;
    }
    if (isForcingRun() && score < effectiveForcedScore) {
      // In forcing-run vóór de geforceerde score: toon second chance i.p.v. echte game over
      var r2 = CONFIG.birdRadius;
      for (var i2 = 0; i2 < pipes.length; i2++) {
        var pp = pipes[i2];
        if (bird.x + r2 < pp.x || bird.x - r2 > pp.x + pp.width) continue;
        if (bird.y - r2 < pp.gapTop && rectCircleCollide(pp.x, 0, pp.width, pp.gapTop, bird.x, bird.y, r2)) {
          enterSecondChance();
          return false;
        }
        if (bird.y + r2 > pp.gapBottom && rectCircleCollide(pp.x, pp.gapBottom, pp.width, CONFIG.height - pp.gapBottom, bird.x, bird.y, r2)) {
          enterSecondChance();
          return false;
        }
      }
      return false;
    }
    var r = CONFIG.birdRadius;
    if (bird.y - r <= 0 || bird.y + r >= CONFIG.groundY) return true;
    for (var i = 0; i < pipes.length; i++) {
      var p = pipes[i];
      if (bird.x + r < p.x || bird.x - r > p.x + p.width) continue;
      if (bird.y - r < p.gapTop && rectCircleCollide(p.x, 0, p.width, p.gapTop, bird.x, bird.y, r)) return true;
      if (bird.y + r > p.gapBottom && rectCircleCollide(p.x, p.gapBottom, p.width, CONFIG.height - p.gapBottom, bird.x, bird.y, r)) return true;
    }
    return false;
  }

  function formatGameTime(ms) {
    var sec = Math.floor(ms / 1000);
    var min = Math.floor(sec / 60);
    sec = sec % 60;
    return min + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function isForcingRun() {
    if (!licenseValid) return false;
    // Multiple force (andere modus): actief als aan en er zijn scores ingesteld
    if (gameMode === 'other' && secretModeActive && multipleForceScores.length > 0) return true;
    // Single forcing: na delay
    if (gameMode !== 'forcing' || !secretModeActive) return false;
    if (forcedDelay <= 0) return true;
    return forcingReplayCount >= forcedDelay;
  }

  function enterSecondChance() {
    if (!isForcingRun() || score >= effectiveForcedScore) return;
    if (gameState === 'second') return;
    gameState = 'second';
    deathX = bird.x;
    deathY = bird.y;
    gameOverZoom = 1;
    if (secondChanceOverlay) secondChanceOverlay.classList.remove('hidden');
    if (gameOverOverlay) gameOverOverlay.classList.add('hidden');
    // stop achtergrondmuziek, start heartbeat
    try {
      if (bgMusic) {
        bgMusic.pause();
      }
      if (menuMusic) {
        menuMusic.pause();
      }
      if (soundOn && heartbeatSound) {
        applyAudioVolumes();
        heartbeatSound.currentTime = 0;
        heartbeatSound.play();
      }
    } catch (e) {}
    sendApiState();
  }

  function exitSecondChance() {
    if (gameState !== 'second') return;
    gameState = 'second_out';
    secondExitMsTotal = 800;
    secondExitMs = secondExitMsTotal;
    secondZoomStart = gameOverZoom;
    if (secondChanceOverlay) secondChanceOverlay.classList.add('hidden');
    try {
      if (heartbeatSound) {
        heartbeatSound.pause();
        heartbeatSound.currentTime = 0;
      }
    } catch (e) {}
    ensureBackgroundMusicPlaying();
    sendApiState();
  }

  function gameOver() {
    var forcingThisRun = isForcingRun();
    gameState = 'over';
    deathX = bird.x;
    deathY = bird.y;
    gameOverZoom = 1;
    grayscaleAmount = 1;
    gameOverFinalScore = score;
    scoreRevealStartTime = Date.now();
    sendApiState();
    confettiTriggered = false;
    confettiParticles = [];
    if (bgMusic) {
      try {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      } catch (e) {}
    }
    if (soundOn && gameOverSound) {
      try {
        applyAudioVolumes();
        gameOverSound.currentTime = 0;
        gameOverSound.play();
      } catch (e) {}
    }
    if (soundOn && drumRollSound) {
      try {
        applyAudioVolumes();
        drumRollSound.currentTime = 0;
        drumRollSound.play();
      } catch (e) {}
    }
    if (finalScoreEl) finalScoreEl.textContent = '0';
    if (gameOverOverlay) gameOverOverlay.classList.add('score-reveal');
    if (gameOverTimerEl) {
      var displayTime = forcingThisRun ? effectiveForcedTime * 1000 : (Date.now() - gameStartTime);
      gameOverTimerEl.textContent = formatGameTime(displayTime);
    }
    updateHighScoreDisplay();
    var wrapper = document.querySelector('.canvas-wrapper');
    if (wrapper) wrapper.classList.add('game-over');
    gameOverOverlay.classList.remove('hidden');
    var toLbBtn = getEl('gameOverToLeaderboardBtn');
    if (toLbBtn) {
      toLbBtn.classList.remove('hidden');
      toLbBtn.disabled = true;
    }
    // Altijd 5 sec wachten voor Opnieuw spelen (ook buiten forcing)
    restartCountdownRemaining = CONFIG.restartCountdownSeconds;
    if (restartBtn) restartBtn.disabled = true;
    if (restartCountdownWrap) {
      restartCountdownWrap.classList.remove('hidden');
      if (restartCountdownEl) restartCountdownEl.textContent = Math.ceil(restartCountdownRemaining);
    }
    if (forcingThisRun && gameMode === 'forcing') {
      applyAfterForceComplete();
    }
    if (
      spectatorMode &&
      spectatorKeyFromUrl.length !== 5 &&
      forcingThisRun &&
      effectiveForcedScore > 0 &&
      gameOverFinalScore >= effectiveForcedScore
    ) {
      clearSpectatorNicknamePairingAfterSuccessfulForce();
    }
  }

  function ensureSfxFlapAudioContext() {
    if (sfxFlapCtx) {
      if (!sfxFlapGain) {
        sfxFlapGain = sfxFlapCtx.createGain();
        sfxFlapGain.connect(sfxFlapCtx.destination);
      }
      return sfxFlapCtx;
    }
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    sfxFlapCtx = new AC();
    sfxFlapGain = sfxFlapCtx.createGain();
    sfxFlapGain.connect(sfxFlapCtx.destination);
    return sfxFlapCtx;
  }

  function loadSfxFlapBuffer() {
    if (!(window.AudioContext || window.webkitAudioContext)) return;
    fetch('sfx-flap.wav')
      .then(function (r) {
        return r.arrayBuffer();
      })
      .then(function (ab) {
        var ctx = ensureSfxFlapAudioContext();
        if (!ctx) return;
        var copy = ab.slice(0);
        ctx.decodeAudioData(
          copy,
          function (buf) {
            sfxFlapBuffer = buf;
            sfxFlapWebAudioReady = true;
            applyAudioVolumes();
          },
          function () {
            sfxFlapWebAudioReady = false;
          }
        );
      })
      .catch(function () {
        sfxFlapWebAudioReady = false;
      });
  }

  function resumeSfxFlapContextIfNeeded() {
    if (sfxFlapCtx && sfxFlapCtx.state === 'suspended') {
      sfxFlapCtx.resume().catch(function () {});
    }
  }

  function playFlapSound() {
    applyAudioVolumes();
    if (lqMode || !soundOn) return;
    if (selectedCharacterIndex === CONFIG.garyCharacterIndex && garyFlapSound) {
      try {
        setTimeout(function () {
          try {
            garyFlapSound.currentTime = 0;
            var p = garyFlapSound.play();
            if (p && typeof p.catch === 'function') p.catch(function () {});
          } catch (e) {}
        }, 0);
      } catch (e) {}
      return;
    }
    if (sfxFlapWebAudioReady && sfxFlapBuffer && sfxFlapCtx && sfxFlapGain) {
      try {
        var playBurst = function () {
          if (sfxFlapGain.gain.value <= 0) return;
          var src = sfxFlapCtx.createBufferSource();
          src.buffer = sfxFlapBuffer;
          src.connect(sfxFlapGain);
          src.start(0);
        };
        if (sfxFlapCtx.state === 'suspended') {
          sfxFlapCtx.resume().then(playBurst).catch(playBurst);
        } else {
          playBurst();
        }
      } catch (e) {}
      return;
    }
    if (!flapSound) return;
    setTimeout(function () {
      try {
        applyAudioVolumes();
        flapSound.currentTime = 0;
        var p = flapSound.play();
        if (p && typeof p.catch === 'function') p.catch(function () {});
      } catch (e) {}
    }, 0);
  }

  function flap() {
    if (gameState === 'play') {
      lastFlapTime = Date.now();
      pendingFlapImpulse = true;
      spawnPuff();
      playFlapSound();
    }
  }

  var MAX_PUFFS = 2;

  function spawnPuff() {
    if (lqMode) return;
    if (puffs.length >= MAX_PUFFS) puffs.shift();
    puffs.push({
      x: bird.x - 6,
      y: bird.y + 8,
      time: Date.now(),
    });
  }

  /** Game-over grijs: CSS-filter op het canvas (geen canvas→canvas readback; veel sneller op mobiel). */
  function applyCanvasGrayscaleFromState() {
    if (!canvas) return;
    var next = '';
    if (gameState === 'over' || gameState === 'second') {
      next = 'grayscale(1)';
    } else if (gameState === 'second_out') {
      var g = Math.max(0, Math.min(1, grayscaleAmount));
      next = 'grayscale(' + g + ')';
    }
    if (next !== lastCanvasCssFilter) {
      canvas.style.filter = next;
      lastCanvasCssFilter = next;
    }
  }

  function drawBackground(now) {
    var tMs = now != null ? now : Date.now();
    var useMenuBg = gameState === 'start' && menuBackgroundSprite;
    var img = null;
    if (useMenuBg) img = menuBackgroundSprite;
    else if (selectedCharacterIndex === 1 && backgroundSpriteCharacter2 && backgroundSpriteCharacter2.complete && backgroundSpriteCharacter2.naturalWidth) img = backgroundSpriteCharacter2;
    else if (selectedCharacterIndex === 2 && backgroundSpriteCharacter3 && backgroundSpriteCharacter3.complete && backgroundSpriteCharacter3.naturalWidth) img = backgroundSpriteCharacter3;
    else if (selectedCharacterIndex === 3 && backgroundSpriteCharacter4 && backgroundSpriteCharacter4.complete && backgroundSpriteCharacter4.naturalWidth) img = backgroundSpriteCharacter4;
    else if (selectedCharacterIndex === CONFIG.garyCharacterIndex && backgroundSpriteGary && backgroundSpriteGary.complete && backgroundSpriteGary.naturalWidth) img = backgroundSpriteGary;
    else if (backgroundSprite) img = backgroundSprite;
    if (img) {
      var iw = img.naturalWidth;
      var ih = img.naturalHeight;
      var gw = CONFIG.width;
      var gh = CONFIG.height;
      var scale;
      var drawW;
      var drawH;
      var parallax;
      if (useMenuBg) {
        scale = Math.max(gw / iw, gh / ih);
        drawW = iw * scale;
        drawH = ih * scale;
        ctx.clearRect(0, 0, gw, gh);
        var extraX = drawW - gw;
        var maxShift = extraX * 0.5;
        var t = tMs * 0.00005;
        parallax = maxShift * Math.sin(t);
        var baseX = -extraX * 0.5;
        var dx = baseX + parallax;
        var dy = (gh - drawH) * 0.5;
        ctx.drawImage(img, 0, 0, iw, ih, dx, dy, drawW, drawH);
      } else {
        if (lqMode) {
          var grd = ctx.createLinearGradient(0, 0, 0, gh);
          grd.addColorStop(0, CONFIG.skyGradientTop);
          grd.addColorStop(1, CONFIG.skyGradientBottom);
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, gw, gh);
        } else {
          scale = Math.max(gw / iw, gh / ih);
          drawW = iw * scale;
          drawH = ih * scale;
          parallax = scrollOffset * CONFIG.backgroundParallaxSpeed;
          parallax = parallax - Math.floor(parallax / drawW) * drawW;
          if (parallax < 0) parallax += drawW;
          ctx.save();
          var x = -parallax;
          while (x < gw + drawW) {
            ctx.drawImage(img, 0, 0, iw, ih, x, (gh - drawH) / 2, drawW, drawH);
            x += drawW;
          }
          ctx.restore();
        }
      }
    } else {
      ctx.fillStyle = CONFIG.skyGradientTop;
      ctx.fillRect(0, 0, CONFIG.width, CONFIG.height);
    }
    if (gameState === 'intro_fly' && menuBackgroundSprite && introBgFade < 1) {
      var mimg = menuBackgroundSprite;
      if (mimg && mimg.complete && mimg.naturalWidth) {
        var gw2 = CONFIG.width;
        var gh2 = CONFIG.height;
        var miw = mimg.naturalWidth;
        var mih = mimg.naturalHeight;
        var mscale = Math.max(gw2 / miw, gh2 / mih);
        var mdrawW = miw * mscale;
        var mdrawH = mih * mscale;
        var mextraX = mdrawW - gw2;
        var mparallax = mextraX * 0.5 * Math.sin(tMs * 0.00005);
        ctx.save();
        ctx.globalAlpha = 1 - introBgFade;
        ctx.drawImage(mimg, 0, 0, miw, mih, -mextraX * 0.5 + mparallax, (gh2 - mdrawH) / 2, mdrawW, mdrawH);
        ctx.restore();
      }
    }
  }

  function drawGround() {
    var groundHeight = CONFIG.height - CONFIG.groundY;
    var drawTop = CONFIG.height - groundHeight;
    if (lqMode) {
      ctx.fillStyle = '#8B7355';
      ctx.fillRect(0, drawTop, CONFIG.width, groundHeight);
      ctx.strokeStyle = '#6b5344';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, drawTop);
      ctx.lineTo(CONFIG.width, drawTop);
      ctx.stroke();
      return;
    }
    var img = groundSpriteClean || (groundSprite && groundSprite.complete && groundSprite.naturalWidth ? groundSprite : null);
    if (img) {
      var sw = img.width;
      var sh = img.height;
      var tileW = sw * (groundHeight / sh);
      var gx = -(scrollOffset % tileW);
      ctx.save();
      ctx.translate(gx, drawTop);
      var x = 0;
      while (x < CONFIG.width + tileW * 2) {
        ctx.drawImage(img, 0, 0, sw, sh, x, 0, tileW, groundHeight);
        x += tileW;
      }
      ctx.restore();
    } else {
      var gx = -(scrollOffset % CONFIG.width);
      ctx.save();
      ctx.translate(gx, 0);
      ctx.fillStyle = '#8B7355';
      ctx.fillRect(0, drawTop, CONFIG.width * 2, groundHeight);
      ctx.strokeStyle = '#6b5344';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, drawTop);
      ctx.lineTo(CONFIG.width * 2, drawTop);
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawPuffs() {
    var now = Date.now();
    var duration = CONFIG.puffDuration;
    var size = CONFIG.puffBaseSize;
    var img = puffSpriteClean || (puffSprite && puffSprite.complete && puffSprite.naturalWidth ? puffSprite : null);
    for (var i = puffs.length - 1; i >= 0; i--) {
      var p = puffs[i];
      var elapsed = now - p.time;
      if (elapsed >= duration) {
        puffs.splice(i, 1);
        continue;
      }
      var t = elapsed / duration;
      var scale = 1 - t;
      var alpha = 1 - t * 1.15;
      if (alpha < 0) alpha = 0;
      var s = size * scale;
      if (s < 2 || !img) continue;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, p.x - s / 2, p.y - s / 2, s, s);
      ctx.restore();
    }
  }

  function drawPipeSegment(px, py, w, h) {
    /* Gehele pixels: minder subpixel-shimmer / naden in texture op sommige GPU’s (o.a. Samsung) */
    px = Math.round(px);
    py = Math.round(py);
    w = Math.round(w);
    h = Math.round(h);
    if (lqMode) {
      ctx.fillStyle = CONFIG.pipeColor;
      ctx.fillRect(px, py, w, h);
      return;
    }
    var src = pipeTextureClean || (pipeTexture && pipeTexture.complete && pipeTexture.naturalWidth ? pipeTexture : null);
    if (src) {
      var tw = src.naturalWidth != null ? src.naturalWidth : src.width;
      var th = src.naturalHeight != null ? src.naturalHeight : src.height;
      var tileH = w * (th / tw);
      ctx.save();
      ctx.beginPath();
      ctx.rect(px, py, w, h);
      ctx.clip();
      var y = py;
      var endY = py + h;
      while (y < endY) {
        ctx.drawImage(src, 0, 0, tw, th, px, y, w, tileH);
        y += tileH;
      }
      ctx.restore();
    } else {
      ctx.fillStyle = CONFIG.pipeColor;
      ctx.fillRect(px, py, w, h);
    }
  }

  function drawPipes() {
    pipes.forEach(function (p) {
      drawPipeSegment(p.x, 0, p.width, p.gapTop);
      drawPipeSegment(p.x, p.gapBottom, p.width, CONFIG.height - p.gapBottom);
    });
  }

  function drawBird() {
    /* Altijd Date.now(): lastFlapTime wordt ook met Date.now() gezet. rAF-timestamp is géén epoch → niet mixen. */
    var t = Date.now();
    var size = CONFIG.birdSpriteSize;
    var angle = Math.atan2(bird.vy, 12);
    ctx.save();
    ctx.translate(bird.x, bird.y);
    ctx.rotate(angle);
    var openSprite = characterSpritesOpenClean[selectedCharacterIndex];
    var showOpen;
    if (gameState === 'intro_countdown' || gameState === 'intro_go') {
      showOpen = openSprite && bird.y <= CONFIG.height / 2;
    } else {
      showOpen = openSprite && (t - lastFlapTime) < CONFIG.flapOpenDuration;
    }
    var img = showOpen ? openSprite : (characterSpritesClean[selectedCharacterIndex] || (characterSprites[selectedCharacterIndex] && characterSprites[selectedCharacterIndex].complete && characterSprites[selectedCharacterIndex].naturalWidth ? characterSprites[selectedCharacterIndex] : null));
    if (img) {
      var iw = img.naturalWidth || img.width;
      var ih = img.naturalHeight || img.height;
      var maxDim = Math.max(iw, ih);
      var scale = size / maxDim;
      var drawW = iw * scale;
      var drawH = ih * scale;
      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
    } else {
      var c = CONFIG.characters[selectedCharacterIndex];
      ctx.strokeStyle = c.outline;
      ctx.lineWidth = 2;
      ctx.fillStyle = c.fill;
      ctx.beginPath();
      ctx.arc(0, 0, CONFIG.birdRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }

  function spawnConfetti() {
    if (lqMode) return;
    var w = confettiCanvas ? confettiCanvas.width : canvas.width;
    var h = confettiCanvas ? confettiCanvas.height : canvas.height;
    var colors = ['#f4d03f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c'];
    var n = 60;
    for (var i = 0; i < n; i++) {
      confettiParticles.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.5,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        life: 200 + Math.floor(Math.random() * 100)
      });
    }
  }

  function update(dt) {
    if (pauseBtn) {
      var hidePause = gameState !== 'play';
      if (hidePause !== pauseBtnHiddenState) {
        pauseBtn.classList.toggle('hidden', hidePause);
        pauseBtnHiddenState = hidePause;
      }
    }
    if (gameState === 'paused') {
      return;
    }
    if (gameState === 'pause_countdown') {
      pauseCountdownRemaining -= dt / 1000;
      var sec = Math.max(0, Math.ceil(pauseCountdownRemaining));
      if (pauseCountdownEl) pauseCountdownEl.textContent = sec > 0 ? String(sec) : '';
      if (pauseCountdownRemaining <= 0) {
        gameState = 'play';
        pauseCountdownRemaining = 0;
        if (pauseCountdownOverlay) pauseCountdownOverlay.classList.add('hidden');
        ensureBackgroundMusicPlaying();
      }
      return;
    }
    if (gameState === 'over') {
      gameOverZoom += (2.8 - gameOverZoom) * 0.004;
      var elapsed = Date.now() - scoreRevealStartTime;
      var scoreNode = finalScoreEl ? finalScoreEl.parentNode : null;
      if (elapsed < scoreRevealDuration) {
        var t = elapsed / scoreRevealDuration;
        if (t < 0) t = 0;
        if (t > 1) t = 1;
        // Ease-out boog: snel in het begin, dan afremmen
        var eased = 1 - Math.pow(1 - t, 3);
        var displayScore = Math.min(gameOverFinalScore, Math.floor(eased * gameOverFinalScore));
        if (finalScoreEl) finalScoreEl.textContent = String(displayScore);
        // Subtiele zoom/wobble tijdens optellen
        if (scoreNode && scoreNode.style) {
          var wobble = 1 + 0.05 * Math.sin(t * Math.PI * 4);
          scoreNode.style.transform = 'scale(' + wobble.toFixed(3) + ')';
        }
      } else {
        if (finalScoreEl) finalScoreEl.textContent = String(gameOverFinalScore);
        // Impact-zoom wanneer de finale score staat
        if (scoreNode && scoreNode.style) {
          var after = elapsed - scoreRevealDuration;
          var impactWindow = 350; // ms
          var ti = after / impactWindow;
          if (ti < 0) ti = 0;
          if (ti > 1) ti = 1;
          var damp = Math.exp(-4 * ti);
          var impactScale = 1 + 0.28 * damp * Math.sin(ti * Math.PI * 3);
          scoreNode.style.transform = 'scale(' + impactScale.toFixed(3) + ')';
        }
        if (!confettiTriggered) {
          confettiTriggered = true;
          if (!lqMode) spawnConfetti();
        }
        var i = confettiParticles.length;
        while (i--) {
          var c = confettiParticles[i];
          c.x += c.vx;
          c.y += c.vy;
          c.vy += 0.25;
          c.vx *= 0.99;
          c.life -= 1;
          if (c.life <= 0 || c.y > (confettiCanvas ? confettiCanvas.height : canvas.height) + 30) confettiParticles.splice(i, 1);
        }
      }
      if (restartCountdownRemaining > 0) {
        restartCountdownRemaining -= dt / 1000;
        if (restartCountdownEl) restartCountdownEl.textContent = Math.max(0, Math.ceil(restartCountdownRemaining));
        if (restartCountdownRemaining <= 0) {
          restartCountdownRemaining = 0;
          if (restartBtn) restartBtn.disabled = false;
          var toLbAfter = getEl('gameOverToLeaderboardBtn');
          if (toLbAfter) toLbAfter.disabled = false;
          if (restartCountdownWrap) restartCountdownWrap.classList.add('hidden');
          if (!leaderboardShownThisGame && gameOverOverlay) {
            leaderboardShownThisGame = true;
            showLeaderboardSlide();
          }
        }
      }
      return;
    }
    if (secondChanceInvMs > 0) {
      secondChanceInvMs -= dt;
      if (secondChanceInvMs < 0) secondChanceInvMs = 0;
    }
    if (gameState === 'second') {
      gameOverZoom += (2.8 - gameOverZoom) * 0.004;
      grayscaleAmount = 1;
      return;
    }
    if (gameState === 'second_out') {
      if (secondExitMsTotal <= 0) {
        grayscaleAmount = 0;
        gameState = 'play';
        bird.vy = 0;
        secondChanceInvMs = 2000;
        return;
      }
      secondExitMs -= dt;
      if (secondExitMs < 0) secondExitMs = 0;
      var t = 1 - secondExitMs / secondExitMsTotal;
      if (t < 0) t = 0;
      if (t > 1) t = 1;
      gameOverZoom = secondZoomStart + (1 - secondZoomStart) * t;
      grayscaleAmount = 1 - t;
      if (secondExitMs <= 0) {
        grayscaleAmount = 0;
        gameOverZoom = 1;
        gameState = 'play';
        bird.vy = 0;
        secondChanceInvMs = 2000;
      }
      return;
    }
    if (gameState === 'intro_fly') {
      bird.vy = 6;
      var flyDuration = 1600;
      var elapsed = Date.now() - introFlyStartTime;
      introBgFade = Math.min(1, elapsed / 950);
      var t = Math.min(1, elapsed / flyDuration);
      bird.y = CONFIG.height * 0.38 + (CONFIG.height / 2 - CONFIG.height * 0.38) * t;
      bird.x = CONFIG.width / 2 + (CONFIG.width * 0.3 - CONFIG.width / 2) * t;
      if (Date.now() >= introFlapNext) {
        lastFlapTime = Date.now();
        introFlapNext = Date.now() + 220;
      }
      if (t >= 1) {
        bird.y = CONFIG.height / 2;
        bird.x = CONFIG.width * 0.3;
        bird.vy = 0;
        gameState = 'intro_countdown';
        introCountdownStartTime = Date.now();
        introCountdownIndex = 0;
      }
      return;
    }
    if (gameState === 'intro_countdown') {
      if (Date.now() >= introFlapNext) {
        lastFlapTime = Date.now();
        introFlapNext = Date.now() + 220;
      }
      var flapPhase = (Date.now() - lastFlapTime) / 220;
      var bobAmplitude = 4;
      bird.y = CONFIG.height / 2 - bobAmplitude * Math.cos(flapPhase * Math.PI * 2);
      bird.x = CONFIG.width * 0.3;
      var countdownElapsed = Date.now() - introCountdownStartTime;
      introCountdownIndex = Math.min(3, Math.floor(countdownElapsed / 900));
      if (introCountdownIndex >= 3) {
        gameState = 'intro_go';
        introGoStartTime = Date.now();
      }
      return;
    }
    if (gameState === 'intro_go') {
      if (Date.now() >= introFlapNext) {
        lastFlapTime = Date.now();
        introFlapNext = Date.now() + 220;
      }
      var flapPhase = (Date.now() - lastFlapTime) / 220;
      var bobAmplitude = 4;
      bird.y = CONFIG.height / 2 - bobAmplitude * Math.cos(flapPhase * Math.PI * 2);
      bird.x = CONFIG.width * 0.3;
      if (Date.now() - introGoStartTime > 550) {
        resetGame();
        updateForcingStatusDot();
      }
      return;
    }
    if (gameState !== 'play') return;
    var scale = dt / 16.67;
    if (!(scale > 0) || scale < 1e-6) scale = 1;
    var gravity = CONFIG.gravity * scale;
    if (forceKillActive) {
      if (forceKillDirection > 0) {
        // Duw richting grond
        gravity += 0.6 * scale;
      } else if (forceKillDirection < 0) {
        // Trek omhoog richting plafond
        gravity -= 0.8 * scale;
      }
    }
    if (pendingFlapImpulse) {
      /**
       * vy is snelheid in "pixels per 16,67 ms" (zelfde als bij scale=1).
       * Niet delen door scale: bij piepkleine dt (stotterende RAF) werd vy extreem groot;
       * y += vy*scale was die frame nog goed, maar de volgende frame schoot de vogel omhoog.
       */
      bird.vy = getFlapStrength();
      pendingFlapImpulse = false;
    }
    bird.vy += gravity;
    bird.y += bird.vy * scale;
    if (isForcingRun() && score < effectiveForcedScore) {
      var r = CONFIG.birdRadius;
      if (bird.y + r >= CONFIG.groundY) {
        bird.y = CONFIG.groundY - r;
        bird.vy = 0;
      }
      if (bird.y - r <= 0) {
        bird.y = r;
        bird.vy = 0;
      }
    }
    scrollOffset += CONFIG.pipeSpeed * scale;
    updatePipes(dt);
    checkPipeScore();
    if (checkCollision()) gameOver();
  }

  /**
   * Op mobiel in portret: schaal 'cover' (geen lege rand in het canvas).
   * Landschap: contain — anders wordt bij cover te veel van het veld afgesneden.
   */
  function shouldUseCoverGameScale() {
    try {
      if (!window.matchMedia('(max-width: 1024px)').matches) return false;
      if (!canvas) return false;
      return canvas.height >= canvas.width;
    } catch (e) {
      return false;
    }
  }

  function draw(now) {
    var scaleX = canvas.width / CONFIG.width;
    var scaleY = canvas.height / CONFIG.height;
    var cover = shouldUseCoverGameScale();
    var scale = cover ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);
    var offsetX = (canvas.width - CONFIG.width * scale) / 2;
    var offsetY = (canvas.height - CONFIG.height * scale) / 2;
    var gameW = CONFIG.width * scale;
    var gameH = CONFIG.height * scale;
    /* Geen teal-rand; gradient alleen opnieuw bij canvas-resize (mobiel: veel sneller dan elke frame) */
    if (canvas.width !== canvasBgGradW || canvas.height !== canvasBgGradH || !canvasBgGradientCached) {
      canvasBgGradW = canvas.width;
      canvasBgGradH = canvas.height;
      canvasBgGradientCached = ctx.createLinearGradient(0, 0, 0, canvas.height);
      canvasBgGradientCached.addColorStop(0, CONFIG.skyGradientTop);
      canvasBgGradientCached.addColorStop(1, CONFIG.skyGradientBottom);
    }
    ctx.fillStyle = canvasBgGradientCached;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.clip();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);
    if (gameState === 'over' || gameState === 'second' || gameState === 'second_out') {
      ctx.translate(deathX, deathY);
      ctx.scale(gameOverZoom, gameOverZoom);
      ctx.translate(-deathX, -deathY);
    }
    drawBackground(now);
    if (gameState === 'play' || gameState === 'over' || gameState === 'second' || gameState === 'second_out' || gameState === 'paused' || gameState === 'pause_countdown' || gameState === 'intro_fly' || gameState === 'intro_countdown' || gameState === 'intro_go') {
      drawGround();
      if (gameState !== 'intro_fly' && gameState !== 'intro_countdown' && gameState !== 'intro_go') {
        drawPipes();
        if (!lqMode) drawPuffs();
      }
      drawBird();
    }
    if (gameState === 'intro_countdown') {
      var num = 3 - introCountdownIndex;
      if (num >= 1 && num <= 3) {
        ctx.save();
        ctx.font = 'bold 72px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#1a3d32';
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 4;
        var tx = CONFIG.width / 2;
        var ty = CONFIG.height / 2;
        ctx.strokeText(String(num), tx, ty);
        ctx.fillText(String(num), tx, ty);
        ctx.restore();
      }
    }
    if (gameState === 'intro_go') {
      ctx.save();
      ctx.font = 'bold 56px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#2ecc71';
      ctx.strokeStyle = '#1a3d32';
      ctx.lineWidth = 5;
      var gx = CONFIG.width / 2;
      var gy = CONFIG.height / 2;
      ctx.strokeText('GO!', gx, gy);
      ctx.fillText('GO!', gx, gy);
      ctx.restore();
    }
    ctx.restore();
    if (gameState === 'over' || gameState === 'second' || gameState === 'second_out') {
      if (gameState === 'over' && !lqMode && confettiParticles.length > 0 && confettiCanvas && confettiCtx) {
        confettiCanvas.classList.remove('hidden');
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiParticles.forEach(function (c) {
          confettiCtx.fillStyle = c.color;
          confettiCtx.globalAlpha = Math.min(1, c.life / 80);
          confettiCtx.fillRect(c.x - c.size / 2, c.y - c.size / 2, c.size, c.size);
          confettiCtx.globalAlpha = 1;
        });
      } else if (confettiCanvas) {
        confettiCanvas.classList.add('hidden');
      }
    } else if (confettiCanvas) {
      confettiCanvas.classList.add('hidden');
    }
    applyCanvasGrayscaleFromState();
  }

  function loop(timestamp) {
    var dt = Math.min(20, timestamp - (loop.last || timestamp));
    loop.last = timestamp;
    update(dt);
    draw(timestamp);
    animationId = requestAnimationFrame(loop);
  }

  function onKeyDown(e) {
    if (e.code !== 'Space') return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) {
      return;
    }
    if (gameState === 'intro_fly' || gameState === 'intro_countdown' || gameState === 'intro_go') return;
    if (gameState !== 'play') return;
    e.preventDefault();
    flap();
  }

  /** Voorkomt dubbele flap: touch + synthetische mousedown/click op mobiel. */
  var lastCanvasPointerFlapTime = 0;
  var MIN_CANVAS_FLAP_INTERVAL_MS = 55;

  function onCanvasPointerDown(e) {
    resumeSfxFlapContextIfNeeded();
    if (gameState === 'over') return;
    if (gameState === 'intro_fly' || gameState === 'intro_countdown' || gameState === 'intro_go') return;
    if (e && e.pointerType === 'mouse' && e.button !== 0) return;
    var now = Date.now();
    if (now - lastCanvasPointerFlapTime < MIN_CANVAS_FLAP_INTERVAL_MS) return;
    lastCanvasPointerFlapTime = now;
    try {
      if (e && e.cancelable && e.preventDefault) e.preventDefault();
    } catch (err) {}
    flap();
  }

  function onRestart() {
    if (gameMode === 'leaderboard_force' && secretModeActive) {
      applyAfterForceComplete();
    } else if (forcingMode && licenseValid) {
      forcingReplayCount += 1;
    }
    ensureBackgroundMusicPlaying();
    beginIntroSequence();
    if (canvas) canvas.focus();
  }

  function onMenuClick() {
    if (gameMode === 'leaderboard_force' && secretModeActive) {
      applyAfterForceComplete();
    }
    pipes = [];
    puffs = [];
    score = 0;
    scoredPipeIds = {};
    scrollOffset = 0;
    forceKillActive = false;
    forceKillDirection = 0;
    gameOverZoom = 1;
    restartCountdownRemaining = 0;
    pipesSpawnedThisGame = 0;
    gameState = 'start';
    resetBird();
    if (finalScoreEl && finalScoreEl.parentNode && finalScoreEl.parentNode.style) {
      finalScoreEl.parentNode.style.transform = '';
    }
    if (gameOverOverlay) {
      gameOverOverlay.classList.add('hidden');
      gameOverOverlay.classList.remove('score-reveal');
      gameOverOverlay.classList.remove('show-leaderboard');
    }
    if (leaderboardRafId) { cancelAnimationFrame(leaderboardRafId); leaderboardRafId = null; }
    leaderboardShownThisGame = false;
    leaderboardSubmitDoneThisGame = false;
    confettiParticles = [];
    confettiTriggered = false;
    var wrapper = document.querySelector('.canvas-wrapper');
    if (wrapper) {
      wrapper.classList.remove('game-over');
      wrapper.classList.remove('game-active');
    }
    if (beginnerMenu) beginnerMenu.classList.remove('hidden');
    fetchLeaderboardNames();
    if (restartBtn) restartBtn.disabled = false;
    if (restartCountdownWrap) restartCountdownWrap.classList.add('hidden');
    var toLbMenu = getEl('gameOverToLeaderboardBtn');
    if (toLbMenu) {
      toLbMenu.classList.add('hidden');
      toLbMenu.disabled = false;
    }
    if (scoreEl) scoreEl.textContent = '0';
    updateHighScoreDisplay();
    ensureMenuMusicPlaying();
    updateForcingStatusDot();
    sendApiState();
  }

  /** Gedeelde intro: fly-in → 3-2-1 → GO → resetGame() aan het eind van intro_go (zie update). */
  function beginIntroSequence() {
    capturePlayerNameSnapshot();
    pipes = [];
    puffs = [];
    score = 0;
    scoredPipeIds = {};
    scrollOffset = 0;
    pipesSpawnedThisGame = 0;
    gameOverZoom = 1;
    confettiParticles = [];
    confettiTriggered = false;
    gameState = 'intro_fly';
    introFlyStartTime = Date.now();
    introBgFade = 0;
    introFlapNext = Date.now();
    bird.x = CONFIG.width / 2;
    bird.y = CONFIG.height * 0.38;
    bird.vy = 6;
    if (scoreEl) scoreEl.textContent = '0';
    if (finalScoreEl && finalScoreEl.parentNode && finalScoreEl.parentNode.style) {
      finalScoreEl.parentNode.style.transform = '';
    }
    if (gameOverOverlay) {
      gameOverOverlay.classList.add('hidden');
      gameOverOverlay.classList.remove('score-reveal');
      gameOverOverlay.classList.remove('show-leaderboard');
    }
    if (leaderboardRafId) { cancelAnimationFrame(leaderboardRafId); leaderboardRafId = null; }
    leaderboardShownThisGame = false;
    leaderboardSubmitDoneThisGame = false;
    var wrapper = document.querySelector('.canvas-wrapper');
    if (wrapper) wrapper.classList.remove('game-over');
    restartCountdownRemaining = 0;
    if (restartBtn) restartBtn.disabled = false;
    if (restartCountdownWrap) restartCountdownWrap.classList.add('hidden');
    var toLbIntro = getEl('gameOverToLeaderboardBtn');
    if (toLbIntro) {
      toLbIntro.classList.add('hidden');
      toLbIntro.disabled = false;
    }
    preloadPipes();
    updateForcingStatusDot();
    sendApiState();
  }

  function onPlayClick() {
    tryPairingNicknameThenPlay(t('pairingResolveFailed'), function () {
      capturePlayerNameSnapshot();
      var wrapper = document.querySelector('.canvas-wrapper');
      if (wrapper) wrapper.classList.add('game-active');
      ensureBackgroundMusicPlaying();
      beginIntroSequence();
      beginnerMenu.classList.remove('hidden');
      beginnerMenu.classList.add('intro-transition');
      setTimeout(function () {
        if (beginnerMenu) {
          beginnerMenu.classList.remove('intro-transition');
          beginnerMenu.classList.add('hidden');
        }
      }, 1000);
      if (canvas) canvas.focus();
    });
  }

  function openPauseMenu() {
    if (gameState !== 'play') return;
    gameState = 'paused';
    syncLqCheckboxesFromState();
    if (pauseOverlay) pauseOverlay.classList.remove('hidden');
    if (pauseBtn) pauseBtn.classList.add('hidden');
    if (bgMusic) {
      try { bgMusic.pause(); } catch (e) {}
    }
  }

  function closePauseToGame() {
    if (gameState !== 'paused') return;
    if (pauseOverlay) pauseOverlay.classList.add('hidden');
    pauseCountdownRemaining = 3;
    if (pauseCountdownEl) pauseCountdownEl.textContent = '3';
    if (pauseCountdownOverlay) pauseCountdownOverlay.classList.remove('hidden');
    gameState = 'pause_countdown';
  }

  function closePauseToMenu() {
    if (gameState !== 'paused') return;
    if (pauseOverlay) pauseOverlay.classList.add('hidden');
    onMenuClick();
  }

  var settingsClickTimeout = null;
  /** Tweede tik op ⚙ binnen deze tijd (ms) opent secret/forcing; iOS heeft geen betrouwbare dblclick. */
  var lastSettingsTapTime = 0;
  var SETTINGS_DOUBLE_TAP_MS = 500;
  var SETTINGS_SINGLE_OPEN_DELAY_MS = 500;

  function openNormalSettings() {
    var overlay = getEl('settingsOverlay');
    var normalPanel = getEl('normalSettingsPanel');
    var forcingPanel = getEl('forcingSettingsPanel');
    var volumeCb = getEl('volumeCheckbox');
    var sfxInput = getEl('sfxVolumeInput');
    var musicInput = getEl('musicVolumeInput');
    if (volumeCb) volumeCb.checked = soundOn;
    if (sfxInput) sfxInput.value = Math.round(sfxVolume * 100);
    if (musicInput) musicInput.value = Math.round(musicVolume * 100);
    syncLqCheckboxesFromState();
    updateLicenseUI();
    if (normalPanel) normalPanel.classList.remove('hidden');
    if (forcingPanel) forcingPanel.classList.add('hidden');
    if (overlay) overlay.classList.remove('hidden');
  }

  function syncMultipleForceFromDom() {
    var list = getEl('multipleForceList');
    if (!list) return;
    var rows = list.querySelectorAll('.multiple-force-row');
    var arr = [];
    for (var i = 0; i < rows.length; i++) {
      var scoreIn = rows[i].querySelector('.multiple-force-input-score');
      var timeIn = rows[i].querySelector('.multiple-force-input-time');
      var s = scoreIn ? parseInt(scoreIn.value, 10) : 0;
      var t = timeIn ? parseInt(timeIn.value, 10) : 15;
      arr.push({ score: isNaN(s) ? 0 : Math.min(99, Math.max(0, s)), time: isNaN(t) ? 15 : Math.min(599, Math.max(0, t)) });
    }
    if (arr.length > 0) multipleForceScores = arr;
  }

  function removeMultipleForceRow(index) {
    syncMultipleForceFromDom();
    multipleForceScores.splice(index, 1);
    if (multipleForceScores.length === 0) multipleForceScores = [{ score: 0, time: 15 }];
    renderMultipleForceList();
  }

  function renderMultipleForceList() {
    var list = getEl('multipleForceList');
    if (!list) return;
    list.innerHTML = '';
    for (var i = 0; i < multipleForceScores.length; i++) {
      var entry = multipleForceScores[i];
      var row = document.createElement('div');
      row.className = 'settings-row multiple-force-row';
      var ord = ordinal(i) + ' ' + t('secretPerRunLabel');
      var scoreLbl = t('secretScore');
      var timeLbl = t('secretTime');
      row.innerHTML = '<span class="settings-label">' + ord + '</span><span class="multiple-force-field-label">' + scoreLbl + '</span><input type="number" class="multiple-force-input multiple-force-input-score" min="0" max="99" value="' + entry.score + '"><span class="multiple-force-field-label">' + timeLbl + '</span><input type="number" class="multiple-force-input multiple-force-input-time" min="0" max="599" value="' + (entry.time || 15) + '"><button type="button" class="remove-multiple-force-btn" data-index="' + i + '" aria-label="Verwijderen">−</button>';
      list.appendChild(row);
      var btn = row.querySelector('.remove-multiple-force-btn');
      if (btn) {
        (function (idx) { btn.addEventListener('click', function () { removeMultipleForceRow(idx); }); })(i);
      }
    }
  }

  function syncLeaderboardForceNamesFromDom() {
    var listA = getEl('leaderboardForceNamesAboveList');
    var listB = getEl('leaderboardForceNamesBelowList');
    if (listA) {
      var inputsA = listA.querySelectorAll('.leaderboard-force-name-input');
      if (inputsA.length > 0) {
        forcedLeaderboardNamesAbove = [];
        for (var ia = 0; ia < inputsA.length; ia++) forcedLeaderboardNamesAbove.push(sanitizePlayerName(inputsA[ia].value));
        if (forcedLeaderboardNamesAbove.length === 0) forcedLeaderboardNamesAbove = [''];
      }
    }
    if (listB) {
      var inputsB = listB.querySelectorAll('.leaderboard-force-name-input');
      if (inputsB.length > 0) {
        forcedLeaderboardNamesBelow = [];
        for (var ib = 0; ib < inputsB.length; ib++) forcedLeaderboardNamesBelow.push(sanitizePlayerName(inputsB[ib].value));
        if (forcedLeaderboardNamesBelow.length === 0) forcedLeaderboardNamesBelow = [''];
      }
    }
  }

  function removeLeaderboardForceNameRow(which, index) {
    syncLeaderboardForceNamesFromDom();
    if (which === 'above') {
      forcedLeaderboardNamesAbove.splice(index, 1);
      if (forcedLeaderboardNamesAbove.length === 0) forcedLeaderboardNamesAbove = [''];
    } else {
      forcedLeaderboardNamesBelow.splice(index, 1);
      if (forcedLeaderboardNamesBelow.length === 0) forcedLeaderboardNamesBelow = [''];
    }
    renderLeaderboardForceNameLists();
  }

  function addLeaderboardForceNameRow(which) {
    syncLeaderboardForceNamesFromDom();
    if (which === 'above') {
      if (forcedLeaderboardNamesAbove.length >= LEADERBOARD_FORCE_NAMES_MAX) return;
      forcedLeaderboardNamesAbove.push('');
    } else {
      if (forcedLeaderboardNamesBelow.length >= LEADERBOARD_FORCE_NAMES_MAX) return;
      forcedLeaderboardNamesBelow.push('');
    }
    renderLeaderboardForceNameLists();
  }

  function renderLeaderboardForceNameLists() {
    var listA = getEl('leaderboardForceNamesAboveList');
    var listB = getEl('leaderboardForceNamesBelowList');
    var ph = t('forcedLbNeighborNamePlaceholder');
    function renderList(listEl, arr, which) {
      if (!listEl) return;
      listEl.innerHTML = '';
      for (var i = 0; i < arr.length; i++) {
        var row = document.createElement('div');
        row.className = 'settings-row leaderboard-force-name-row';
        var rankLbl = document.createElement('span');
        rankLbl.className = 'settings-label leaderboard-force-name-rank';
        rankLbl.textContent = (which === 'above' ? 'R−' : 'R+') + String(i + 1);
        var inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'player-name-input leaderboard-force-name-input';
        inp.maxLength = 24;
        inp.autocomplete = 'off';
        inp.value = arr[i] || '';
        inp.placeholder = ph;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'remove-multiple-force-btn leaderboard-force-remove-name';
        btn.textContent = '−';
        btn.setAttribute('aria-label', 'Remove');
        (function (idx, w) {
          btn.addEventListener('click', function () { removeLeaderboardForceNameRow(w, idx); });
        })(i, which);
        row.appendChild(rankLbl);
        row.appendChild(inp);
        row.appendChild(btn);
        listEl.appendChild(row);
      }
    }
    renderList(listA, forcedLeaderboardNamesAbove, 'above');
    renderList(listB, forcedLeaderboardNamesBelow, 'below');
  }

  function openForcingSettings() {
    if (spectatorMode) {
      openNormalSettings();
      return;
    }
    var overlay = getEl('settingsOverlay');
    var normalPanel = getEl('normalSettingsPanel');
    var forcingPanel = getEl('forcingSettingsPanel');
    var modeSelect = getEl('gameModeSelect');
    var forcingOpts = getEl('forcingModeOptions');
    var multipleForceOpts = getEl('multipleForceOptions');
    var scoreInput = getEl('forcedScoreInput');
    var timeInput = getEl('forcedTimeInput');
    var delayInput = getEl('forcedDelayInput');
    updateLicenseUI();
    if (modeSelect) modeSelect.value = gameMode;
    var leaderboardForceOpts = getEl('leaderboardForceOptions');
    if (forcingOpts) forcingOpts.style.display = (gameMode === 'forcing') ? '' : 'none';
    if (multipleForceOpts) multipleForceOpts.style.display = (gameMode === 'other') ? '' : 'none';
    if (leaderboardForceOpts) leaderboardForceOpts.style.display = (gameMode === 'leaderboard_force') ? '' : 'none';
    if (getEl('forcedLeaderboardRankInput')) getEl('forcedLeaderboardRankInput').value = forcedLeaderboardRank;
    renderLeaderboardForceNameLists();
    renderMultipleForceList();
    if (gameMode === 'leaderboard_force') {
      var lfOpts = getEl('leaderboardForceOptions');
      if (lfOpts) {
        requestAnimationFrame(function () {
          try {
            lfOpts.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          } catch (e) {}
        });
      }
    }
    if (scoreInput) scoreInput.value = forcedScore;
    if (timeInput) timeInput.value = forcedTime;
    if (delayInput) delayInput.value = forcedDelay;
    var apiCb = getEl('apiModeCheckbox');
    var apiKeyDisplay = getEl('apiKeyDisplay');
    if (apiCb) apiCb.checked = apiModeEnabled;
    if (apiKeyDisplay) apiKeyDisplay.textContent = apiKey ? apiKey : '—';
    if (licenseValid && !apiKey && !spectatorMode) fetchAndStoreApiKey();
    var afterSelect = getEl('forcingAfterSelect');
    var afterModeWrap = getEl('forcingAfterModeWrap');
    var afterModeSelect = getEl('forcingAfterModeSelect');
    if (afterSelect) afterSelect.value = forcingAfter;
    if (afterModeSelect) afterModeSelect.value = forcingAfterMode;
    if (afterModeWrap) afterModeWrap.style.display = forcingAfter === 'next' ? '' : 'none';
    syncLqCheckboxesFromState();
    syncPairingRegisterInputFromStorage();
    if (normalPanel) normalPanel.classList.add('hidden');
    if (forcingPanel) forcingPanel.classList.remove('hidden');
    if (overlay) overlay.classList.remove('hidden');
  }

  function onSettingsClick() {
    var now = Date.now();
    if (lastSettingsTapTime > 0 && (now - lastSettingsTapTime) <= SETTINGS_DOUBLE_TAP_MS) {
      if (settingsClickTimeout) {
        clearTimeout(settingsClickTimeout);
        settingsClickTimeout = null;
      }
      lastSettingsTapTime = 0;
      if (gameState === 'play') {
        ensureBackgroundMusicPlaying();
      } else {
        ensureMenuMusicPlaying();
      }
      openForcingSettings();
      return;
    }
    lastSettingsTapTime = now;
    if (settingsClickTimeout) {
      clearTimeout(settingsClickTimeout);
      settingsClickTimeout = null;
    }
    settingsClickTimeout = setTimeout(function () {
      settingsClickTimeout = null;
      lastSettingsTapTime = 0;
      if (gameState === 'play') {
        ensureBackgroundMusicPlaying();
      } else {
        ensureMenuMusicPlaying();
      }
      openNormalSettings();
    }, SETTINGS_SINGLE_OPEN_DELAY_MS);
  }

  function onSettingsDblclick(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (settingsClickTimeout) {
      clearTimeout(settingsClickTimeout);
      settingsClickTimeout = null;
    }
    lastSettingsTapTime = 0;
    if (gameState === 'play') {
      ensureBackgroundMusicPlaying();
    } else {
      ensureMenuMusicPlaying();
    }
    if (spectatorMode) {
      openNormalSettings();
      return;
    }
    openForcingSettings();
  }

  function getDeviceId() {
    try {
      var id = localStorage.getItem('skyHopperDeviceId');
      if (id) return id;
      id = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : (Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)).slice(0, 32);
      localStorage.setItem('skyHopperDeviceId', id);
      return id;
    } catch (e) {
      return 'dev-' + Date.now();
    }
  }

  var TEMP_LICENSE_CODE = 'DEV'; // Tijdelijk: verwijder later

  // AUTO-ACTIVATE: licenca ativada automaticamente (sem necessidade de key)
  (function autoActivateLicense() {
    try {
      localStorage.setItem('skyHopperLicenseValid', '1');
      if (!localStorage.getItem('skyHopperLicenseKey')) {
        localStorage.setItem('skyHopperLicenseKey', 'DEV');
      }
      localStorage.setItem('skyHopperLicenseRegistered', '1');
      localStorage.setItem('skyHopperLicenseTrial', '0');
    } catch (e) {}
  })();
  /** Alleen tonen na validate-license met reason already_used; tot succesvolle activatie. */
  var SHOW_RESET_DEVICE_SESSION_KEY = 'skyHopperShowResetDevice';

  function syncResetDeviceSectionVisibility() {
    var section = getEl('resetDeviceSection');
    if (!section) return;
    var show = false;
    try {
      show = sessionStorage.getItem(SHOW_RESET_DEVICE_SESSION_KEY) === '1';
    } catch (e) {}
    section.classList.toggle('hidden', !show);
    section.setAttribute('aria-hidden', show ? 'false' : 'true');
  }

  function setPendingResetDeviceSection(show) {
    try {
      if (show) sessionStorage.setItem(SHOW_RESET_DEVICE_SESSION_KEY, '1');
      else sessionStorage.removeItem(SHOW_RESET_DEVICE_SESSION_KEY);
    } catch (e) {}
    syncResetDeviceSectionVisibility();
  }

  function onLicenseActivate() {
    var input = getEl('licenseInput');
    var statusEl = getEl('licenseStatus');
    var btn = getEl('licenseActivateBtn');
    if (!input || !btn) return;
    var key = input.value.trim();
    if (!key) {
      if (statusEl) statusEl.textContent = t('licenseEnterKey');
      if (statusEl) statusEl.classList.add('not-activated');
      return;
    }
    if (key === TEMP_LICENSE_CODE) {
      licenseValid = true;
      licenseRegistered = true;
      try {
        localStorage.setItem('skyHopperLicenseValid', '1');
        localStorage.setItem('skyHopperLicenseKey', key);
        localStorage.setItem('skyHopperLicenseRegistered', '1');
        localStorage.setItem('skyHopperLicenseTrial', '0');
      } catch (e) {}
      setPendingResetDeviceSection(false);
      if (statusEl) statusEl.textContent = t('licenseStatusDev');
      if (statusEl) statusEl.classList.remove('not-activated');
      updateLicenseUI();
      updateForcingStatusDot();
      maybeShowSecretTutorialAfterActivation();
      return;
    }
    btn.disabled = true;
    if (statusEl) statusEl.textContent = t('licenseChecking');
    var deviceId = getDeviceId();
    fetch(getApiUrl('/api/validate-license'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: key, deviceId: deviceId })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d.valid) {
          licenseValid = true;
          try {
            localStorage.setItem('skyHopperLicenseValid', '1');
            localStorage.setItem('skyHopperLicenseKey', key);
            localStorage.removeItem('skyHopperLicenseRegistered');
            localStorage.setItem('skyHopperLicenseTrial', d.trial === true ? '1' : '0');
          } catch (e) {}
          licenseRegistered = false;
          setPendingResetDeviceSection(false);
          if (d.apiKey) {
            apiKey = String(d.apiKey).trim();
            try { localStorage.setItem('skyHopperApiKey', apiKey); } catch (e) {}
          }
          if (statusEl) statusEl.textContent = t('licenseStatusActivated');
          if (statusEl) statusEl.classList.remove('not-activated');
          updateLicenseUI();
          checkLicenseRegistrationStatus();
          updateForcingStatusDot();
          maybeShowSecretTutorialAfterActivation();
          schedulePushSessionConfig();
        } else {
          if (d.reason === 'grace_expired') {
            applyGraceExpiredAndShowModal();
            if (statusEl) {
              statusEl.textContent = t('gracePurchaseTitle');
              statusEl.classList.add('not-activated');
            }
          } else {
            licenseValid = false;
            licenseRegistered = false;
            try {
              localStorage.setItem('skyHopperLicenseValid', '0');
              localStorage.removeItem('skyHopperLicenseRegistered');
              localStorage.removeItem('skyHopperLicenseTrial');
            } catch (e) {}
            if (d.reason === 'already_used') {
              setPendingResetDeviceSection(true);
              if (statusEl) statusEl.textContent = t('licenseAlreadyUsed');
            } else if (d.reason === 'expired') {
              if (statusEl) statusEl.textContent = t('licenseTrialExpired');
            } else if (statusEl) {
              statusEl.textContent = t('licenseInvalid');
            }
            if (statusEl) statusEl.classList.add('not-activated');
            updateLicenseUI();
            updateForcingStatusDot();
          }
        }
      })
      .catch(function () {
        if (statusEl) {
          statusEl.textContent = t('licenseApiUnreachable');
        }
        if (statusEl) statusEl.classList.add('not-activated');
      })
      .then(function () { btn.disabled = false; });
  }

  function onRegisterKey() {
    var key = getStoredLicenseKey();
    var nameEl = getEl('registerNameInput');
    var emailEl = getEl('registerEmailInput');
    var statusEl = getEl('registerKeyStatus');
    var btn = getEl('registerKeyBtn');
    if (!key || !nameEl || !emailEl || !btn) return;
    var name = nameEl.value.trim();
    var email = emailEl.value.trim();
    if (!name || !email) {
      if (statusEl) statusEl.textContent = t('registerNameEmailRequired');
      if (statusEl) statusEl.classList.add('not-activated');
      return;
    }
    btn.disabled = true;
    if (statusEl) statusEl.textContent = t('registerBusy');
    if (statusEl) statusEl.classList.remove('not-activated');
    var deviceId = getDeviceId();
    fetch(getApiUrl('/api/register-license'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: key, name: name, email: email, deviceId: deviceId })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d.ok) {
          licenseRegistered = true;
          try { localStorage.setItem('skyHopperLicenseRegistered', '1'); } catch (e) {}
          if (statusEl) statusEl.textContent = t('registerSuccess');
          if (statusEl) statusEl.classList.remove('not-activated');
          updateLicenseUI();
        } else {
          if (statusEl) statusEl.textContent = (d.error || t('registerError'));
          if (statusEl) statusEl.classList.add('not-activated');
        }
      })
      .catch(function () {
        if (statusEl) {
          statusEl.textContent = t('registerError') + t('registerApiHint');
        }
        if (statusEl) statusEl.classList.add('not-activated');
      })
      .then(function () { btn.disabled = false; });
  }

  function onResetDevice() {
    var input = getEl('licenseInput');
    var emailEl = getEl('resetDeviceEmailInput');
    var statusEl = getEl('resetDeviceStatus');
    var btn = getEl('resetDeviceBtn');
    if (!emailEl || !btn) return;
    var key = input ? input.value.trim() : '';
    var email = emailEl.value.trim();
    if (!key || !email) {
      if (statusEl) {
        statusEl.textContent = t('resetDeviceMissing');
        statusEl.classList.add('not-activated');
      }
      return;
    }
    btn.disabled = true;
    if (statusEl) {
      statusEl.textContent = t('resetBusy');
      statusEl.classList.remove('not-activated');
    }
    fetch(getApiUrl('/api/reset-license-device'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: key, email: email })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d.ok) {
          if (statusEl) {
            statusEl.textContent = t('resetDeviceSuccess');
            statusEl.classList.remove('not-activated');
          }
        } else if (d.error === 'no_registration') {
          if (statusEl) {
            statusEl.textContent = t('resetDeviceErrorNoReg');
            statusEl.classList.add('not-activated');
          }
        } else {
          if (statusEl) {
            statusEl.textContent = t('resetDeviceErrorInvalid');
            statusEl.classList.add('not-activated');
          }
        }
      })
      .catch(function () {
        if (statusEl) {
          statusEl.textContent = t('registerError') + t('registerApiHint');
          statusEl.classList.add('not-activated');
        }
      })
      .then(function () { btn.disabled = false; });
  }

  function closeNormalSettings() {
    var volumeCb = getEl('volumeCheckbox');
    var sfxInput = getEl('sfxVolumeInput');
    var musicInput = getEl('musicVolumeInput');
    if (volumeCb) soundOn = volumeCb.checked;
    if (sfxInput) {
      var sv = parseInt(sfxInput.value, 10);
      if (!isNaN(sv)) sfxVolume = Math.min(1, Math.max(0, sv / 100));
    }
    if (musicInput) {
      var mv = parseInt(musicInput.value, 10);
      if (!isNaN(mv)) musicVolume = Math.min(1, Math.max(0, mv / 100));
    }
    if (applyLqFromDom()) resizeCanvas();
    applyAudioVolumes();
    ensureBackgroundMusicPlaying();
    saveForcingSettings();
    var overlay = getEl('settingsOverlay');
    var normalPanel = getEl('normalSettingsPanel');
    if (normalPanel) normalPanel.classList.add('hidden');
    if (overlay) overlay.classList.add('hidden');
  }

  /** Leest LQ alleen uit het normale instellingenpaneel; returnt true als lqMode gewijzigd. */
  function applyLqFromDom() {
    var lqCb = getEl('lqModeCheckbox');
    if (!lqCb) return false;
    var wasLq = lqMode;
    lqMode = lqCb.checked;
    if (lqMode && !wasLq) {
      puffs = [];
      confettiParticles = [];
    }
    syncLqCheckboxesFromState();
    return lqMode !== wasLq;
  }

  function closeSettings() {
    var modeSelect = getEl('gameModeSelect');
    var scoreInput = getEl('forcedScoreInput');
    var timeInput = getEl('forcedTimeInput');
    var delayInput = getEl('forcedDelayInput');
    var overlay = getEl('settingsOverlay');
    var forcingPanel = getEl('forcingSettingsPanel');
    if (modeSelect) {
      var v = modeSelect.value;
      gameMode = (v === 'forcing' || v === 'other' || v === 'leaderboard_force') ? v : 'normal';
      if (gameMode === 'normal') {
        secretModeActive = false;
      } else if (licenseValid) {
        /* Meteen secret modus aan na aanpassen (geen aparte logo-tap nodig) */
        secretModeActive = true;
      }
      forcingMode = (gameMode === 'forcing' && secretModeActive);
      if (gameMode !== 'forcing') {
        forcingReplayCount = 0;
        forceKillActive = false;
        forceKillDirection = 0;
      }
    }
    syncMultipleForceFromDom();
    syncLeaderboardForceNamesFromDom();
    /* Alleen bij Forcing zijn score/tijd/delay-zichtbaar; anders lezen we verborgen inputs niet
       (die houden oude waarden vast en overschrijven je echte instellingen). */
    if (gameMode === 'forcing') {
      if (scoreInput) {
        var val = parseInt(scoreInput.value, 10);
        forcedScore = isNaN(val) ? 0 : Math.min(99, Math.max(0, val));
      }
      if (timeInput) {
        var val2 = parseInt(timeInput.value, 10);
        forcedTime = isNaN(val2) ? 15 : Math.min(599, Math.max(0, val2));
      }
      if (delayInput) {
        var d = parseInt(delayInput.value, 10);
        forcedDelay = isNaN(d) ? 0 : Math.min(20, Math.max(0, d));
        forcingReplayCount = 0;
      }
    } else if (gameMode === 'other' && multipleForceScores.length > 0) {
      forcedScore = multipleForceScores[0].score;
      forcedTime = multipleForceScores[0].time;
    }
    var lbRankInput = getEl('forcedLeaderboardRankInput');
    if (lbRankInput) {
      var r = parseInt(lbRankInput.value, 10);
      forcedLeaderboardRank = isNaN(r) ? 5000 : Math.min(LEADERBOARD_SIZE, Math.max(1, r));
    }
    var afterSelect = getEl('forcingAfterSelect');
    var afterModeSelect = getEl('forcingAfterModeSelect');
    if (afterSelect) {
      var av = afterSelect.value;
      forcingAfter = (av === 'repeat' || av === 'next') ? av : 'off';
    }
    if (afterModeSelect) {
      var am = afterModeSelect.value;
      forcingAfterMode = (am === 'forcing' || am === 'other' || am === 'leaderboard_force') ? am : 'normal';
    }
    var apiCb = getEl('apiModeCheckbox');
    if (apiCb) apiModeEnabled = apiCb.checked;
    saveForcingSettings();
    pushSessionConfigImmediate();
    stopApiPolling();
    startApiPolling();
    updateForcingStatusDot();
    if (forcingPanel) forcingPanel.classList.add('hidden');
    if (overlay) overlay.classList.add('hidden');
    if (scoreEl) scoreEl.textContent = getDisplayScore();
  }

  function setCharacterIndex(index) {
    selectedCharacterIndex = (index + CONFIG.characters.length) % CONFIG.characters.length;
    drawMenuSprites();
  }

  var previewSwipeStartX = 0;
  var previewSwipeActive = false;
  var previewAnimating = false;

  function setCharacterIndexWithAnimation(direction) {
    if (previewAnimating) return;
    var inner = document.querySelector('.character-preview-inner');
    if (!inner) {
      setCharacterIndex(selectedCharacterIndex + direction);
      return;
    }
    previewAnimating = true;
    function onOutEnd() {
      inner.removeEventListener('transitionend', onOutEnd);
      inner.classList.remove('slide-out-left', 'slide-out-right');
      setCharacterIndex(selectedCharacterIndex + direction);
      drawMenuSprites();
      inner.classList.add(direction === 1 ? 'slide-in-from-right' : 'slide-in-from-left');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          inner.classList.remove('slide-in-from-right', 'slide-in-from-left');
          previewAnimating = false;
        });
      });
    }
    inner.addEventListener('transitionend', onOutEnd);
    inner.classList.add(direction === 1 ? 'slide-out-left' : 'slide-out-right');
  }

  function onPreviewSwipeStart(clientX) {
    previewSwipeStartX = clientX;
    previewSwipeActive = true;
  }

  function onPreviewSwipeEnd(clientX) {
    if (!previewSwipeActive) return;
    previewSwipeActive = false;
    var delta = clientX - previewSwipeStartX;
    var minSwipe = 50;
    if (delta > minSwipe) setCharacterIndexWithAnimation(-1);
    else if (delta < -minSwipe) setCharacterIndexWithAnimation(1);
  }

  function initPreviewSwipe() {
    var wrap = getEl('characterPreviewWrap');
    if (!wrap) return;
    wrap.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) onPreviewSwipeStart(e.touches[0].clientX);
    }, { passive: true });
    wrap.addEventListener('touchend', function (e) {
      if (e.changedTouches.length === 1) onPreviewSwipeEnd(e.changedTouches[0].clientX);
    }, { passive: true });
    wrap.addEventListener('mousedown', function (e) {
      if (e.button === 0) onPreviewSwipeStart(e.clientX);
    });
    document.addEventListener('mouseup', function (e) {
      if (e.button === 0 && previewSwipeActive) onPreviewSwipeEnd(e.clientX);
    });
    var arrowLeft = getEl('characterArrowLeft');
    var arrowRight = getEl('characterArrowRight');
    if (arrowLeft) arrowLeft.addEventListener('click', function () { setCharacterIndexWithAnimation(-1); });
    if (arrowRight) arrowRight.addEventListener('click', function () { setCharacterIndexWithAnimation(1); });
  }

  // --- Funcoes para o Swipe Input Secreto (Score 00-99) ---
  function onSwipeInputPointerDown(e) {
    if (gameState !== 'start') return;
    if (swipeInputPointerId !== null) return;
    if (!isCharacterSelectionVisible()) return;
    
    swipeInputPointerId = e.pointerId;
    swipeInputStartPos = { x: e.clientX, y: e.clientY };
    swipeInputLastPos = { x: e.clientX, y: e.clientY };
    swipeInputArrows = [];
  }
  
  function onSwipeInputPointerMove(e) {
    if (e.pointerId !== swipeInputPointerId) return;
    if (!swipeInputStartPos || !swipeInputLastPos) return;
    
    var dx = e.clientX - swipeInputLastPos.x;
    var dy = e.clientY - swipeInputLastPos.y;
    var dist = Math.hypot(dx, dy);
    
    if (dist >= swipeInputThreshold) {
      var arrow = '';
      if (Math.abs(dx) > Math.abs(dy)) {
        arrow = dx > 0 ? '→' : '←';
      } else {
        arrow = dy > 0 ? '↓' : '↑';
      }
      
      swipeInputArrows.push(arrow);
      swipeInputLastPos = { x: e.clientX, y: e.clientY };
      
      if (swipeInputArrows.length === 2) {
        processSwipeDecimal();
      } else if (swipeInputArrows.length === 4) {
        processSwipeUnits();
        swipeInputArrows = [];
      }
    }
  }
  
  function onSwipeInputPointerUp(e) {
    if (e.pointerId !== swipeInputPointerId) return;
    swipeInputPointerId = null;
  }
  
  function onSwipeInputPointerCancel(e) {
    if (e.pointerId === swipeInputPointerId) {
      onSwipeInputPointerUp(e);
    }
  }
  
  function processSwipeDecimal() {
    if (swipeInputArrows.length !== 2) return;
    
    var decimalMap = {
      '↑↑': 0, '↑→': 10, '→↑': 20, '→→': 30, '→↓': 40, '↓→': 50,
      '↓↓': 60, '↓←': 70, '←↓': 80, '←←': 90
    };
    
    var decimalPair = swipeInputArrows[0] + swipeInputArrows[1];
    var decimal = decimalMap[decimalPair];
    
    if (decimal !== undefined) {
      forcedScore = decimal;
      saveForcingSettings();
      updateForcingStatusDot();
    }
  }
  
  function processSwipeUnits() {
    if (swipeInputArrows.length !== 4) return;
    
    var unitsMap = {
      '↑↑': 0, '↑→': 1, '→↑': 2, '→→': 3, '→↓': 4, '↓→': 5,
      '↓↓': 6, '↓←': 7, '←↓': 8, '←←': 9
    };
    
    var decimalMap = {
      '↑↑': 0, '↑→': 10, '→↑': 20, '→→': 30, '→↓': 40, '↓→': 50,
      '↓↓': 60, '↓←': 70, '←↓': 80, '←←': 90
    };
    
    var decimalPair = swipeInputArrows[0] + swipeInputArrows[1];
    var unitsPair = swipeInputArrows[2] + swipeInputArrows[3];
    
    var decimal = decimalMap[decimalPair];
    var units = unitsMap[unitsPair];
    
    if (decimal !== undefined && units !== undefined) {
      forcedScore = decimal + units;
      saveForcingSettings();
      updateForcingStatusDot();
    }
    
    swipeInputArrows = [];
  }

  function init() {
    try {
      maybeStripCacheBustParam();
    } catch (e) {}
    initDom();
    applyUITranslations();
    updateLangTriggerFlag();
    var langTriggerBtn = getEl('langTriggerBtn');
    if (langTriggerBtn) langTriggerBtn.addEventListener('click', openLanguagePopup);
    var langPopupOverlay = getEl('languagePopupOverlay');
    if (langPopupOverlay) {
      langPopupOverlay.addEventListener('click', function (e) {
        if (e.target === langPopupOverlay) closeLanguagePopup();
      });
    }
    var langPopupClose = getEl('languagePopupClose');
    if (langPopupClose) langPopupClose.addEventListener('click', closeLanguagePopup);
    var langOptions = document.querySelectorAll('.lang-option');
    for (var o = 0; o < langOptions.length; o++) {
      (function (opt) {
        opt.addEventListener('click', function () {
          var l = opt.getAttribute('data-lang');
          if (TRANSLATIONS[l]) { setLanguage(l); closeLanguagePopup(); }
        });
      })(langOptions[o]);
    }
    resetBird();
    if (playBtn) playBtn.addEventListener('click', onPlayClick);
    var pairingRegisterBtn = getEl('pairingRegisterBtn');
    if (pairingRegisterBtn) pairingRegisterBtn.addEventListener('click', onPairingRegisterSubmit);
    var pairingRegisterInputEl = getEl('pairingRegisterInput');
    if (pairingRegisterInputEl) {
      pairingRegisterInputEl.addEventListener('input', onPairingRegisterInputSanitize);
      pairingRegisterInputEl.addEventListener('paste', function () {
        setTimeout(onPairingRegisterInputSanitize, 0);
      });
    }
    var pairingRegisterLockOverlayEl = getEl('pairingRegisterLockOverlay');
    if (pairingRegisterLockOverlayEl) pairingRegisterLockOverlayEl.addEventListener('click', openPairingFullLicenseModal);
    var pairingFullLicenseCloseBtn = getEl('pairingFullLicenseCloseBtn');
    if (pairingFullLicenseCloseBtn) pairingFullLicenseCloseBtn.addEventListener('click', closePairingFullLicenseModal);
    var pairingFullLicenseOverlay = getEl('pairingFullLicenseOverlay');
    if (pairingFullLicenseOverlay) {
      pairingFullLicenseOverlay.addEventListener('click', function (e) {
        if (e.target === pairingFullLicenseOverlay) closePairingFullLicenseModal();
      });
    }
    if (pauseBtn) pauseBtn.addEventListener('click', openPauseMenu);
    if (pauseResumeBtn) pauseResumeBtn.addEventListener('click', closePauseToGame);
    if (pauseMenuBtn) pauseMenuBtn.addEventListener('click', closePauseToMenu);
    if (pauseSettingsBtn) pauseSettingsBtn.addEventListener('click', function () {
      if (gameState === 'paused') openNormalSettings();
    });
    if (pauseLangBtn) pauseLangBtn.addEventListener('click', function () {
      if (gameState === 'paused') openLanguagePopup();
    });
    var settingsBtn = getEl('settingsBtn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', onSettingsClick);
      settingsBtn.addEventListener('dblclick', onSettingsDblclick);
    }
    var settingsCloseBtn = getEl('settingsCloseBtn');
    if (settingsCloseBtn) settingsCloseBtn.addEventListener('click', closeSettings);
    var clearCacheBtn = getEl('clearCacheBtn');
    if (clearCacheBtn) clearCacheBtn.addEventListener('click', clearCacheAndReload);
    var gameModeSelect = getEl('gameModeSelect');
    if (gameModeSelect) gameModeSelect.addEventListener('change', function () {
      var v = gameModeSelect.value;
      var forcingOpts = getEl('forcingModeOptions');
      var multipleOpts = getEl('multipleForceOptions');
      var leaderboardForceOpts = getEl('leaderboardForceOptions');
      if (forcingOpts) forcingOpts.style.display = (v === 'forcing') ? '' : 'none';
      if (multipleOpts) multipleOpts.style.display = (v === 'other') ? '' : 'none';
      if (leaderboardForceOpts) leaderboardForceOpts.style.display = (v === 'leaderboard_force') ? '' : 'none';
      if (v === 'leaderboard_force' && leaderboardForceOpts) {
        requestAnimationFrame(function () {
          try {
            leaderboardForceOpts.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          } catch (e) {}
        });
      }
    });
    var forcingAfterSelect = getEl('forcingAfterSelect');
    var forcingAfterModeWrap = getEl('forcingAfterModeWrap');
    if (forcingAfterSelect && forcingAfterModeWrap) {
      forcingAfterSelect.addEventListener('change', function () {
        forcingAfterModeWrap.style.display = forcingAfterSelect.value === 'next' ? '' : 'none';
      });
    }
    var addMultipleForceBtn = getEl('addMultipleForceBtn');
    if (addMultipleForceBtn) addMultipleForceBtn.addEventListener('click', function () {
      syncMultipleForceFromDom(); // bewaar huidige ingevoerde scores voor we opnieuw renderen
      multipleForceScores.push({ score: 0, time: 15 });
      renderMultipleForceList();
    });
    var addLbAboveBtn = getEl('addLeaderboardForceNameAboveBtn');
    if (addLbAboveBtn) addLbAboveBtn.addEventListener('click', function () { addLeaderboardForceNameRow('above'); });
    var addLbBelowBtn = getEl('addLeaderboardForceNameBelowBtn');
    if (addLbBelowBtn) addLbBelowBtn.addEventListener('click', function () { addLeaderboardForceNameRow('below'); });
    var normalSettingsCloseBtn = getEl('normalSettingsCloseBtn');
    if (normalSettingsCloseBtn) normalSettingsCloseBtn.addEventListener('click', closeNormalSettings);
    var licenseActivateBtn = getEl('licenseActivateBtn');
    if (licenseActivateBtn) licenseActivateBtn.addEventListener('click', onLicenseActivate);
    var registerKeyBtn = getEl('registerKeyBtn');
    if (registerKeyBtn) registerKeyBtn.addEventListener('click', onRegisterKey);
    var resetDeviceBtn = getEl('resetDeviceBtn');
    if (resetDeviceBtn) resetDeviceBtn.addEventListener('click', onResetDevice);
    initPreviewSwipe();
    document.addEventListener('keydown', onKeyDown);
    if (canvas) {
      /* Eén pointer-event voorkomt touch + mouse dubbel; anders preventDefault op touch blokkeert synthetische muis-events */
      if (typeof window.PointerEvent !== 'undefined') {
        canvas.addEventListener('pointerdown', onCanvasPointerDown, { passive: false });
      } else {
        canvas.addEventListener('mousedown', onCanvasPointerDown);
        canvas.addEventListener('touchstart', onCanvasPointerDown, { passive: false });
      }
    }
    if (restartBtn) restartBtn.addEventListener('click', onRestart);
    var gameOverToLeaderboardBtn = getEl('gameOverToLeaderboardBtn');
    if (gameOverToLeaderboardBtn) gameOverToLeaderboardBtn.addEventListener('click', goToLeaderboardSlide);
    var leaderboardBackBtn = getEl('leaderboardBackBtn');
    if (leaderboardBackBtn) leaderboardBackBtn.addEventListener('click', goBackToGameOverSlide);
    if (leaderboardRestartBtn) leaderboardRestartBtn.addEventListener('click', onRestart);
    if (leaderboardMenuBtn) leaderboardMenuBtn.addEventListener('click', onMenuClick);
    initLeaderboardSwipeBack();
    initGameOverSwipeToLeaderboard();
    if (leaderboardCanvasEl) {
      leaderboardCanvasEl.addEventListener('wheel', function (e) {
        if (!isLeaderboardVisible()) return;
        e.preventDefault();
        setLeaderboardScrollOffset(leaderboardScrollOffset + e.deltaY);
      }, { passive: false });
      leaderboardCanvasEl.addEventListener('touchstart', function (e) {
        if (!isLeaderboardVisible() || e.touches.length !== 1) return;
        leaderboardTouchStartY = e.touches[0].clientY;
        leaderboardTouchStartOffset = leaderboardScrollOffset;
      }, { passive: true });
      leaderboardCanvasEl.addEventListener('touchmove', function (e) {
        if (!isLeaderboardVisible() || e.touches.length !== 1) return;
        e.preventDefault();
        var dy = e.touches[0].clientY - leaderboardTouchStartY;
        setLeaderboardScrollOffset(leaderboardTouchStartOffset - dy);
        leaderboardTouchStartY = e.touches[0].clientY;
        leaderboardTouchStartOffset = leaderboardScrollOffset;
      }, { passive: false });
    }
    if (secondChanceBtn) secondChanceBtn.addEventListener('click', exitSecondChance);
    // Browser blokkeert geluid tot eerste gebruikersactie; start menu-muziek bij eerste klik/tap/toets
    function onFirstInteraction() {
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('keydown', onFirstInteraction);
      resumeSfxFlapContextIfNeeded();
      if (gameState === 'start') ensureMenuMusicPlaying();
    }
    document.addEventListener('click', onFirstInteraction);
    document.addEventListener('touchstart', onFirstInteraction, { passive: true });
    document.addEventListener('keydown', onFirstInteraction);
    document.addEventListener('visibilitychange', onDocumentVisibilityChange);
    
    // Adicionar listeners para o swipe input secreto na tela inicial
    document.addEventListener('pointerdown', onSwipeInputPointerDown, { passive: true });
    document.addEventListener('pointermove', onSwipeInputPointerMove, { passive: true });
    document.addEventListener('pointerup', onSwipeInputPointerUp, { passive: true });
    document.addEventListener('pointercancel', onSwipeInputPointerCancel, { passive: true });
    window.addEventListener('pagehide', pauseAllPageAudio);
    scheduleSecretTutorialIfNeeded();
    var secretTutorialOverlay = getEl('secretTutorialOverlay');
    if (secretTutorialOverlay) {
      secretTutorialOverlay.addEventListener('click', function (e) {
        if (e.target === secretTutorialOverlay) closeSecretTutorial();
      });
    }
    var secretTutorialBtn = getEl('secretTutorialBtn');
    if (secretTutorialBtn) secretTutorialBtn.addEventListener('click', function () {
      showSecretTutorial();
    });
    var secretTutorialCloseBtn = getEl('secretTutorialCloseBtn');
    if (secretTutorialCloseBtn) secretTutorialCloseBtn.addEventListener('click', closeSecretTutorial);
    var purchaseGraceCloseBtn = getEl('purchaseGraceCloseBtn');
    if (purchaseGraceCloseBtn) purchaseGraceCloseBtn.addEventListener('click', closePurchaseGraceModal);
    var purchaseGraceOverlay = getEl('purchaseGraceOverlay');
    if (purchaseGraceOverlay) {
      purchaseGraceOverlay.addEventListener('click', function (e) {
        if (e.target === purchaseGraceOverlay) closePurchaseGraceModal();
      });
    }
    animationId = requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  window.testSwipeInput = function(arrowsArray) {
    swipeInputArrows = arrowsArray;
    if (arrowsArray.length === 2) {
      processSwipeDecimal();
    } else if (arrowsArray.length === 4) {
      processSwipeUnits();
    }
  };
})();
