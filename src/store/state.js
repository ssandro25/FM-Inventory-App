export default {
    taxCard: localStorage.getItem('taxCard') ? JSON.parse(localStorage.getItem('taxCard')) : [],
    foresterName: localStorage.getItem('foresterName') ? JSON.parse(localStorage.getItem('foresterName')) : ''
}