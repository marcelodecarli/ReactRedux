import React from "react";

export default props => {

    return (
        <div>
            {
                props.children.map((child, i) => {
                    return React.cloneElement(child, { ...props , key: i})
                })
            }
        </div>
    )
}

/* No caso cima poderia ser chamado também como no exemplo abaixo.
Chamamos como no exemplo acima pois o props.children tem como função
o map que está sendo utilizado
Caso contrario deveriámos fazer como o exempo abaixo.


                 
import React from "react";

 export default props => {

     return (
         <div>
             {
                 React.Children.map(props.children, (child)) => {
                 return React.cloneElement(child, props)
                  })
                 }
                 </div>
             )
         }


*/