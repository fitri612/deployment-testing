import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 

function HomePage() {
  return (
    <>
        <Card bg="light" key="light"
          style={{ width: '18rem', margin: '10rem' }}
          className="mb-2"
        >
          <Card.Header>Testing</Card.Header>
          <Card.Body>
            <Card.Title>why do we need test ?</Card.Title>
            <Card.Text>
              To guarentee the quality. And to make sure the code is working as expected.
            </Card.Text>
            <Link to="/users" >
              <Button variant="primary" id="button">Click Me</Button>
            </Link>
          </Card.Body>
        </Card>
    </>
  );
}

export default HomePage;