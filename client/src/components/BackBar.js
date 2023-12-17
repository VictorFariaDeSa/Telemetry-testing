import styles from './Bar.module.css'

function BackBar(props){
    return(
        <div className = {styles.BackBar}>
            <div className = {styles.Fill}
            style = {{
                width:props.fill
            }}
            />
        </div> 
    )
}

export default BackBar