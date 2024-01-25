document.addEventListener("DOMContentLoaded", function () {
    const birthdate = new Date('2005-11-29');
    const ageElement = document.getElementById('age');
    const now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();
    const m = now.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthdate.getDate())) {
        age--;
    }
    ageElement.textContent = age;
});
