import { Outlet, Link } from "react-router-dom";
import { DigiHeader, DigiFooter, DigiIconBellFilled, DigiHeaderNotification, DigiHeaderAvatar, DigiHeaderNavigation, DigiHeaderNavigationItem, DigiIconAccessibilityUniversal, DigiIconSign, DigiIconGlobe, DigiIconEnvelope, DigiFooterCard, DigiLogo } from '@digi/arbetsformedlingen-react';
import { FooterVariation, FooterCardVariation, LogoVariation, LogoColor } from '@digi/arbetsformedlingen';
import logoLight from '../assets/logo/logo-light.jpeg';
import logoDark from '../assets/logo/logo-dark.jpeg';

export const Layout = () => {
  return (
    <>
      {/* ----------------Header---------------- */}
      <DigiHeader
        afSystemName="Designsystem"
        afHideSystemName={false}
        afMenuButtonText="Meny"
      >
        <a slot="header-logo" aria-label="Designsystemets startsida" href="/">
          <img src={logoLight} alt="Jobbhjälparnas logo" className="logo-light" />
        </a>
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
      <DigiFooter afVariation={FooterVariation.LARGE} class="footer">
        <div slot="content-top">
          {/* Kolumn 1 */}
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

          {/* Kolumn 2 */}
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER} class="footer-card">
              <a href="#">Om tjänsten</a>
              <p>Systemversion: 1.4.0 <br /> Ansvarig: Jenny Svensson</p>
            </DigiFooterCard>
          </div>

          {/* Kolumn 3 */}
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER} class="footer-card">
              <a href="#">Kontakta servicecenter</a>
              <p>Telefon: 0771-60 0001 <br /> Öppettider: Vardagar 08:00-16:30</p>
            </DigiFooterCard>
          </div>

          {/* Extra kolumner för fler länkar */}
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER} class="footer-card">
              <a href="#">För utvecklare</a>
              <p>Design tokens, komponenter och mer.</p>
            </DigiFooterCard>
          </div>

          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER} class="footer-card">
              <a href="#">Karriär</a>
              <p>Jobba hos oss.</p>
            </DigiFooterCard>
          </div>
        </div>

        <div slot="content-bottom-left">
          <Link to="/">
          <img src={logoDark} alt="Jobbhjälparnas logo" className="logo-light" />
            <DigiLogo afVariation={LogoVariation.LARGE} afColor={LogoColor.SECONDARY}>
              
            </DigiLogo>
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