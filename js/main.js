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
    listOfParentItems: [],
    activeParentItem: null
};

function createData(menu)
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
    var tabIcons = ['fas fa-bars', 'fas fa-cogs', 'fas fa-info-circle'];
 
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

            if (itemNames[i][j] === "Issues"){
                                
                var issueChildren = [
                    'Issue Manager',
                    'All Issues',
                    'My Issues',
                    'Issues Workflow Setup'
                ];
                var issueItems = [];
                for (var k = 0; k < issueChildren.length; k++)
                {
                    var childItem = Object.create(childItemsTemplate);
                    childItem.name = issueChildren[k];
                    issueItems.push(childItem);
                }

                parentItem.childItems = issueItems;
            }
        }

        menu.tabsList[i].listOfParentItems = parentItems;
    }

    return menu;
}

function populateTabs(menu)
{
    let template = document.querySelector('#tab-item-template'); 
    
    var tabs = menu.tabsList; 
    var i; 
    for(i = 0; i < tabs.length; i++)
    {
        
        let clone = document.importNode(template.content, true);
        $(clone).find('#fas tab-icon').text(tabs[i].icon);
        $(clone).find('#tab-item-icon').addClass(tabs.reverse()[i].icon);
        console.log(clone);
        $('#tabs-container').prepend(clone);

    }


}

function populateParentItems(tabs)
{
    let template = document.querySelector('#parent-list-item'); 
    
    var parents = tabs.listOfParentItems; 
    var i; 
    for(i = 0; i < parents.length; i++)
    {
        let clone = document.importNode(template.content, true);
        $(clone).find('#fas parent-list-item-text').text(parents[i].name);
        $(clone).find('#fas parent-list-item-icon').text(parents[i].icon);
        console.log(clone);
        $('#parent-items-container').append(clone);
    }
}

function populateChildItems(parentItem)
{
	let template = document.querySelector('#child-items');
	
	var childList = parentItem.childItems;
	for (var i=0; i < childList.length; i++) {
		let clone  = document.importNode(template.content, true);
		$(clone).find('#child-name').text(parentItem.childItems[i].name);
		let childElem = $('#child-list').append(clone);
	}
}

function showTab(tab)
{

}

function showParent(tab)
{
    
}

$(document).ready(function(){
    var menu;
    menu = createData(menu);
    populateTabs(menu);

    for (var i = 0; i < menu.tabsList.length; i++)
    {
        console.log(menu.tabsList[i]);
        populateParentItems(menu.tabsList[i]);
    }
    console.log(menu);

});