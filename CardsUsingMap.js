const card_data = [{
    "name" : 'Gautam',
    "age"  : 24
},
{
    "name" : 'Nikita',
    "age" : 20
}];

const mapped = card_data.map((val) => {
return (val.name + ' ' + val.age);
});

console.log(mapped);

