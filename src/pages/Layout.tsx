import { Outlet, Link } from "react-router-dom";
import { DigiHeader, DigiFooter, DigiIconBellFilled, DigiHeaderNotification, DigiHeaderAvatar, DigiHeaderNavigation, DigiHeaderNavigationItem, DigiIconAccessibilityUniversal, DigiIconSign, DigiIconGlobe, DigiIconEnvelope, DigiFooterCard, DigiLogo } from '@digi/arbetsformedlingen-react';
import { FooterVariation, FooterCardVariation, LogoVariation, LogoColor } from '@digi/arbetsformedlingen';

export const Layout = () => {
  return (
    <>
      {/* ----------------Header---------------- */}
      <DigiHeader
        afSystemName="Designsystem"
        afHideSystemName={false}
        afMenuButtonText="Meny"
      >
        <a slot="header-logo" aria-label="Designsystemets startsida" href="/"></a>
        <div slot="header-content">
          <DigiHeaderNotification afNotificationAmount={8}>
            <a href="/">
              <DigiIconBellFilled></DigiIconBellFilled>
              Notiser
            </a>
          </DigiHeaderNotification>
          <DigiHeaderAvatar
            afSrc="/assets/images/avatar.svg"
            afAlt="Profilbild på Inloggad Medlem"
            afName="Medlem"
            afSignature="KALIA"
            afIsLoggedIn={true}
            afHideSignature={true}
          ></DigiHeaderAvatar>
        </div>
        <div slot="header-navigation">
          <DigiHeaderNavigation
            afCloseButtonText="Stäng"
            afCloseButtonAriaLabel="Stäng meny"
            afNavAriaLabel="Huvudmeny"
          >
            <DigiHeaderNavigationItem afCurrentPage={true}>
              <Link to="/">Hem</Link>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <Link to="/jobs">Sök jobb</Link>
            </DigiHeaderNavigationItem>
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>

      {/* ----------------Mainer---------------- */}
      <main>
        <Outlet />
      </main>

      {/* ----------------Footer---------------- */}
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
          <div>
            <DigiFooterCard afType={FooterCardVariation.ICON}>
              <ul>
                <li>
                  <a href="#">
                    <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                    Tillgänglighetsredogörelse
                  </a>
                </li>
                <li>
                  <a href="#">
                    <DigiIconSign></DigiIconSign>
                    Teckenspråk
                  </a>
                </li>
                <li>
                  <a href="#">
                    <DigiIconGlobe></DigiIconGlobe>
                    Other languages
                  </a>
                </li>
                <li>
                  <a href="#">
                    <DigiIconEnvelope></DigiIconEnvelope>
                    Mejla vår funktionsbrevlåda
                  </a>
                </li>
              </ul>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href="#">Om tjänsten</a>
              <p>Systemversion: 1.4.0 <br /> Ansvarig: Jenny Svensson</p>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href="#">Kontakta serviccenter</a>
              <p>Telefon: 0771-60 0001 <br /> Öppettider: Vardagar 08:00-16:30</p>
            </DigiFooterCard>
          </div>
        </div>
        <div slot="content-bottom-left">
          <Link to="/">
            <DigiLogo afVariation={LogoVariation.LARGE} afColor={LogoColor.SECONDARY}></DigiLogo>
          </Link>
        </div>
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </DigiFooter>
    </>
  );
};

export default Layout;