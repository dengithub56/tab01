function tab() {
    let allTabs = document.querySelectorAll('.tabs-item ');
    let allContent = document.querySelectorAll('.tab');
    let tabName;

    allTabs.forEach((item) => {
        item.addEventListener('click', tabActive);
    })

    function tabActive() {
        allTabs.forEach((item) => {
            item.classList.remove('active');
        })
        this.classList.add('active');
        tabName = this.getAttribute('data-tab');
        contentActive(tabName)
    }

    function contentActive(tabName) {
        allContent.forEach((item) => {
            (item.classList.contains(tabName)) ? item.classList.add('active'): item.classList.remove('active');
        })
    }
}
tab()