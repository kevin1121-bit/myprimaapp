import React, { Component } from "react";
import Button from 'react-bootstrap/Button';



export class Photo extends Component{
    render(){
        return(
            <div>
                <h1>image</h1>
            </div>
        );
    }
} 



class Barber extends Component{
    barberos = ["Kevin","Andres","Gutierrez"];

    countBarber(){
        return this.barberos.length;
    }

    render(){
        return(
            <div>
                <h1>Barberos disponibles ({this.countBarber()})</h1>
                {this.barberos.map((bar, index )=> (<li key={index}>{bar}</li>))}
                <Button variant="primary">Agendar 1</Button>
                <Photo/>
            </div>
        );
    }
}

export default Barber;