import React from 'react'
import styles from './ShowUserName.module.css'

const ShowUserName = (props) => {
  return (
    <>
      <div>
        <table>
                  <tr>
                       <th>Nomes props list</th>
                  </tr>
                  { 
                      props.list.map((item, i) => (
                          item.active && <tr key={i}className={i % 2 == 0 ? styles.par : styles.impar}>{item.userName}</tr>
                      ))
                  }
          </table>
      </div>
    </>
  )
}

export default ShowUserName