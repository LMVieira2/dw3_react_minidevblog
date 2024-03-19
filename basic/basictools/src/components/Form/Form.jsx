import React from 'react'

var teste =8
const Form = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou o evento")
        console.log(e)
    }

const renderButton = (x) => {
    if(x) {
        return <h1>Renderizou Bonitinho</h1>
    }
    else {
        return <h1>Renderizou Lindinho</h1>
    }
}
  return (
  <> 
    <div>
        <div>
            <button onClick={handleMyEvent}>Click Aqui</button>
        </div>
        <div>
            <button onCLick={() => {console.log("Yes! Apertou em mim.")}}>Click em mim também</button>
        </div>
        <div>
            <button onClick={() => {
                if(true) {
                    console.log("Isso não deveria acontecer")
                }              
            }}>Será que você clica aqui?</button>
        </div>
        <div>
            {renderButton(true)}
            {renderButton(false)}
        </div>
    </div>
    <div>
        <strong>Valor:</strong>{teste}
        <button onClick={() =>{teste = 12; console.log(teste)}}>Aperte e mude</button>
        <strong>Valor:</strong>{teste}
    </div>
  </>
  )
}

export default Form