import React, {useEffect} from 'react';
import {Container,Button} from "reactstrap";
const Home=()=>{
    useEffect(() => {
        document.title="Home || Explore the opportunities";
    }, []);
    return (
        <div>
            
                <h1 className="display-3">Explore the opportunities</h1>
                <Container>
                    <Button color="primary" outline>
                        Start Using
                    </Button>
                </Container>
            
        </div>
    )
}
export default Home;