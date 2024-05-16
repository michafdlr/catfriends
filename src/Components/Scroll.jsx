/* eslint-disable react/prop-types */
const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '2px solid black', height: '700px', width: '100%'}} className='flex flex-wrap justify-center'>
      {props.children}
    </div>
  )
}

export default Scroll;
