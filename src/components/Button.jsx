import '../styles/Button.css'

export function Button (props) {
  let variant;
  let classes = 'custom-button ';
  const sizes = ['sm','md','lg'];
  const colors = ['default', 'primary', 'secondary', 'danger'];
  const icon = ['done', 'close', 'search', 'sync', 'shopping_cart_checkout'];

  props.variant === undefined ? variant='default' : variant=props.variant;
  classes += variant+' ';

  //handle disable shadow
  props.disableShadow ? classes+='noshadow ' : classes+='';

  //handle size
  sizes.includes(props.size) ? classes += `size-${props.size} ` : classes += `size-md `;
  
  //handle colors
  colors.includes(props.color) ? classes += `color-${props.color} ` : classes += 'color-default ';

  //check if it's disabled to manage background for default or text
  if(props.disabled){
    classes += 'disabled noshadow ';
    if(variant === 'text'){
      classes += 'nobg '
    }
  }

  //manage the icon 
  const setIcon = (icon) =>{
    return(
      <span className = "material-symbols-outlined indicator-icon">
      {icon}
      </span>
    )
  }

  return (
    <button className = {classes}>
      <div className = "indicator">
        {props.startIcon ? setIcon( icon.find( (el)=>  el===props.startIcon) ) : null}
        <span className="indicator-text">
         {props.children}
        </span>
        {props.endIcon ? setIcon( icon.find( (el)=>  el===props.endIcon) ) : null}
      </div>
    </button>
  )
} 