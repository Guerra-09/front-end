import './form.css'
import React from 'react';
// import Button -> 
import Input from '../Input/input.js';
// import Select
import Select from '../Select/select.js';
import Button from '../Button/button.js';

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            marca: [
                {name: "Hyundai", id: 1},
                {name: "Mazda", id: 2}
                ],
            modelo: [
                {name: "Cube", id: 1},
                {name: "Elantra", id: 2}
                    ]
        }
        //this.handleClick = this.handleClick.bind(this)
        //funcion flecha o esto
    }

    render() {

        //<Button type="button"> Enviar formulario </Button>

        return (
            <div className='fondoForm'>
                {/* titulo es un prop de inputs y type tmbn  */}
                <Input titulo= "Agregar patente" type="text" />
                <Input titulo= "Agregar Anio" type="number" />

                <Select name="marca" items={this.state.marca} />
                <Select name="modelo" items={this.state.modelo} />
                <Button />
                
            </div>
        )
    }

}

export default Form