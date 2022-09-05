const value = Array.from(document.querySelectorAll('.dropdown__value'))
const value_list = Array.from(document.querySelectorAll('.dropdown__link'))

function onClickValue(event) {
    const active_list = document.querySelectorAll('.dropdown__list_active')
    
    if (active_list != undefined) {
        Array.from(active_list).forEach((element)=>{
            element.className = 'dropdown__list'
    })}
    const element = event.currentTarget
    const parent = element.closest(".dropdown")
    const list  = parent.querySelector('.dropdown__list')
    if (list.className === 'dropdown__list') {
        list.className = 'dropdown__list dropdown__list_active'
    } else {
        list.className = 'dropdown__list'
    }
}

value.forEach((element)=>{
    element.addEventListener('click', onClickValue)
})

function onClickItem(event) {
    const element = event.currentTarget
    const parent = element.closest(".dropdown")
    const value  = parent.querySelector('.dropdown__value')
    value.textContent = element.textContent
    const list  = parent.querySelector('.dropdown__list_active')
    list.className = 'dropdown__list'
    event.preventDefault();
}

value_list.forEach((element)=>{
    element.addEventListener('click', onClickItem)
})
