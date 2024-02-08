export default {
    taxCard: localStorage.getItem('taxCard') ? JSON.parse(localStorage.getItem('taxCard')) : [],
    foresterName: localStorage.getItem('foresterName') ? JSON.parse(localStorage.getItem('foresterName')) : '',
    forestArea: [
        {id: 1, title: 'თიანეთი'},
        {id: 2, title: 'მცხეთა'},
        {id: 3, title: 'ფასანაური'},
        {id: 4, title: 'ბარისახო'},
    ],

    forestry: [
        {
            id: 1, items: [
                {id: 1, title: 'არტაანი'},
                {id: 2, title: 'ახალსოფელი'},
                {id: 3, title: 'ზარიძეები'},
                {id: 4, title: 'თიანეთი'},
                {id: 5, title: 'სიონი'},
                {id: 6, title: 'სიმონიანთხევი'},
                {id: 7, title: 'ბოჭორმა'},
                {id: 8, title: 'ღულელები'},
            ]
        },

        {
            id: 2, items: [
                {id: 1, title: 'ძეგვი'},
                {id: 2, title: 'დიდგორი'},
            ]
        },
    ]
}