import * as treasures from "../../utils/Items/treasures";
import { makeMaterial, makeItem, resolveMaterials } from "../../utils/Items/Item";
import { 
  LusterRouter,
  GospelRouter
} from "./arcarumMaterialRouter";
import { ArcarumPriorities } from "./arcarumCosts"

const UNLOCK0 = 0;
const UNCAP5 = 1;
const SKILL4 = 2;

const summonToElement = {
    Justice: "water",
    HangedMan: "earth",
    Death: "dark",
    Temperance: "wind",
    Devil: "fire",
    Tower: "earth",
    Star: "light",
    Moon: "water",
    Sun: "fire",
    Judgement: "wind"
  };

const EvokerId = {
    Justice: "3040160000_01",
    HangedMan: "3040164000_01",
    Death: "3040169000_01",
    Temperance: "3040163000_01",
    Devil: "3040161000_01",
    Tower: "3040165000_01",
    Star: "3040162000_01",
    Moon: "3040168000_01",
    Sun: "3040167000_01",
    Judgement: "3040166000_01"
  };

const UncapEvokerId = {
    Justice: "3040160000_03",
    HangedMan: "3040164000_03",
    Death: "3040169000_01",
    Temperance: "3040163000_01",
    Devil: "3040161000_01",
    Tower: "3040165000_01",
    Star: "3040162000_01",
    Moon: "3040168000_01",
    Sun: "3040167000_01",
    Judgement: "3040166000_01"
};

const Uncap5 = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SephiraEvolite, 1, ArcarumPriorities.RARE));
  list.push(makeMaterial(treasures.SephiraStone, 200, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...LusterRouter(element, 50));
  list.push(...GospelRouter(element, 50));

  return makeItem(UncapEvokerId[name], name, "npc", {isCrafted:true, craftMaterials:list});
};

const Skill4 = name => {
    let list = [];
    list.push(makeMaterial(treasures.SunlightStone, 1, ArcarumPriorities.RARE));
    list.push(makeMaterial(treasures.NewWorldQuartz, 30, ArcarumPriorities.RARE));
    list.push(makeMaterial(treasures.Idean("World"), 100, ArcarumPriorities.IMPORTANT));
    list.push(makeMaterial(treasures.DamascusCrystal, 10, ArcarumPriorities.OTHER))
  
    return makeItem(UncapEvokerId[name], name, "npc", {isCrafted:true, craftMaterials:list});
};

export const uncapFactory = (name, step) => {
  if (typeof step === "undefined")
    step = 0;
  switch(step) {
    case UNLOCK0:
    case UNCAP5:
      return Uncap5(name);
    case SKILL4:
      return Skill4(name);
    default:
      console.log("Wrong step for evoker uncap ", name, step);
  }
};

export const resolveUncap = (plans) => {
  let targets = [];
  plans.forEach(plan => {
    let {name, current, target} = plan;
    Array.from({length: target - current}, (_, i) => i+current+1).forEach(i => {
      targets.push(makeMaterial(uncapFactory(name, i),1));
    });
  });
  let virtual_target = makeItem(null, "fake", "", {isCrafted:true, craftMaterials:targets});
  return resolveMaterials(makeMaterial(virtual_target, 1));
};