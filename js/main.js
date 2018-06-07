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

});