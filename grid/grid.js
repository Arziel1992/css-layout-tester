// Get all parent controls
const displayProperty = document.getElementById('display-property');
const gridTemplateColumns = document.getElementById('grid-template-columns');
const gridTemplateRows = document.getElementById('grid-template-rows');
const gridTemplateAreas = document.getElementById('grid-template-areas');
const gridGap = document.getElementById('grid-gap'); // legacy
const rowGap = document.getElementById('row-gap');
const columnGap = document.getElementById('column-gap');
const justifyItems = document.getElementById('justify-items');
const alignItems = document.getElementById('align-items');
const placeItems = document.getElementById('place-items');
const justifyContent = document.getElementById('justify-content');
const alignContent = document.getElementById('align-content');
const placeContent = document.getElementById('place-content');
const gridAutoFlow = document.getElementById('grid-auto-flow');

// Child properties
const itemSelect = document.getElementById('item-select');
const gridColumn = document.getElementById('grid-column');
const gridRow = document.getElementById('grid-row');
const justifySelf = document.getElementById('justify-self');
const alignSelf = document.getElementById('align-self');
const placeSelf = document.getElementById('place-self');
const gridArea = document.getElementById('grid-area');
const order = document.getElementById('order');

// Container and code preview
const gridContainer = document.getElementById('grid-container');
const codePreview = document.getElementById('css-code');

// Buttons
const addItemBtn = document.getElementById('add-item');
const removeItemBtn = document.getElementById('remove-item');

// Helper to escape HTML for code preview
const escapeHtml = (unsafe) => {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
};

// Update grid container based on parent properties
const updateParentProperties = () => {
    gridContainer.style.display = displayProperty.value;
    gridContainer.style.gridTemplateColumns = gridTemplateColumns.value;
    gridContainer.style.gridTemplateRows = gridTemplateRows.value;

    // Grid Template Areas
    if (gridTemplateAreas.value.trim()) {
        gridContainer.style.gridTemplateAreas = gridTemplateAreas.value;
    } else {
        gridContainer.style.gridTemplateAreas = 'none';
    }

    // Gap handling: Prefer row/column gap if set, else fallback to grid-gap
    if (rowGap.value || columnGap.value) {
        gridContainer.style.rowGap = rowGap.value;
        gridContainer.style.columnGap = columnGap.value;
        gridContainer.style.gap = ''; // Clear shorthand if specific ones used
    } else {
        gridContainer.style.gap = gridGap.value;
        gridContainer.style.rowGap = '';
        gridContainer.style.columnGap = '';
    }

    // Place Items Shorthand
    if (placeItems.value) {
        gridContainer.style.placeItems = placeItems.value;
    } else {
        gridContainer.style.placeItems = '';
        gridContainer.style.justifyItems = justifyItems.value;
        gridContainer.style.alignItems = alignItems.value;
    }

    // Place Content Shorthand
    if (placeContent.value) {
        gridContainer.style.placeContent = placeContent.value;
    } else {
        gridContainer.style.placeContent = '';
        gridContainer.style.justifyContent = justifyContent.value;
        gridContainer.style.alignContent = alignContent.value;
    }

    gridContainer.style.gridAutoFlow = gridAutoFlow.value;

    updateCodePreview();
};

// Update selected child element
const updateChildProperties = () => {
    const selectedItem = document.getElementById(itemSelect.value);

    if (selectedItem) {
        selectedItem.style.gridColumn = gridColumn.value || 'auto';
        selectedItem.style.gridRow = gridRow.value || 'auto';

        // Place Self Shorthand
        if (placeSelf.value) {
            selectedItem.style.placeSelf = placeSelf.value;
        } else {
            selectedItem.style.placeSelf = '';
            selectedItem.style.justifySelf = justifySelf.value;
            selectedItem.style.alignSelf = alignSelf.value;
        }

        selectedItem.style.gridArea = gridArea.value || '';
        selectedItem.style.order = order.value;
    }

    updateCodePreview();
};

// Update code preview
const updateCodePreview = () => {
    let parentCode = `.container {
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">${displayProperty.value}</span><span class="punctuation">;</span>
  <span class="property">grid-template-columns</span><span class="punctuation">:</span> <span class="value">${escapeHtml(gridTemplateColumns.value)}</span><span class="punctuation">;</span>
  <span class="property">grid-template-rows</span><span class="punctuation">:</span> <span class="value">${escapeHtml(gridTemplateRows.value)}</span><span class="punctuation">;</span>`;

    if (gridTemplateAreas.value.trim()) {
        parentCode += `\n  <span class="property">grid-template-areas</span><span class="punctuation">:</span> <span class="value">${escapeHtml(gridTemplateAreas.value)}</span><span class="punctuation">;</span>`;
    }

    if (rowGap.value || columnGap.value) {
        if (rowGap.value) parentCode += `\n  <span class="property">row-gap</span><span class="punctuation">:</span> <span class="value">${escapeHtml(rowGap.value)}</span><span class="punctuation">;</span>`;
        if (columnGap.value) parentCode += `\n  <span class="property">column-gap</span><span class="punctuation">:</span> <span class="value">${escapeHtml(columnGap.value)}</span><span class="punctuation">;</span>`;
    } else {
        parentCode += `\n  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">${escapeHtml(gridGap.value)}</span><span class="punctuation">;</span>`;
    }

    if (placeItems.value) {
        parentCode += `\n  <span class="property">place-items</span><span class="punctuation">:</span> <span class="value">${escapeHtml(placeItems.value)}</span><span class="punctuation">;</span>`;
    } else {
        parentCode += `\n  <span class="property">justify-items</span><span class="punctuation">:</span> <span class="value">${justifyItems.value}</span><span class="punctuation">;</span>`;
        parentCode += `\n  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">${alignItems.value}</span><span class="punctuation">;</span>`;
    }

    if (placeContent.value) {
        parentCode += `\n  <span class="property">place-content</span><span class="punctuation">:</span> <span class="value">${escapeHtml(placeContent.value)}</span><span class="punctuation">;</span>`;
    } else {
        parentCode += `\n  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">${justifyContent.value}</span><span class="punctuation">;</span>`;
        parentCode += `\n  <span class="property">align-content</span><span class="punctuation">:</span> <span class="value">${alignContent.value}</span><span class="punctuation">;</span>`;
    }

    parentCode += `\n  <span class="property">grid-auto-flow</span><span class="punctuation">:</span> <span class="value">${gridAutoFlow.value}</span><span class="punctuation">;</span>
}`;

    const selectedItem = document.getElementById(itemSelect.value);
    let childCode = '';

    if (selectedItem) {
        childCode = `
<span class="selector">#${itemSelect.value}</span> <span class="punctuation">{</span>`;

        if (gridColumn.value) {
            childCode += `\n  <span class="property">grid-column</span><span class="punctuation">:</span> <span class="value">${escapeHtml(gridColumn.value)}</span><span class="punctuation">;</span>`;
        }

        if (gridRow.value) {
            childCode += `\n  <span class="property">grid-row</span><span class="punctuation">:</span> <span class="value">${escapeHtml(gridRow.value)}</span><span class="punctuation">;</span>`;
        }

        if (placeSelf.value) {
            childCode += `\n  <span class="property">place-self</span><span class="punctuation">:</span> <span class="value">${escapeHtml(placeSelf.value)}</span><span class="punctuation">;</span>`;
        } else {
            childCode += `\n  <span class="property">justify-self</span><span class="punctuation">:</span> <span class="value">${justifySelf.value}</span><span class="punctuation">;</span>`;
            childCode += `\n  <span class="property">align-self</span><span class="punctuation">:</span> <span class="value">${alignSelf.value}</span><span class="punctuation">;</span>`;
        }

        if (gridArea.value) {
            childCode += `\n  <span class="property">grid-area</span><span class="punctuation">:</span> <span class="value">${escapeHtml(gridArea.value)}</span><span class="punctuation">;</span>`;
        }

        childCode += `\n  <span class="property">order</span><span class="punctuation">:</span> <span class="value">${order.value}</span><span class="punctuation">;</span>
<span class="punctuation">}</span>`;
    }

    codePreview.innerHTML = parentCode + childCode;
};

// Reset child element form when selecting different item
itemSelect.addEventListener('change', () => {
    const selectedItem = document.getElementById(itemSelect.value);

    if (selectedItem) {
        gridColumn.value = selectedItem.style.gridColumn || '';
        gridRow.value = selectedItem.style.gridRow || '';
        placeSelf.value = selectedItem.style.placeSelf || '';
        if (!placeSelf.value) {
            justifySelf.value = selectedItem.style.justifySelf || 'auto';
            alignSelf.value = selectedItem.style.alignSelf || 'auto';
        }
        gridArea.value = selectedItem.style.gridArea || '';
        order.value = selectedItem.style.order || '0';
    }

    updateChildProperties();
});

// Add item to the grid container
addItemBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.grid-item');
    const newItemNumber = items.length + 1;

    const newItem = document.createElement('div');
    newItem.className = 'grid-item';
    newItem.id = `item${newItemNumber}`;
    newItem.textContent = `Item ${newItemNumber}`;

    gridContainer.appendChild(newItem);

    // Add to select dropdown
    const option = document.createElement('option');
    option.value = `item${newItemNumber}`;
    option.textContent = `Item ${newItemNumber}`;
    itemSelect.appendChild(option);
});

// Remove last item from the grid container
removeItemBtn.addEventListener('click', () => {
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
const setupCopyButton = () => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<span class="copy-icon">📋</span> Copy';

    copyButton.addEventListener('click', () => {
        const code = codePreview.textContent;
        navigator.clipboard
            .writeText(code)
            .then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.innerHTML = '<span class="copy-icon">📋</span> Copy';
                }, 2000);
            })
            .catch((err) => {
                console.error('Could not copy text: ', err);
            });
    });

    const codePreviewParent = codePreview.parentElement;
    codePreviewParent.style.position = 'relative';
    codePreviewParent.appendChild(copyButton);
};

// Add event listeners to parent property controls
displayProperty.addEventListener('change', updateParentProperties);
gridTemplateColumns.addEventListener('input', updateParentProperties);
gridTemplateRows.addEventListener('input', updateParentProperties);
gridTemplateAreas.addEventListener('input', updateParentProperties);
gridGap.addEventListener('input', updateParentProperties);
rowGap.addEventListener('input', updateParentProperties);
columnGap.addEventListener('input', updateParentProperties);
justifyItems.addEventListener('change', () => {
    placeItems.value = '';
    updateParentProperties();
});
alignItems.addEventListener('change', () => {
    placeItems.value = '';
    updateParentProperties();
});
placeItems.addEventListener('input', updateParentProperties);
justifyContent.addEventListener('change', () => {
    placeContent.value = '';
    updateParentProperties();
});
alignContent.addEventListener('change', () => {
    placeContent.value = '';
    updateParentProperties();
});
placeContent.addEventListener('input', updateParentProperties);
gridAutoFlow.addEventListener('change', updateParentProperties);

// Add event listeners to child property controls
gridColumn.addEventListener('input', updateChildProperties);
gridRow.addEventListener('input', updateChildProperties);
justifySelf.addEventListener('change', () => {
    placeSelf.value = '';
    updateChildProperties();
});
alignSelf.addEventListener('change', () => {
    placeSelf.value = '';
    updateChildProperties();
});
placeSelf.addEventListener('input', updateChildProperties);
gridArea.addEventListener('input', updateChildProperties);
order.addEventListener('change', updateChildProperties);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateParentProperties();
    updateChildProperties();
    setupCopyButton();
});
