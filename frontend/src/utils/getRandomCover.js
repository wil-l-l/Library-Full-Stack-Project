import { exhaustiveUniqueRandom } from "unique-random";
import AtomicHabits from "../assets/covers/atomic-habits.jpg";
import Dune from "../assets/covers/dune.jpg";
import HarryPotter from "../assets/covers/harry-potter-and-the-sorcerers-stone.jpg";
import MagicTreeHouse from "../assets/covers/magic-tree-house.jpg";
import TheAlchemist from "../assets/covers/the-alchemist.jpg";
import TheRye from "../assets/covers/the-catcher-in-the-rye.jpg";
import Narnia from "../assets/covers/the-chronicles-of-narnia.jpg";
import DragonTattoo from "../assets/covers/the-girl-with-the-dragon-tattoo.jpg";
import TheGiver from "../assets/covers/the-giver.jpg";
import TheHobbit from "../assets/covers/the-hobbit.jpg";
import TheHungerGames from "../assets/covers/the-hobbit.jpg";
import Rings from "../assets/covers/the-lord-of-the-rings.jpg";
import MockingBird from "../assets/covers/to-kill-a-mocking-bird.jpg";
import Pi from "../assets/covers/lifeofpi.jpg";
import Jane from "../assets/covers/janeeyre.jpg";
import Handmaid from "../assets/covers/handmaid.jpg";
import Heights from "../assets/covers/heights.jpg";

const getRandomCover = () => {
  const covers = [
    AtomicHabits,
    Dune,
    HarryPotter,
    MagicTreeHouse,
    TheAlchemist,
    TheRye,
    Narnia,
    DragonTattoo,
    TheGiver,
    TheHobbit,
    TheHungerGames,
    Rings,
    MockingBird,
    Pi,
    Jane,
    Handmaid,
    Heights,
  ];

  const random = exhaustiveUniqueRandom(0, covers.length - 1);

  let count = 0;
  let index;
  for (const number of random) {
    count = count + 1;

    index = number;

    // The unique numbers will be iterated over infinitely
    if (count === 1) break;
  }

  return covers[index];
};

export default getRandomCover;
