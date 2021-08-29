const fs = require('fs');


//CREATE

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}',(err) => {
    if (err) console.log(err);
    console.log('Dosya olusturuldu.')
    });


//READ

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log('Dosya okundu.');
    });


//UPDATE

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log('Dosya okundu.')

    let fileData = JSON.parse(data);
    fileData.name = 'Employee 2 Name';
    fileData.salary = 5000;

    fs.writeFile('employees.json', JSON.stringify(fileData, null, 2),(err) => {
        if (err) console.log(err);
        console.log('Dosya guncellendi.')
        });
    });

    
//DELETE

fs.unlink('employees.json', (err) => {
    if (err) console.log(err)
    console.log('Dosya silindi.')
})
