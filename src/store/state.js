export default {
    taxCard: localStorage.getItem('taxCard') ? JSON.parse(localStorage.getItem('taxCard')) : [],
    foresterName: localStorage.getItem('foresterName') ? JSON.parse(localStorage.getItem('foresterName')) : '',
    forestArea: [
        {id: 1, title: 'თიანეთი'},
        {id: 2, title: 'მცხეთა'},
        {id: 3, title: 'ფასანაური'},
        {id: 4, title: 'ბარისახო'},
    ]
}