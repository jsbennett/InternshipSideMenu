const childItems = {
    name: null
};

const parentItems = {
    name: null,
    icon: null,
    childItems: []

};

const user = {
	admin: null,
	chargemaster: null,
	issues: null,
	supply: null
};

const menu = {
	expanded: true,
	overlay: false,
	tabsList: [],
	currentTab: null
};


const tab = {
    name: null, 
    icon: null,
    listOfParentItems: [],
    activeParentItem: null
};

function populateTabs(menu)
{
    let template = document.querySelector('#tab-item'); 
    
    var tabs = menu.tabsList; 
    var i; 
    for(i = 0; i < tabs.length; i++)
    {
        let clone = document.importNode(template.content, true);
        $(clone).find('#fas tab-icon').text(tabs[i].icon);
        $('#tab-item').append(clone);
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
        $(clone).find('#fas parent-list-item-icon').text(parents[i].name);
        $(clone).find('#fas parent-list-item-icon').text(parents[i].icon);
        $('#parent-list-item').append(clone);
    }
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