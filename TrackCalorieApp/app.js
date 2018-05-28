/* eslint-disable */

// Storage controller

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
        items: [
            // { id: 0, name: 'Steak Dinner', calories: 1200 },
            // { id: 1, name: 'Cookie', calories: 200 },
            // { id: 2, name: 'Eggs', calories: 300 }
        ],
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
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        backBtn: '.back-btn',
        deleteBtn: '.delete-btn',
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
                    <li class="collection-item" id="${item.id}">
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

        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
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

        getSelectors: function () {
            return UISelectors;
        }
    }
})();

// App controller
const App = (function (ItemCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function () {
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Edit item click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);
    }
    
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

            // Clear fields
            UICtrl.clearInput();
        }
        e.preventDefault();
    }

    // Update item submit
    const itemUpdateSubmit = function (e) {
        console.log('test')

        e.preventDefault();
    }

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

})(ItemCtrl, UICtrl);

// Initialize app

App.init();