
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    success: results => {
        const library = results;
        let table = '';
        library.forEach (m => {
           table += showTable (m); 
        });
        $('.tabel').html(table);


    },
    error: (e) => {
        console.log(e.responseText)
    },
});


function showTable (m) {
    return `<tr>
                    <td>${m.id}</td>
                    <td>${m.name}</td>
                    <td>${m.username}</td>
                    <td>${m.email}</td>
                    <td>${m.address.street}, ${m.address.suite}, ${m.address.city}</td>
                    <td>${m.company.name}</td>
            </tr>`;
};