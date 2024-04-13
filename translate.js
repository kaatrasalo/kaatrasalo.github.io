const translateableRegex = /\[([^\]]+)]/g;

const translatable_content = {
  functionality: {
    EN: {
      clicktoenter: "Click to enter",
    },
    FI: {
      clicktoenter: "Clikkaa avataksesi sivun",
    },
  },
  intro: {
    EN: {
      aka: "aka.",
      or: "or",
    },
    FI: {
      aka: "aka.",
      or: "tai",
    },
  },
  age: {
    EN: {
      text: `I'm a ${calculateAge()}y old from Finland`,
    },
    FI: {
      text: `Olen ${calculateAge()} vuotias suomalainen`,
    },
  },
  pronouns: {
    EN: {
      text: "My pronouns are",
      primary: "he",
      secondary: "him",
    },
    FI: {
      text: "Pronounssit toimii suomalaisittain",
      primary: "hän",
      secondary: "hän",
    },
  },

  socials: {
    EN: {
      primarytext: "My social profiles",
      discord: "Discord",
      github: "Github",
    },
    FI: {
      primarytext: "Löydät minut myös",
      discord: "Discordissa",
      github: "Githubissa",
    },
  },
};

function getString(path) {
  const [primaryPath, secondaryPath] = path.split(".");
  return translatable_content[primaryPath][active_language][secondaryPath];
}

function translateItem(item) {
  let textContentCopy = item?.textContent;
  if (!textContentCopy) return;
  const matches = [...textContentCopy.matchAll(translateableRegex)];
  let patches = [];
  matches.forEach((match) => {
    patches.push({
      key: match[0],
      value: getString(match[1]),
    });
  });

  patches.forEach((patch) => {
    textContentCopy = textContentCopy.replaceAll(patch.key, patch.value);
  });

  item.textContent = textContentCopy;
}

function translateAll(language) {
  active_language = language;
  const allElements = document.getElementsByClassName("trans");
  for (const element in allElements) {
    const item = allElements[element];
    translateItem(item);
  }
}

const languages = {
  EN: "EN",
  FI: "FI",
};

let active_language = languages.EN;

const urlParams = new URLSearchParams(window.location.search);
translateAll(urlParams.get("lang") || "EN");
