
const editButtons = 
document.querySelectorAll('.edit');
const deleteButtons = document.querySelectorAll('.delete');
const modal = 
document.getElementById('modalFormulario');
const cerrarModal = document.getElementById('cerrarModal');
const formulario = document.getElementById('formularioCliente');


editButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const id = card.getAttribute('data-id');
    const nombre = card.querySelector('h2').innerText;
    const descripcion = card.querySelector('p').innerText;

    const formulario= document.getElementById("formularioCliente")
    formulario.nombre.value = nombre;
    formulario.documento.value = id; // Usando "data-id" como ejemplo
    formulario.apellidos.value = descripcion;

    // Mostrar el modal
    modal.style.display = 'block';
  });
});

// Función para cerrar el modal
cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal si se hace clic fuera de él
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Función para manejar la eliminación
deleteButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    card.remove(); // Elimina la tarjeta del DOM
    alert('Tarjeta eliminada.');
  });
});