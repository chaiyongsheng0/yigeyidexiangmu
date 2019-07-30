var cysBox = document.getElementById('cysBox');
var cysList = cysBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');
for (var i = 0; i < navList.length; i++) {
    navList[i].chai = i;
    navList[i].onclick = function () {
        changeTab(this.chai);
        console.log('哈哈');
    }
}

function changeTab(x) {
    for (var i = 0; i < navList.length; i++) {
        navList[i].className = '';
        cysList[i].className = '';
    }
    navList[x].className = 'active';
    cysList[x].className = 'active';
}