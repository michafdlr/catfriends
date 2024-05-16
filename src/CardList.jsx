import Card from './Card';


import PropTypes from 'prop-types';

const CardList = ({robots}) => {
  const cards = robots.map(robot => {
    return (
      <Card
        id={robot.id}
        name={robot.name}
        email={robot.email}
        key={robot.id}
      />
    )
  })
  return <> {cards} </>
}

CardList.propTypes = {
  robots: PropTypes.array.isRequired
};

export default CardList;
