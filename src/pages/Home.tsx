import { TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";

export const Home = () => {
  return (
    <DigiTypography afVariation={TypographyVariation.SMALL}>
      <main>
        <DigiLayoutContainer afVerticalPadding>
          <h2>Välkommen till vår Jobbplattform</h2>
          <p>
            Här kan du hitta och söka efter de senaste jobben inom olika branscher.
          </p>
        </DigiLayoutContainer>

        <DigiLayoutContainer afVerticalPadding>
          <h2>Sök jobb</h2>
          <p>
            Upptäck olika jobbannonser med vår kraftfulla sökfunktion och hitta ditt drömjobb
            snabbt och enkelt.
          </p>
        </DigiLayoutContainer>

        <DigiLayoutContainer afVerticalPadding>
          <h2>Skapa profil</h2>
          <p>
            Skapa en profil och låt arbetsgivare hitta dig genom vår plattform. Det har aldrig varit
            enklare att bli synlig för företag.
          </p>
        </DigiLayoutContainer>
      </main>
    </DigiTypography>
  );
};


/* import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";

export const Home = () => {
  return (
    <main>
      <DigiLayoutContainer afVerticalPadding>
        <h2>Välkommen till vår Jobbplattform</h2>
        <p>
          Här kan du hitta och söka efter de senaste jobben inom olika branscher.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h2>Sök jobb</h2>
        <p>
          Upptäck olika jobbannonser med vår kraftfulla sökfunktion och hitta ditt drömjobb
          snabbt och enkelt.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h2>Skapa profil</h2>
        <p>
          Skapa en profil och låt arbetsgivare hitta dig genom vår plattform. Det har aldrig varit
          enklare att bli synlig för företag.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3 id="arbetlos">Arbetslös, vad händer nu?</h3>
        <p>
          Inskrivning, planeringssamtal, a-kassa, Det här behöver du veta.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3 id="extra-stod">Extra stöd</h3>
        <p>
          Arbetsmarknadsutbildning, praktik, stöd vid funktionsnedsättning, A-Ö.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3 id="hitta-jobb">Så hittar du jobbet</h3>
        <p>
          Platsbanken, skapa profil, starta eget. Flera sätt att hitta rätt jobb.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3 id="cv-ansokan">CV, ansökan och intervju</h3>
        <p>
          Tips när du söker jobb. Validera dina betyg och intyg.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3 id="yrken-framtid">Yrken och framtid</h3>
        <p>
          Yrken, framtidsutsikter, utbildning, intresseguide – gör smarta yrkesval.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3 id="utbildning-studier">Utbildning och studier</h3>
        <p>
          Utbilda dig till jobb. Studiestöd och utbildningsvägar.
        </p>
      </DigiLayoutContainer>
    </main>
  );
}; */