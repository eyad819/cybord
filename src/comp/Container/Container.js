
import './Container.css'
const Container = (props) => {
  return (
    <div className='container main-container'>
      <div>{props.children}</div>
    </div>
  );
}

export default Container;
