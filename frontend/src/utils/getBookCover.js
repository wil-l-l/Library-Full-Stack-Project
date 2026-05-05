import Dune from "../assets/covers/dune.jpg";
import HarryPotter from "../assets/covers/harrypotterandthesorcerersstone.jpg";
import MagicTreeHouse from "../assets/covers/magictreehouse.jpg";
import Alchemist from "../assets/covers/thealchemist.jpg";
import Rye from "../assets/covers/thecatcherintherye.jpg";
import Narnia from "../assets/covers/thechroniclesofnarnia.jpg";
import DragonTattoo from "../assets/covers/thegirlwiththedragontattoo.jpg";
import Giver from "../assets/covers/thegiver.jpg";
import Hobbit from "../assets/covers/thehobbit.jpg";
import HungerGames from "../assets/covers/thehungergames.jpg";
import MockingBird from "../assets/covers/tokillamockingbird.jpg";
import Pi from "../assets/covers/lifeofpi.jpg";
import Jane from "../assets/covers/janeeyre.jpg";
import Heights from "../assets/covers/wutheringheights.jpg";
import GeorgeOrwell1984 from "../assets/covers/orwell1984.jpg";
import Davinci from "../assets/covers/thedavincicode.jpeg";
import BookThief from "../assets/covers/thebookthief.jpg";
import BraveNewWorld from "../assets/covers/bravenewworld.jpg";
import Moby from "../assets/covers/mobydick.jpg";
import Kite from "../assets/covers/thekiterunner.jpg";
import FaultStars from "../assets/covers/thefaultinourstars.jpg";
import Dracula from "../assets/covers/dracula.jpg";
import Road from "../assets/covers/theroad.jpg";
import Ender from "../assets/covers/endersgame.jpg";
import NameofWind from "../assets/covers/thenameofthewind.jpg";
import Player from "../assets/covers/readyplayerone.jpg";
import Silent from "../assets/covers/thesilentpatient.jpg";
import Educated from "../assets/covers/educated.jpg";

const getBookCover = (title) => {
  const covers = [
    MagicTreeHouse,
    Hobbit,
    HarryPotter,
    GeorgeOrwell1984,
    MockingBird,
    Alchemist,
    Davinci,
    HungerGames,
    BookThief,
    BraveNewWorld,
    Moby,
    Kite,
    Rye,
    FaultStars,
    Dune,
    Dracula,
    Road,
    Pi,
    Narnia,
    Jane,
    Heights,
    Giver,
    Ender,
    NameofWind,
    Player,
    DragonTattoo,
    Silent,
    Educated,
  ];

  return covers[
    covers.findIndex((url) =>
      url.match(new RegExp(title.replaceAll(/[\s']/g, "").toLowerCase(), "gi")),
    )
  ];
};

export default getBookCover;
