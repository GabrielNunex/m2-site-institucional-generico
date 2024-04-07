const modal = document.querySelector('#modal');

function showModal () {
    const callModal1 = document.querySelector('.header__btn');
    const callModal2 = document.querySelector('.faq__btn');
    
    callModal1.addEventListener('click', () => {
        modal.showModal();
        closeModal();
    })

    callModal2.addEventListener('click', () => {
        modal.showModal();
        closeModal();
    })
}

function closeModal () {
    const callModal = document.querySelector('.modal__close');
    
    callModal.addEventListener('click', () => {
        modal.close();
    })
}

showModal();
