// local storage Name section


document.getElementById('addName').addEventListener('click', function () {
    // console.log('Hello local storage');

    const localStoreFiled = document.getElementById('local-store-filed')
    const localStoreValue = localStoreFiled.value;
    localStorage.setItem('name', localStoreValue);
    localStoreFiled.value = '';
})


// local storage age section

document.getElementById('addAge').addEventListener('click', function () {
    const localFiledAge = document.getElementById('age-filed');
    const localFiledAgeValue = localFiledAge.value;

    localStorage.setItem('Age', localFiledAgeValue);
    localFiledAge.value = '';
})

//Remove name from local storage 

document.getElementById('removeName').addEventListener('click', function () {
    localStorage.removeItem('name');
})