export default {
    taxCard: localStorage.getItem('taxCard') ? JSON.parse(localStorage.getItem('taxCard')) : [],

    foresterName: localStorage.getItem('foresterName') ? JSON.parse(localStorage.getItem('foresterName')) : '',

    forestArea: [
        {id: 1, title: 'თიანეთი', forestry: [
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

        {id: 2, title: 'მცხეთა', forestry: [
                {id: 1, title: 'ძეგვი'},
                {id: 2, title: 'დიდგორის ლისი'},
                {id: 3, title: 'თბილისის ლისი'},
                {id: 4, title: 'ჯვარი'},
                {id: 5, title: 'ბევრეთი'},
                {id: 6, title: 'დიღომი'},
            ]
        },

        {id: 3, title: 'ფასანაური', forestry: [
                {id: 1, title: 'მჭადიჯვარი'},
                {id: 2, title: 'დუშეთი'},
                {id: 3, title: 'ჟინვალი'},
                {id: 4, title: 'ანანური'},
                {id: 5, title: 'ფასანაური'},
            ]
        },

        {id: 4, title: 'ბარისახო', forestry: [
                {id: 1, title: 'გალავანი'},
                {id: 2, title: 'ჭოპორტი'},
                {id: 3, title: 'ბულაჩაური'},
                {id: 4, title: 'თვალივი'},
                {id: 5, title: 'მაღაროსკარი'},
                {id: 6, title: 'ბარისახო'},
            ]
        },
    ],

    forestAreaID: null
}