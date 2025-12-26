// Get all controls
const displayProperty = document.getElementById('display-property');
const flexDirection = document.getElementById('flex-direction');
const flexWrap = document.getElementById('flex-wrap');
const flexFlow = document.getElementById('flex-flow');
const justifyContent = document.getElementById('justify-content');
const alignItems = document.getElementById('align-items');
const alignContent = document.getElementById('align-content');
const placeContent = document.getElementById('place-content');
const gap = document.getElementById('gap');

// Child properties
const itemSelect = document.getElementById('item-select');
const order = document.getElementById('order');
const flexGrow = document.getElementById('flex-grow');
const flexShrink = document.getElementById('flex-shrink');
const flexBasis = document.getElementById('flex-basis');
const alignSelf = document.getElementById('align-self');

// Container and code preview
const flexContainer = document.getElementById('flex-container');
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

// Update flex container based on parent properties
const updateParentProperties = () => {
    // Update flex-flow input for display purposes
    flexFlow.value = `${flexDirection.value} ${flexWrap.value}`;

    // Apply styles
    flexContainer.style.display = displayProperty.value;
    flexContainer.style.flexDirection = flexDirection.value;
    flexContainer.style.flexWrap = flexWrap.value;

    // Check if shorthand inputs have values, else use individual ones
    if (placeContent.value) {
        flexContainer.style.placeContent = placeContent.value;
        // Reset individual controls visually if overridden (optional UX choice)
    } else {
        flexContainer.style.placeContent = '';
        flexContainer.style.justifyContent = justifyContent.value;
        flexContainer.style.alignContent = alignContent.value;
    }

    flexContainer.style.alignItems = alignItems.value;
    flexContainer.style.gap = gap.value;

    updateCodePreview();
};

// Update selected child element
const updateChildProperties = () => {
    const selectedItem = document.getElementById(itemSelect.value);

    if (selectedItem) {
        selectedItem.style.order = order.value;
        selectedItem.style.flexGrow = flexGrow.value;
        selectedItem.style.flexShrink = flexShrink.value;
        selectedItem.style.flexBasis = flexBasis.value;
        selectedItem.style.alignSelf = alignSelf.value;
    }

    updateCodePreview();
};

// Update code preview
const updateCodePreview = () => {
    let parentCss = `.container {
  <span class="property">display</span><span class="punctuation">:</span> <span class="value">${displayProperty.value}</span><span class="punctuation">;</span>
  <span class="property">flex-flow</span><span class="punctuation">:</span> <span class="value">${flexDirection.value} ${flexWrap.value}</span><span class="punctuation">;</span>`;

    if (placeContent.value) {
        parentCss += `\n  <span class="property">place-content</span><span class="punctuation">:</span> <span class="value">${escapeHtml(placeContent.value)}</span><span class="punctuation">;</span>`;
    } else {
        parentCss += `\n  <span class="property">justify-content</span><span class="punctuation">:</span> <span class="value">${justifyContent.value}</span><span class="punctuation">;</span>`;
        parentCss += `\n  <span class="property">align-content</span><span class="punctuation">:</span> <span class="value">${alignContent.value}</span><span class="punctuation">;</span>`;
    }

    parentCss += `\n  <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">${alignItems.value}</span><span class="punctuation">;</span>
  <span class="property">gap</span><span class="punctuation">:</span> <span class="value">${gap.value}</span><span class="punctuation">;</span>
}`;

    const selectedItem = document.getElementById(itemSelect.value);
    let childCode = '';

    if (selectedItem) {
        childCode = `
<span class="selector">#${itemSelect.value}</span> <span class="punctuation">{</span>
  <span class="property">order</span><span class="punctuation">:</span> <span class="value">${order.value}</span><span class="punctuation">;</span>
  <span class="property">flex-grow</span><span class="punctuation">:</span> <span class="value">${flexGrow.value}</span><span class="punctuation">;</span>
  <span class="property">flex-shrink</span><span class="punctuation">:</span> <span class="value">${flexShrink.value}</span><span class="punctuation">;</span>
  <span class="property">flex-basis</span><span class="punctuation">:</span> <span class="value">${flexBasis.value}</span><span class="punctuation">;</span>
  <span class="property">align-self</span><span class="punctuation">:</span> <span class="value">${alignSelf.value}</span><span class="punctuation">;</span>
<span class="punctuation">}</span>`;
    }

    codePreview.innerHTML = parentCss + childCode;
};

// Reset child element form when selecting different item
itemSelect.addEventListener('change', () => {
    const selectedItem = document.getElementById(itemSelect.value);

    if (selectedItem) {
        order.value = selectedItem.style.order || '0';
        flexGrow.value = selectedItem.style.flexGrow || '0';
        flexShrink.value = selectedItem.style.flexShrink || '1';
        flexBasis.value = selectedItem.style.flexBasis || 'auto';
        alignSelf.value = selectedItem.style.alignSelf || 'auto';
    }

    updateChildProperties();
});

// Add item to the flex container
addItemBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.flex-item');
    const newItemNumber = items.length + 1;

    const newItem = document.createElement('div');
    newItem.className = 'flex-item';
    newItem.id = `item${newItemNumber}`;
    newItem.textContent = `Item ${newItemNumber}`;

    flexContainer.appendChild(newItem);

    // Add to select dropdown
    const option = document.createElement('option');
    option.value = `item${newItemNumber}`;
    option.textContent = `Item ${newItemNumber}`;
    itemSelect.appendChild(option);
});

// Remove last item from the flex container
removeItemBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.flex-item');

    if (items.length > 1) {
        const lastItem = items[items.length - 1];
        flexContainer.removeChild(lastItem);

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

// Add event listeners to all parent property controls
displayProperty.addEventListener('change', updateParentProperties);
flexDirection.addEventListener('change', updateParentProperties);
flexWrap.addEventListener('change', updateParentProperties);
justifyContent.addEventListener('change', () => {
    placeContent.value = ''; // Clear shorthand if individual set
    updateParentProperties();
});
alignItems.addEventListener('change', updateParentProperties);
alignContent.addEventListener('change', () => {
    placeContent.value = ''; // Clear shorthand
    updateParentProperties();
});
placeContent.addEventListener('input', updateParentProperties);
gap.addEventListener('change', updateParentProperties);

// Add event listeners to child property controls
order.addEventListener('input', updateChildProperties);
flexGrow.addEventListener('input', updateChildProperties);
flexShrink.addEventListener('input', updateChildProperties);
flexBasis.addEventListener('change', updateChildProperties);
alignSelf.addEventListener('change', updateChildProperties);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateParentProperties();
    updateChildProperties();
    setupCopyButton();
});
