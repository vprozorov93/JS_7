const tab = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

function onClick(event) {
    const clickedIndex = tab.indexOf(event.currentTarget,0)
    const activeTabIndex = tab.indexOf(document.querySelector('.tab_active'),0)
    tab[clickedIndex].classList.add('tab_active')
    tabContent[clickedIndex].classList.add('tab__content_active')
    tab[activeTabIndex].classList.remove('tab_active')
    tabContent[activeTabIndex].classList.remove('tab__content_active')
}
tab.forEach((element) => {
    element.addEventListener('click', onClick)
})