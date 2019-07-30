let cysBox = document.getElementById('cysBox');
let cysList = cysBox.getElementsByTagName('div');
let navBox = document.getElementById('navBox');
let navList = cysBox.getElementsByTagName('li');
for (var i = 0; i < navList.length; i++) {
    navList[i].y = i;
    navList[i].onclick = function () {
        changeTab(this.y)
    }
}

function changeTab(x) {
    for (var i = 0; i < navList.length; i++) {
        navList[i].className = '';
        cysList[i].className = '';
    }
    navList[x].className = 'active';
    cysList[i].className = 'active';
}