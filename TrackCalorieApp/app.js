/* eslint-disable */

// Storage controller
const StorageCtrl = (function(){
    // Public methods
    return {
        storeItem: function (item) {
            let items;
            // Check local storage for existing items
            if (localStorage.getItem('items') === null) {
                items = [];
                // Push new item
                items.push(item);
                // Set local storage
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                // Get items in local storage
                items = JSON.parse(localStorage.getItem('items'));

                // Push new item
                items.push(item);

                // Set local storage
                localStorage.setItem('items', JSON.stringify(items));
            }
        },

        getItemsFromStorage: function () {
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
    }
})();

// Item controller
const ItemCtrl = (function () {
    // Item constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure / State
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    };
    // Public methods
    return {
        getItems: function () {
            return data.items;
        },
        addItem: function (name, calories) {
            // Create id
            let ID;
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Calories to number
            calories = parseInt(calories)
            // Create new item
            newItem = new Item(ID, name, calories);
            // Add to items array
            data.items.push(newItem);

            return newItem;
        },

        getItemById: function (id) {
            let found = null;
            // Loop through items
            data.items.forEach(function (item) {
                if (item.id === id) {
                    found = item
                }
            });
            return found
        },

        updateItem: function (name, calories) {
            // Calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function (item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },

        deleteItem: function (id) {
            // Get ids
            const ids = data.items.map(function(item) {
                return item.id;
            });

            // Get item index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index, 1);
        },

        clearAllItems: function () {
            data.items = [];
        },

        setCurrentItem: function (item) {
            data.currentItem = item;
        },

        getCurrentItem: function () {
            return data.currentItem;
        },

        getTotalCalories: function () {
            let total = 0;
            // Loop through items to add calories
            data.items.forEach(function (item) {
                total += item.calories;

            });
            // Set total calories in data
            data.totalCalories = total;

            return data.totalCalories;
        },

        logData: function () {
            return data;
        }
    }
})();

// UI controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        backBtn: '.back-btn',
        deleteBtn: '.delete-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    // Public methods
    return {
        populateItemList: function (items) {
            let html = '';

            items.forEach(function (item) {
                html += `
                    <li class="collection-item" id="item-${item.id}">
                        <strong>${item.name} </strong>
                        <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-edit"></i>
                        </a>
                    </li>
                `;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function (item) {
            // Show list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            // Create li element
            const li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Add ID
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `
                <strong>${item.name} </strong>
                 <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-edit"></i>
                </a>
            `;
            // Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },

        updateListItem: function (item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function (listItem) {
                const itemId = listItem.getAttribute('id');

                if (itemId === `item-${item.id}`) {
                    document.querySelector(`#${itemId}`).innerHTML = `
                    <strong>${item.name} </strong>
                     <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-edit"></i>
                    </a>
                `;
                }
            });
        },

        deleteListItem: function(id) {
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);

            item.remove();
        },

        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },

        addItemToForm: function () {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },

        removeItems: function () {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function (item) {
                item.remove();
            })
        },

        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },

        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },

        clearEditState: function () {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },

        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },

        getSelectors: function () {
            return UISelectors;
        }
    }
})();

// App controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function () {
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Edit item click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    
        // Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // Clear items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
}

    // Disable submit on enter
    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            return false
        }
    });

    // Add item submit
    const itemAddSubmit = function (e) {
        // Get form input from UI controller
        const input = UICtrl.getItemInput();

        // Check for empty input
        if (input.name !== '' && input.calories !== '') {

            // Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // Add item to UI list
            UICtrl.addListItem(newItem);

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Store in local storage
            StorageCtrl.storeItem(newItem);

            // Clear fields
            UICtrl.clearInput();
        }
        e.preventDefault();
    }

    // Edit item in list
    const itemEditClick = function (e) {
        if (e.target.classList.contains('edit-item')) {
            // Get list item id (item-0, item-1...)
            const listId = e.target.parentNode.parentNode.id;

            // Break into an array
            const listIdArr = listId.split('-');

            // Get item id
            const id = parseInt(listIdArr[1]);

            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);
            
            // Add item to form
            UICtrl.addItemToForm();
        };
        e.preventDefault();
    }

    // Update item submit
    const itemUpdateSubmit = function (e) {
        // Get item input
        const input = UICtrl.getItemInput();

        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        // Update UI 
        UICtrl.updateListItem(updatedItem);

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // Delete button event
    const itemDeleteSubmit = function(e) {
        // Get current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete item from data
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();
        
        e.preventDefault();
    };

    // Clear items event
    const clearAllItemsClick = function () {
        // Delete all items from data
        ItemCtrl.clearAllItems();

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Remove from UI
        UICtrl.removeItems();

        // Hide list
        UICtrl.hideList();
    };

    return {
        init: function () {
            // Set initial state
            UICtrl.clearEditState();

            // Fetch items from data
            const items = ItemCtrl.getItems();

            // Check if items exist
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Load event listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, StorageCtrl, UICtrl);

// Initialize app

App.init();