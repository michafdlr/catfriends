import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
const Card = ({id, name, email}) => {
  const address = `https://robohash.org/${id}?set=set4`;
  return (
    <div className="bg-primary font-poetsen text-xl box-border border-orange border-8 m-2 w-80 p-8 hover:font-bold hover:text-orange hover:shadow-2xl
    hover:scale-105 rounded-2xl shadow-xl text-center hover:ease-in duration-75">
      <img src={address} alt="friend" />
        <div>
          <h2>
            {name}
          </h2>
          <p>
            {email}
          </p>
        </div>
    </div>
  )
}
Card.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired
}
export default Card;
