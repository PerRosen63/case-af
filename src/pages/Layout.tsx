import { Outlet, Link } from "react-router-dom";
import {
  DigiHeader,
  DigiHeaderNotification,
  DigiIconBellFilled,
  DigiHeaderAvatar,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
  DigiFooter,
  FooterVariation,
  DigiFooterCard,
  FooterCardVariation,
  DigiIconAccessibilityUniversal,
  DigiIconSign,
  DigiIconGlobe,
  DigiIconEnvelope,
  DigiLogo,
  LogoVariation,
  LogoColor,
  DigiButton,
  ButtonVariation
} from "@digi/arbetsformedlingen-react";

export const Layout = () => {
  const handleSearch = () => {
    console.log("Sök knappen trycktes");
  };

  return (
    <>
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
            afAlt="Profilbild på Linda Karlsson"
            afName="Linda Karlsson"
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
              <a href="/">Mina bokningar</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <a href="/">Grupper</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <a href="/">Kontakt</a>
            </DigiHeaderNavigationItem>
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>

      <main>
        <Outlet />
        <DigiButton onClick={handleSearch} afVariation={ButtonVariation.PRIMARY}>
          Sök
        </DigiButton>
      </main>

      <footer>
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
                      Mejla vår funktionbrevlåda
                    </a>
                  </li>
                </ul>
              </DigiFooterCard>
            </div>
            <div>
              <DigiFooterCard afType={FooterCardVariation.BORDER}>
                <a href="#">Om tjänsten dolores</a>
                <p>Systemversion: 1.4.0 <br/> Ansvarig: Jenny Svensson</p>
              </DigiFooterCard>
            </div>
            <div>
              <DigiFooterCard afType={FooterCardVariation.BORDER}>
                <a href="#">Kontakta servicdolores</a>
                <p>Telefon: 0771-60 0001 <br/> Öppettider: Vardagar 08:00-16:30</p>
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
      </footer>
    </>
  );
};