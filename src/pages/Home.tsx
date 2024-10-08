import { ButtonVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";
import fasadImage from '../assets/images/husfasad.jpg';



export const Home = () => {
  return (
    <DigiTypography afVariation={TypographyVariation.SMALL}>
    <main>
      <DigiLayoutContainer afVerticalPadding>
        <h2>Välkommen till vår Jobbplattform</h2>
        <p>
          Här kan du hitta och söka efter de senaste jobben inom olika branscher.
        </p>
         <img src={fasadImage} alt="foretagsnamn-pa-husfasad" style={{ width: "60%", height: "auto" }} />
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h2>Sök jobb</h2>
        <p>
          Upptäck olika jobbannonser med vår kraftfulla sökfunktion och hitta ditt drömjobb
          snabbt och enkelt.
        </p>

        <Link to="/job/1">
          <DigiButton afVariation={ButtonVariation.PRIMARY}>
              Hitta jobb
            </DigiButton>
          </Link>

      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3>Skapa profil</h3>
        <p>
          Skapa en profil och låt arbetsgivare hitta dig genom vår plattform. Det har aldrig varit
          enklare att bli synlig för företag.
        </p>
      </DigiLayoutContainer>


  

      <DigiLayoutContainer afVerticalPadding>
        <h3>Arbetslös, vad händer nu?</h3>
        <p>
          Inskrivning, planeringssamtal, a-kassa, Det här behöver du veta.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3>Så hittar du jobbet</h3>
        <p>
          Platsbanken, skapa profil, starta eget. Flera sätt att hitta rätt jobb.
        </p>
      </DigiLayoutContainer>

      <DigiLayoutContainer afVerticalPadding>
        <h3>Utbildning och studier</h3>
        <p>
          Utbilda dig till jobb. Studiestöd och utbildningsvägar.
        </p>
      </DigiLayoutContainer>
    </main>
        </DigiTypography>
  );
};

