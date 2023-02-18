import { B } from './B';

let A = props => {

    let data1 = 'data1';
    console.log(props)
    return (<><div>Parent {data1} {props.name} {props.surname}<div>Child</div></div>
        <div><B data2 ='sharma'>singh</B></div>
    </>)
}

export default A;