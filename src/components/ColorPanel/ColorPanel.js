import React from 'react';
import { Sidebar,Menu, Divider, Button,Modal,Icon,Label } from 'semantic-ui-react';
import {SliderPicker} from 'react-color';

class ColorPanel extends React.Component{
    state={
        modal: false
    };

    openModal = () => this.setState({modal : true});

    closeModal = () => this.setState({modal : false});


    render() {
        const { modal } = this.state;

        return(
            <Sidebar
            as={Menu}
            icon="labeled"
            inverted
            vertical
            visible
            width="very thin"
            >
            <Divider/>
            <Button icon="add" size="small" color="blue" onClick={this.openModal}/>

            <Modal basic open={modal} onClose={this.closeModal}>
            <Modal.Header>Choose App Colors </Modal.Header>
                <Modal.Content>
                    <Label content="Primary Color" />
                    <SliderPicker/>
                    <Label content="Secondary Color"/>
                    <SliderPicker/>

                    <Modal.Actions>
                        <Button color="green" inverted>
                           <Icon name="checkmark"/> Save Colors
                        </Button>
                        <Button color="red" inverted>
                            <Icon name="remove"/> Cancel
                        </Button>
                    </Modal.Actions>
                </Modal.Content>

            </Modal>
            </Sidebar>
        )
    }
}

export default ColorPanel;
