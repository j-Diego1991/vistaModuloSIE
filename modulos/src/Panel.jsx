import axios from 'axios'  //Es necesario descargar el paquete axios para leer el JSON
import React, {useEffect, useState} from 'react'

function Panel(){

  const [modulos, setModulos] = useState([])
  const [textoSelec, setTextoSelec] = useState("")
  
  useEffect(() => {

    axios.get("/modulos.json").then((res) => {
      setModulos(res.data.modulos)
    })
  }, [])

  const hacerClic = (text) => {
    setTextoSelec(text)
  }

  //console.log(modulos) leer el contenido del JSON en la consola web

  return (
    <div className="flex">
      <div className="w-64 py-4 px-6 inset-y-0 left-0 bg-[#18171c]">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-white">Bancos</span>
        </div>
        <ul className="mt-6">
          {modulos.map((modulo, index) => (
            <li key={index} className="py-2 text-white">
              <a className="hover:bg-[#5E5C6A]" href="#" onClick={() => hacerClic(modulo.modulo)}>
                {modulo.modulo}
              </a>
              <ul className="pl-4">
                {modulo.submenús.map((submenu, subIndex) => (
                  <li key={subIndex} className="py-2 text-white ">
                    <a className="hover:bg-[#5E5C6A]" href="#" onClick={() => hacerClic(submenu.submenú)}>
                      {submenu.submenú}
                    </a>
                    {submenu.subsubmenús && (
                      <ul className="pl-4">
                        {submenu.subsubmenús.map((subsubmenu, subSubIndex) => (
                          <li key={subSubIndex} className="py-2 text-white">
                            <a className="hover:bg-[#5E5C6A]" href="#" onClick={() => hacerClic(subsubmenu.submenú)}>
                              {subsubmenu.submenú}
                            </a>
                            <ul className="pl-4">
                              {subsubmenu.programas.map((programa, progIndex) => (
                                <li key={progIndex} className="py-2 text-white">
                                  <a className="hover:bg-[#5E5C6A]" href="#" onClick={() => hacerClic(programa.nombre)}>
                                    {programa.nombre}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                    <ul className="pl-4">
                      {submenu.programas.map((programa, progIndex) => (
                        <li key={progIndex} className="py-2 text-white">
                          <a className="hover:bg-[#5E5C6A]" href="#" onClick={() => hacerClic(programa.nombre)}>
                            {programa.nombre}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4">
        {textoSelec && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{textoSelec}</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Panel
