const listInput = document.querySelector('.text__input')
const nameInput = document.querySelector('.name__input')
const Name = document.querySelector('.name')
const items = document.querySelector('.items')


function addName() {
    //1. 이름을 입력하면 뒤에 버킷리스트를 붙여서 출력해준다
    if(nameInput.value === '') {
        return
    }
    const nameValue = `${nameInput.value}의 버킷리스트`
    createName(nameValue)
}

function onAdd() {
    //2. 리스트 입력하면 입력한 텍스트 받아옴
    const list = listInput.value;
    if(list === '') {
        listInput.focus();
        return
    }
    //3. 새로운 리스트아이템을 만듬(체크,텍스트,삭제)
    const item = createItem(list);

    //4. 만든 아이템을 items안에 넣음
    items.appendChild(item);
    console.log(items)
   
    //5. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({ block: 'center'})

    //6. 인풋 초기화하기
    listInput.value = ''
}


function createName(nameValue) {
    const nameTag = document.createElement('div')
    nameTag.innerText = nameValue
    nameTag.setAttribute('class', 'nameTag')
    Name.appendChild(nameTag)
    nameInput.classList.add('hidden')
}


function createItem(list) {
    const itemRow = document.createElement('li')
    itemRow.setAttribute('class', 'item-row')

    const item = document.createElement('div')
    item.setAttribute('class', 'item')

    const itemName = document.createElement('span')
    itemName.setAttribute('class', 'item__name')
    itemName.textContent = list

    const itemDelBtn = document.createElement('button')
    itemDelBtn.setAttribute('class', 'item__delBtn')
    itemDelBtn.textContent = '❌'
    itemDelBtn.addEventListener('click', () => {
        items.removeChild(itemRow)
    })


    item.appendChild(itemName);
    item.appendChild(itemDelBtn);
    itemRow.appendChild(item)

    return itemRow
}


nameInput.addEventListener('keypress', (e) => {
    if( e.key === 'Enter') {
        addName()
    }
})

listInput.addEventListener('keypress', (i) => {
    if( i.key === 'Enter') {
        onAdd()
    }
})