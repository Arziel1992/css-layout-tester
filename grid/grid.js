// Get all parent controls
const displayProperty = document.getElementById('display-property');
const gridTemplateColumns = document.getElementById('grid-template-columns');
const gridTemplateRows = document.getElementById('grid-template-rows');
const gridGap = document.getElementById('grid-gap');
const justifyItems = document.getElementById('justify-items');
const alignItems = document.getElementById('align-items');
const justifyContent = document.getElementById('justify-content');
const alignContent = document.getElementById('align-content');
const gridAutoFlow = document.getElementById('grid-auto-flow');

// Child properties
const itemSelect = document.getElementById('item-select');
const gridColumn = document.getElementById('grid-column');
const gridRow = document.getElementById('grid-row');
const justifySelf = document.getElementById('justify-self');
const alignSelf = document.getElementById('align-self');
const gridArea = document.getElementById('grid-area');
const order = document.getElementById('order');

// Container and code preview
const gridContainer = document.getElementById('grid-container');
const codePreview = document.getElementById('css-code');

// Buttons
const addItemBtn = document.getElementById('add-item');
const removeItemBtn = document.getElementById('remove-item');

// Update grid container based on parent properties
function updateParentProperties() {
    gridContainer.style.display = displayProperty.value;
    gridContainer.style.gridTemplateColumns = gridTemplateColumns.value;
    gridContainer.style.gridTemplateRows = gridTemplateRows.value;
    gridContainer.style.gap = gridGap.value;
    gridContainer.style.justifyItems = justifyItems.value;
    gridContainer.style.alignItems = alignItems.value;
    gridContainer.style.justifyContent = justifyContent.value;
    gridContainer.style.alignContent = alignContent.value;
    gridContainer.style.gridAutoFlow = gridAutoFlow.value;

    updateCodePreview();
}

// Update selected child element
function updateChildProperties() {
    const selectedItem = document.getElementById(itemSelect.value);

    if (selectedItem) {
        if (gridColumn.value) selectedItem.style.gridColumn = gridColumn.value;
        if (gridRow.value) selectedItem.style.gridRow = gridRow.value;
        selectedItem.style.justifySelf = justifySelf.value;
        selectedItem.style.alignSelf = alignSelf.value;
        if (gridArea.value) selectedItem.style.gridArea = gridArea.value;
        selectedItem.style.order = order.value;
    }

    updateCodePreview();
}

// Update code preview
function updateCodePreview() {
    const parentCode = `.container {
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">${displayProperty.value}</span><span class="punctuation">;</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">${gridTemplateColumns.value}</span><span class="punctuation">;</span>
  <span class="property">grid-template-rows</span><span class="punctuation">:</span> <span class="value">${gridTemplateRows.value}</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">${gridGap.value}</span><span class="punctuation">;</span>
  <span class="property">justify-items</span><span class="punctuation">:</span> <span class="value">${justifyItems.value}</span><span class="punctuation">;</span>
  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">${alignItems.value}</span><span class="punctuation">;</span>
  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">${justifyContent.value}</span><span class="punctuation">;</span>
  <span class="property">align-content</span><span class="punctuation">:</span> <span class="value">${alignContent.value}</span><span class="punctuation">;</span>
  <span class="property">grid-auto-flow</span><span class="punctuation">:</span> <span class="value">${gridAutoFlow.value}</span><span class="punctuation">;</span>
}`;

    const selectedItem = document.getElementById(itemSelect.value);
    let childCode = '';

    if (selectedItem) {
        childCode = `
<span class="selector">#${itemSelect.value}</span> <span class="punctuation">{</span>`;

        if (gridColumn.value) {
            childCode += `
  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="value">${gridColumn.value}</span><span class="punctuation">;</span>`;
        }

        if (gridRow.value) {
            childCode += `
  <span class="property">grid-row</span><span class="punctuation">:</span> <span class="value">${gridRow.value}</span><span class="punctuation">;</span>`;
        }

        childCode += `
  <span class="property">justify-self</span><span class="punctuation">:</span> <span class="value">${justifySelf.value}</span><span class="punctuation">;</span>
  <span class="property">align-self</span><span class="punctuation">:</span> <span class="value">${alignSelf.value}</span><span class="punctuation">;</span>`;

        if (gridArea.value) {
            childCode += `
  <span class="property">grid-area</span><span class="punctuation">:</span> <span class="value">${gridArea.value}</span><span class="punctuation">;</span>`;
        }

        childCode += `
  <span class="property">order</span><span class="punctuation">:</span> <span class="value">${order.value}</span><span class="punctuation">;</span>
<span class="punctuation">}</span>`;
    }

    codePreview.innerHTML = parentCode + childCode;
}

// Reset child element form when selecting different item
itemSelect.addEventListener('change', function () {
    const selectedItem = document.getElementById(itemSelect.value);

    if (selectedItem) {
        gridColumn.value = selectedItem.style.gridColumn || 'auto';
        gridRow.value = selectedItem.style.gridRow || 'auto';
        justifySelf.value = selectedItem.style.justifySelf || 'auto';
        alignSelf.value = selectedItem.style.alignSelf || 'auto';
        gridArea.value = selectedItem.style.gridArea || '';
        order.value = selectedItem.style.order || '0';
    }

    updateChildProperties();
});

// Add item to the grid container
addItemBtn.addEventListener('click', function () {
    const items = document.querySelectorAll('.grid-item');
    const newItemNumber = items.length + 1;

    const newItem = document.createElement('div');
    newItem.className = 'grid-item';
    newItem.id = 'item' + newItemNumber;
    newItem.textContent = 'Item ' + newItemNumber;

    gridContainer.appendChild(newItem);

    // Add to select dropdown
    const option = document.createElement('option');
    option.value = 'item' + newItemNumber;
    option.textContent = 'Item ' + newItemNumber;
    itemSelect.appendChild(option);
});

// Remove last item from the grid container
removeItemBtn.addEventListener('click', function () {
    const items = document.querySelectorAll('.grid-item');

    if (items.length > 1) {
        const lastItem = items[items.length - 1];
        gridContainer.removeChild(lastItem);

        // Remove from select dropdown
        for (let i = 0; i < itemSelect.options.length; i++) {
            if (itemSelect.options[i].value === lastItem.id) {
                itemSelect.remove(i);
                break;
            }
        }
    }
});

// Add functionality to copy code to clipboard
function setupCopyButton() {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<span class="copy-icon">📋</span> Copy';

    copyButton.addEventListener('click', function () {
        const code = codePreview.textContent;
        navigator.clipboard
            .writeText(code)
            .then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.innerHTML =
                        '<span class="copy-icon">📋</span> Copy';
                }, 2000);
            })
            .catch((err) => {
                console.error('Could not copy text: ', err);
            });
    });

    const codePreviewParent = codePreview.parentElement;
    codePreviewParent.style.position = 'relative';
    codePreviewParent.appendChild(copyButton);
}

// Add event listeners to parent property controls
displayProperty.addEventListener('change', updateParentProperties);
gridTemplateColumns.addEventListener('input', updateParentProperties);
gridTemplateRows.addEventListener('input', updateParentProperties);
gridGap.addEventListener('input', updateParentProperties);
justifyItems.addEventListener('change', updateParentProperties);
alignItems.addEventListener('change', updateParentProperties);
justifyContent.addEventListener('change', updateParentProperties);
alignContent.addEventListener('change', updateParentProperties);
gridAutoFlow.addEventListener('change', updateParentProperties);

// Add event listeners to child property controls
gridColumn.addEventListener('input', updateChildProperties);
gridRow.addEventListener('input', updateChildProperties);
justifySelf.addEventListener('change', updateChildProperties);
alignSelf.addEventListener('change', updateChildProperties);
gridArea.addEventListener('input', updateChildProperties);
order.addEventListener('change', updateChildProperties);

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    updateParentProperties();
    updateChildProperties();
    setupCopyButton();
});
