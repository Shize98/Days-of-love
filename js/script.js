document.getElementById('start-btn').addEventListener('click', function() {
    document.querySelector('.landing-page').style.display = 'none';
    document.getElementById('cinnamon-slide').style.display = 'block';
});
document.getElementById('next-btn-1').addEventListener('click', function() {
    document.getElementById('cinnamon-slide').style.display = 'none';
    document.getElementById('cat-selection').style.display = 'block';
});
function selectCat(cat) {
    alert("You selected " + cat + "!");
    document.getElementById('cat-selection').style.display = 'none';
    document.getElementById('avatar-selection').style.display = 'block';
}
document.getElementById('next-btn-2').addEventListener('click', function() {
    document.getElementById('avatar-selection').style.display = 'none';
    document.getElementById('love-slide').style.display = 'block';
});
