let btnsFilterContainer = document.querySelector('.wr-filter');

btnsFilterContainer.addEventListener('click', function(e) {
    // debugger
    if (!e.target.closest('button')) return;
    let btn = e.target.closest('button');
    if (btn.classList.contains('active')) return;

    let btns = document.querySelectorAll('.wr-filter button');
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
        }
    }
    // let arrBtns = Array.prototype.slice.call(btns);
    // removeClass(arrBtns, 'active');


    btn.classList.add('active');

    let btnId = btn.id;
    let blocks = document.querySelectorAll('.block');
    let arrBlocks = Array.prototype.slice.call(blocks);

    removeClass(arrBlocks, 'hide');

    if (btnId === 'all') return;

    arrBlocks.filter(block => (block.dataset.var != btnId)).map(block => block.classList.add('hide'));


});

let removeClass = function(arr, className) {
    arr
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
}