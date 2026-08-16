const textarea = document.querySelector("textarea");
const addSpaceButton = document.querySelector("#add-space");
const spaceContainer = document.querySelector("#space-container");


addSpaceButton.addEventListener("click", addSpace);

function addSpace() {
  const spaceWrapper = document.createElement("div");
  spaceWrapper.className = "space-wrapper";
  const removeSpace = document.createElement("button");
  removeSpace.className = "remove-space";
  removeSpace.innerText = "×";
  const space = document.createElement("textarea");
  space.spellcheck = false;
  space.placeholder = 'Type ...';
  spaceWrapper.append(removeSpace, space);
  spaceContainer.appendChild(spaceWrapper);
}


spaceContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-space')) {
    const wrapper = event.target.closest('.space-wrapper');
    wrapper.remove();
  }
});

