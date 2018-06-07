const childItemsTemplate = {
    name: null
};

const parentItemsTemplate = {
    name: null,
    icon: null,
    childItems: []

};

const userTemplate = {
	admin: null,
	chargemaster: null,
	issues: null,
	supply: null
};

const menuTemplate = {
	expanded: true,
	overlay: false,
	tabsList: [],
	currentTab: null
};


const tabTemplate = {
    name: null, 
    icon: null,
    listOfItems: [],
    activeParentItem: null
};

var menu;

function createData()
{
    menu = Object.assign(
        {
            expanded: true,
            overlay: false,
            tabsList: [],
            currentTab: null
        },
        menuTemplate
    );

    var tabNames = ['Products', 'Admin', 'Information'];
    var tabIcons = ['', '', ''];
 
    for (var i = 0; i < 3; i++) {
        console.log(tabNames[i]);
        
        var tab = Object.create(tabTemplate);
        tab.name = tabNames[i];
        tab.icon = tabIcons[i];

        if (i === 0) {
            menu.currentTab = tab;
        }
        
        menu.tabsList.push(tab);
    }

    var itemNames = [
        [
            'Global Dashboard',
            'Online Reference Toolkit',
            'Chargemaster',
            'Issues',
            'Supply',
        ],
        [
            'User Manager',
            'User Groups',
            'Payor Mapping',
            'Field Mapping',
            'Reports',
            'Import Logs',
        ],
        [
            'User Guides',
            'Company',
            'Legal',
            'Privacy Policy',
        ],
    ];

    var itemIcons = [
        [
            '',
            '',
            '',
            '',
            '',
        ],
        [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
        [
            '',
            '',
            '',
            '',
        ],
    ];

    for (var i = 0; i < 3; i++)
    {
        var parentItems = [];
        for (var j = 0; j < itemNames[i].length; j++)
        {
            var parentItem = Object.create(parentItemsTemplate);
            parentItem.name = itemNames[i][j];
            parentItem.icon = itemIcons[i][j];

            parentItems.push(parentItem);
        }

        menu.tabsList[i].listOfItems = parentItems;
    }
}

function populateTabs(menu)
{

}

function populateParentItems(tabs)
{

}

function populateChildItems(parentItem)
{

}

function showTab(tab)
{

}

function showParent(tab)
{
    
}

$(document).ready(function(){

    createData();

    console.log(menu);

});