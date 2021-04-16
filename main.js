function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i++ ){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
    htmldata-htmldata+"</ol>"
    document.getElementById("display_name").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").nodeValue;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;<menu_list_array.lenght;i++){
        htmldata=htmldata+"<div class='cards'>" + '<img src="https://images.getbento.com/accounts/218d4ffbb37dd2996ba53d258951a956/media/UFHsFlMmR8e6NSVYKlMw_ClassicCombo.jpg?fit=max&w=1800&auto=format,compress"/> + '</div>'

    }
    htmldata-htmldata"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;


}