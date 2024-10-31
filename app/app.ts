//@ts-ignore
import 'shepherd.js/dist/css/shepherd.css';
import Shepherd from 'shepherd.js';



const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark',
      scrollTo: true
    }
  });
tour.addStep({
    id: 'step1',
    text: "Bem-vindo(a)",
    
    buttons: [
        {
            text: 'Próximo',
            action: tour.next
        },
        {
            text: 'Voltar',
            action: tour.back
        }
    ]
});
tour.addStep({
    id: 'step2',
    text: "Exemplo 2",
    
    buttons: [
        {
            text: 'Finalizar',
            action: tour.complete
        },
        {
            text: 'Voltar',
            action: tour.back
        }
    ]
});
tour.start();