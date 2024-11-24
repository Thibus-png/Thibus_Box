document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            tabs.forEach(t => {
                t.classList.remove('tab-active');
            });
            contents.forEach(content => {
                content.classList.remove('active');
            });


            tab.classList.add('tab-active');
            const activeContent = document.querySelector(`.${tab.classList[1]}-content`);
            activeContent.classList.add('active');
        });
    });
});
let title = document.querySelector("#ouioui")
let body = document.querySelector("body")

title.addEventListener("click", function(){
    body.classList.toggle('dark_mode')
})