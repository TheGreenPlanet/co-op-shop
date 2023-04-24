
window.onload = () => {
    const shopButton = document.getElementsByClassName("Button Button--radius u-posRelative Button--icon Button--grayDark Button--DS Button--withBadge u-overflowVisible")[0];
    shopButton.addEventListener('click', () => { showOptions(); })
}

// results[0] += 200 // share
const results = [];

// Define the selectable options for the drop-down input
const options = [
    { value: '0', label: 'Share' },
    { value: '1', label: 'Person 1' },
    { value: '2', label: 'Person 2' },
];

function showOptions() {
    console.log("hello");
    const itemContainer = document.querySelectorAll(".Cart-itemContainer");

    itemContainer.forEach(item => {
        const itemWrapperActionsDiv = document.createElement("div");
        itemWrapperActionsDiv.classList.add("Cart-itemWrapperActions");

        const addToCartIsActiveDiv = document.createElement("div");
        addToCartIsActiveDiv.classList.add("AddToCart");
        addToCartIsActiveDiv.classList.add("is-active");

        const addToCartContainer = document.createElement("div");
        addToCartContainer.classList.add("AddToCart-container");

        const select = document.createElement("select");
        select.classList.add("AddToCart-input");

        // Create and append the option elements
        options.forEach((option) => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            select.appendChild(optionElement);
        });


        addToCartContainer.appendChild(select);
        addToCartIsActiveDiv.appendChild(addToCartContainer);
        itemWrapperActionsDiv.appendChild(addToCartIsActiveDiv);
        item.appendChild(itemWrapperActionsDiv);
    });
}

