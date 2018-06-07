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

var menu;

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
    var tabIcons = ['fa-bars', 'fa-cogs', 'fa-info-circle'];
 
    for (var i = 0; i < 3; i++) {
        console.log(tabNames[i]);
        
        var tab = Object.create(tabTemplate);
        tab.name = tabNames[i];
        tab.icon = tabIcons[i];
        
        menu.tabsList.push(tab);
    }

    menu.currentTab = 0;

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
            'fas fa-hospital',
            'fas fa-screwdriver',
            'fas fa-chart-line',
            'fas fa-bars',
            'fas fa-box-open',
        ],
        [
            'fas fa-user',
            'fas fa-user',
            'fas fa-exchange-alt',
            'fas fa-expand-arrows-alt',
            'fas fa-paperclip',
            'far fa-clock',
        ],
        [
            'fas fa-file',
            'far fa-hospital',
            'far fa-hospital',
            'far fa-hospital',
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
    for(i = tabs.length - 1; i >= 0; i--)
    {
        let clone = document.importNode(template.content, true);
        $(clone).find("#tab_template").attr("id", "tab_" + i);
        $(clone).find('#fas tab-icon').text(tabs[i].icon);
        $(clone).find('#tab-item-icon').addClass(tabs[i].icon);
        $('#tabs-container').prepend(clone);

    }
    $("#tab_" + menu.currentTab).addClass("selected-tab-item");
}

function populateParentItems(menu)
{
    let template = document.querySelector('#parent-list-item'); 
    
    var parents = menu.tabsList[menu.currentTab].listOfParentItems; 
    var i; 
    for(i = 0; i < parents.length; i++)
    {
        let clone = document.importNode(template.content, true);
        $(clone).find('#item-icon').addClass(parents[i].icon);
        $(clone).find('#text').text(parents[i].name);
        $('#parent-items-container').append(clone);
    }
}

function populateChildItems(menu)
{
    var childListLength = menu.parentItem.childItems.length; 
      if(childListLength >0) 
      {
        let template = document.querySelector('#child-items');
        var childList = menu.parentItem.childItems;
        
        for (var i=0; i < childList.length; i++) {
            let clone  = document.importNode(template.content, true);
            $(clone).find('#child-name').text(childList[i].name);
            $('#child-list').append(clone);
        }
    }
}

function showTab(tab)
{

}

function showParent(tab)
{
    
}

function selectTab(menu, tabIndex){
	$('.parent-list-item').remove();
	$('.selected-tab-item').removeClass("selected-tab-item");
	menu.currentTab = tabIndex;
	populateParentItems(menu);
    $('#tab_' + tabIndex).addClass("selected-tab-item");
    
    $('.parent-list-item').click(function() {
        var name = $(this).find('#text').text();
        $('h1').text(name);
    });
}

function menuToggle(menu){
    
    if (menu.expanded && !menu.overlay) {

        $('#sliding-menu').animate(
            {
                'width': '75px'
            }
        );

        $('.tab-item:not(#caratButton)').css('display', 'none');
        $('.parent-list-item-text ').css('opacity', '0');
        $('.carrot-icon').css('transform', 'rotate(180deg)');

        menu.expanded = false;

    } else if (!menu.expanded && !menu.overlay) {

        $('#sliding-menu').animate(
            {
                'width': '300px'
            },
            400,
            'swing',
            () => {
                $('.tab-item:not(#caratButton)').css('display', 'block');
                $('.parent-list-item-text ').css('opacity', '1');
                $('.carrot-icon').css('transform', 'rotate(0deg)');
            }
        );

        

        menu.expanded = true;

    } else if (menu.expanded && menu.overlay) {

        $('#sliding-menu').animate(
            {
                'left': '-225px',
                'position': 'absolute'
            }
        );

        menu.expanded = false;

    } else if (!menu.expanded && menu.overlay) {

        $('#sliding-menu').animate(
            {
                'left': '0px',
                'position': 'absolute'
            }
        );

        menu.expanded = true;
        
    }

}

function initialiseTabListeners(menu) {
	for (var i = 0; i < menu.tabsList.length; i++) {
        let j = i;
	    $("#tab_" + j).click((e) => {selectTab(menu, j)});
	}
}

function initialiseCaratButtonListener() {
    $("#caratButton").click((e) => {menuToggle(menu)});
}



$(document).ready(function(){
    
    menu = createData(menu);
    populateTabs(menu);
    populateParentItems(menu);
    //populateChildItems(menu)
    initialiseTabListeners(menu);
    initialiseCaratButtonListener();
    console.log(menu);

    $('.parent-list-item').click(function() {
        var name = $(this).find('#text').text();
        $('h1').text(name);
    });

});