let s = prompt('введите стоимость товара')
let o = prompt('введите количество денег')

if(s == o){
    alert('Покупка совершена')
}else{
    if(s > o){
        let a = Number(s)-Number(o)
        alert('Для покупки не хватает '+ a +'р.')
    }else{
        let b = Number(o)-Number(s)
        alert('Покупка совершена. Сдача '+ b +'р.')
    }
}