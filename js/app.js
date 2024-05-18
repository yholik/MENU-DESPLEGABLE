/*Creamos una funcion que se ejecuta a si misma, 
de esta manera estamos genrando un scope, para que al hacer click 
se despliegue el submenu*/

(function() {
    
    const listElements = document.querySelectorAll('.menu__item--show');    // Creamos una const que obtenga a TODOS los elementos:
    const list = document.querySelector('.menu__links'); // Creamos otra const que obtenga al elemento con la clase:
    const menu = document.querySelector('.menu__hamburguer'); // Creamos otra const que obtenga al elemento con la clase:

    const addClick = () => {

        listElements.forEach(element => {
            element.addEventListener('click', () =>{

                let subMenu = element.children[1];
                let height = 0;

                element.classList.toggle('menu__item--active'); // Eliminamos la clase del elemento y le asignamos una nueva.
                // Luego en css personalizamos la clase asignada
                // clientHeight: nos devuelve la altura de un elemento
                // scrollHeight: 
              
                if (subMenu.clientHeight === 0){ //Si la altura es igual a 0 entonces quiero que
                    height = subMenu.scrollHeight; // Sea igual a la altura minima p/ que el elemento exista
                }

                subMenu.style.height = `${height}px`; //Le agregamos la altura con esta linea

            });
        });
    }

    const deleteStyleHeight = ()=> {
        listElements.forEach(element=> {

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        });
    }

    // Cada vez que la ventana sufra un cambio en viewport
    window.addEventListener('resize', ()=> {
        if (window.innerWidth > 800){
            deleteStyleHeight();
                if(list.classList.contains('menu__links--show'))
                    list.classList.remove('menu__links--show');
            
        } else {
            addClick();
        }
    });

    // fallback, que no se ejecute cuando sea mas grande o pequeña
   if (window.innerWidth <= 800) {
    addClick();
    } 

    /* Quiero que se modifique el elemento links*/
    menu.addEventListener('click', ()=>  list.classList.toggle('menu__links--show'));
})();

