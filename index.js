const modal = document.querySelector('.modal');

const openModal = () =>{
    console.log('Modal is open');
    modal.classList.add("active");
    overlay.classList.add("overlayActive")
};

const closeModal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
};