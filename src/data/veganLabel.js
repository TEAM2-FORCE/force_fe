import KoreaVeganMark from "../img/VeganMark/KoreaVeganMark.png";
import VeganSocietyMark from "../img/VeganMark/VeganSocietyMark.png";
import FranceVeganMark from "../img/VeganMark/FranceVeganMark.png";
import ItaliaVeganMark from "../img/VeganMark/ItaliaVeganMark.png";
import PetaMark from "../img/VeganMark/PetaMark.png";
import PetaVeganMark from "../img/VeganMark/PetaVeganMark.png";

import NoAnimalMaterial from "../img/MarkInModal/NoAnimalMaterial.png";
import NoAnimalExperiment from "../img/MarkInModal/NoAnimalExperiment.png";
import NoContamination from "../img/MarkInModal/NoContamination.png";
import NoGenetiChange from "../img/MarkInModal/NoGeneticChange.png";

export const veganMarkArray = [
  {
    id: 1,
    image: KoreaVeganMark,
    title: "Korea Agency of Vegan Certification and Services",
    description: [
      {
        icon: NoAnimalMaterial,
        text: `No animal-derived 
				raw materials.`,
      },
      {
        icon: NoAnimalExperiment,
        text: "No animal testing",
      },
      {
        icon: NoContamination,
        text: "No cross-contamination",
      },
    ],
  },
  {
    id: 2,
    image: FranceVeganMark,
    title: "EXPERTISE VEGAN EUROPE",
    description: [
      {
        icon: NoAnimalMaterial,
        text: `No raw material and 
				manufacturing aids of animal origin`,
      },
      {
        icon: NoAnimalExperiment,
        text: `No animal testing`,
      },
      {
        icon: NoAnimalMaterial,
        text: `No animal-derived materials 
				in packaging`,
      },
    ],
  },
  {
    id: 3,
    image: ItaliaVeganMark,
    title: "V LABEL ITALIA s.r.l.",
    description: [
      {
        icon: NoAnimalExperiment,
        text: `No animal 
				experiment and testing`,
      },
      {
        icon: NoContamination,
        text: `No cross-contamination `,
      },
      {
        icon: NoAnimalMaterial,
        text: `No animal-derived 
				raw materials and ingredients`,
      },
      {
        icon: NoGenetiChange,
        text: `No Genetically 
				Modified Organisms 
				components`,
      },
    ],
  },
  {
    id: 4,
    image: VeganSocietyMark,
    title: "The Vegan Society",
    description: [
      {
        icon: NoAnimalMaterial,
        text: `No animal-derived 
				ingredients`,
      },
      {
        icon: NoAnimalExperiment,
        text: `No animal experiments`,
      },
      {
        icon: NoGenetiChange,
        text: `No genetically
				modified creature`,
      },
      {
        icon: NoContamination,
        text: `No cross-contamination 
				with No-Vegan `,
      },
    ],
  },
  {
    id: 5,
    image: PetaMark,
    title: `People for the Ethical Treatment of Animals
		-Animal Test Free`,
    description: [
      {
        icon: NoAnimalExperiment,
        text: `No animal testing`,
      },
    ],
  },
  {
    id: 6,
    image: PetaVeganMark,
    title: `People for the Ethical Treatment of Animals
		-Animal Test Free and Vegan`,
    description: [
      {
        icon: NoAnimalExperiment,
        text: `No animal testing`,
      },
      {
        icon: NoAnimalMaterial,
        text: `No animal-derived 
				ingredients`,
      },
    ],
  },
];
