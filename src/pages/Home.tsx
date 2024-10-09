import { ButtonVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";
import fasadImage from '../assets/images/husfasad.jpg';

const sections = [
  {
    title: "Välkommen till vår Jobbplattform",
    content: "Här kan du hitta och söka efter de senaste jobben inom olika branscher.",
    image: fasadImage,
  },
  {
    title: "Sök jobb",
    content: "Upptäck olika jobbannonser med vår kraftfulla sökfunktion och hitta ditt drömjobb snabbt och enkelt.",
    button: true,
  },
  {
    title: "Skapa profil",
    content: "Skapa en profil och låt arbetsgivare hitta dig genom vår plattform. Det har aldrig varit enklare att bli synlig för företag.",
  },
  {
    title: "Arbetslös, vad händer nu?",
    content: "Inskrivning, planeringssamtal, a-kassa. Det här behöver du veta.",
  },
  {
    title: "Så hittar du jobbet",
    content: "Platsbanken, skapa profil, starta eget. Flera sätt att hitta rätt jobb.",
  },
  {
    title: "Utbildning och studier",
    content: "Utbilda dig till jobb. Studiestöd och utbildningsvägar.",
  },
];

export const Home = () => {
  return (
    <DigiTypography afVariation={TypographyVariation.SMALL}>
      <main>
        {sections.map((section, index) => (
          <DigiLayoutContainer key={index} afVerticalPadding>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.image && (
              <img src={section.image} alt="foretagsnamn-pa-husfasad" style={{ width: "60%", height: "auto" }} />
            )}
            {section.button && (
              <Link to="/jobs">
                <DigiButton afVariation={ButtonVariation.PRIMARY}>
                  Hitta jobb
                </DigiButton>
              </Link>
            )}
          </DigiLayoutContainer>
        ))}
      </main>
    </DigiTypography>
  );
};