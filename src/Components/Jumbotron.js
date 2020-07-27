import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components';
import backgroundImage from "../Assets/TheEveOfTheWar.png"

const Styles = styled.div`
    .jumbo{
        background: url(${backgroundImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #EFEFEF;
        height: 200px;
        position: relative;
        z-index: 0;
    }

    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
`;

class Jumbotron extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(
            <Styles>
                <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
                    <Container>
                        <h1>{this.props.message}</h1>
                    </Container>
                </Jumbo>
            </Styles>
        );
    }
}
export default Jumbotron