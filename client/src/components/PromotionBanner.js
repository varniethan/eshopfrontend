import Card from 'react-bootstrap/Card';

function PromotionBanner() {
  return (
    <Card>
     <Card.Body>
        <Card.Title>Save up to 20% with warehouse clearance!</Card.Title>
        <Card.Text>
        Grab unmissable deals on essentials. Ends 10 Feb, 9:59am.|Products not affiliated with eBay.  
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default PromotionBanner;