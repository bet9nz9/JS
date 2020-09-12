
class MenuItem{
    title
    url
    show = () =>{
        document.write(`
        <li><a href="${this.url}">${this.title}</a></li><br>
        `)
    }
    constructor(title,url){
        this.title = title
        this.url = url
    }
}

menu = [new MenuItem("title","URL"), new MenuItem("title1","URL1"), new MenuItem("title2","URL2")]

for(let i in menu){
    menu[i].show()
}