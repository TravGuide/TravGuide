document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('slider');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {       //بداية سكريبت تحريك السلايدر بعجلة الماوس
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });                                                 //نهاية سكريبت تحريك السلايدر بعجلة الماوس

    slider.addEventListener('touchstart', (e) => {          //بداية سكريبت دعم التاتش سكرين
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });                                                    //نهاية سكريبت دعم التاتش سكرين

    leftArrow.addEventListener('click', () => {
        slider.scrollLeft -= 370;                          //سرعة الزرار الشمال
    });

    rightArrow.addEventListener('click', () => {
        slider.scrollLeft += 370;                          //سرعة الزرار اليمين
    });
});
// ______________________________________________________________________________________________


