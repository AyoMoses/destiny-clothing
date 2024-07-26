import {
  Container,
  Card,
  CardImage,
  CardTitle,
  CardBody,
  CardIntro,
} from './skeleton.styles';

export const Skeleton = () => {
  return (
    <div>
      <Container>
        <Card>
          <CardImage className="skeleton"></CardImage>
          <CardBody>
            <CardTitle className="skeleton"></CardTitle>
            <CardIntro className="skeleton"></CardIntro>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};
