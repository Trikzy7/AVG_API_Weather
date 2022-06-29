
const container_toggle = document.querySelector('.container_toggle');
const container_part_details = document.querySelector('.container_part_details');


container_toggle.addEventListener('click', ()=> {
    container_part_details.classList.toggle('mobile_active');
})