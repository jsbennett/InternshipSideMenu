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
    listOfItems: [],
    activeParentItem: null
};

function populateTabs(menu)
{

}

function populateParentItems(tabs)
{

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