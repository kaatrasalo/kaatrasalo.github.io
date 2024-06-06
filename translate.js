const translateableRegex = /\[([^\]]+)]/g;

const translatable_content = {
  functionality: {
    EN: {
      clicktoenter: "Why are you here",
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
};

let active_language = languages.EN;

const urlParams = new URLSearchParams(window.location.search);
translateAll(urlParams.get("lang") || "EN");
