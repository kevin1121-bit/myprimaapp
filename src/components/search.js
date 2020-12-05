import React, { Component } from "react";
import { Col, Button, Form} from "react-bootstrap";


class Search extends Component{
    search = React.createRef();
        //prevenir evento de onSubmit
        prev = event =>{
            alert(this.search.value);
            event.preventDefault();
        }

    render(){
        return(
            <div>
            <Form onSubmit={this.prev}>
                <Col xs="auto">
                <Form.Group className="align-items-center" controlId="formBasicSearch">
    <Form.Label>Busca un barbero</Form.Label>
    <Form.Control type="Text" placeholder="Busca un barbero" ref={e => (this.search = e)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
            Buscar
          </Button>
          </Col>
            </Form>
            </div>
            
        );
    }
}

export default Search;