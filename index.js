window.addEventListener('load', () => {


    if (localStorage.getItem('data')) {
        var data1 = localStorage.getItem('data');
        var data = JSON.parse(data1)


        for (const [key, value] of Object.entries(data)) {

            // console.log(key, value)
            $('#product-table').find('tbody').append('<tr>\
            <td id="id">' + key + ' </td>\
            <td id="name">'+ value.name + '</td>\
            <td id ="price">'+ value.productPrice + '</td>\
            <td id = "description">'+ value.productDiscription + '</td>\
            <td>\
            <Button id ="Edit" onclick = "editProduct()"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>\
            <Button id="delete"> <i class="fa fa-trash-o" aria-hidden="true"></i> </Button>\
            </td>\
            </tr>')
        }
    }


    if (localStorage.getItem('editableproduct')) {
        var editableproduct1 = localStorage.getItem('editableproduct');
        var editableproduct = JSON.parse(editableproduct1)


        for (const [key, value] of Object.entries(editableproduct)) {
            $('#Name').val(value.name)
            $('#Price').val(value.productPrice)
            $('#Discription').val(value.productDiscription)
        }

    };

    $(document).on('click', '#Edit', function () {
        debugger
        var p_id = parseInt($(this).parent().parent().find('#id').html());
        console.log(p_id)
        var editableproduct = {}
        editableproduct[p_id] = data[p_id]
        window.localStorage.setItem('editableproduct', JSON.stringify(editableproduct))
    });


    $(document).on('click', '#delete', function () {

        let alert = confirm("are you sure!!");

        if(alert)
        {
            var p_id = parseInt($(this).parent().parent().find('#id').html());
            delete data[p_id]
            console.log(data['dharmik'])
            window.localStorage.setItem('data', JSON.stringify(data))
            $(this).parent().parent().remove()
        }
    });
    

});

function editProduct() {
    window.location = ("index.html");
}
function addData() {
    window.location = ("index.html");
}

function passValues() {


    if (localStorage.getItem('data')) {
        var data1 = localStorage.getItem('data');
        var data = JSON.parse(data1)
        // console.log(data.asd)
    }
    else {
        var data = {}
    }

    var productName = Date.now();
    var product =
    {
        'name': document.getElementById("Name").value,
        'productPrice': document.getElementById('Price').value,
        'productDiscription': document.getElementById('Discription').value,
    }

    if (localStorage.getItem('editableproduct')) {
        var editableproduct1 = localStorage.getItem('editableproduct');
        var editableproduct = JSON.parse(editableproduct1)

        for (const [key, value] of Object.entries(editableproduct)) {
            data[key] = product
        }
        window.localStorage.removeItem('editableproduct');
    }

    else 
    {
        data[productName] = product
    }

    window.localStorage.setItem('data', JSON.stringify(data))
}
// localStorage.clear();